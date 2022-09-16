// https://velog.io/@kimujin99/Spring-React-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-JWT-1

package kokoafriends.back.Controller;

import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@SpringBootApplication(scanBasePackages = "kokoafriends.back.service")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/oauth/token")
    public OauthToken getLogin(@RequestParam("code") String code){

        OauthToken oauthToken = userService.getAccessToken(code);

        return oauthToken;
    }
}
