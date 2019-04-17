package com.krist.server.service.category;

import java.util.List;

import com.krist.server.model.Category;

public interface CategoryService {
	
	List<Category> getAllCategories();
    
	Category getCategoryByID(Long id);
    
	Category create(Category category);
    
    void remove(Long id);
    
}
