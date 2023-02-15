package com.hostmdy.hm.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hostmdy.hm.domain.Appointment;
import com.hostmdy.hm.repository.AppointmentRepository;
import com.hostmdy.hm.service.AppointmentService;
import com.hostmdy.hm.service.MapValidationErrorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
	
	private final AppointmentService appointmentService;
	private final MapValidationErrorService mapValidationErrorService;
	

	public AppointmentController(AppointmentService appointmentService, MapValidationErrorService mapValidationErrorService, AppointmentRepository appointmentRepository) {
		super();
		this.appointmentService = appointmentService;
		this.mapValidationErrorService = mapValidationErrorService;
		
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createAppointment(@Valid @RequestBody Appointment appointment,BindingResult result ){
		ResponseEntity<?> errorResponse = mapValidationErrorService.validate(result);
		
		if(errorResponse != null)
			return errorResponse;
		
//		if(result.hasErrors()) {
//			return new ResponseEntity<String>("Invalid Validation Error", HttpStatus.BAD_REQUEST);
//		}
		Appointment createdAppointment = appointmentService.saveOrUpdateAppointment(appointment);
		
		return new ResponseEntity<Appointment>(createdAppointment, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/all")
	public List<Appointment> findAll(){
		List<Appointment> appointments = appointmentService.findAll();
		return appointments;
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		Optional<Appointment> appointmentOptional = appointmentService.findById(id);
		
		if(appointmentOptional.isEmpty()) 
			return new ResponseEntity<String>("Appointment with id "+id+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Appointment>(appointmentOptional.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id){
		
		appointmentService.deleteById(id);
		return new ResponseEntity<String>("Deleted id = "+id, HttpStatus.OK);
	}
	
	@GetMapping("/patientId/{patientId}")
	public ResponseEntity<?> findByPatientId(@PathVariable Long patientId){
		Optional<Appointment> appointmentOpt = appointmentService.findByPatientId(patientId);
		
		if(appointmentOpt.isEmpty()) 
			return new ResponseEntity<String>("Appointment with patient_id "+patientId+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Appointment>(appointmentOpt.get(),HttpStatus.OK);
	}
	@DeleteMapping("/ptIdDelete/{patientId}")
	public ResponseEntity<Long> deleteByPatientId(@PathVariable Long patientId){
		
		appointmentService.deleteByPatientId(patientId);
		return new ResponseEntity<Long>(patientId, HttpStatus.OK);
	}
	
//	
}
