package com.hostmdy.hm.service;

import java.util.List;
import java.util.Optional;
import com.hostmdy.hm.domain.Specialization;

public interface SpecializationService {
	
	Specialization saveOrUpdateSpecialization(Specialization specialization);
	
	List<Specialization> findAll();
	
	Optional<Specialization> findById(Long id); 
	
	void deleteById(Long id);
	
	Optional<Specialization> findByDoctorId(Long doctorId);
	
	void deleteByDoctorId(Long doctorId);
}
