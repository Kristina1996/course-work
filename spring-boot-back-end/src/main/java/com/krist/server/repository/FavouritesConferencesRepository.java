package com.krist.server.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.krist.server.model.Conference;
import com.krist.server.model.FavouritesConferences;


public interface FavouritesConferencesRepository extends JpaRepository<FavouritesConferences, Long> {

	@Query(value = "SELECT * FROM conference c WHERE c.id IN (SELECT id_conference FROM favourites_conferences fc WHERE fc.id_user = ?1)", nativeQuery = true)
    List<Conference> getFavouritesConferences(Long id);
	
	@Query(value = "SELECT id FROM favourites_conferences c WHERE c.id_conference = ?1 and c.id_user = ?2 LIMIT 1", nativeQuery = true)
    Long getIdFavouriteConference(Long idConference, Long idUser);
	
	@Query(value = "SELECT COUNT(*) FROM favourites_conferences c WHERE c.id_conference = ?1 and c.id_user = ?2", nativeQuery = true)
    Integer selectCount(Long idConference, Long idUser);
	
	@Query(value = "INSERT INTO favourites_conferences (creation_date, id_conference, id_user) VALUES (?1, ?2, ?3)", nativeQuery = true)
    Long create(Date creationDate, Long idConference, Long idUser);
}
