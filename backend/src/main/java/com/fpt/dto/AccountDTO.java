package com.fpt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
	
	private Integer id;
	
	private String username;
	
	private String password;
	
	private String fullname;
	
	private String email;
	
	private String photo;
	
	private Integer status;
	
}
