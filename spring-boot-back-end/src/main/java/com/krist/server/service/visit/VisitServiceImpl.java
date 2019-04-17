package com.krist.server.service.visit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krist.server.model.Visit;
import com.krist.server.repository.VisitRepository;

@Service
public class VisitServiceImpl implements VisitService {
	
	@Autowired
	private VisitRepository repository;

	@Override
	public List<Visit> getAllVisities() {
		return repository.findAll();
	}

	@Override
	public Visit getVisitByID(Long id) {
		return repository.getOne(id);
	}

	@Override
	public Visit create(Visit visit) {
		return repository.saveAndFlush(visit);
	}

	@Override
	public void remove(Long id) {
		repository.deleteById(id);
	}

}
