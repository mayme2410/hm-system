package com.hostmdy.hm.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.hostmdy.hm.domain.Specialization;

public interface SpecializationRepository extends CrudRepository<Specialization, Long>{
	
	Optional<Specialization> findByDoctorId(Long doctorId);
	
	void deleteByDoctorId(Long doctorId);
}
