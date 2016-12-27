export default {
  //颜色序列——有且只有4个
  colors: ['yellow', 'blue', 'red', 'green'],
  //块形状
  shape: ['rect', 'triangle'],
  //矩形状态
  rect: ['cross', 'vertical'],
  //三角形状态
  triangle: ['bottom-right', 'bottom-left', 'top-left', 'top-right'],
  //地图布置模式
  pathMode: [
    [0, 0, 0, 0], [0, 0, 0, -1], [0, 0, 0, -2],
    [1, 0, 0, -4],
    [0, 1, 2, -4], [0, 1, 3, -4],
    [1, 1, 4, -4],
    [1, 3, 4, -4],
    [0, 0, 4, -5], [0, 0, 4, -6],
    [1, 0, 4, -8],
    [0, 1, 6, -8], [0, 1, 7, -8]
  ],

}
