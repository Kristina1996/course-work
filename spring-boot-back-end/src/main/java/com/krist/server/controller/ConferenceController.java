package com.krist.server.controller;

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

import com.krist.server.model.Conference;
import com.krist.server.service.conference.ConferenceService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ConferenceController {

	@Autowired
    private ConferenceService service;
	
	//@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
	@RequestMapping(value = "/conferences", method = RequestMethod.GET)
    @ResponseBody
    public List<Conference> getAllConferences() {
        return service.getAllConferences();
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
    
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/publishconference/{id}", method = RequestMethod.GET)
    @ResponseBody
    public void publishblockConference(@PathVariable("id") Long id) {
        //return service.getConferenceByID(id);
    }
    
}
