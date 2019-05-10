// pages/my/Release/item/item.js
require('../../utils/app.js').init(Page);

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     html: '<div class="div_class" style="line-height: 30px; color: #333333;font-size:14px">任职条件：<br>1 教育背景：高中以上学历<br>2 工作经验：25-35岁，三年以上工程项目的工作经验<br>3 知识/技能：<br>(1)熟悉装饰工程项目的工作流程；<br>(2)熟悉CAD等制作软件，熟练掌握操作...<span style="color:#0094FD">查看全部<span></div>',
//     releaseFocus: true,
//     nodes: [{
//       name: 'div',
//       attrs: {
//         class: 'div_class',
//         style: 'line-height: 60px; color: red;'
//       },
//       children: [{
//         type: 'text',
//         text: 'Hello&nbsp;World!'
//       }]
//     }],
//     latitude: 23.099994,
//     longitude: 113.324520,
//     markers: [{
//       id: 1,
//       latitude: 23.099994,
//       longitude: 113.324520,
//       name: 'T.I.T 创意园'
//     }],
//     covers: [{
//       latitude: 23.099994,
//       longitude: 113.344520,
//       iconPath: '/image/location.png'
//     }, {
//       latitude: 23.099994,
//       longitude: 113.304520,
//       iconPath: '/image/location.png'
//     }]
//   },
//   tap() {
//     console.log('tap')
//   },

//   onReady: function (e) {
//     this.mapCtx = wx.createMapContext('myMap')
//   },
//   getCenterLocation: function () {
//     this.mapCtx.getCenterLocation({
//       success: function (res) {
//         console.log(res.longitude)
//         console.log(res.latitude)
//       }
//     })
//   },
//   moveToLocation: function () {
//     this.mapCtx.moveToLocation()
//   },
//   translateMarker: function () {
//     this.mapCtx.translateMarker({
//       markerId: 1,
//       autoRotate: true,
//       duration: 1000,
//       destination: {
//         latitude: 23.10229,
//         longitude: 113.3345211,
//       },
//       animationEnd() {
//         console.log('animation end')
//       }
//     })
//   },
//   includePoints: function () {
//     this.mapCtx.includePoints({
//       padding: [10],
//       points: [{
//         latitude: 23.10229,
//         longitude: 113.3345211,
//       }, {
//         latitude: 23.00229,
//         longitude: 113.3345211,
//       }]
//     })
//   }
// })