var e = getApp(), t = e.requirejs("core"), i = e.requirejs("foxui"), s = e.requirejs("jquery");

Page({
    data: {
        member: {},
        binded: !1,
        endtime: 0,
        postData: {},
        submit: !1,
        subtext: "立即绑定",
        smsimgcode: "",
        verifycode_img: ""
    },
    onLoad: function(i) {
        e.url(i), t.loading(), this.getInfo();
    },
    getInfo: function() {
        var e, i = this;
        t.get("member/bind", {}, function(t) {
            if (t.error) wx.redirectTo({
                url: "/pages/member/index/index"
            }); else {
                var s = {
                    member: t.member,
                    binded: t.binded,
                    endtime: t.endtime,
                    show: !0,
                    smsimgcode: t.smsimgcode,
                    verifycode_img: t.verifycode_img
                };
                s.postData = {
                    mobile: t.member.mobile,
                    code: "",
                    password: "",
                    password1: ""
                }, i.setData(s), t.endtime > 0 && i.endTime(), e = t.binded ? "更换绑定手机号" : "绑定手机号", 
                wx.setNavigationBarTitle({
                    title: e
                });
            }
        }, !0, !0, !0);
    },
    endTime: function() {
        var e = this, t = e.data.endtime;
        if (t > 0) {
            e.setData({
            endtime: t - 1
            });
            setTimeout(function() {
            e.endTime();
            }, 1e3);
        }
    },
    inputChange: function(e) {
        var i = this.data.postData, a = t.pdata(e).type, o = e.detail.value;
        i[a] = s.trim(o), this.setData({
            postData: i
        });
    },



    getPhoneCode:function(e){
        var that = this;
        var roots = getApp().globalData.apiroot;
        var phone = that.data.postData.mobile;

        if(!s.isMobile(phone)){
            i.toast(that, "请填写正确的手机号");
            return false;
        }

        wx.request({
          url: roots + "/tp/public/index.php/api/auth/phonecode",
          data: {
            phone: that.data.postData.mobile
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
            })

            that.setData({
                endtime: 60
            })

            that.daoshu();
          }
        })

    },


  daoshu: function (e){
    var sco = this;
    var currentTime = sco.data.endtime
    var interval = setInterval(function () {
      currentTime--;
      sco.setData({
        endtime: currentTime
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        sco.setData({
          endtime: 0,
        })
      }
    }, 1000)  
  },



  bind: function(e){
    var that = this;
    var code = that.data.postData.code;
    var roots = getApp().globalData.apiroot;


    wx.request({
      url: roots + "/tp/public/index.php/api/auth/bind_phone",
      data: {
        openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
        phone: that.data.postData.mobile,
        code: code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
        })

        if(res.data.code>0){
            setTimeout(function(){
                wx.switchTab({url:'/pages/member/index/index'});
            },1000)

        }

      }
    })
  },













    getCode: function(e) {
        var a = this;
        if (!(a.data.endtime > 0)) {
            var o = a.data.postData.mobile;
            if (s.isMobile(o)) {
                if (1 == a.data.smsimgcode) {
                    var m = a.data.postData.verifyImg;
                    if (void 0 == m) return void i.toast(a, "请填写图形验证码");
                }
                t.get("sms/changemobile", {
                    mobile: o,
                    verifyImgCode: m,
                    smsimgcode: a.data.smsimgcode
                }, function(e) {
                    0 == e.error ? (i.toast(a, "短信发送成功"), a.setData({
                        endtime: 60
                    }), a.endTime()) : i.toast(a, e.message);
                }, !0, !0, !0);
            } else i.toast(a, "请填写正确的手机号");
        }
    },
    submit: function(e) {
        if (!this.data.submit) {
            var a = this, o = this.data.postData;
            s.isMobile(o.mobile) ? 5 == o.code.length ? o.password && "" != o.password ? o.password1 && "" != o.password1 ? o.password == o.password1 ? (this.setData({
                submit: !0,
                subtext: "正在绑定..."
            }), t.post("member/bind/submit", o, function(e) {
                if (92001 != e.error && 92002 != e.error) return 0 != e.error ? (i.toast(a, e.message), 
                void a.setData({
                    submit: !1,
                    subtext: "立即绑定"
                })) : void wx.navigateBack();
                t.confirm(e.message, function() {
                    o.confirm = 1, t.post("member/bind/submit", o, function(e) {
                        e.error > 0 ? i.toast(a, e.message) : wx.navigateBack(), a.setData({
                            submit: !1,
                            subtext: "立即绑定",
                            "postData.confirm": 0
                        });
                    }, !0, !0, !0);
                });
            }, !0, !0, !0)) : i.toast(this, "两次输入的密码不一致") : i.toast(this, "请确认登录密码") : i.toast(this, "请填写登录密码") : i.toast(this, "请填写5位短信验证码") : i.toast(this, "请填写正确的手机号");
        }
    },
    imageChange: function() {
        var e = this;
        t.get("member/bind/imageChange", {}, function(t) {
            console.log(t), e.setData({
                verifycode_img: t.verifycode_img
            });
        });
    }
});