var t = getApp();

Page({
    data: {
        close: 0,
        text: ""
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            close: t.close,
            text: t.text
        });
    },
    onShow: function() {
        var e = t.getCache("sysset").shopname;
        wx.setNavigationBarTitle({
            title: e || "提示"
        });
    },
    bind: function() {
    var that = this;
    var roots = getApp().globalData.apiroot;
    // getApp().getUserInfo();
        wx.getUserInfo({
            success: function(a) {

                console.log("=========================");
                console.log(a);
                console.log("=========================");


                wx.request({
                  url: roots + "/tp/public/index.php/api/auth/synUserinfo",
                  data: {
                    openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
                    avatarUrl: a.userInfo.avatarUrl,
                    nickName: a.userInfo.nickName
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                  }
                })
            },
            fail: function(a) {

                console.log("=========================");
                console.log(a);
                console.log("=========================");
            }
        });




        var t = this, e = setInterval(function() {
            wx.getSetting({
                success: function(n) {
                    var a = n.authSetting["scope.userInfo"];
                    a && (wx.reLaunch({
                        url: "/pages/index/index"
                    }), clearInterval(e), t.setData({
                        userInfo: a
                    }));
                }
            });
        }, 1e3);
    }
});