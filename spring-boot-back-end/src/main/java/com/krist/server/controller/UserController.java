package com.krist.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.krist.server.model.User;
import com.krist.server.service.user.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {
	
	@Autowired
    private UserService service;
	
	@GetMapping("/test/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return ">>> User Contents!";
	}

	@GetMapping("/test/pm")
	@PreAuthorize("hasRole('PM') or hasRole('ADMIN')")
	public String projectManagementAccess() {
		return ">>> Project Management Board";
	}
	
	@GetMapping("/test/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return ">>> Admin Contents";
	}
	
	
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
    @ResponseBody
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

	//@PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    @ResponseBody
    public User getUser(@PathVariable("id") Long id) {
        return service.getUserByID(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseBody
    public User createUser(@RequestBody User user) {
        return service.create(user);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public User updateUser(@RequestBody User user) {
        return service.create(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUser(@PathVariable Long id) {
        service.remove(id);
    }
    
}
