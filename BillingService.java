package com.hostmdy.hm.service;

import java.util.List;
import java.util.Optional;
import com.hostmdy.hm.domain.Billing;

public interface BillingService {
	
	Billing saveOrUpdateBilling (Billing billing);
	
	List<Billing> findAll();
	
	Optional<Billing> findById(Long id); 
	
	void deleteById(Long id);
	
	Optional<Billing> findByPatientId(Long patientId);
	
	void deleteByPatientId(Long patientId);
}
