package com.fpt.controller.guest;

import com.fpt.dto.OrderDTO;
import com.fpt.dto.OrderDetailDTO;
import com.fpt.entity.OrderDetail;
import com.fpt.mapper.OrderDetailMapper;
import com.fpt.mapper.OrderMapper;
import com.fpt.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrdDetController {

    @Autowired
    OrderDetailService orderDetailService;

    @Autowired
    OrderMapper orderMapper;

    @GetMapping("/guest/orderdetail")
    public ResponseEntity<List<OrderDetailDTO>> findByOrder(@RequestBody OrderDTO orderDTO){
        List<OrderDetailDTO> listDTO = this.orderDetailService.findByOrder(this.orderMapper.cvrToEntity(orderDTO));
        if(!listDTO.isEmpty()) {
            return new ResponseEntity<List<OrderDetailDTO>>(listDTO, HttpStatus.OK);
        }
        return new ResponseEntity<List<OrderDetailDTO>>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/guest/orderdetail")
    public ResponseEntity<OrderDetailDTO> create(@RequestBody OrderDetailDTO orderDetailDTO){
        Optional<OrderDetailDTO> dto = Optional.ofNullable(this.orderDetailService.create(orderDetailDTO));
        return new ResponseEntity<OrderDetailDTO>(dto.get(), HttpStatus.OK);
    }

    @GetMapping("/guest/orderdetail/{id}")
    public ResponseEntity<OrderDetail> findByOrderId(@PathVariable(value = "id") Integer id){
        Optional<OrderDetailDTO> orderDetailDTO = Optional.ofNullable(this.orderDetailService.findByOrderId(id));
        return new ResponseEntity<OrderDetail>(orderDetailDTO.get(),HttpStatus.OK);
    }
}
