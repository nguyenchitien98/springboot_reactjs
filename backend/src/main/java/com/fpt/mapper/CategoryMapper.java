package com.fpt.mapper;

import com.fpt.dto.CategoryDTO;
import com.fpt.entity.Category;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

	@Autowired
	ModelMapper mapper;
	
	public Category cvToEntity(CategoryDTO dto) {
		Category entity = new Category();
		mapper.map(dto, entity);
		return entity;
	}
	
	public CategoryDTO cvToDTO(Category entity) {
		CategoryDTO dto = new CategoryDTO();
		mapper.map(entity, dto);
		return dto;
	}
	
}
