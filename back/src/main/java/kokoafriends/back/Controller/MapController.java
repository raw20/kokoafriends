package kokoafriends.back.Controller;


import kokoafriends.back.Entity.MapEntity;
import kokoafriends.back.repositorty.MapRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //Json 형태 결과값을 반환
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌
@RequestMapping("/v1") // version1의 API
public class MapController {

    private final MapRepository mapRepository;

    @PostMapping("shop_location")
    public List<MapEntity> find(){
        return mapRepository.findAll();
    }
}
