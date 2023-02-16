package com.hostmdy.hm.service.serviceImpl;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hostmdy.hm.domain.Billing;
import com.hostmdy.hm.repository.BillingRepository;
import com.hostmdy.hm.service.BillingService;

@Service
public class BillingServiceImpl implements BillingService{
	
	private final BillingRepository billingRepository;
	
	@Autowired
	public BillingServiceImpl(BillingRepository billingRepository) {
		super();
		this.billingRepository = billingRepository;
	}
	
	@Override
	public Billing saveOrUpdateBilling(Billing billing) {
		// TODO Auto-generated method stub
		
		return billingRepository.save(billing);
		
	}

	@Override
	public List<Billing> findAll() {
		// TODO Auto-generated method stub
		return (List<Billing>) billingRepository.findAll();
	}

	@Override
	public Optional<Billing> findById(Long id) {
		// TODO Auto-generated method stub
		return billingRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		billingRepository.deleteById(id);
	}

	@Override
	public Optional<Billing> findByPatientId(Long patientId) {
		// TODO Auto-generated method stub
		return billingRepository.findByPatientId(patientId);
	}

	@Override
	public void deleteByPatientId(Long patientId) {
		// TODO Auto-generated method stub
		Billing billing = billingRepository.findByPatientId(patientId).get();
		billingRepository.deleteById(billing.getId());
	}

}
