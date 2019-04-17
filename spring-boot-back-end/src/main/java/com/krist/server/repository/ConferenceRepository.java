package com.krist.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krist.server.model.Conference;

public interface ConferenceRepository extends JpaRepository<Conference, Long>{

}
