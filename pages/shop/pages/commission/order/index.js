var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));

Page({
    data: {
        status: "",
        curPage: 1,
        list: [],
        listnum:4,
        total:0
    },
    onLoad: function() {
        this.getOrderList();
    },
    onReachBottom: function() {
        this.data.loaded || this.data.list.length == this.data.total || this.getList();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    toggleSend: function(t) {
        if (this.data.openorderdetail || this.data.openorderbuyer) {
            var a = t.currentTarget.dataset.index, e = this.data.list[a].code, s = this.data.list;
            s[a].code = 1 == e ? 0 : 1, this.setData({
                list: s
            });
        }
    },



    getOrderList:function(e){
    var that =this;
    debugger;
    var roots = t.globalData.apiroot;

      
      if(that.data.list.length>=that.data.total&&that.data.list.length>0){return false;}

      wx.request({
      url: roots+'/tp/public/index.php/api/auth/get_successDeal', 
      data: {
         openid:'sns_wa_'+wx.getStorageSync('userinfo_openid').value,
         curPage:that.data.curPage,
         listnum:that.data.listnum

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
         console.log(res.data)
         var re = res.data;
        if (re.code==1&&re.data.datalist.length>0) {
          var arr = that.data.list;
            re.data.datalist.map(function(elem) {
               arr.push(elem);
            }); 


          that.setData({
           list: arr,
           total: re.data.total
         })
        } 
       
       
      }
    })

    },






    getList: function() {
        var a = this;
        t.get("commission/order/get_list", {
            curPage: a.data.curPage,
            status: a.data.status
        }, function(t) {
            delete t.error;
            var e = t;
            e.show = !0, t.list.length > 0 && (e.curPage = a.data.curPage + 1, e.list = a.data.list.concat(t.list), 
            t.list.length < t.pagesize && (e.loaded = !0)), a.setData(e), wx.setNavigationBarTitle({
                title: t.textorder
            });
        }, this.data.show);
    },
    myTab: function(a) {
        var e = this, s = t.pdata(a).status;
        e.setData({
            status: s,
            curPage: 1,
            list: []
        }), e.getList();
    }
});