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
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "Appointment Date is required.")
	private LocalDate appointment_date;
	
	@NotNull(message = "Patient ID is required.")
	public Long patientId;
	
	@NotNull(message = "Patient FirstName is required.")
	private String patient_firstName;
	
	@NotNull(message = "Patient LastName is required.")
	private String patient_lastName;
	
	@NotNull(message = "Doctor FirstName is required.")
	private String doctor_firstName;
	
	@NotNull(message = "Doctor LastName is required.")
	private String doctor_lastName;
	
	@NotBlank(message = "Issue Type is required.")
	private String issueType;
	
	public Appointment() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getAppointment_date() {
		return appointment_date;
	}

	public void setAppointment_date(LocalDate appointment_date) {
		this.appointment_date = appointment_date;
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

	public String getIssueType() {
		return issueType;
	}

	public void setIssueType(String issueType) {
		this.issueType = issueType;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", appointment_date=" + appointment_date + ", patient_id=" + patientId
				+ ", patient_firstName=" + patient_firstName + ", patient_lastName=" + patient_lastName
				+ ", doctor_firstName=" + doctor_firstName + ", doctor_lastName=" + doctor_lastName + ", issueType="
				+ issueType + "]";
	}

	public Appointment(Long id, @NotNull(message = "Appointment Date is required.") LocalDate appointment_date,
			@NotNull(message = "Patient ID is required.") Long patient_id,
			@NotNull(message = "Patient FirstName is required.") String patient_firstName,
			@NotNull(message = "Patient LastName is required.") String patient_lastName,
			@NotNull(message = "Doctor FirstName is required.") String doctor_firstName,
			@NotNull(message = "Doctor LastName is required.") String doctor_lastName,
			@NotBlank(message = "Issue Type is required.") String issueType) {
		super();
		this.id = id;
		this.appointment_date = appointment_date;
		this.patientId = patient_id;
		this.patient_firstName = patient_firstName;
		this.patient_lastName = patient_lastName;
		this.doctor_firstName = doctor_firstName;
		this.doctor_lastName = doctor_lastName;
		this.issueType = issueType;
	}

	@Override
	public int hashCode() {
		return Objects.hash(appointment_date, doctor_firstName, doctor_lastName, id, issueType, patient_firstName,
				patientId, patient_lastName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Appointment other = (Appointment) obj;
		return Objects.equals(appointment_date, other.appointment_date)
				&& Objects.equals(doctor_firstName, other.doctor_firstName)
				&& Objects.equals(doctor_lastName, other.doctor_lastName) && Objects.equals(id, other.id)
				&& Objects.equals(issueType, other.issueType)
				&& Objects.equals(patient_firstName, other.patient_firstName)
				&& Objects.equals(patientId, other.patientId)
				&& Objects.equals(patient_lastName, other.patient_lastName);
	}

	
	
	
}
