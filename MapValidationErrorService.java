package com.hostmdy.hm.service;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

public interface MapValidationErrorService {
	
	ResponseEntity<?> validate(BindingResult result);
}
