/*
 * 棋盘
 */
import '../styles/chessboard.scss'
import map_data from './map.js'
import Block from './block'

let _Chessboard_default = {
	size: 340,
	wrap: document.body
}

export default class Chessboard {
	constructor(option) {
		Object.assign(this, _Chessboard_default, option)
		this.unit = this.size / 17 // 17来源看img.jpg
		this.createChessboard()
		this.initChessboard()
	}
	//  生成棋盘容器
	createChessboard() {
		this.elem = document.createElement('DIV');
		this.elem.className = 'chessboard'
		this.elem.style.cssText = `width: ${this.size}px; height: ${this.size}px;`
		this.wrap.appendChild(this.elem)
	}
	//  初始化棋盘
	initChessboard() {
		Array.from(map_data, option => new Block(option, this))
	}
}
