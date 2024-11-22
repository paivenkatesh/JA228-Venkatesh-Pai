package com.hexaware.ctms.entity;
import jakarta.persistence.Column;
/*
 * @Author: Venkatesh Pai
 * Date: 22-11-2024
 * Entity Classes
 */
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Player")
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int playerId;
	
	@Column(nullable = false)
	@NotNull(message = "Player Name cannot be null")
	@Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
	private String playerName;
	
	@Column(nullable = false)
	@NotNull(message = "Jersey number cannot be null")
	@Size(min = 1, max = 4, message = "Jersey number must be between 1 and 4 characters")
	private int jerseyNumber;
	
	@Column(nullable = false)
	@NotNull(message = "Player must have a Role")
	@Enumerated(EnumType.STRING)
	private Role role;
	
	
	private int totalMatches;
	
	@Column(nullable = false)
	@NotNull(message = "Player must have a Team Name")
	@Size(min = 3, max = 50, message = "Team Name must be between 3 and 50 characters")
	private String teamName;
	
	@Column(nullable = false)
	@NotNull(message = "Player must have a Country")
	@Size(min = 3, max = 50, message = "Country Name must be between 3 and 50 characters")
	private String country;
	
	@Column(nullable = false)
	@NotNull(message = "Provide a Player Description")
	@Size(min = 3, message = "Description must be atleast 3 characters")
	private String description;
	
	
	
	public Player() {
		super();
	}

	
	
	public Player(int playerId,
			@NotNull(message = "Player Name cannot be null") @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters") String playerName,
			@NotNull(message = "Jersey number cannot be null") @Size(min = 1, max = 4, message = "Jersey number must be between 1 and 4 characters") int jerseyNumber,
			@NotNull(message = "Player must have a Role") Role role, int totalMatches,
			@NotNull(message = "Player must have a Team Name") @Size(min = 3, max = 50, message = "Team Name must be between 3 and 50 characters") String teamName,
			@NotNull(message = "Player must have a Country") @Size(min = 3, max = 50, message = "Country Name must be between 3 and 50 characters") String country,
			@NotNull(message = "Provide a Player Description") @Size(min = 3, message = "Description must be atleast 3 characters") String description) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.jerseyNumber = jerseyNumber;
		this.role = role;
		this.totalMatches = totalMatches;
		this.teamName = teamName;
		this.country = country;
		this.description = description;
	}

	

	public int getPlayerId() {
		return playerId;
	}



	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}



	public String getPlayerName() {
		return playerName;
	}



	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}



	public int getJerseyNumber() {
		return jerseyNumber;
	}



	public void setJerseyNumber(int jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}



	public int getTotalMatches() {
		return totalMatches;
	}



	public void setTotalMatches(int totalMatches) {
		this.totalMatches = totalMatches;
	}



	public String getTeamName() {
		return teamName;
	}



	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}

	

	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", playerName=" + playerName + ", jerseyNumber=" + jerseyNumber
				+ ", role=" + role + ", totalMatches=" + totalMatches + ", teamName=" + teamName + ", country="
				+ country + ", description=" + description + "]";
	}



	public enum Role{
		
		Batsman, Bowler, Keeper, AllRounder ;
	}
	

}
