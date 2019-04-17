package com.krist.server.service.conference;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krist.server.model.Conference;
import com.krist.server.repository.ConferenceRepository;

@Service
public class ConferenceServiceImpl implements ConferenceService {
	
	@Autowired
	private ConferenceRepository repository;

	@Override
	public List<Conference> getAllConferences() {
		return repository.findAll();
	}

	@Override
	public Conference getConferenceByID(Long id) {
		return repository.getOne(id);
	}

	@Override
	public Conference create(Conference conference) {
		return repository.saveAndFlush(conference);
	}

	@Override
	public void remove(Long id) {
		repository.deleteById(id);
	}

}
