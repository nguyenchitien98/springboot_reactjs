package com.fpt.controller.guest;

import com.fpt.dto.ProductDTO;
import com.fpt.service.CategoryService;
import com.fpt.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/guest/product")
public class ProdController {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("")
	public ResponseEntity<List<ProductDTO>> findAll () {
		List<ProductDTO> products = this.productService.findAll();
		if(products.isEmpty()) {
			return new ResponseEntity<List<ProductDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ProductDTO>>(products, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductDTO> findById(@PathVariable Integer id) {
		ProductDTO dto = this.productService.findById(id);
		if(dto == null) {
			return new ResponseEntity<ProductDTO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProductDTO>(dto, HttpStatus.OK);
	}
	
	@GetMapping("/findbycate/{cateid}")
	public ResponseEntity<List<ProductDTO>> findByCategory (@PathVariable("cateid") Integer id) {
		List<ProductDTO> products = this.productService.findByCategory(id);
		if(products.isEmpty()) {
			return new ResponseEntity<List<ProductDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<ProductDTO>>(products, HttpStatus.OK);
	}
	
	
}
