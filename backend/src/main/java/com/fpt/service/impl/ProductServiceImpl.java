package com.fpt.service.impl;

import com.fpt.dto.ProductDTO;
import com.fpt.entity.Category;
import com.fpt.mapper.ProductMapper;
import com.fpt.repo.CategoryRepo;
import com.fpt.repo.ProductRepo;
import com.fpt.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	ProductMapper productMapper;
	
	@Autowired
	CategoryRepo categoryRepo;
	
	@Override
	public List<ProductDTO> findAll() {
		return this.productRepo.findAll().stream()
				.map(e -> this.productMapper.cvToDTO(e))
				.collect(Collectors.toList());
	}

	@Override
	public List<ProductDTO> findByStatus(Integer page, Integer status) {
		Pageable pageable = PageRequest.of(page, 10);
		return this.productRepo.findByStatus(status,pageable).stream()
				.map(e -> this.productMapper.cvToDTO(e))
				.collect(Collectors.toList());
	}

	@Override
	public List<ProductDTO> findByCategory(Integer id) {
		Category cate = this.categoryRepo.findById(id).get();
		Pageable pageable = PageRequest.of(0, 10);
		return this.productRepo.findByCategory(cate, pageable).stream()
				.map(e -> this.productMapper.cvToDTO(e))
				.collect(Collectors.toList());
	}

	@Override
	public ProductDTO findById(Integer id) {
		return this.productMapper.cvToDTO(this.productRepo.findById(id).get());
	}

	@Override
	public ProductDTO create(ProductDTO dto) {
		return this.productMapper.cvToDTO(this.productRepo.save(this.productMapper.cvToEntity(dto)));
	}

	@Override
	public ProductDTO update(ProductDTO dto) {
		return this.productMapper.cvToDTO(this.productRepo.save(this.productMapper.cvToEntity(dto)));
	}

	@Override
	public ProductDTO delete(ProductDTO dto) {
		this.productRepo.delete(this.productMapper.cvToEntity(dto));
		return dto;
	}

	@Override
	public List<ProductDTO> findAllByPaginate(Integer page) {
		Pageable sortedByName = 
				  PageRequest.of(page, 3, Sort.by("id").descending());
		return this.productRepo.findAll(sortedByName).stream()
				.map(e -> this.productMapper.cvToDTO(e))
				.collect(Collectors.toList());
	}
	
}
