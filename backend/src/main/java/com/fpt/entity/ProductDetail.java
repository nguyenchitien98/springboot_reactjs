package com.fpt.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetail implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "color")
    private String color;

    @Column(name = "size")
    private String size;

    @Column(name = "qty")
    private Integer qty;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


}
