var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));

Page({
  data: {
    route: "category",
    category: {},
    icons: t.requirejs("icons"),
    selector: 0,
    advimg: "",
    advurl: "",
    recommands: {},
    level: 0,
    back: 0,
    child: {},
    parent: {},
    info:[]
  },


  getinfo: function (e) {
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + "/tp/public/index.php/api/auth/get_about_us",
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.code > 0) {
          that.setData({
            info: res.data.data
          })
        }

      }
    })

  },

  onShow: function () {
    this.getinfo();
  },
  onLoad: function (e) {
    t.url(e)
    //this.getinfo(e);
  },
  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});