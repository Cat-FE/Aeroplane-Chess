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
    let conf = colors.map((c, I) => {
      return pathMode.map((item, i) => {
        let blockConf = {
            x: 0 + item[2],
            y: 8 + item[3],
            width: 1,
            height: 1,
            color: colors[(i + I) % 4],
            shape: ''
        }
        if (item[0]) {
          blockConf.shape = 'triangle-' + triangle[item[1]] + '-' + blockConf.color
          blockConf.width = 2
          blockConf.height = 2
          blockConf.color = ''
        } else {
          blockConf.shape = rect[item[1]] + '_rect'
          if (item[1]) {
            blockConf.width = 1
            blockConf.height = 2
          } else {
            blockConf.width = 2
            blockConf.height = 1
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
    let pathData = this.createPath(),
        that = this
    pathData.map((item, index) => {
			let conf = {
        deg: 0,
        translate: [0, 0],
        width: 8,
        height: 9
      }
			conf.deg = index * 90
			switch(index) {
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

      item.map((option) => {
        new Block(option, that)
      })
      //暂停
  		// function *block() {
  		// 	for (let i = 0, l = item.length; i < l; i++) {
  		// 		new Block(item[i], that)
  		// 		yield 0
  		// 	}
  		// }
  		// function next() {
  		// 	if (!b.next().done) {
  		// 		setTimeout(function() {
  		// 			next()
  		// 		}, 200)
  		// 	}
  		// }
  		// let b = block()
  		// next()
		})
  }
}
