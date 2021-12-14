package com.fpt.repo;

import com.fpt.entity.Order;
import com.fpt.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepo extends JpaRepository<OrderDetail, Integer> {

    @Query("SELECT orderdetail FROM OrderDetail orderdetail WHERE orderdetail.order=:order")
    public List<OrderDetail> findByOrder(@Param("order") Order order);

}
