package com.fpt.repo;

import com.fpt.dto.ProductDetailDTO;
import com.fpt.entity.Product;
import com.fpt.entity.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDetailRepo extends JpaRepository<ProductDetail, Integer> {

}
