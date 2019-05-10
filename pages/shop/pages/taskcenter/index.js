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
    userinfo:[],
    mission:[]
  },

  share:function(e){
    // 往上一级页面传参
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; // 当前页面
    var prevPage = pages[pages.length - 2]; // 上一级页面

    // 直接调用上一级页面Page对象，存储数据到上一级页面中
    prevPage.setData({
        'tapshow': 1
    });

    wx.navigateBack();
  },

  navto:function(e){
      getApp().saveFormId(e);
    // if(e.currentTarget.dataset.url=='/pages/member/index/index'){
      wx.switchTab({url:e.currentTarget.dataset.url});
    // }else{
    //   wx.navigateTo({url:e.currentTarget.dataset.url});
    // }
    
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




  getmission: function () {
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + "/tp/public/index.php/api/auth/get_mission",
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
            mission: res.data.data
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
    this.getmission();
  },
  onLoad: function (e) {
    t.url(e), this.getCategory();
  },
  onShareAppMessage: function () {
    // return e.onShareAppMessage();

        return e.onShareAppMessage();
    // var that = this;
    // var roots = getApp().globalData.apiroot;

    // return {
    //   title: "换趣宝，换你所换，想你所想", 
    //   // title: '轻轻的我走了,正如我轻轻的来 扫一扫二维码,不带走一个泳圈',
    //   path: "/pages/index/index?mid="+'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
    //   imageUrl:"/static/images/share.jpg",
    //   success(e){
    //     console.log('success');
    //     // wx.request({
    //     //   url: roots + "/tp/public/index.php/api/auth/done_share",
    //     //   data: {
    //     //     openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value
    //     //   },
    //     //   header: {
    //     //     'content-type': 'application/json' // 默认值
    //     //   },
    //     //   success(res) {
    //     //   }
    //     // })

    //   },
    //   fail(e){
    //     console.log('failed');
    //   }
    // }
  }
});