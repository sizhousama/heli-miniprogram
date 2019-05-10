var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));

Page({
  data: {
    route: "category",
    setwinshow:false,
    category: {},
    icons: t.requirejs("icons"),
    selector: 0,
    kdcompany:'',
    kdnum:'',
    realname: "",
    mobile: "",
    sell_reason: "",
    userinfo:[],
    wllist:[],
    express:'',
    kdname:'',
    orderid:''
  },

  bindPickerChange22: function (e) {
    var that=this;
    debugger;
    this.setData({
      index: e.detail.value,
      express: that.data.wllist[e.detail.value].express,
      kdname: that.data.wllist[e.detail.value].name
    })
  },

  inputchange:function(e){
    var that = this;
    var  name = e.target.dataset.type;

    // if (name == 'kdcompany') {
    //   that.setData({
    //     kdcompany: e.detail.value
    //   })
    // }
    if (name == 'kdnum') {
      that.setData({
        kdnum: e.detail.value
      })
    }

  },
  colsenum:function(){
    var that = this;
    that.setData({
      setwinshow: false
    })
  },

  sub:function(e){
    var that=this;
    var roots = getApp().globalData.apiroot;
    var id = that.data.orderid;

    if (that.data.kdname == '' || that.data.kdnum == '' || that.data.express == '' ){
      wx.showModal({
        title: '温馨提示',
        showCancel:false,
        content: '请完善以上必填信息，谢谢',
      });
      return false;
    }else{
        wx.request({
          url: roots + "/tp/public/index.php/api/auth/send_goods",
          data: {
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
            orderid:id,
            express:that.data.express,
            expresscom:that.data.kdname,
            expresssn:that.data.kdnum
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
             var re = res.data;
              wx.showToast({
                title: re.msg,
                icon: 'none',
                duration: 1000
              }); 
              if(re.code==1){
                  setTimeout(function(){
                    wx.navigateBack({
                     delta: 1
                    })
                  },1000)
              }
          }
        })
      
    }
  },

  get_wuliu:function(){
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + '/tp/public/index.php/api/auth/get_wuliu',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code > 0) {
          that.setData({
            wllist : res.data.data
          })
        }
      }
    });


  },



    send_goods:function(e){
        var that = this;
        var roots = getApp().globalData.apiroot;
        var id = e.currentTarget.dataset.orderid;
        var listInfo = that.data.listInfo;
        wx.request({
          url: roots + "/tp/public/index.php/api/auth/send_goods",
          data: {
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
            orderid:id
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
             var re = res.data;
              wx.showToast({
                title: re.msg,
                icon: 'none',
                duration: 1000
              }); 
              if(re.code==1){


                listInfo.map(function(elem,index){
                    if(elem.id==id){
                        listInfo.splice(index,1);
                    }
                })

                that.setData({
                    listInfo:listInfo
                })
              }
          }
        })

      },



  tosub:function(){
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + '/tp/public/index.php/api/auth/apply_merch',
      data: {
        openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
        realname: that.data.realname,
        mobile: that.data.mobile,
        sell_reason: that.data.sell_reason,

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code > 0) {
          wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 1000
          })
          setTimeout(function () {
            wx.navigateBack();
          }, 1000)
        }
      }
    });



  },

  onShow: function () {
    this.get_wuliu();
  },
  onLoad: function (e) {
    t.url(e);

    if(e.orderid){
      this.setData({
        orderid:e.orderid
      })
    }

  },
  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});