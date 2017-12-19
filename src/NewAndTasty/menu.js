var menuState = {
    preload: function () {
		game.load.image('background', 'assets/images/Background2.png');
		game.load.image('endTurn', 'assets/images/Orange.png');
		game.load.image('off', 'assets/images/buttonOff.png');
		game.load.image('on', 'assets/images/buttonOn.png');
		game.load.image('topBar', 'assets/images/topBar.png');
		game.load.image('infoBar', 'assets/images/infoBar.png');
		game.load.image('politiesBar', 'assets/images/politiesBar.png');
	},

	create: function () {
		game.add.tileSprite(0, 0, 1400, 800, 'background');
	}
};