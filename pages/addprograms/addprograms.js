require('../../utils/app.js').init(Page);
// Page({
//   data: {
//     showTopTips: false,

//     checkboxItems: [
//       { name: '1栋', value: '0', checked: false },
//       { name: '1栋', value: '1', checked: false },
//       { name: '1栋', value: '2', checked: false },
//       { name: '1栋', value: '3', checked: false },
//     ],

//     isAgree: false
//   },
//   showTopTips: function () {
//     var that = this;
//     this.setData({
//       showTopTips: true
//     });
//     setTimeout(function () {
//       that.setData({
//         showTopTips: false
//       });
//     }, 3000);
//   },
//   radioChange: function (e) {
//     console.log('radio发生change事件，携带value值为：', e.detail.value);

//     var radioItems = this.data.radioItems;
//     for (var i = 0, len = radioItems.length; i < len; ++i) {
//       radioItems[i].checked = radioItems[i].value == e.detail.value;
//     }

//     this.setData({
//       radioItems: radioItems
//     });
//   },
//   checkboxChange: function (e) {
//     console.log('checkbox发生change事件，携带value值为：', e.detail.value);

//     var checkboxItems = this.data.checkboxItems, values = e.detail.value;
//     for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
//       checkboxItems[i].checked = false;

//       for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
//         if (checkboxItems[i].value == values[j]) {
//           checkboxItems[i].checked = true;
//           break;
//         }
//       }
//     }

//     this.setData({
//       checkboxItems: checkboxItems
//     });
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
// });