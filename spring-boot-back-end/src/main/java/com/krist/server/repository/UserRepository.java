package com.krist.server.repository;

import java.util.Optional;

import org.jboss.logging.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.krist.server.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByUsername(String username);
	
	@Query("select u from User u where u.username like %?1")
	User getUserByUsername(String username);
	
    Boolean existsByUsername(String username);
    
    Boolean existsByEmail(String email);
    
}
