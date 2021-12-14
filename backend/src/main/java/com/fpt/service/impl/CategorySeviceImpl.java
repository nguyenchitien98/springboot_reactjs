package com.fpt.service.impl;

import com.fpt.dto.CategoryDTO;
import com.fpt.entity.Category;
import com.fpt.mapper.CategoryMapper;
import com.fpt.repo.CategoryRepo;
import com.fpt.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategorySeviceImpl implements CategoryService{

	@Autowired
	CategoryRepo categoryRepo;
	
	@Autowired
	CategoryMapper categoryMapper;
	
	@Override
	public List<CategoryDTO> findAll() {
		return this.categoryRepo.findAll().stream()
				.map(entity -> this.categoryMapper.cvToDTO(entity))
				.collect(Collectors.toList());
	}

	@Override
	public CategoryDTO findById(Integer id) {
		return this.categoryMapper.cvToDTO(this.categoryRepo.findById(id).get());
	}

	@Override
	public CategoryDTO create(CategoryDTO dto) {
		return this.categoryMapper.cvToDTO(this.categoryRepo.save(this.categoryMapper.cvToEntity(dto)));
	}

	@Override
	public CategoryDTO update(CategoryDTO dto) {
		return this.categoryMapper.cvToDTO(this.categoryRepo.save(this.categoryMapper.cvToEntity(dto)));
	}

	@Override
	public CategoryDTO delete(CategoryDTO dto) {
		this.categoryRepo.delete(this.categoryMapper.cvToEntity(dto));
		return dto;
	}

	@Override
	public boolean isExist(CategoryDTO dto) {
		Category entity = this.categoryRepo.findByName(dto.getName());
		if(entity == null) {
			return false;
		}
		return true;
	}

	
	
}
