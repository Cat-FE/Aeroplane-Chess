import Chessboard from './lib/chessboard.js'
import Player from './lib/player.js'

// Game Start
const start = function (players) {
	//  生成玩家
	Array.from(players, player => new Player(player))
	//  生成棋盘
	new Chessboard()
	// ...
}

export {
	start
}
