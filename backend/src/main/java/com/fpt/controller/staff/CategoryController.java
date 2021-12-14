package com.fpt.controller.staff;

import com.fpt.dto.CategoryDTO;
import com.fpt.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/staff/category")
public class CategoryController {
	
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
	
	@GetMapping("/{id}")
	public ResponseEntity<CategoryDTO> findById (@PathVariable("id") Integer id) {
		CategoryDTO dto = this.categoryService.findById(id);
		if(dto == null) {
			return new ResponseEntity<CategoryDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<CategoryDTO>(dto, HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO dto) {
		if(this.categoryService.isExist(dto) || dto.getId() != -1) {
			return new ResponseEntity<CategoryDTO>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<CategoryDTO>(this.categoryService.create(dto), HttpStatus.OK);
	}
	
	
	@PutMapping("")
	public ResponseEntity<CategoryDTO> update(@RequestBody CategoryDTO dto) {
		if(this.categoryService.findById(dto.getId()) == null) {
			return new ResponseEntity<CategoryDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<CategoryDTO>(this.categoryService.update(dto), HttpStatus.OK);
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<CategoryDTO> delete (@PathVariable("id") Integer id) {
		CategoryDTO dto = this.categoryService.findById(id);
		if(dto == null) {
			return new ResponseEntity<CategoryDTO>(HttpStatus.NOT_FOUND);	
		}
		return new ResponseEntity<CategoryDTO>(this.categoryService.delete(dto), HttpStatus.OK);
	}
	
}
