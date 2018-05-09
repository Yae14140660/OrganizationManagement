// Pages/index/index.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmptyGroup:true
  
  },
  
  onShareAppMessage:function(res){
    if(res.from==="button"){
      console.log(res.target);
    }
    return {
      title:"自定义转发标题",
      path:"/Pages/index/index",
      success:function(e){
        wx.showShareMenu({
          withShareTicket:true
        })
        if(e.shareTickets){
          wx.getShareInfo({
            shareTicket: e.shareTickets[0],
            success:function(e){
              e.errMsg;
              e.iv;
              e.encryptedData;
            }
          })
        }

      },
      fail:function(){

      }
    }
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})