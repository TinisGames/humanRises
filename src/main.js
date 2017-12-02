var game = new Phaser.Game(1400, 800, Phaser.CANVAS, 'content', { create: create });

function create() {

	game.stage.backgroundColor = '#EDEEC9';

	var style = {
		font: "16px Arial", fill: "#fff",
		align: "left",
		boundsAlignH: "left",
		boundsAlignV: "top",
		wordWrap: true, wordWrapWidth: 300
	};

	// -- Country 1
	var graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 20, 150, 200);
	graphics.endFill();

	game.add.text(20, 20, 'Citizens :', style);
	game.add.text(20, 40, 'Food :', style);
	game.add.text(20, 60, 'Happiness :', style);
	game.add.text(20, 80, 'Gold :', style);
	game.add.text(20, 100, 'Research :', style);
	game.add.text(20, 120, 'Lands :', style);
	game.add.text(20, 140, '- Arable :', style);
	game.add.text(20, 160, '- Sea : :', style);
	game.add.text(20, 180, '- Forest :', style);
	game.add.text(20, 200, '- Housing :', style);

	// -- Country 2
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(20, 580, 150, 200);
	graphics.endFill();

	game.add.text(20, 580, 'Citizens :', style);
	game.add.text(20, 600, 'Food :', style);
	game.add.text(20, 620, 'Happiness :', style);
	game.add.text(20, 640, 'Gold :', style);
	game.add.text(20, 660, 'Research :', style);
	game.add.text(20, 680, 'Lands :', style);
	game.add.text(20, 700, '- Arable :', style);
	game.add.text(20, 720, '- Sea : :', style);
	game.add.text(20, 740, '- Forest :', style);
	game.add.text(20, 760, '- Housing :', style);

	// -- Country 3
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 20, 150, 200);
	graphics.endFill();

	game.add.text(1230, 20, 'Citizens :', style);
	game.add.text(1230, 40, 'Food :', style);
	game.add.text(1230, 60, 'Happiness :', style);
	game.add.text(1230, 80, 'Gold :', style);
	game.add.text(1230, 100, 'Research :', style);
	game.add.text(1230, 120, 'Lands :', style);
	game.add.text(1230, 140, '- Arable :', style);
	game.add.text(1230, 160, '- Sea : :', style);
	game.add.text(1230, 180, '- Forest :', style);
	game.add.text(1230, 200, '- Housing :', style);

	// -- Country 4
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(1230, 580, 150, 200);
	graphics.endFill();

	game.add.text(1230, 580, 'Citizens :', style);
	game.add.text(1230, 600, 'Food :', style);
	game.add.text(1230, 620, 'Happiness :', style);
	game.add.text(1230, 640, 'Gold :', style);
	game.add.text(1230, 660, 'Research :', style);
	game.add.text(1230, 680, 'Lands :', style);
	game.add.text(1230, 700, '- Arable :', style);
	game.add.text(1230, 720, '- Sea : :', style);
	game.add.text(1230, 740, '- Forest :', style);
	game.add.text(1230, 760, '- Housing :', style);

	// -- Player Country
	graphics = game.add.graphics(0, 0);
	graphics.beginFill(0x000000);
	graphics.drawRect(625, 300, 150, 200);
	graphics.endFill();

	game.add.text(625, 300, 'Citizens :', style);
	game.add.text(625, 320, 'Food :', style);
	game.add.text(625, 340, 'Happiness :', style);
	game.add.text(625, 360, 'Gold :', style);
	game.add.text(625, 380, 'Research :', style);
	game.add.text(625, 400, 'Lands :', style);
	game.add.text(625, 420, '- Arable :', style);
	game.add.text(625, 440, '- Sea : :', style);
	game.add.text(625, 460, '- Forest :', style);
	game.add.text(625, 480, '- Housing :', style);
}