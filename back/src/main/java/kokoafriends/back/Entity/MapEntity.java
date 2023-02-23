package kokoafriends.back.Entity;


import lombok.*;

import javax.persistence.*;

@Getter //getter 메소드 생성
@Builder // 빌더를 사용할 수 있게 함
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "shop_location")
public class MapEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "addr1")
    private String addr1;

    @Column(name = "addr2")
    private String addr2;

    @Column(name = "lat")
    private String lat;

    @Column(name = "lng")
    private String lng;

    public MapEntity(Long id, String name, String addr1, String addr2,
                     String lat, String lng){
        this.id = id;
        this.name = name;
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.lat = lat;
        this.lng = lng;
    }
}
