package com.fpt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailDTO {

    private Integer id;

    private String color;

    private String size;

    private Integer qty;

    private Integer productId;
    
}
