const app = getApp()

Page({
  data: {
    currentTab: 0,
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {

    this.setData({
      currentTab: e.detail.current,
    })

  },

})
