package kokoafriends.back.repositorty;

import kokoafriends.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByKakaoEmail(String kakaoEmail);

    User findByUserCode(Long userCode);
}
