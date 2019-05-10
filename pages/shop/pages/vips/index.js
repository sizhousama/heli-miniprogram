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
    userinfo:[]
  },


  create: function (e) {
    var that = this;
    var roots = getApp().globalData.apiroot;
    var vip = e.currentTarget.dataset.vip;
    var price = e.currentTarget.dataset.price;
    wx.request({
      url: roots + "/tp/public/index.php/api/auth/create_order",
      data: {
        openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
        vip:vip,
        price:price
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var re = res.data;
          wx.requestPayment({
           'timeStamp': re.data.timeStamp,
           'nonceStr': re.data.nonceStr,
           'package': re.data.package,
           'signType': re.data.signType,
           'paySign':  re.data.paySign,
           'success':function(res){
            //支付成功要通知；
       
              wx.showToast({
                title: '支付成功',
                icon: 'success',
                duration: 2000
              });
              setTimeout(function(){
                that.getuser();
              },1000)
            },

           'fail':function(res){
            //支付失败要通知
     
              wx.showToast({
                title: '支付取消',
                icon: 'none',
                duration: 2000
              });

            // console.log('支付失败：',res);
           }
        })


      }
    })

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


  
  tabCategory: function (t) {
    this.setData({
      selector: t.target.dataset.id,
      advimg: t.target.dataset.src,
      advurl: t.target.dataset.url,
      child: t.target.dataset.child,
      back: 0
    }), a.isEmptyObject(t.target.dataset.child) ? this.setData({
      level: 0
    }) : this.setData({
      level: 1
    }), console.log(this.data);
  },
  cateChild: function (t) {
    this.setData({
      parent: t.currentTarget.dataset.parent,
      child: t.currentTarget.dataset.child,
      back: 1
    }), console.log(this.data);
  },
  backParent: function (t) {
    this.setData({
      child: t.currentTarget.dataset.parent,
      back: 0
    });
  },
  getCategory: function () {
    var t = this;
    e.get("shop/get_category", {}, function (e) {
      t.setData({
        category: e.category,
        show: !0,
        set: e.set,
        advimg: e.set.advimg,
        recommands: e.recommands,
        child: e.recommands
      }), console.log(e);
    });
  },
  onShow: function () {
    this.getuser();
  },
  onLoad: function (e) {
    t.url(e), this.getCategory();
  },
  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});