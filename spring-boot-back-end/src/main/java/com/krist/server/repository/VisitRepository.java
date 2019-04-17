package com.krist.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krist.server.model.Visit;

public interface VisitRepository extends JpaRepository<Visit, Long>{

}
