var e = require("utils/core.js");
//https://shop369820022.taobao.com/
App({
    onShow: function() {
    },
    onLaunch: function() {
    },

    requirejs: function(e) {
        return require("utils/" + e + ".js");
    },
    getConfig: function() {
        if (null !== this.globalData.api) return {
            api: this.globalData.api,
            approot: this.globalData.approot,
            appid: this.globalData.appid
        };
        var e = wx.getExtConfigSync();
        return console.log(e), this.globalData.api = e.config.api, this.globalData.approot = e.config.approot, 
        this.globalData.appid = e.config.appid, e.config;
    },
    getCache: function(e, t) {
        var o = +new Date() / 1e3, i = "";
        o = parseInt(o);
        try {
            (i = wx.getStorageSync(e + this.globalData.appid)).expire > o || 0 == i.expire ? i = i.value : (i = "", 
            this.removeCache(e));
        } catch (e) {
            i = void 0 === t ? "" : t;
        }
        return i = i || "";
    },
    setCache: function(e, t, o) {
        var i = +new Date() / 1e3, n = !0, a = {
            expire: (Date.parse(new Date()) + (7 * 86400000))/1000,
            value: t
        };
        try {
            wx.setStorageSync(e + this.globalData.appid, a);
         if(e.indexOf("openid")!=-1){
           wx.setStorageSync(e, a);
}

        } catch (e) {
            n = !1;
        }
        return n;
    },
    removeCache: function(e) {
        var t = !0;
        try {
            wx.removeStorageSync(e + this.globalData.appid);
        } catch (e) {
            t = !1;
        }
        return t;
    },

    close: function() {
        this.globalDataClose.flag = !0, wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    getSet: function() {
        var t = this;
        "" == t.getCache("cacheset") && setTimeout(function() {
            var o = t.getCache("cacheset");
            e.get("cacheset", {
                version: o.version
            }, function(e) {
                e.update && t.setCache("cacheset", e.data);
            });
        }, 10);
    },
    url: function(e) {
        e = e || {};
        var t = {}, o = "", i = "", n = this.getCache("usermid");
        o = e.mid || "", i = e.merchid || "", "" != n ? ("" != n.mid && void 0 !== n.mid || (t.mid = o), 
        "" != n.merchid && void 0 !== n.merchid || (t.merchid = i)) : (t.mid = o, t.merchid = i), 
        this.setCache("usermid", t, 7200);
    },

    saveFormId: function (v) {
        if (v.detail.formId == 'the formId is a mock one'||!v.detail.formId) {
          return false;
        }
        var roots = this.globalData.apiroot;
        wx.request({
          url: roots + "/tp/public/index.php/api/auth/set_fromid",
          data: {
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
            appfromid:v.detail.formId
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            return true;

          }
        })
    },

    impower: function(e, t, o) {
        wx.getSetting({
            success: function(i) {
                console.log(i), i.authSetting["scope." + e] || wx.showModal({
                    title: "用户未授权",
                    content: "您点击了拒绝授权，暂时无法" + t + "，点击去设置可重新获取授权喔~",
                    confirmText: "去设置",
                    success: function(e) {
                        e.confirm ? wx.openSetting({
                            success: function(e) {}
                        }) : "route" == o ? wx.switchTab({
                            url: "/pages/index/index"
                        }) : "details" == o || wx.navigateTo({
                            url: "/pages/index/index"
                        });
                    }
                });
            }
        });
    },
    globalDataClose: {
        flag: !1
    },
    
    globalData: {
      appid: "wx89f1a3353e95b408",
      api: "https://shop.weiyuliang.com/app/ewei_shopv2_api.php?i=1",
      approot: "https://shop.weiyuliang.com/addons/ewei_shopv2/",
      apiroot: 'https://shop.weiyuliang.com',
      hastotal:'',
      userInfo: null
    }
});