package com.hiagodias.hddelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hiagodias.hddelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	

}
