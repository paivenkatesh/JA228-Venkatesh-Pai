package com.hexaware.ctms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.ctms.entity.Player;

@Repository
public interface IPlayerRepository extends JpaRepository<Player, Integer> {

	@Query("SELECT p FROM Player p WHERE p.totalMatches > (SELECT d.totalMatches FROM Player d WHERE d.playerName = :playerName)")
    List<Player> findPlayerWithMoreMatches(String playerName);
	
	
}
