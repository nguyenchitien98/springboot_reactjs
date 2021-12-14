package com.fpt.repo;

import com.fpt.entity.Account;
import com.fpt.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

    @Query("SELECT order FROM Order order WHERE order.account =:account and status != 3")
    public List<Order> findByAccount(@Param("account") Account account);

}
