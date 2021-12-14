package com.fpt.controller.staff;

import com.fpt.dto.ProductDTO;
import com.fpt.service.CategoryService;
import com.fpt.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/staff/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CategoryService categoryService;
	
//	@GetMapping("")
//	public ResponseEntity<List<ProductDTO>> findAll () {
//		List<ProductDTO> products = this.productService.findAll();
//		if(products.isEmpty()) {
//			return new ResponseEntity<List<ProductDTO>>(HttpStatus.NO_CONTENT);
//		}
//		return new ResponseEntity<List<ProductDTO>>(products, HttpStatus.OK);
//	}
	
	@GetMapping(value="", params = {"page", "status"})
	public ResponseEntity<List<ProductDTO>> findAll (@RequestParam("page") Optional<Integer> page,
													 @RequestParam("status") Optional<Integer> status) {
		List<ProductDTO> products = this.productService.findByStatus(page.orElse(0), status.orElse(1));
		if(products.isEmpty()) {
			return new ResponseEntity<List<ProductDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ProductDTO>>(products, HttpStatus.OK);
	}
	
//	@GetMapping(value="", params = {"page", "status"})
//	public String test(@RequestParam("page") Optional<Integer> page, @RequestParam("status") Optional<Integer> status) {
//		return "Page: " + page + "-Status: " +status;
//	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductDTO> findById(@PathVariable Integer id) {
		ProductDTO dto = this.productService.findById(id);
		if(dto == null) {
			return new ResponseEntity<ProductDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProductDTO>(dto, HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO dto) {
		if(dto.getId() != -1 || this.categoryService.findById(dto.getCategoryId()) == null) {
			return new ResponseEntity<ProductDTO>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<ProductDTO>(this.productService.create(dto), HttpStatus.OK);
	}
	
	@PutMapping("")
	public ResponseEntity<ProductDTO> update(@RequestBody ProductDTO dto) {
		if(this.productService.findById(dto.getId()) == null) {
			return new ResponseEntity<ProductDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProductDTO>(this.productService.update(dto), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ProductDTO> delete(@PathVariable("id") Integer id) {
		ProductDTO dto = this.productService.findById(id);
		if(dto == null) {
			return new ResponseEntity<ProductDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProductDTO>(this.productService.delete(dto), HttpStatus.OK);
	}
	
//	@GetMapping(value="", params = "page")
//	public List<ProductDTO> findByPage(@RequestParam("page") Optional<Integer> page) {
//		return this.productService.findAllByPaginate(page.orElse(0));
//	}
}











