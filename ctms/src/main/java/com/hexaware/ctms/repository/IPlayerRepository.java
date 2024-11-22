package com.hexaware.ctms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.ctms.entity.Player;

@Repository
public interface IPlayerRepository extends JpaRepository<Player, Integer> {

}
