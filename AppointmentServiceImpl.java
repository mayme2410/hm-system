package com.hostmdy.hm.service.serviceImpl;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostmdy.hm.domain.Appointment;
import com.hostmdy.hm.repository.AppointmentRepository;
import com.hostmdy.hm.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService{
	
	private final AppointmentRepository appointmentRepository;
	
	
	@Autowired
	public AppointmentServiceImpl(AppointmentRepository appointmentRepository) {
		super();
		this.appointmentRepository = appointmentRepository;
	}



	@Override
	public Appointment saveOrUpdateAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		Optional<Appointment> appointmentOpt = appointmentRepository.findByPatientId(appointment.getPatientId());
		if(appointmentOpt.isPresent())
			appointment.setId(appointmentOpt.get().getId());
		return appointmentRepository.save(appointment);
		
	}



	@Override
	public List<Appointment> findAll() {
		// TODO Auto-generated method stub
		return (List<Appointment>) appointmentRepository.findAll();
	}
	
	@Override
	public Optional<Appointment> findById(Long id){
		return appointmentRepository.findById(id);
		
	}



	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		appointmentRepository.deleteById(id);
	}



	@Override
	public Optional<Appointment> findByPatientId(Long patientId) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByPatientId(patientId);
	}



	@Override
	public void deleteByPatientId(Long patientId) {
		// TODO Auto-generated method stub
		Appointment appointment = appointmentRepository.findByPatientId(patientId).get();
		appointmentRepository.deleteById(appointment.getId());
		
	}
	

}
