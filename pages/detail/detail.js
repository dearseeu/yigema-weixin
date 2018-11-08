// pages/detail/detail.js
var app = getApp()
Page({
  data: {
    navbar: ['商品', '详情', '评价'],
    currentTab: 0,
    list:[],
    title:[],
    old_price:[],
    new_price:[]
  },
  onLoad:function(options){
    var pid=options.pid
    wx.request({
      url: 'http://127.0.0.1:4001/details?pid='+pid,
      method:'get',
      success:(res)=>{
        this.setData({
          list:res.data,
          title: res.data[0].title,
          old_price:res.data[0].old_price,
          new_price:res.data[0].new_price
        })
      }
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
