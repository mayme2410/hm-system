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

import com.hostmdy.hm.domain.Billing;
import com.hostmdy.hm.repository.BillingRepository;
import com.hostmdy.hm.service.BillingService;
import com.hostmdy.hm.service.MapValidationErrorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/billing")
@CrossOrigin(origins = "http://localhost:3000")
public class BillingController {
	
	private final BillingService billingService;
	private final MapValidationErrorService mapValidationErrorService;
	

	public BillingController(BillingService billingService, MapValidationErrorService mapValidationErrorService, BillingRepository billingRepository) {
		super();
		this.billingService = billingService;
		this.mapValidationErrorService = mapValidationErrorService;
		
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createBilling(@Valid @RequestBody Billing billing,BindingResult result ){
		ResponseEntity<?> errorResponse = mapValidationErrorService.validate(result);
		
		if(errorResponse != null)
			return errorResponse;
		
//		if(result.hasErrors()) {
//			return new ResponseEntity<String>("Invalid Validation Error", HttpStatus.BAD_REQUEST);
//		}
		Billing createdBilling = billingService.saveOrUpdateBilling(billing);
		
		return new ResponseEntity<Billing>(createdBilling, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/all")
	public List<Billing> findAll(){
		List<Billing> billings = billingService.findAll();
		return billings;
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		Optional<Billing> billingOptional = billingService.findById(id);
		
		if(billingOptional.isEmpty()) 
			return new ResponseEntity<String>("Billing with id "+id+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Billing>(billingOptional.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id){
		
		billingService.deleteById(id);
		return new ResponseEntity<String>("Deleted id = "+id, HttpStatus.OK);
	}
	
	@GetMapping("/patientId/{patientId}")
	public ResponseEntity<?> findByPatientId(@PathVariable Long patientId){
		Optional<Billing> billingOpt = billingService.findByPatientId(patientId);
		
		if(billingOpt.isEmpty()) 
			return new ResponseEntity<String>("Billing with patient_id "+patientId+"is not found",HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<Billing>(billingOpt.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/ptIdDelete/{patientId}")
	public ResponseEntity<Long> deleteByPatientId(@PathVariable Long patientId){
		
		billingService.deleteByPatientId(patientId);
		return new ResponseEntity<Long>(patientId, HttpStatus.OK);
	}
}
