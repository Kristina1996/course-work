package com.krist.server.service.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krist.server.model.Category;
import com.krist.server.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository repository;

	@Override
	public List<Category> getAllCategories() {
		return repository.findAll();
	}

	@Override
	public Category getCategoryByID(Long id) {
		return repository.getOne(id);
	}

	@Override
	public Category create(Category category) {
		return repository.saveAndFlush(category);
	}

	@Override
	public void remove(Long id) {
		repository.deleteById(id);
	}

}
