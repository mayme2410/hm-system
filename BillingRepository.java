package com.hostmdy.hm.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.hostmdy.hm.domain.Billing;

public interface BillingRepository extends CrudRepository<Billing, Long> {
	Optional<Billing> findByPatientId(Long patientId);
	
	void deleteByPatientId(Long patientId);
}
