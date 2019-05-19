package com.krist.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.krist.server.model.Visit;

public interface VisitRepository extends JpaRepository<Visit, Long> {

}
