package com.fpt.dto;

import com.fpt.entity.OrderDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO extends OrderDetail implements Serializable {

    private Integer id;

    private Integer orderId;

    private Integer productId;

    private Double price;

    private Integer size;

    private Integer quantity;

}
