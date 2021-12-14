package com.fpt.controller.admin;

import com.fpt.dto.AccountDTO;
import com.fpt.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AccountController {

	@Autowired
	AccountService accountServcie;
	
	@GetMapping("/account")
	public ResponseEntity<List<AccountDTO>> findAll() {
		List<AccountDTO> dtos = this.accountServcie.findAll();
		if(dtos.isEmpty()) {
			return new ResponseEntity<List<AccountDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<AccountDTO>>(dtos, HttpStatus.OK);
	}
	
	@GetMapping("/account/{id}")
	public ResponseEntity<AccountDTO> findById(@PathVariable("id") Integer id) {
		AccountDTO dto = this.accountServcie.findById(id);
		if(dto == null) {
			return new ResponseEntity<AccountDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<AccountDTO>(dto, HttpStatus.OK);
	}
	
	@PostMapping("/account")
	public ResponseEntity<AccountDTO> create(@RequestBody AccountDTO dto) {
		if(this.accountServcie.isExist(dto.getUsername()) || dto.getId() != -1) {
			return new ResponseEntity<AccountDTO>(HttpStatus.CONFLICT);
		}
		AccountDTO accountDTO = this.accountServcie.create(dto);
		return new ResponseEntity<AccountDTO>(accountDTO, HttpStatus.OK);
	}
	
	@PutMapping("/account")
	public ResponseEntity<AccountDTO> update(@RequestBody AccountDTO dto) {
		AccountDTO accountDTO = this.accountServcie.findById(dto.getId());
		if(accountDTO == null) {
			return new ResponseEntity<AccountDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<AccountDTO>(this.accountServcie.update(dto), HttpStatus.OK);
	}
	
	@DeleteMapping("/account/{id}")
	public ResponseEntity<AccountDTO> delete(@PathVariable("id") Integer id) {
		AccountDTO accountDTO = this.accountServcie.findById(id);
		if(accountDTO == null) {
			return new ResponseEntity<AccountDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<AccountDTO>(this.accountServcie.delete(id), HttpStatus.OK);
	}
	
}
