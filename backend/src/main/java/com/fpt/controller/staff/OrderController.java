package com.fpt.controller.staff;

import com.fpt.dto.OrderDTO;
import com.fpt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/staff/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/getAll")
    public ResponseEntity<List<OrderDTO>> getAll () {
        return new ResponseEntity<List<OrderDTO>>(this.orderService.findAll(),HttpStatus.OK);
    }

    @PutMapping("/confirm")
    public  ResponseEntity<OrderDTO> update(@RequestBody OrderDTO dto) {
        OrderDTO orderDTO = this.orderService.update(dto);
        if(orderDTO == null) {
            return new ResponseEntity<OrderDTO>(HttpStatus.NOT_FOUND);
        }
        else return new ResponseEntity<OrderDTO>(orderDTO, HttpStatus.OK);
    }
}
