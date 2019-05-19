package com.krist.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.krist.server.model.Visit;
import com.krist.server.service.visit.VisitService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class VisitController {
	
	@Autowired
    private VisitService service;
	
	/*
	@RequestMapping(value = "/totalVisits/{id}", method = RequestMethod.GET)
    @ResponseBody
    public String[] getTotalVisits(@PathVariable("id") Long id) {
        return service.getConferenceByID(id);
    }
    */

}
