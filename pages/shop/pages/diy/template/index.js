Page({
    data: {},
    onLoad: function(n) {wx.setNavigationBarTitle({
            title: "商城首页"
        })},
    onReady: function() {},
  navto: function (e) {
    debugger;
    getApp().saveFormId(e);
    if (e.currentTarget.dataset.url) wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});