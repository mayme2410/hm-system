package com.hostmdy.hm.service.serviceImpl;


import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostmdy.hm.domain.Specialization;
import com.hostmdy.hm.repository.SpecializationRepository;
import com.hostmdy.hm.service.SpecializationService;

@Service
public class SpecializationServiceImpl implements SpecializationService{
	
private final SpecializationRepository specializationRepository;
	
	
	@Autowired
	public SpecializationServiceImpl(SpecializationRepository specializationRepository) {
		// TODO Auto-generated constructor stub
		super();
		this.specializationRepository = specializationRepository;
	}


	@Override
	public Specialization saveOrUpdateSpecialization(Specialization specialization) {
		// TODO Auto-generated method stub
		Optional<Specialization> specializationOpt = specializationRepository.findByDoctorId(specialization.getDoctorId());
		if(specializationOpt.isPresent())
			specialization.setId(specializationOpt.get().getId());
		return specializationRepository.save(specialization);
	}


	@Override
	public List<Specialization> findAll() {
		// TODO Auto-generated method stub
		return (List<Specialization>) specializationRepository.findAll();
	}


	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		specializationRepository.deleteById(id);
	}


	@Override
	public Optional<Specialization> findById(Long id) {
		// TODO Auto-generated method stub
		return specializationRepository.findById(id);
	}


	@Override
	public Optional<Specialization> findByDoctorId(Long doctorId) {
		// TODO Auto-generated method stub
		return specializationRepository.findByDoctorId(doctorId);
	}


	@Override
	public void deleteByDoctorId(Long doctorId) {
		// TODO Auto-generated method stub
		Specialization specialization = specializationRepository.findByDoctorId(doctorId).get();
		specializationRepository.deleteById(specialization.getId());
		
	}


	
	
	
	
	
}
