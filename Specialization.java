package com.hostmdy.hm.domain;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Specialization {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Main Specialization is required.")
	private String main_specialization;
	
	@NotBlank(message = "Sub Specialization is required.")
	private String sub_specialization;
	
	@NotBlank(message = "Degree is required.")
	private String degree;
	
	@NotBlank(message = "Organ Entity is required.")
	private String organ;
	
	@NotNull(message = "Doctor ID is required.")
	private Long doctorId;
	
	public Specialization() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMain_specialization() {
		return main_specialization;
	}

	public void setMain_specialization(String main_specialization) {
		this.main_specialization = main_specialization;
	}

	public String getSub_specialization() {
		return sub_specialization;
	}

	public void setSub_specialization(String sub_specialization) {
		this.sub_specialization = sub_specialization;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getOrgan() {
		return organ;
	}

	public void setOrgan(String organ) {
		this.organ = organ;
	}

	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}

	@Override
	public String toString() {
		return "Specialization [id=" + id + ", main_specialization=" + main_specialization + ", sub_specialization="
				+ sub_specialization + ", degree=" + degree + ", organ=" + organ + ", doctorId=" + doctorId + "]";
	}

	public Specialization(Long id, String main_specialization, String sub_specialization, String degree, String organ,
			Long doctorId) {
		super();
		this.id = id;
		this.main_specialization = main_specialization;
		this.sub_specialization = sub_specialization;
		this.degree = degree;
		this.organ = organ;
		this.doctorId = doctorId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(degree, doctorId, id, main_specialization, organ, sub_specialization);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Specialization other = (Specialization) obj;
		return Objects.equals(degree, other.degree) && Objects.equals(doctorId, other.doctorId)
				&& Objects.equals(id, other.id) && Objects.equals(main_specialization, other.main_specialization)
				&& Objects.equals(organ, other.organ) && Objects.equals(sub_specialization, other.sub_specialization);
	}

	public Specialization(@NotNull(message = "Main Specialization is required.") String main_specialization,
			@NotNull(message = "Sub Specialization is required.") String sub_specialization,
			@NotNull(message = "Degree is required.") String degree,
			@NotNull(message = "Organ Entity is required.") String organ,
			@NotNull(message = "Doctor ID is required.") Long doctorId) {
		super();
		this.main_specialization = main_specialization;
		this.sub_specialization = sub_specialization;
		this.degree = degree;
		this.organ = organ;
		this.doctorId = doctorId;
	}

	
	
	
}
