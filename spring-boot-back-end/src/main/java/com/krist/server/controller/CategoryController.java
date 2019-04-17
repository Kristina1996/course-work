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

import com.krist.server.model.Category;
import com.krist.server.service.category.CategoryService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CategoryController {

	@Autowired
    private CategoryService service;
	
	@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
    @ResponseBody
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }

	@PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Category getCategory(@PathVariable("id") Long id) {
        return service.getCategoryByID(id);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/categories", method = RequestMethod.POST)
    @ResponseBody
    public Category createCategory(@RequestBody Category category) {
        return service.create(category);
    }
    
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/updatecategory", method = RequestMethod.POST)
    @ResponseBody
    public Category updateCategory(@RequestBody Category category) {
        return service.create(category);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    @RequestMapping(value = "/categories/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteCategory(@PathVariable Long id) {
        service.remove(id);
    }
}
