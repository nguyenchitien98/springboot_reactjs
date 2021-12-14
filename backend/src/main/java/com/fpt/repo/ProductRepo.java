package com.fpt.repo;

import com.fpt.entity.Category;
import com.fpt.entity.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>{

	@Query("SELECT entity FROM Product entity WHERE category=:category")
	public List<Product> findByCategory(@Param("category") Category category, Pageable pageable);
	
	@Query("SELECT entity FROM Product entity WHERE status=:status")
	public List<Product> findByStatus(@Param("status") Integer status, Pageable pageable);
}
