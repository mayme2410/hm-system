package com.hostmdy.hm.service.serviceImpl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.hostmdy.hm.service.MapValidationErrorService;

@Service
public class MapValidationErrorServiceImpl implements MapValidationErrorService{

	@Override
	public ResponseEntity<?> validate (BindingResult result) {
		// TODO Auto-generated method stub
		if(result.hasErrors()) {
			Map<String,String> errorMap = new HashMap<>();
			
			for(final FieldError error : result.getFieldErrors())
				errorMap.put(error.getField(), error.getDefaultMessage());
			
			
			return new ResponseEntity<Map<String,String>>(errorMap,HttpStatus.BAD_REQUEST);
		}
		
		return null;
	}

}
