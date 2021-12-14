package com.fpt.controller.admin;

import com.fpt.dto.AuthorityDTO;
import com.fpt.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/authority")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthorityController {
	
	@Autowired
	AuthorityService authorityService;
	
	@GetMapping("")
	public ResponseEntity<List<AuthorityDTO>> findAll() {
		List<AuthorityDTO> authorities = this.authorityService.findAll();
		if(authorities.isEmpty()) {
			return new ResponseEntity<List<AuthorityDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<AuthorityDTO>>(authorities, HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<AuthorityDTO> create(@RequestBody AuthorityDTO dto) {
		if(this.authorityService.isExits(dto.getAccountId(), dto.getRoleId()) || dto.getId() != -1) {
			return new ResponseEntity<AuthorityDTO>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<AuthorityDTO>(this.authorityService.create(dto), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
		AuthorityDTO dto = this.authorityService.findById(id);
		if(this.authorityService.findById(id) == null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		this.authorityService.delete(dto);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
