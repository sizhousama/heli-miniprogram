require('../../utils/app.js').init(Page);

// var cityData = require('city/city.js');
// // page/one/index.js
// Page({
//   data: {
//     content: [],
//     nv: [],
//     px: [],
//     qyopen: false,
//     qyshow: false,
//     nzopen: false,
//     pxopen: false,
//     nzshow: false,
//     pxshow: false,
//     isfull: false,
//     cityleft: cityData.getCity(),
//     citycenter: {},
//     cityright: {},
//     select1: '',
//     select2: '',
//     shownavindex: ''
//   },
//   onLoad: function (options) {
//     this.setData({
//       nv: ['全部', '资料员', '安全员', '施工员', '项目经理'],
//       px: ['全部', '企业', '工程']
//     })
//     // getApp().editTabBar();
//   },

//   listqy: function (e) {
//     if (this.data.qyopen) {
//       this.setData({
//         qyopen: false,
//         nzopen: false,
//         pxopen: false,
//         nzshow: true,
//         pxshow: true,
//         qyshow: false,
//         isfull: false,
//         shownavindex: 0
//       })
//     } else {
//       this.setData({
//         qyopen: true,
//         pxopen: false,
//         nzopen: false,
//         nzshow: true,
//         pxshow: true,
//         qyshow: false,
//         isfull: true,
//         shownavindex: e.currentTarget.dataset.nav
//       })
//     }

//   },
//   list: function (e) {
//     if (this.data.nzopen) {
//       this.setData({
//         nzopen: false,
//         pxopen: false,
//         qyopen: false,
//         nzshow: false,
//         pxshow: true,
//         qyshow: true,
//         isfull: false,
//         shownavindex: 0
//       })
//     } else {
//       this.setData({
//         content: this.data.nv,
//         nzopen: true,
//         pxopen: false,
//         qyopen: false,
//         nzshow: false,
//         pxshow: true,
//         qyshow: true,
//         isfull: true,
//         shownavindex: e.currentTarget.dataset.nav
//       })
//     }
//   },
//   listpx: function (e) {
//     if (this.data.pxopen) {
//       this.setData({
//         nzopen: false,
//         pxopen: false,
//         qyopen: false,
//         nzshow: true,
//         pxshow: false,
//         qyshow: true,
//         isfull: false,
//         shownavindex: 0
//       })
//     } else {
//       this.setData({
//         content: this.data.px,
//         nzopen: false,
//         pxopen: true,
//         qyopen: false,
//         nzshow: true,
//         pxshow: false,
//         qyshow: true,
//         isfull: true,
//         shownavindex: e.currentTarget.dataset.nav
//       })
//     }
//     console.log(e.target)
//   },
//   selectleft: function (e) {

//     this.setData({
//       cityright: {},
//       citycenter: this.data.cityleft[e.currentTarget.dataset.city],
//       select1: e.target.dataset.city,
//       select2: ''
//     });
//   },
//   selectcenter: function (e) {

//     this.setData({
//       cityright: this.data.citycenter[e.currentTarget.dataset.city],
//       select2: e.target.dataset.city
//     });
//   },
//   hidebg: function (e) {

//     this.setData({
//       qyopen: false,
//       nzopen: false,
//       pxopen: false,
//       nzshow: true,
//       pxshow: true,
//       qyshow: true,
//       isfull: false,
//       shownavindex: 0
//     })
//   }
// })

