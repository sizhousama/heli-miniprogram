var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));

Page({
  data: {
    adslist:[],
    hasdata:0,
    statutext:'',
    statu:'',
    title: '',
    times:'',
    id:'',
    content: '',
    picturestr: '',
    credit1:'',
    img: [],
    saveimg:[],
    hastotal:'',
    parent: {}
  },
  onShow: function () { },
  onLoad: function (e) {
    t.url(e);
    this.getdetail(e);
    this.getuser(e);
  },
  inputchange:function(e){

    var that = this;
    var  name = e.target.dataset.type;
    if (name == 'title') {
      that.setData({
        title: e.detail.value
      })
    }
    console.log(that.data.title);
    if (name == 'content') {
      that.setData({
        content: e.detail.value
      })
    }
    if (name == 'tel') {
      that.setData({
        tel: e.detail.value
      })
    }
    if (name == 'credit1') {
      that.setData({
        credit1: e.detail.value
      })
    }
    if (name == 'times') {
      that.setData({
        times: e.detail.value
      })
    }



  },
  getdetail: function (e) {
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + "/tp/public/index.php/api/auth/get_advert_detail",
      data: {
        openid: e.openid,
        id:e.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.code > 0) {
          that.setData({
            title: res.data.data.title,
            tel: res.data.data.tel,
            content: res.data.data.content,
            times: res.data.data.times,
            credit1: res.data.data.credit1,
            id:e.id,
            show:!0,
            statu: res.data.data.status,
            img: res.data.data.picturearr,
            saveimg: res.data.data.picturearr
          })
          //0 已下架
          if (res.data.data.status==0){
            that.setData({
              statutext: '已下架'
            })
          }else{
            that.setData({
              statutext: '已上架'
            }) 
          }


        }

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
            hastotal: res.data.data.credit1
          })
        }

      }
    })

  },

  fabuad:function(e){
    var that=this;
    var times = that.data.times;
    var credit1 = that.data.credit1;
    var total = that.data.hastotal;
    var roots = getApp().globalData.apiroot;
    if (that.data.title == '' || that.data.conte == '' || that.data.tel == '' || that.data.credit1 == '' || that.data.img == ''||that.data.total == ''){
      wx.showModal({
        title: '温馨提示',
        showCancel:false,
        content: '请完善以上必填信息，谢谢',
      });
      return false;
    }

    if (times * credit1 > total){
      wx.showModal({
        title: '温馨提示',
        content: '当前设置奖励总数高于您的余额总数，当您的余额不足以扣除奖励时，广告将自动下架，谢谢合作',
        success: function (res) {
          if (res.cancel) {
            //点击取消,默认隐藏弹框
          } else {
            //点击确定
            wx.request({
              url: roots + '/tp/public/index.php/api/auth/edit_advert',
              data: {
                openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
                id: that.data.id,
                title: that.data.title,
                content: that.data.content,
                credit1: that.data.credit1,
                tel: that.data.tel,
                times: that.data.times,
                picture: that.data.saveimg.join(";")

              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                if (res.data.code > 0) {
                  wx.showToast({
                    title: '编辑成功',
                    duration: 1000
                  })
                  setTimeout(function () {
                    wx.navigateBack({})
                    // wx.switchTab({
                    //   url: '/pages/ads/index',
                    // })
                  }, 1000)
                }
              }
            })
          }
        },
      });

    }
    else{
      wx.request({
        url: roots + '/tp/public/index.php/api/auth/edit_advert',
        data: {
          openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
          id: that.data.id,
          title: that.data.title,
          content: that.data.content,
          credit1: that.data.credit1,
          tel: that.data.tel,
          times: that.data.times,
          picture: that.data.saveimg.join(";")

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if (res.data.code > 0) {
            wx.showToast({
              title: '编辑成功',
              duration: 1000
            })
            setTimeout(function () {
              wx.navigateBack({})
              // wx.switchTab({
              //   url: '/pages/ads/index',
              // })

            }, 1000)
          }
        }
      })

    }
  },
  isup:function(e){
    var that=this;
    var roots = getApp().globalData.apiroot;
    //0  已下架  点击要上架
    if (that.data.statu==0){
wx.showModal({
  title: '温馨提示',
  content: '当前广告处于下架状态，您确认要重新上架么？',
  success: function (res) {
    if (res.cancel) {
    } else {
      wx.request({
        url: roots + '/tp/public/index.php/api/auth/edit_advert',
        data: {
          openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
          id: that.data.id,
          status:'1'
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          if (res.data.code > 0) {
            that.setData({
              statutext:'已上架',
              statu:1
            })
            wx.showToast({
              title: '上架成功',
              duration: 1000
            })
            setTimeout(function () {
              wx.navigateBack({})
              // wx.switchTab({
              //   url: '/pages/ads/index',
              // })
            }, 1000)
          }else{
            wx.showToast({
              title: '操作失败',
              icon: 'none',
              duration: 1000
            })

          }
        }
      })

    }
  }
})

 }else{
      wx.showModal({
        title: '温馨提示',
        content: '当前广告处于上架状态，您确认要下架么？',
        success: function (res) {
          if (res.cancel) {
          } else {
            wx.request({
              url: roots + '/tp/public/index.php/api/auth/edit_advert',
              data: {
                openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value,
                id: that.data.id,
                status: '0'
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                if (res.data.code > 0) {
                  wx.showToast({
                    title: '下架成功',
                    duration: 1000
                  })
                  that.setData({
                    statutext: '已下架',
                    statu: 0
                  })
                  setTimeout(function () {
                    wx.navigateBack({})
                    // wx.switchTab({
                    //   url: '/pages/ads/index',
                    // })
                  }, 1000)
                }else{
                  wx.showToast({
                    title: '操作失败',
                    icon:'none',
                    duration: 1000
                  })
                }
              }
            })

          }
        }
      })
 }
  },
  delad:function(e){
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.showModal({
      title: '温馨提示',
      content: '您确认要删除该广告么？',
      success: function (res) {
        if (res.cancel) {
        } else {
          wx.request({
            url: roots + '/tp/public/index.php/api/auth/del_advert',
            data: {
              id: that.data.id
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              if (res.data.code > 0) {
                wx.showToast({
                  title: '删除成功',
                  duration: 1000
                })
                setTimeout(function () {
                  wx.navigateBack({})
                  // wx.switchTab({
                  //   url: '/pages/member/index/index',
                  // })
                }, 1000)
              } else {
                wx.showToast({
                  title: '删除失败',
                  icon: 'none',
                  duration: 1000
                })
              }
            }
          })

        }
      }
    })
  },
  changeimg: function (e) {
    var that = this;
    var imgarr = this.data.img;
    var saveimg = this.data.saveimg;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);


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
          saveimg.push(re.data);
          that.setData({
            saveimg: saveimg
          })
        }
      })
        imgarr.push(res.tempFilePaths)
        that.setData({
          img: imgarr
        })
      }
    })
  },
  clearimg: function (e) {
    var imgs = this.data.img;
    var saveimg = this.data.saveimg;
    var index = e.currentTarget.dataset.id;
    imgs.splice(index, 1);
    saveimg.splice(index, 1);

    this.setData({
      img: imgs,
      saveimg: saveimg,
    });

  },


  // 预览图片
  previewImg: function (e) {
    console.log(e);
    //获取当前图片的下标
    var index = e.currentTarget.dataset.id;
    //所有图片
    var imgs = this.data.img;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },



  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});