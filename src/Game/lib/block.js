import '../styles/block.scss'

let __shape = ['vertical_rect', 'cross_rect'] //  方块类型（和json对应）
let __type = ['base', 'normal', 'end'] // 基地，终点，跳跃点之类的（和json对应）

let _Block_default = {
	x: 0, // 横坐标
	y: 0, // 纵坐标
	shape: __shape[0], // 形状
	type: __type, // 类型
	index: 0, // 在地图中的位置序号
	target: 4, // 当同颜色踩到跳跃的位置,
	color: 'red', // 颜色
	num: 0 // 所属阵营
}

export default class Block {
	constructor(option, chessboard) {
		Object.assign(this, _Block_default, option)
		this.chessboard = chessboard
		this.createBlock()
	}
	//  生成地图块
	createBlock() {
		this.elem = document.createElement('DIV')
		this.elem.className = `block ${this.type} ${this.shape} ${this.color}`
		let unit = this.chessboard.unit
		this.elem.style.cssText = `
			left: ${this.x * unit}px;
			top: ${this.y * unit}px;
			width: ${this.width * unit}px;
			height: ${this.height * unit}px;
			border-width: ${this.width * unit}px;
		`
		this.chessboard.elem.appendChild(this.elem)
	}
}