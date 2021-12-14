package com.fpt.dto;

import com.fpt.entity.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

	private Integer id;
	private String name;
	private String image;
	private Double price;
	private Date createDate;
	private Integer status;
	private Integer sale;
	private Integer categoryId;
	private List<ProductDetail> productDetails;

}
