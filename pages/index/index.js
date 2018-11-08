Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    search:""
    // pno:0, 
    // pageSize:5,  
    // hasMore:true
  },
  // loadMore:function(){
  //   wx.request({
  //     url: 'http://127.0.0.1:4001/page',
  //     data: {
  //       pno: ++this.data.pno,
  //       pageSize: ++this.data.pageSize
  //     },
  //     success: (res) => {
  //       console.log(res)
  //       // var pageCount=res.data.pageCount;
  //       var rows = this.data.list.concat(res.data.data)
  //       this.setData({
  //         list: rows
  //       })
  //     }
  //   })
  // },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:4001/imgList',
      method:'get',
      success:(res)=>{
        // console.log(res.data)
       this.setData({
         list:res.data,
       })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(111)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  showDetail:function(e){
    var pid=e.target.dataset.pid;
    // console.log(pid)
    wx.navigateTo({
      url: '../detail/detail?pid=' + pid
    });
  },
  getSearch:function(e){
    this.setData({
      search: e.detail.value
    })
  },
  toList:function(e){
    // console.log(this.data.search)
    // console.log(search),
    var msg = this.data.search;
    wx.navigateTo({
      url: '../shopList/shopList?msg='+msg
    })
  }
})
