package com.fpt.service;

import com.fpt.dto.ProductDetailDTO;
import com.fpt.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductDetailService {

    List<ProductDetailDTO> findAll();

    ProductDetailDTO findById(Integer id);

    ProductDetailDTO create(ProductDetailDTO dto);

    ProductDetailDTO update(ProductDetailDTO dto);

    ProductDetailDTO delete(ProductDetailDTO dto);

}
