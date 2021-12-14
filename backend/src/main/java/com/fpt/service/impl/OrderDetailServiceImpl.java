package com.fpt.service.impl;

import com.fpt.dto.OrderDetailDTO;
import com.fpt.entity.Order;
import com.fpt.entity.OrderDetail;
import com.fpt.mapper.OrderDetailMapper;
import com.fpt.repo.OrderDetailRepo;
import com.fpt.repo.OrderRepo;
import com.fpt.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {

    @Autowired
    OrderDetailRepo orderDetailRepo;

    @Autowired
    OrderDetailMapper orderDetailMapper;

    @Autowired
    OrderRepo orderRepo;

    @Override
    public List<OrderDetailDTO> findByOrder(Order order) {
        List<OrderDetail> listEntity = this.orderDetailRepo.findByOrder(order);
        if(!listEntity.isEmpty()){
            return listEntity.stream()
                    .map(entity -> this.orderDetailMapper.crvToDTO(entity))
                    .collect(Collectors.toList());
        }
        else return null;
    }

    @Override
    public OrderDetailDTO create(OrderDetailDTO orderDetailDTO) {
        return this.orderDetailMapper.crvToDTO(this.orderDetailRepo.save(this.orderDetailMapper.crvToEntity(orderDetailDTO)));
    }

    @Override
    public OrderDetailDTO findByOrderId(Integer id) {
        if (id!=null){
            Optional<OrderDetail> orderDetail = this.orderDetailRepo.findById(id);
            return this.orderDetailMapper.crvToDTO(orderDetail.get());
        }
        return null;
    }

}
