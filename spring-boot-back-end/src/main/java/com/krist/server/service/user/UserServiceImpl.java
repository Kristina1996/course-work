package com.krist.server.service.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krist.server.model.User;
import com.krist.server.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
    private UserRepository repository;

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserByID(Long id) {
         return repository.getOne(id);
    }

    @Override
    public User create(User user) {
        return repository.saveAndFlush(user);
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }
}
