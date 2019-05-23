package com.krist.server.service.conference;

import java.util.List;

import com.krist.server.model.Conference;
import com.krist.server.model.User;

public interface ConferenceService {
	
	List<Conference> getAllConferences();
	
	List<Conference> getConferencesByStatus(Integer status);
	
	List<Conference> getVisitedConferences(Integer id);
    
	Conference getConferenceByID(Long id);
    
	Conference create(Conference conference);
    
    void remove(Long id);
    
    List<Conference> getMyConferences(Long id);
    
    List<Conference> getFavouritesConferences(Long id);
    
}
