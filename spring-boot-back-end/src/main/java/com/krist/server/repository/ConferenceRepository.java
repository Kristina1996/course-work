package com.krist.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.jdbc.core.JdbcTemplate;

import com.krist.server.model.Conference;
import com.krist.server.model.User;

public interface ConferenceRepository extends JpaRepository<Conference, Long> {
	
	//@Query("select u from Conference u where u.author like %?1")
	@Query(value = "SELECT * FROM conference u WHERE u.id_author = ?1", nativeQuery = true)
	List<Conference> getMyConferences(Long id);
	
	@Query(value = "SELECT * FROM conference c WHERE c.id IN (SELECT id_conference FROM favourites_conferences fc WHERE fc.id_user = ?1)", nativeQuery = true)
    List<Conference> getFavouritesConferences(Long id);
	
	@Query(value = "SELECT * FROM conference c WHERE c.id IN (SELECT id_conference FROM visit fc WHERE fc.id_user = ?1)", nativeQuery = true)
    List<Conference> getVisitedConferences(Integer id);
	
	@Query(value = "SELECT * FROM conference c WHERE c.status = ?1", nativeQuery = true)
    List<Conference> getConferencesByStatus(Integer status);
	
}
