package com.krist.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krist.server.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	Category findByName(String name);
}
