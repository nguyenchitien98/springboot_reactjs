package com.fpt.controller.guest;

import com.fpt.dto.CategoryDTO;
import com.fpt.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/guest/category")
public class CateController {
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("")
	public ResponseEntity<List<CategoryDTO>> findAll() {
		List<CategoryDTO> catetegories = this.categoryService.findAll();
		if(catetegories.isEmpty()) {
			return new ResponseEntity<List<CategoryDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<CategoryDTO>>(catetegories, HttpStatus.OK);
	}
}
