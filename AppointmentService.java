package com.hostmdy.hm.service;

import java.util.List;

import java.util.Optional;

import com.hostmdy.hm.domain.Appointment;

public interface AppointmentService {

	Appointment saveOrUpdateAppointment(Appointment appointment);
	
	List<Appointment> findAll();
	
	Optional<Appointment> findById(Long id); 
	
	void deleteById(Long id);
	
	Optional<Appointment> findByPatientId(Long patientId);
	
	void deleteByPatientId(Long patientId);
		
}
