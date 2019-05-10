var t = getApp().requirejs("core");

Page({
    data: {
        userinfo:[],
        info:[]
    },
    onLoad: function(t) {},
    onShow: function() {
        this.getuser();
        this.getinfo();
    },


      getuser: function () {
        var that = this;
        var roots = getApp().globalData.apiroot;
        wx.request({
          url: roots + "/tp/public/index.php/api/auth/get_userinfo",
          data: {
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            debugger;
            if (res.data.code > 0) {
              that.setData({
                userinfo: res.data.data
              })
            }

          }
        })

      },


      getinfo: function () {
        var that = this;
        var roots = getApp().globalData.apiroot;
        wx.request({
          url: roots + "/tp/public/index.php/api/auth/get_myteam",
          data: {
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            debugger;
            if (res.data.code > 0) {
              that.setData({
                info: res.data.data
              })
            }

          }
        })

      },

    getData: function() {
        var e = this;
        t.get("commission/index", {}, function(t) {
            7e4 != t.error ? (t.show = !0, e.setData(t), wx.setNavigationBarTitle({
                title: t.set.texts.center
            })) : wx.redirectTo({
                url: "/pages/commission/register/index"
            });
        });
    }
});