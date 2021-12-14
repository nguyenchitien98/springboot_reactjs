package com.fpt.service;

import com.fpt.dto.OrderDetailDTO;
import com.fpt.entity.Order;

import java.util.List;

public interface OrderDetailService {

    public List<OrderDetailDTO> findByOrder(Order order);

    public OrderDetailDTO create(OrderDetailDTO orderDetailDTO);

    OrderDetailDTO findByOrderId(Integer id);

}
