package com.fpt.mapper;

import com.fpt.dto.OrderDTO;
import com.fpt.entity.Order;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    @Autowired
    ModelMapper mapper;

    public OrderDTO cvrToDTO(Order entity) {
        OrderDTO dto = new OrderDTO();
        mapper.map(entity, dto);
        return dto;
    }

    public Order cvrToEntity(OrderDTO dto) {
        Order entity = new Order();
        mapper.map(dto, entity);
        return entity;
    }

}
