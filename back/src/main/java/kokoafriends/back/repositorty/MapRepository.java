package kokoafriends.back.repositorty;

import kokoafriends.back.Entity.MapEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends JpaRepository<MapEntity, Long> {
}
