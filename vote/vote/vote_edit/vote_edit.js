// Pages/vote/vote_edit/vote_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1:['单选','多选'],
    array2: ['提前30分钟', '提前40分钟','提前一个小时'],
    index:0,

    date:'2018-5-10',
    start_time:'2018-5-10',
    end_time:'2018-5-20',

  },

  listenerPickerSelected1: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  }, 
  listenerPickerSelected2: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  }, 

  listenerDatePickerSelected: function (e) {
    this.setDate({
      date: e.detail.value
    })
  },

  clickButtonToVote(){
    wx.navigateTo({
      url: '../vote_detail/vote_detail',
    })
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