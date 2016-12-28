/*
 *地图生成器
 */

import mapConf from './mapConf.js'

let {
	colors,
	shape,
	rect,
	triangle,
	pathMode
} = mapConf

import Block from './block'

export default class MapCenerator {
	constructor(chessboard) {
		this.chessboard = chessboard
		this.unit = this.chessboard.unit
		this.renderMap()
	}
	// 生成子容器
	createSubWrapper(conf) {
		let unit = this.unit
		this.elem = document.createElement('DIV');
		this.elem.className = 'subWrapper'
		this.elem.style.cssText = `
			position: absolute;
			width: ${conf.width * unit}px;
			height: ${conf.height * unit}px;
			transform: translate(${conf.translate[0] * unit}px, ${conf.translate[1] * unit}px) rotate(${conf.deg}deg);
		`
		this.chessboard.elem.appendChild(this.elem)
	}
	//分析路径配置，创建相应的block配置
	createPath() {
		let conf = colors.map((color, I) => {

			return pathMode.map((item, i) => {
				let blockConf = {
					x: 0 + item[2],
					y: 8 + item[3],
					width: 1,
					height: 1,
					color: colors[(i + I) % 4],
					shape: 'rect'
				}
				if (item[0]) { //判断是否为三角形
					let tri_color = blockConf.color
					if (item[1] < 4) {
						blockConf.width = 2
						blockConf.height = 2
					} else {
						blockConf.width = 1.5
						blockConf.height = 1.5
						tri_color = color
					}
					blockConf.shape = 'triangle-' + triangle[item[1]] + '-' + tri_color
					blockConf.color = ''
				} else { //矩形
					switch (item[1]) {
						case -2:
							blockConf.height = 4
							blockConf.width = 4
						break
						case -1:
							blockConf.color = color
						break
						case 0:
							blockConf.width = 2
							blockConf.shape = rect[item[1]] + '_rect'
						break
						case 1:
							blockConf.height = 2
							blockConf.shape = rect[item[1]] + '_rect'
						break
					}
				}
				return blockConf
			})
		})
		return conf
	}
	//将相应的blockConf配置好，填入生成的四个子单元，
	//将四个子单元分别旋转，移动到相应位置
	renderMap() {
		let pathData = this.createPath()

		// 有动画的
		const timeout = (ms, option) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve()
					new Block(option, this)
				}, ms)
			})
		}

		const newBlock = async (item, res) => {
			for (let i = 0, len = item.length; i < len; i++) {
				await timeout(100, item[i])
			}
			res()
		}
		const newSub = async (item) =>  {
			await new Promise((res) => {
				newBlock(item, res)
			})
		}

		const createSub = async () => {
			for (let index = 0, len = pathData.length; index < len; index++) {
				let item = pathData[index]

				let conf = {
					deg: 0,
					translate: [0, 0],
					width: 8,
					height: 9
				}
				conf.deg = index * 90
				switch (index) {
					case 0:
						conf.translate = [0, 0]
						break
					case 1:
						conf.translate = [8.5, -0.5]
						break
					case 2:
						conf.translate = [9, 8]
						break
					case 3:
						conf.translate = [0.5, 8.5]
						break
				}
				this.createSubWrapper(conf)
				// animate
				await newSub(item)
			}
		}
		createSub()

		// 没动画的

		// pathData.map((item, index) => {
		// 	let conf = {
		// 		deg: 0,
		// 		translate: [0, 0],
		// 		width: 8,
		// 		height: 9
		// 	}
		// 	conf.deg = index * 90
		// 	switch (index) {
		// 		case 0:
		// 			conf.translate = [0, 0]
		// 			break
		// 		case 1:
		// 			conf.translate = [8.5, -0.5]
		// 			break
		// 		case 2:
		// 			conf.translate = [9, 8]
		// 			break
		// 		case 3:
		// 			conf.translate = [0.5, 8.5]
		// 			break
		// 	}
		// 	this.createSubWrapper(conf)

		// 	Array.from(item, option => new Block(option, this))
		// })
	}
}
