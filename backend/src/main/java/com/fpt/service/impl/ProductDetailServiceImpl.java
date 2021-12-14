package com.fpt.service.impl;

import com.fpt.dto.ProductDetailDTO;
import com.fpt.entity.Product;
import com.fpt.mapper.ProductDetailMapper;
import com.fpt.mapper.ProductMapper;
import com.fpt.repo.ProductDetailRepo;
import com.fpt.repo.ProductRepo;
import com.fpt.service.ProductDetailService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductDetailServiceImpl implements ProductDetailService {

    final
    ProductDetailRepo productDetailRepo;

    final
    ProductDetailMapper productDetailMapper;

    final
    ProductRepo productRepo;

    final
    ProductMapper productMapper;

    public ProductDetailServiceImpl(ProductDetailRepo productDetailRepo, ProductRepo productRepo, ProductDetailMapper productDetailMapper, ProductMapper productMapper) {
        this.productDetailRepo = productDetailRepo;
        this.productRepo = productRepo;
        this.productDetailMapper = productDetailMapper;
        this.productMapper = productMapper;
    }

    @Override
    public List<ProductDetailDTO> findAll() {
        return productDetailRepo.findAll().stream()
                .map(productDetailMapper::cvrToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDetailDTO findById(Integer id) {
        return productDetailMapper.cvrToDTO(productDetailRepo.findById(id).get());
    }

    @Override
    public ProductDetailDTO create(ProductDetailDTO dto) {
        return productDetailMapper.cvrToDTO(productDetailRepo.save(productDetailMapper.cvrToEntity(dto)));
    }

    @Override
    public ProductDetailDTO update(ProductDetailDTO dto) {
        return productDetailMapper.cvrToDTO(productDetailRepo.save(productDetailMapper.cvrToEntity(dto)));
    }

    @Override
    public ProductDetailDTO delete(ProductDetailDTO dto) {
        productDetailRepo.delete(productDetailMapper.cvrToEntity(dto));
        return dto;
    }
}
