package com.fpt.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Entity
@Table(name="accounts")
@Data
@AllArgsConstructor
public class Account implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="fullname")
	private String fullname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="photo")
	private String photo;
	
	@Column(name="status")
	private Integer status;

	@Enumerated(EnumType.STRING)
	private AuthProvider provider;

	@JsonIgnore
	@OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
	private List<Authority> authorities;

	@JsonIgnore
	@OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
	private List<Order> orders;

	public Account() {
	}

	public Account(String username, String password, String fullname, String email, String photo, Integer status) {
		this.username = username;
		this.password = password;
		this.fullname = fullname;
		this.email = email;
		this.photo = photo;
		this.status = status;
	}

}
