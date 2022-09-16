package kokoafriends.back.repositorty;

import kokoafriends.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findBykakaoEmail(String kakaoEmail);
    public User findByUserCode(String userCode);
}
