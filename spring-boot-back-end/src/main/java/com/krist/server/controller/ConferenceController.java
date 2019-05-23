package com.krist.server.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.krist.server.model.Category;
import com.krist.server.model.Conference;
import com.krist.server.model.User;
import com.krist.server.repository.CategoryRepository;
import com.krist.server.repository.UserRepository;
import com.krist.server.service.conference.ConferenceService;
import com.krist.server.service.user.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ConferenceController {

	@Autowired
    private ConferenceService service;
	
	@Autowired
    private UserService userService;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	UserRepository userRepository;
	
	//@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
	@RequestMapping(value = "/conferences", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getAllConferences() {
        return service.getAllConferences();
    }
	
	@RequestMapping(value = "/conferences/status/{status}", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getConferencesByStatus(@PathVariable("status") Integer status) {
        return service.getConferencesByStatus(status);
    }
	
	@RequestMapping(value = "/visited/{idUser}", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getVisitedconferences(@PathVariable("idUser") Integer idUser) {
        return service.getVisitedConferences(idUser);
    }

	//@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/conferences/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Conference getConference(@PathVariable("id") Long id) {
        return service.getConferenceByID(id);
    }

    //@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/conferences", method = RequestMethod.POST)
    @ResponseBody
    public Conference createConference(@RequestBody Conference conference) {
        return service.create(conference);
    }
    
    //@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/updateconference", method = RequestMethod.POST)
    @ResponseBody
    public Conference updateConference(@RequestBody Conference conference) {
        return service.create(conference);
    }

    //@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/conferences/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteConference(@PathVariable Long id) {
        service.remove(id);
    }
    
    @RequestMapping(value = "/myconferences/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getMyConference(@PathVariable("id") Long id) {
        return service.getMyConferences(id);
    }
    
    @RequestMapping(value = "/favouritesconferences/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getFavouritesConference(@PathVariable("id") Long id) {
        return service.getFavouritesConferences(id);
    }
    
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/publishconference/{id}", method = RequestMethod.GET)
    @ResponseBody
    public void publishblockConference(@PathVariable("id") Long id) {
        //return service.getConferenceByID(id);
    }
    
}
