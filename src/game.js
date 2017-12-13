var game = new Phaser.Game(1400, 800, Phaser.CANVAS, 'content');

game.state.add('boot', bootState);
game.state.add('ludumDare', ludumDareState);
game.state.add('new_menu', menuState);
game.state.add('new_tuto', tutoState);
game.state.add('new_game', gameState);

game.state.start('boot');