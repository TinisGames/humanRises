var bootText = { ludumDare: {}, newAndTasty: {} };

var style = {
	font: "16px Arial", fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true, wordWrapWidth: 300
};

var styleTitle = {
	font: "20px Arial", fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true, wordWrapWidth: 300
};

var style2 = {
	font: "15px Arial", fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true, wordWrapWidth: 960
};

var bootState = {
	preload: function () {
		game.add.plugin(PhaserInput.Plugin);
		game.load.image('background', 'assets/images/Background2.png');
		game.load.image('button', 'assets/images/Orange.png');
	},
	create: function () {
		game.add.tileSprite(0, 0, 1400, 800, 'background');

		bootText.title = game.add.text(0, 0, 'Human Rises', styleTitle);
		bootText.title.setTextBounds(0, 100, 1400, 100);
		bootText.title.resolution = 2;
		bootText.title2 = game.add.text(0, 0, 'A game offered by Tinis Games', style2);
		bootText.title2.setTextBounds(0, 130, 1400, 100);
		bootText.title2.resolution = 2;

		// Original Game for Ludum Dare
		bootText.ludumDare.button = game.add.button(480, 195, 'button', startLudumDare, this, 2, 1, 0);
		bootText.ludumDare.button.scale.set(1, 0.23);
		bootText.ludumDare.buttonText = game.add.text(0, 0, 'Play the original game for Ludum Dare', style);
		bootText.ludumDare.buttonText.setTextBounds(0, 180, 1400, 100);
		bootText.ludumDare.buttonText.resolution = 2;

		// New & Tasty Game
		bootText.newAndTasty.button = game.add.button(480, 265, 'button', startNewAndTasty, this, 2, 1, 0);
		bootText.newAndTasty.button.scale.set(1, 0.23);
		bootText.newAndTasty.buttonText = game.add.text(0, 0, 'Play the new and tasty game', style);
		bootText.newAndTasty.buttonText.setTextBounds(0, 250, 1400, 100);
		bootText.newAndTasty.buttonText.resolution = 2;
	}
}

function startLudumDare() {
	game.state.start('ludumDare');
}

function startNewAndTasty() {
	game.state.start('new_menu');
}
