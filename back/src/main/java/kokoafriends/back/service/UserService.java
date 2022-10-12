package kokoafriends.back.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import kokoafriends.back.config.jwt.JwtProperties;
import kokoafriends.back.model.User;
import kokoafriends.back.model.oauth.KakaoProfile;
import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.repositorty.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.Date;

import static kokoafriends.back.config.SecurityConfig.FRONT_URL;



@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    @Autowired
    @Qualifier("userRepository")
    private final UserRepository userRepository;

    @Value("${kakao.clientId}")
    String client_id;

    @Value("${kakao.secret}")
    String client_secret;
    public static final String FRONT_URL = "http://localhost:3000";


    public OauthToken getAccessToken(String code) {

        try {
            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.add("grant_type","authorization_code");
            params.add("client_id", client_id);
            params.add("redirect_uri", FRONT_URL + "/oauth/callback/kakao");
            params.add("code", code);
            params.add("client_secret", client_secret);

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");


            HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                    new HttpEntity<>(params, headers);


            ObjectMapper objectMapper =
//                    new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                    new ObjectMapper();


            RestTemplate rt = new RestTemplate();
            ResponseEntity<String> accessTokenResponse = rt.exchange(
                    "https://kauth.kakao.com/oauth/token",
                    HttpMethod.POST,
                    kakaoTokenRequest,
                    String.class
            );
            OauthToken oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);

            return oauthToken;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }
    /*   OauthToken oauthToken = null;

       try {
           oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);
       } catch (JsonProcessingException e) {
           e.printStackTrace();
       }
       return oauthToken;
   }*/
    public String SaveUserAndGetToken(String token) {

        //(1)
        KakaoProfile profile = findProfile(token);

        //(2)
        User user = userRepository.findByKakaoEmail(profile.getKakao_account().getEmail());

        //(3)
        if(user == null) {
            user = User.builder()
                    .kakaoId(profile.getId())
                    //(4)
                    .kakaoProfileImg(profile.getKakao_account().getProfile().getProfile_image_url())
                    .kakaoNickname(profile.getKakao_account().getProfile().getNickname())
                    .kakaoEmail(profile.getKakao_account().getEmail())
                    //(5)
                    .userRole("ROLE_USER").build();

            userRepository.save(user);
        }

        return createToken(user);
    }

    public String createToken(User user) {
        String jwtToken = JWT.create()

                .withSubject(user.getKakaoEmail())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .withClaim("id", user.getUserCode())
                .withClaim("nickname", user.getKakaoNickname())

                .sign(Algorithm.HMAC512(JwtProperties.SECRET));
        return jwtToken;
    }

    public User getUser(HttpServletRequest request){
        Long userCode = (Long) request.getAttribute("userCode");

        User user = userRepository.findByUserCode(String.valueOf(userCode));

        return user;
    }


    //(1-1)
    public KakaoProfile findProfile(String token) {

        //(1-2)
        RestTemplate rt = new RestTemplate();

        //(1-3)
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token); //(1-4)
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //(1-5)
        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);

        //(1-6)
        // Http 요청 (POST 방식) 후, response 변수에 응답을 받음
        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        //(1-7)
        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(kakaoProfileResponse.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoProfile;
    }

}

