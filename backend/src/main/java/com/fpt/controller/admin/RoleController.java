package com.fpt.controller.admin;

import com.fpt.dto.RoleDTO;
import com.fpt.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/role")
public class RoleController {
	
	@Autowired
	RoleService roleService;
	
	@GetMapping("")
	public ResponseEntity<List<RoleDTO>> findAll () {
		List<RoleDTO> dtos = this.roleService.findAll();
		if(dtos.isEmpty()) {
			return new ResponseEntity<List<RoleDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<RoleDTO>>(dtos, HttpStatus.OK);
	}
	
}
