package com.fpt.mapper;

import com.fpt.dto.ProductDetailDTO;
import com.fpt.entity.ProductDetail;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ProductDetailMapper {

    final
    ModelMapper mapper;

    public ProductDetailMapper(ModelMapper mapper) {
        this.mapper = mapper;
    }

    public ProductDetailDTO cvrToDTO(ProductDetail entity) {
        ProductDetailDTO dto = new ProductDetailDTO();
        mapper.map(entity, dto);
        return dto;
    }

    public ProductDetail cvrToEntity(ProductDetailDTO dto) {
        ProductDetail entity = new ProductDetail();
        mapper.map(dto, entity);
        return entity;
    }

}
