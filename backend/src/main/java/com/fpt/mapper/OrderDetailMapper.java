package com.fpt.mapper;

import com.fpt.dto.OrderDetailDTO;
import com.fpt.entity.OrderDetail;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class OrderDetailMapper {

    @Autowired
    ModelMapper mapper;

    public OrderDetailDTO crvToDTO(OrderDetail entity){
        OrderDetailDTO dto = new OrderDetailDTO();
        mapper.map(entity, dto);
        return dto;
    }

    public OrderDetail crvToEntity(OrderDetailDTO dto) {
        OrderDetail entity = new OrderDetail();
        mapper.map(dto, entity);
        return entity;
    }

}
