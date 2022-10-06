package kokoafriends.back.Controller;

import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private  UserService userService;
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

    @GetMapping("/oauth/callback/kakao/token")
    public OauthToken getLogin(@RequestParam("code") String code){
        OauthToken oauthToken = userService.getAccessToken("code");
        System.out.println("oauthToken");
        return oauthToken;
    }
}