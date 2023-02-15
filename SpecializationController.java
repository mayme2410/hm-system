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

import com.hostmdy.hm.domain.Specialization;
import com.hostmdy.hm.service.MapValidationErrorService;
import com.hostmdy.hm.service.SpecializationService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/specialization")
@CrossOrigin(origins = "http://localhost:3000")
public class SpecializationController {
	
	private final SpecializationService specializationService;
	private final MapValidationErrorService mapValidationErrorService;

	public SpecializationController(SpecializationService specializationService, MapValidationErrorService mapValidationErrorService) {
		super();
		this.specializationService = specializationService;
		this.mapValidationErrorService = mapValidationErrorService;
		
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createSpecialization(@Valid @RequestBody Specialization specialization,BindingResult result){
		ResponseEntity<?> errorResponse = mapValidationErrorService.validate(result);
		
		if(errorResponse != null)
			return errorResponse;
		
		Specialization createdSpecialization = specializationService.saveOrUpdateSpecialization(specialization);
		
		return new ResponseEntity<Specialization>(createdSpecialization, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/all")
	public List<Specialization> findAll(){
		List<Specialization> specializations = specializationService.findAll();
		return specializations;
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		Optional<Specialization> specializationOptional = specializationService.findById(id);
		
		if(specializationOptional.isEmpty()) 
			return new ResponseEntity<String>("Specialization with id "+id+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Specialization>(specializationOptional.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id){
		
		specializationService.deleteById(id);
		return new ResponseEntity<String>("Deleted id = "+id, HttpStatus.OK);
	}
	
	@GetMapping("/doctorId/{doctorId}")
	public ResponseEntity<?> findByDoctorId(@PathVariable Long doctorId){
		Optional<Specialization> specializationOpt = specializationService.findByDoctorId(doctorId);
		
		if(specializationOpt.isEmpty()) 
			return new ResponseEntity<String>("Specialization with doctor_id "+doctorId+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Specialization>(specializationOpt.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/drIdDelete/{doctorId}")
	public ResponseEntity<Long> deleteByDoctorId(@PathVariable Long doctorId){
		
		specializationService.deleteByDoctorId(doctorId);
		return new ResponseEntity<Long>(doctorId, HttpStatus.OK);
	}
	
}
