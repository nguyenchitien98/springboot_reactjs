package com.fpt.service;

import com.fpt.dto.OrderDTO;
import com.fpt.entity.Order;

import java.util.List;

public interface OrderService{

    public List<OrderDTO> findAll();

    public OrderDTO findById(Integer id);

    public OrderDTO create(OrderDTO orderDTO);

    public OrderDTO update(OrderDTO orderDTO);

    public OrderDTO delete(Integer id);

    public List<OrderDTO> findByAccount(String username);
}
