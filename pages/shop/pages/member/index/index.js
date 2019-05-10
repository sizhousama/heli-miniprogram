var e = getApp(), a = e.requirejs("core"), t = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), s = e.requirejs("jquery");

Page({
    data: {
        route: "member",
        tel: "0755-32929828",
        icons: e.requirejs("icons"),
        member: {},
        phonecolor:'',
      phonenumber:'',
        diypages: {},
        audios: {},
        audiosObj: {},
        modelShow: !1,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        swiperheight: 0,
        iscycelbuy: !1,
        bargain: !1,
        tapshow:0
    },






    synUserinfo: function() {
        var that = this;
        var roots = getApp().globalData.apiroot;
        // getApp().getUserInfo();
            wx.getUserInfo({
                success: function(a) {

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
                        wx.showToast({
                            title: '同步成功',
                            icon: 'none',
                            duration: 1000
                        });
                        that.getInfo();

                        
                      }
                    })
                },
                fail: function(a) {

                }
            });

    },











    onLoad: function(a) {
        var t = this;
        e.url(a), wx.getSystemInfo({
            success: function(e) {
                var a = e.windowWidth / 1.7;
                t.setData({
                    windowWidth: e.windowWidth,
                    windowHeight: e.windowHeight,
                    swiperheight: a
                });
            }
        }), i.get(this, "member", function(e) {}), "" == e.getCache("userinfo") && wx.redirectTo({
            url: "/pages/message/auth/index"
        });
    },
    getInfo: function() {
        var e = this;
        a.get("member", {}, function(a) {
            console.log(a), 1 == a.isblack && wx.showModal({
                title: "无法访问",
                content: "您在商城的黑名单中，无权访问！",
                success: function(a) {
                    a.confirm && e.close(), a.cancel && e.close();
                }
            }), 0 != a.error ? wx.redirectTo({
                url: "/pages/message/auth/index"
            }) : e.setData({
                member: a,
                show: !0,
                customer: a.customer,
                customercolor: a.customercolor,
                phone: a.phone,
                phonecolor: a.phonecolor,
                phonenumber: a.phonenumber,
                iscycelbuy: a.iscycelbuy,
                bargain: a.bargain
            }), t.wxParse("wxParseData", "html", a.copyright, e, "5");
        });
    },

    navtoMembermain:function(e){
        getApp().saveFormId(e);
    // if(e.currentTarget.dataset.status!=1){
    //     wx.showToast({
    //         title: '请先成为卖家',
    //         icon: 'none',
    //         duration: 1000
    //     });
    //     return false;
    // }

      wx.navigateTo({url:'/pages/membermain/index'});
  },



    navto:function(e){
      getApp().saveFormId(e);
      if(e.currentTarget.dataset.url)wx.navigateTo({url:e.currentTarget.dataset.url});
      
    },




    tapshow:function(e){
        var tapshow = this.data.tapshow;
        this.setData({
            tapshow:!tapshow
        })
      
    },



  name_status:function(e){

      getApp().saveFormId(e);

    if(e.currentTarget.dataset.status==0){
      wx.navigateTo({url:'/pages/realname/index'});
    }else if(e.currentTarget.dataset.status==1){

    }else if(e.currentTarget.dataset.status==2){

        wx.showModal({
          title: '',
          content: '已提交申请，确定重新提交？',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({url:'/pages/realname/index'});

            } else if (res.cancel) {
              // console.log('用户点击取消')
            }
          }
        })
    }else if(e.currentTarget.dataset.status==3){
      wx.navigateTo({url:'/pages/realname/index'});
    }
  },


  sell_status:function(e){
      getApp().saveFormId(e);
    if(e.currentTarget.dataset.status==0){
      wx.navigateTo({url:'/pages/sqsj/index'});
    }else if(e.currentTarget.dataset.status==1){

    }else if(e.currentTarget.dataset.status==2){

        wx.showModal({
          title: '',
          content: '已提交申请，确定重新提交？',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({url:'/pages/sqsj/index'});

            } else if (res.cancel) {
              // console.log('用户点击取消')
            }
          }
        })
    }else if(e.currentTarget.dataset.status==3){
      wx.navigateTo({url:'/pages/sqsj/index'});
    }
  },

    onShow: function() {
        this.getInfo();
        var e = this;
        wx.getSetting({
            success: function(a) {
                var t = a.authSetting["scope.userInfo"];
                e.setData({
                    limits: t
                }), t || wx.redirectTo({
                    url: "/pages/message/auth/index"
                });
            }
        });
        e.goTop();
        setTimeout(function(){
            e.setData({
                tapshow:0
            })
        },2000)
    },


        goTop: function (e) {  // 一键回到顶部
         if (wx.pageScrollTo) {//判断这个方法是否可用
            wx.pageScrollTo({
              scrollTop: 0
            })
          }
        },





    onShareAppMessage: function() {
        return a.onShareAppMessage();
    },
    cancelclick: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    confirmclick: function() {
        wx.openSetting({
            success: function(e) {}
        });
    },
    phone: function() {
        var e = this.data.phonenumber + "";
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    play: function(e) {
        var a = e.target.dataset.id, t = this.data.audiosObj[a] || !1;
        if (!t) {
            t = wx.createInnerAudioContext("audio_" + a);
            var i = this.data.audiosObj;
            i[a] = t, this.setData({
                audiosObj: i
            });
        }
        var s = this;
        t.onPlay(function() {
            var e = setInterval(function() {
                var i = t.currentTime / t.duration * 100 + "%", r = Math.floor(Math.ceil(t.currentTime) / 60), n = (Math.ceil(t.currentTime) % 60 / 100).toFixed(2).slice(-2), o = Math.ceil(t.currentTime);
                r < 10 && (r = "0" + r);
                var u = r + ":" + n, c = s.data.audios;
                c[a].audiowidth = i, c[a].Time = e, c[a].audiotime = u, c[a].seconds = o, s.setData({
                    audios: c
                });
            }, 1e3);
        });
        var r = e.currentTarget.dataset.audio, n = e.currentTarget.dataset.time, o = e.currentTarget.dataset.pausestop, u = e.currentTarget.dataset.loopplay;
        0 == u && t.onEnded(function(e) {
            c[a].status = !1, s.setData({
                audios: c
            });
        });
        var c = s.data.audios;
        c[a] || (c[a] = {}), t.paused && 0 == n ? (t.src = r, t.play(), 1 == u && (t.loop = !0), 
        c[a].status = !0, s.pauseOther(a)) : t.paused && n > 0 ? (t.play(), 0 == o ? t.seek(n) : t.seek(0), 
        c[a].status = !0, s.pauseOther(a)) : (t.pause(), c[a].status = !1), s.setData({
            audios: c
        });
    },
    pauseOther: function(e) {
        var a = this;
        s.each(this.data.audiosObj, function(t, i) {
            if (t != e) {
                i.pause();
                var s = a.data.audios;
                s[t] && (s[t].status = !1, a.setData({
                    audios: s
                }));
            }
        });
    },
    onHide: function() {
        this.pauseOther();
    },
    onUnload: function() {
        this.pauseOther();
    },
    navigate: function(e) {
        var a = e.currentTarget.dataset.url, t = e.currentTarget.dataset.phone, i = e.currentTarget.dataset.appid, s = e.currentTarget.dataset.appurl;
        a && wx.navigateTo({
            url: a
        }), t && wx.makePhoneCall({
            phoneNumber: t
        }), i && wx.navigateToMiniProgram({
            appId: i,
            path: s
        });
    },
    // 拨打电话
  bind_tal:function(){
    wx.makePhoneCall({
      phoneNumber:'0755-32929828'
    })
  },
    close: function() {
        e.globalDataClose.flag = !0, wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});