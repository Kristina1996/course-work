package com.krist.server.service.visit;

import java.util.List;

import com.krist.server.model.Visit;

public interface VisitService {
	
	List<Visit> getAllVisities();
    
	Visit getVisitByID(Long id);
    
	Visit create(Visit visit);
    
    void remove(Long id);
    
}
