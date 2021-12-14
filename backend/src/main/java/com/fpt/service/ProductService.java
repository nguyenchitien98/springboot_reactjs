package com.fpt.service;

import com.fpt.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
	
	public List<ProductDTO> findAll();
	
	public List<ProductDTO> findByStatus(Integer page, Integer status);
	
	public List<ProductDTO> findAllByPaginate(Integer page);
	
	public List<ProductDTO> findByCategory(Integer id);
	
	public ProductDTO findById(Integer id);
	
	public ProductDTO create(ProductDTO dto);
	
	public ProductDTO update(ProductDTO dto);
	
	public ProductDTO delete(ProductDTO dto);
	
}
