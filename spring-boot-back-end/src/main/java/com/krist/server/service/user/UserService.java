package com.krist.server.service.user;

import java.util.List;

import com.krist.server.model.User;

public interface UserService {
	
	List<User> getAllUsers();
    
	User getUserByID(Long id);
    
	User create(User User);
    
    void remove(Long id);
}
