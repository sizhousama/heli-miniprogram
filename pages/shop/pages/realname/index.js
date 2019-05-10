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
    image1:"",
    image2:"",
    image3:"",
    saveimage1:"",
    saveimage2:"",
    saveimage3:"",
  },

  changeimg: function (e) {
    var that = this;
    var image = e.currentTarget.dataset.name;
    var saveimg = this.data.saveimg;
    var a={};
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);


      a[image]=res.tempFilePaths;
      that.setData(a)


      wx.uploadFile({
        url: 'https://shop.weiyuliang.com/tp/public/index.php/api/auth/upload_pic',
        filePath: res.tempFilePaths[0],
        name: 'file',
        formData:{
          'user': 'test'
        },        
        success(res) {
          console.log(res)
          var re = JSON.parse(res.data);
          // saveimg.push(re.data);
          if(image=='image1'){
            that.setData({
              saveimage1: re.data
            })
          }else if(image=='image2'){
            that.setData({
              saveimage2: re.data
            })
          }else if(image=='image3'){
            that.setData({
              saveimage3: re.data
            })
          }

        }
      })

      }
    })
  },


  inputchange:function(e){
    var that = this;
    var  name = e.target.dataset.type;

    if (name == 'name_auth_realname') {
      that.setData({
        name_auth_realname: e.detail.value
      })
    }
    if (name == 'name_auth_cert') {
      that.setData({
        name_auth_cert: e.detail.value
      })
    }



  },



  submitName:function(e){
    var that=this;
    var name_auth_realname = that.data.name_auth_realname;
    var name_auth_cert = that.data.name_auth_cert;
    var roots = getApp().globalData.apiroot;
    console.log(that.data);
    if (that.data.name_auth_realname == '' || that.data.name_auth_cert == ''|| that.data.saveimage1 == ''|| that.data.saveimage2 == ''|| that.data.saveimage3 == ''){
      wx.showModal({
        title: '温馨提示',
        showCancel:false,
        content: '请完善以上必填信息，谢谢',
      });
      return false;
    }
    var name_auth_cert_img = that.data.saveimage1+';'+that.data.saveimage2+';'+that.data.saveimage3;

      wx.request({
        url: roots + '/tp/public/index.php/api/auth/apply_name_auth',
        data: {
          openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
          name_auth_realname: name_auth_realname,
          name_auth_cert: name_auth_cert,
          name_auth_cert_img: name_auth_cert_img

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if (res.data.code > 0) {
            wx.showToast({
              title: '申请成功',
              icon: 'none',
              duration: 1000
            })
            setTimeout(function () {
              wx.navigateBack();
            }, 1000)
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
  onShow: function () { },
  onLoad: function (e) {
    t.url(e), this.getCategory();
  },
  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});