package com.hostmdy.hm.domain;

import java.time.LocalDate;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Billing {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "Patient ID is required.")
	private Long patientId;
	
	@NotBlank(message = "Patient First Name is required.")
	private String patient_firstName;
	
	@NotBlank(message = "Patient Last Name is required.")
	private String patient_lastName;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "Billing Date is required.")
	private LocalDate billingDate;
	
	@NotBlank(message = "Grand Total is required.")
	private String grandTotal;
	
	@NotNull(message = "Doctor ID is required.")
	private Long doctorId;
	
	@NotBlank(message = "Doctor FirstName is required.")
	private String doctor_firstName;
	
	@NotBlank(message = "Doctor LastName is required.")
	private String doctor_lastName;
	
	public Billing() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public String getPatient_firstName() {
		return patient_firstName;
	}

	public void setPatient_firstName(String patient_firstName) {
		this.patient_firstName = patient_firstName;
	}

	public String getPatient_lastName() {
		return patient_lastName;
	}

	public void setPatient_lastName(String patient_lastName) {
		this.patient_lastName = patient_lastName;
	}

	public LocalDate getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(LocalDate billingDate) {
		this.billingDate = billingDate;
	}

	public String getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(String grandTotal) {
		this.grandTotal = grandTotal;
	}

	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctor_firstName() {
		return doctor_firstName;
	}

	public void setDoctor_firstName(String doctor_firstName) {
		this.doctor_firstName = doctor_firstName;
	}

	public String getDoctor_lastName() {
		return doctor_lastName;
	}

	public void setDoctor_lastName(String doctor_lastName) {
		this.doctor_lastName = doctor_lastName;
	}

	@Override
	public int hashCode() {
		return Objects.hash(billingDate, doctorId, doctor_firstName, doctor_lastName, grandTotal, id, patientId,
				patient_firstName, patient_lastName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Billing other = (Billing) obj;
		return Objects.equals(billingDate, other.billingDate) && Objects.equals(doctorId, other.doctorId)
				&& Objects.equals(doctor_firstName, other.doctor_firstName)
				&& Objects.equals(doctor_lastName, other.doctor_lastName)
				&& Objects.equals(grandTotal, other.grandTotal) && Objects.equals(id, other.id)
				&& Objects.equals(patientId, other.patientId)
				&& Objects.equals(patient_firstName, other.patient_firstName)
				&& Objects.equals(patient_lastName, other.patient_lastName);
	}

	@Override
	public String toString() {
		return "Billing [id=" + id + ", patientId=" + patientId + ", patient_firstName=" + patient_firstName
				+ ", patient_lastName=" + patient_lastName + ", billingDate=" + billingDate + ", grandTotal="
				+ grandTotal + ", doctorId=" + doctorId + ", doctor_firstName=" + doctor_firstName
				+ ", doctor_lastName=" + doctor_lastName + "]";
	}

	public Billing(Long id, @NotNull(message = "Patient ID is required.") Long patientId,
			@NotBlank(message = "Patient First Name is required.") String patient_firstName,
			@NotBlank(message = "Patient Last Name is required.") String patient_lastName,
			@NotNull(message = "Billing Date is required.") LocalDate billingDate,
			@NotBlank(message = "Grand Total is required.") String grandTotal,
			@NotNull(message = "Doctor ID is required.") Long doctorId,
			@NotBlank(message = "Doctor FirstName is required.") String doctor_firstName,
			@NotBlank(message = "Doctor LastName is required.") String doctor_lastName) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.patient_firstName = patient_firstName;
		this.patient_lastName = patient_lastName;
		this.billingDate = billingDate;
		this.grandTotal = grandTotal;
		this.doctorId = doctorId;
		this.doctor_firstName = doctor_firstName;
		this.doctor_lastName = doctor_lastName;
	}
	
	
}
