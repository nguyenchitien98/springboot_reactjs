package com.fpt.mapper;

import com.fpt.dto.ProductDTO;
import com.fpt.entity.Product;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

	@Autowired
	ModelMapper mapper;
	
	public Product cvToEntity(ProductDTO dto) {
		Product entity = new Product();
		mapper.map(dto, entity);
		return entity;
	}
	
	public ProductDTO cvToDTO(Product entity) {
		ProductDTO dto = new ProductDTO();
		mapper.map(entity, dto);
		return dto;
	}
	
}
