package com.fpt.service;

import com.fpt.dto.CategoryDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
	
	public List<CategoryDTO> findAll();
	
	public CategoryDTO findById(Integer id);
	
	public CategoryDTO create(CategoryDTO dto);
	
	public CategoryDTO update(CategoryDTO dto);
	
	public CategoryDTO delete(CategoryDTO dto);
	
	public boolean isExist(CategoryDTO dto);
}
