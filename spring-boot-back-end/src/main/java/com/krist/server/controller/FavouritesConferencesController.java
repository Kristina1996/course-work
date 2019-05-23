package com.krist.server.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.krist.server.model.Conference;
import com.krist.server.model.FavouritesConferences;
import com.krist.server.model.User;
import com.krist.server.service.conference.ConferenceService;
import com.krist.server.service.favouritesConferences.FavouritesConferencesService;
import com.krist.server.service.user.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FavouritesConferencesController {
	
	@Autowired
    private FavouritesConferencesService service;
	//private ConferenceService conferenceService;
	//private UserService userService;

	@RequestMapping(value = "/like/{idConference}/{idUser}", method = RequestMethod.GET)
    @ResponseBody
    public void likeConference(@PathVariable("idConference") Long idConference, 
    		@PathVariable("idUser") Long idUser) {
		System.out.println("idConf:" + idConference);
		System.out.println("idUser:" + idUser);
        
		Integer countConference = service.selectCount(idConference, idUser);
		System.out.println("countConference:" + countConference);
		if (countConference > 0) {
			Long id = service.getIdFavouriteConference(idConference, idUser);
			service.remove(id);
		} else if(countConference == 0) {
			
			Date creationDate = new Date();
			service.create(creationDate, idConference, idUser);
		}
         
    }
}
