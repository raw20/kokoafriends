package kokoafriends.back.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class appkeyController {
    @Value("${kakao.appkey}")
    private String appkey;
    @GetMapping("/view")
    public String view(Model model) {
        model.addAttribute("appkey", appkey);
        return null;
    }
}
