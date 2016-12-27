export default {
  //颜色序列——有且只有4个
  colors: ['yellow', 'blue', 'red', 'green'],
  //块形状
  shape: ['rect', 'triangle'],
  //矩形状态
  rect: ['cross', 'vertical'],
  //三角形状态
  triangle: ['bottom-right', 'bottom-left', 'top-left', 'top-right',
              'top', 'bottom', 'left', 'right'],
  //地图布置模式
  //
  //  使用数组做简化配置书写
  //  数组表示的是左上角区域的路径组成
  //  其他部分由旋转，位移得到
  //  {
  //    0: {
  //      0: 'rect',
  //      1: 'triangle'
  //    },
  //    1: {
  //      0: 'cross' || 'bottom-right',
  //      1: 'vertical' || 'bottom-left',
  //      2: 'top-left'
  //      3: 'top-right'
  //    },
  //    2: 相对起点的x坐标
  //    3: 相对起点的y坐标
  //  }
  //
  //
  pathMode: [
    [0, 0, 0, 0], [0, 0, 0, -1], [0, 0, 0, -2],
    [1, 0, 0, -4],
    [0, 1, 2, -4], [0, 1, 3, -4],
    [1, 1, 4, -4],
    [1, 3, 4, -4],
    [0, 0, 4, -5], [0, 0, 4, -6],
    [1, 0, 4, -8],
    [0, 1, 6, -8], [0, 1, 7, -8],
    [0, -1, 2, 0], [0, -1, 3, 0], [0, -1, 4, 0], [0, -1, 5, 0], [0, -1, 6, 0], [0, -1, 7, 0]
  ],

}
