package kokoafriends.back.Controller;

import kokoafriends.back.config.jwt.JwtProperties;
import kokoafriends.back.model.User;
import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.service.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

@RestController
@RequestMapping("/api")
@Transactional
public class UserController {

    private final UserService userService;

    public UserController(@Qualifier("userService") UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/oauth/token")
    public ResponseEntity getLogin(@RequestParam(value = "code") String code){
        OauthToken oauthToken = userService.getAccessToken(code);
        String jwtToken = userService.SaveUserAndGetToken(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println(code);
        System.out.println(oauthToken);
        return ResponseEntity.ok().headers(headers).body("success");
    }

    @PostMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request){

        User user = userService.getUser(request);

        return ResponseEntity.ok().body(user);
    }
}