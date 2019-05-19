package com.krist.server.service.conference;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.krist.server.model.Conference;
import com.krist.server.model.User;
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
	public List<Conference> getMyConferences(Long id) {
		//String EMAIL_QUERY = "SELECT * FROM conference WHERE idAuthor = ?";
		
		return repository.getMyConferences(id);
		//return JdbcTemplate.queryForObject(EMAIL_QUERY, String.class, id);
		
		/*
		EntityManager em = emf.createEntityManager();
		List<Conference> results = em.createNativeQuery("SELECT * FROM conference WHERE idAuthor = ?").getResultList();
		*/
	}
	
	@Override
	public List<Conference> getFavouritesConferences(Long id) {
		return repository.getFavouritesConferences(id);
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
