package com.hexaware.ctms.service;

import java.util.List;

import com.hexaware.ctms.entity.Player;

public interface IPlayerService {

	List<Player> getAllPlayers();
	Player registerPlayer(Player player);
	Player getPlayerById(int playerId);
	Player updatePlayerDetails(int playerId, Player player);
	void deletePlayer(int playerId);
	List<Player> findPlayerWithMoreMatches(String playerName);
}
