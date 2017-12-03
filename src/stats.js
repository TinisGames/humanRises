// Rules :
// citizens => 1.5 (normal), 1.2 (study polity), 1.1 (birth control)
// funding => 0 (no), 0.5 (home renovation), 0.3 (research fund)
// levelHousing => +1 by (levelHousing * 50) gold
// fishing => -0.5 (repopulation), 0.5 (normal), 1 (intensive)
// hunting => same as fishing
// consommation => 1 (rationing), 1.2 (normal), 1.5 (profusion)
// markets => sell X for 1, negative inverse exchange type    

var country1 = {
	name: 'Peaslands',
	alive: true,
	citizens: 200,
	food: 300,
	happiness: 100,
	gold: 0,
	research: 0,
	lands: {
		arable: 18,
		sea: 2,
		forest: 3,
		industry: 0,
		housing: 2,
		noHousing: 0
	},
	rules: {
		citizens: 1.5,
		funding: 0,
		levelHousing: 1,
		fishing: 0.5,
		hunting: 0.5,
		consommation: 1.2
	},
	population: {
		fish: 500,
		wild: 300
	},
	markets: {
		rules: {
			foodForGold: 20,
			foodForResearch: 10,
			goldForResearch: 0,
		},
		exchange: {
			food: 0,
			gold: 0,
			research: 0
		}
	},
	text: {}
}

var country2 = {
	alive: true,
	name: 'Richiztan',
	citizens: 100,
	food: 50,
	happiness: 100,
	gold: 200,
	research: 0,
	lands: {
		arable: 6,
		sea: 1,
		forest: 1,
		industry: 1,
		housing: 1,
		noHousing: 0
	},
	rules: {
		citizens: 1.5,
		funding: 0.5,
		levelHousing: 3,
		fishing: 0.5,
		hunting: 0.5,
		consommation: 1
	},
	population: {
		fish: 200,
		wild: 100
	},
	markets: {
		rules: {
			foodForGold: -5,
			foodForResearch: 0,
			goldForResearch: -10,
		},
		exchange: {
			food: 0,
			gold: 0,
			research: 0
		}
	},
	text: {}
}

var country3 = {
	alive: true,
	name: 'Intelligencia',
	citizens: 150,
	food: 150,
	happiness: 100,
	gold: 30,
	research: 50,
	lands: {
		arable: 10,
		sea: 2,
		forest: 2,
		industry: 1,
		housing: 1,
		noHousing: 0
	},
	rules: {
		citizens: 1.2,
		funding: 0.3,
		levelHousing: 2,
		fishing: 0.5,
		hunting: 0.5,
		consommation: 1.2
	},
	population: {
		fish: 400,
		wild: 250
	},
	markets: {
		rules: {
			foodForGold: 0,
			foodForResearch: -3,
			goldForResearch: -5,
		},
		exchange: {
			food: 0,
			gold: 0,
			research: 0
		}

	},
	text: {}
}

var country4 = {
	alive: true,
	name: 'Industrand',
	citizens: 300,
	food: 200,
	happiness: 100,
	gold: 150,
	research: 20,
	lands: {
		arable: 7,
		sea: 1,
		forest: 1,
		industry: 3,
		housing: 2,
		noHousing: 0
	},
	rules: {
		citizens: 1.1,
		funding: 0,
		levelHousing: 2,
		fishing: 0.5,
		hunting: 0.5,
		consommation: 1.5
	},
	population: {
		fish: 150,
		wild: 150
	},
	markets: {
		rules: {
			foodForGold: -10,
			foodForResearch: 0,
			goldForResearch: 5,
		},
		exchange: {
			food: 0,
			gold: 0,
			research: 0
		}

	},
	text: {}
}

var countryPlayer = {
	player: true,
	name: 'Player',
	citizens: 100,
	food: 150,
	happiness: 100,
	gold: 50,
	research: 0,
	lands: {
		arable: 14,
		sea: 2,
		forest: 3,
		industry: 0,
		housing: 1,
		noHousing: 0
	},
	rules: {
		citizens: 3,
		housing: 2,
		levelHousing: 1,
		fishing: 0,
		hunting: 0,
		consommation: 2
	},
	population: {
		fish: 500,
		wild: 300
	},
	markets: {
		exchange: {
			food: 0,
			gold: 0,
			research: 0
		}
	},
	text: {}
}