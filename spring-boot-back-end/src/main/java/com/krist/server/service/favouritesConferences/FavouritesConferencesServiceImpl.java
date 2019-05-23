package com.krist.server.service.favouritesConferences;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krist.server.model.Conference;
import com.krist.server.model.FavouritesConferences;
import com.krist.server.repository.FavouritesConferencesRepository;

@Service
public class FavouritesConferencesServiceImpl implements FavouritesConferencesService{

	@Autowired
	private FavouritesConferencesRepository repository;
	
	/*
	@Override
	public FavouritesConferences create(FavouritesConferences conference) {
		return repository.saveAndFlush(conference);
	}*/
	
	@Override
	public List<Conference> getFavouritesConferences(Long id) {
		return repository.getFavouritesConferences(id);
	}

	@Override
	public void remove(Long id) {
		repository.deleteById(id);
	}
	
	@Override
	public Long getIdFavouriteConference(Long idConference, Long idUser) {
		return repository.getIdFavouriteConference(idConference, idUser);
	}
	
	@Override
	public Integer selectCount(Long idConference, Long idUser) {
		return repository.selectCount(idConference, idUser);
	}
	
	@Override
	public Long create(Date creationDate, Long idConference, Long idUser) {
		return repository.create(creationDate, idConference, idUser);
	}
}
