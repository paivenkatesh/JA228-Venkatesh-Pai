package com.hexaware.ctms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.ctms.entity.Player;
import com.hexaware.ctms.service.IPlayerService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/ctms/player")
@Validated
@Transactional
public class PlayerController {
	
	@Autowired
	IPlayerService playerService;
	
	//Get a List Of All Players 
	@GetMapping("/getAllPlayers")
	public ResponseEntity<List<Player>> getAllPlayers() {
		
		List<Player> playerList = playerService.getAllPlayers();
		
		return ResponseEntity.ok(playerList);
	}
	
	//Register a New Player
	@PostMapping("/registerPlayer")
	public ResponseEntity<Player> registerPlayer(@Valid @RequestBody Player player) {
		
		Player registeredPlayer = playerService.registerPlayer(player);
		
		return new ResponseEntity<>(registeredPlayer, HttpStatus.CREATED);
	}
	
	
	//Get a Player By Id
	@GetMapping("/getPlayerById/{playerId}")
	public Player getPlayerById(@PathVariable int playerId) {
		
		return playerService.getPlayerById(playerId);
	}
	
	
	//Update Player Details
	@PutMapping("/updatePlayerDetails/{playerId}")
	public Player updatePlayerDetails(@Valid @PathVariable int playerId, @RequestBody Player player) {
		return playerService.updatePlayerDetails(playerId, player);
	}
	
	
	//Delete a player
	@DeleteMapping("/deletePlayer/{playerId}")
	public ResponseEntity<Void> deletePlayer(@PathVariable int playerId) {

		playerService.deletePlayer(playerId);
		
		return ResponseEntity.noContent().build();
	}
	
	//Players with more matches
	@GetMapping("/findPlayerWithMoreMatches/{playerName}")
	List<Player> findPlayerWithMoreMatches(@PathVariable String playerName){
		
		return playerService.findPlayerWithMoreMatches(playerName);
	}

}
