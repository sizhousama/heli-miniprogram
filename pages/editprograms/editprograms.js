require('../../utils/app.js').init(Page);

// pages/editprograms/editprograms.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
  
//   },
//   bindDateChange: function (e) {
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function (e) {
//     this.setData({
//       time: e.detail.value
//     })
//   },
//   bindCountryCodeChange: function (e) {
//     console.log('picker country code 发生选择改变，携带值为', e.detail.value);

//     this.setData({
//       countryCodeIndex: e.detail.value
//     })
//   },
//   bindCountryChange: function (e) {
//     console.log('picker country 发生选择改变，携带值为', e.detail.value);

//     this.setData({
//       countryIndex: e.detail.value
//     })
//   },
//   bindAccountChange: function (e) {
//     console.log('picker account 发生选择改变，携带值为', e.detail.value);

//     this.setData({
//       accountIndex: e.detail.value
//     })
//   },
//   bindAgreeChange: function (e) {
//     this.setData({
//       isAgree: !!e.detail.value.length
//     });
//   }
// })