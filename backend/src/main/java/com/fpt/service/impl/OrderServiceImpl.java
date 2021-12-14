package com.fpt.service.impl;

import com.fpt.dto.OrderDTO;
import com.fpt.entity.Account;
import com.fpt.entity.Order;
import com.fpt.mapper.OrderMapper;
import com.fpt.repo.AccountRepo;
import com.fpt.repo.OrderRepo;
import com.fpt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    AccountRepo accountRepo;

    @Override
    public List<OrderDTO> findAll() {
        return this.orderRepo.findAll().stream()
                .map(entity -> this.orderMapper.cvrToDTO(entity))
                .collect(Collectors.toList());
    }

    @Override
    public OrderDTO findById(Integer id) {
        Optional<Order> entity = this.orderRepo.findById(id);
        if(entity.isPresent()) {
            return this.orderMapper.cvrToDTO(entity.get());
        }
        else return null;
    }

    @Override
    public OrderDTO create(OrderDTO orderDTO) {
        orderDTO.setCreateDate(new Date());
        System.out.println(orderDTO);
        Order entity = this.orderRepo.save(this.orderMapper.cvrToEntity(orderDTO));
        return this.orderMapper.cvrToDTO(entity);
    }

    @Override
    public OrderDTO update(OrderDTO orderDTO) {
        Optional<Order> entity = this.orderRepo.findById(orderDTO.getId());
        if(entity.isPresent()) {
            return this.orderMapper.cvrToDTO(this.orderRepo.save(this.orderMapper.cvrToEntity(orderDTO)));
        }
        else return null;
    }

    @Override
    public OrderDTO delete(Integer id) {
        Optional<Order> entity = this.orderRepo.findById(id);
        if(entity.isPresent()) {
            this.orderRepo.delete(entity.get());
            return this.orderMapper.cvrToDTO(entity.get());
        }
        else return null;
    }

    @Override
    public List<OrderDTO> findByAccount(String username) {
        Optional<Account> account = Optional.ofNullable(this.accountRepo.findByUsername(username));
        if(account.isPresent()) {
            List<Order> list = this.orderRepo.findByAccount(account.get());
            return list.stream()
                    .map(entity -> this.orderMapper.cvrToDTO(entity))
                    .collect(Collectors.toList());
        }
        else return null;
    }
}
