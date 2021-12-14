package com.fpt.controller.guest;

import com.fpt.dto.OrderDTO;
import com.fpt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/guest/order")
public class OrdController {

    @Autowired
    OrderService orderService;

    @GetMapping("")
    public ResponseEntity<List<OrderDTO>> findByAccount (@RequestParam("username") String username) {
        List<OrderDTO> list = this.orderService.findByAccount(username);
        if(!list.isEmpty()) {
            return new ResponseEntity<List<OrderDTO>>(list, HttpStatus.OK);
        }
        else return new ResponseEntity<List<OrderDTO>>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> findById(@PathVariable("id") Integer id) {
        OrderDTO dto = this.orderService.findById(id);
        if(dto == null) {
            return new ResponseEntity<OrderDTO>(HttpStatus.NOT_FOUND);
        }
        else return new ResponseEntity<OrderDTO>(dto, HttpStatus.OK);
    }

    @PostMapping("")
    public  ResponseEntity<OrderDTO> create(@RequestBody OrderDTO dto) {
        return new ResponseEntity<OrderDTO>(this.orderService.create(dto), HttpStatus.OK);
    }

    @PutMapping("")
    public  ResponseEntity<OrderDTO> update(@RequestBody OrderDTO dto) {
        OrderDTO orderDTO = this.orderService.update(dto);
        if(orderDTO == null) {
            return new ResponseEntity<OrderDTO>(HttpStatus.NOT_FOUND);
        }
        else return new ResponseEntity<OrderDTO>(orderDTO, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<OrderDTO> delete(@PathVariable("id") Integer id) {
        OrderDTO dto = this.orderService.delete(id);
        if(dto == null) {
            return new ResponseEntity<OrderDTO>(HttpStatus.NOT_FOUND);
        }
        else return new ResponseEntity<OrderDTO>(dto, HttpStatus.OK);
    }
}
