package com.krist.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krist.server.model.RoleName;
import com.krist.server.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Optional<Role> findByName(RoleName roleName);
	
}
