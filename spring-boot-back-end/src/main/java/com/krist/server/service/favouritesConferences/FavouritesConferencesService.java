package com.krist.server.service.favouritesConferences;

import java.util.Date;
import java.util.List;

import com.krist.server.model.Conference;
import com.krist.server.model.FavouritesConferences;

public interface FavouritesConferencesService {
	
	//FavouritesConferences create(FavouritesConferences favouritesConferences);
	
	List<Conference> getFavouritesConferences(Long id);
    
    void remove(Long id);

    Long getIdFavouriteConference(Long idConference, Long idUser);
    
    Integer selectCount(Long idConference, Long idUser);
    
    Long create(Date creationDate, Long idConference, Long idUser);
}
