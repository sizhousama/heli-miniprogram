var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));
Page({
  data: {
    route: "category",
    category: {},
    openid:'',
    icons: t.requirejs("icons"),
    selector: 0,
    disabled:'',
    adlist: []
  },


  getmyadlist: function (e) {
    var that = this;
    var roots = getApp().globalData.apiroot;
    wx.request({
      url: roots + "/tp/public/index.php/api/auth/my_advert",
      data: {
        openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.code > 0) {
          that.setData({
            adlist: res.data.data,
            openid: 'sns_wa_' + wx.getStorageSync('userinfo_openid').value
          })
        }

      }
    })

  },

  onShow: function () {
    this.getmyadlist()
  },
  onLoad: function (e) {
    t.url(e)

  },
  isup: function (e) {
    var that =this;
    debugger;
    var stu = e.target.dataset.value;
    var id = e.target.dataset.id;

    var that = this;
    var roots = getApp().globalData.apiroot;
    //0  已下架  点击要上架
    if (stu == 0) {
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
                id: id,
                status: '1'
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                if (res.data.code > 0) {
                  that.getmyadlist();
                  wx.showToast({
                    title: '上架成功',
                    duration: 1000
                  })
                } else {
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

    } else {
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
                id: id,
                status: '0'
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                if (res.data.code > 0) {
                  that.getmyadlist();
                  wx.showToast({
                    title: '下架成功',
                    duration: 1000
                  })
                  that.setData({
                    statutext: '已下架',
                    statu: 0
                  })
                } else {
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
    }
  },
  delad: function (e) {
    var that = this;
    var id = e.target.dataset.id;
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
              id: id
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              if (res.data.code > 0) {
                that.getmyadlist();
                wx.showToast({
                  title: '删除成功',
                  duration: 1000
                })
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
  onShareAppMessage: function () {
    return e.onShareAppMessage();
  }
});