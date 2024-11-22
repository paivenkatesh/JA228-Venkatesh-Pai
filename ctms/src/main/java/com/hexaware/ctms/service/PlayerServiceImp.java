package com.hexaware.ctms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.ctms.entity.Player;
import com.hexaware.ctms.exceptions.BadRequestException;
import com.hexaware.ctms.exceptions.ResourceAlreadyExistsException;
import com.hexaware.ctms.exceptions.ResourceNotFoundException;
import com.hexaware.ctms.repository.IPlayerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PlayerServiceImp implements IPlayerService {

	@Autowired
	IPlayerRepository playerRepository;
	
	
	
	@Override
	public List<Player> getAllPlayers() {
		
		List<Player> playerList = playerRepository.findAll();
		
		if(playerList.isEmpty()) {
			
			throw new ResourceNotFoundException("No Player List exists");
			
		}
		return playerList;
	}
	
	

	@Override
	@Transactional
	public Player registerPlayer(Player player) {
		
		if(playerRepository.existsById(player.getPlayerId()) || playerRepository.existsById(player.getJerseyNumber())) {
			
			throw new ResourceAlreadyExistsException("The entered player id or jersey number already exists");
		}
		
		return playerRepository.save(player);
	}

	
	
	@Override
	public Player getPlayerById(int playerId) {
		
		return playerRepository.findById(playerId)
				.orElseThrow(() -> new ResourceNotFoundException("Player with given Id does not exist"));
	}

	
	
	@Override
	@Transactional
	public Player updatePlayerDetails(int playerId, Player player) {
		
		Player existingPlayer = playerRepository.findById(playerId)
				.orElseThrow(() -> new ResourceNotFoundException("Player with given Id does not exist"));
		
		try {
			existingPlayer.setPlayerName(player.getPlayerName());
			existingPlayer.setJerseyNumber(player.getJerseyNumber());
			existingPlayer.setRole(player.getRole());
			existingPlayer.setTotalMatches(player.getTotalMatches());
			existingPlayer.setTeamName(player.getTeamName());
			existingPlayer.setCountry(player.getCountry());
			existingPlayer.setDescription(player.getDescription());
		}catch(Exception e) {
			
			throw new BadRequestException("Failed to update Player");
		}
		return existingPlayer;
	}

	
	@Override
	@Transactional
	public void deletePlayer(int playerId) {

		try {
			
			playerRepository.deleteById(playerId);
			
		}catch(Exception e) {
			
			throw new BadRequestException("Failed to delete Player");
		}
	}

}
