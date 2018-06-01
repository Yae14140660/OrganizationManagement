// Pages/messageEdit/messageEdit.js
var util=require('../../../util/util.js')

function message(title,time,content){
  this.title=title
  this.time=time
  this.content=content
}

function isEmpty(obj){
  if(typeof obj=='undefined' || obj==null || obj==''){
    return true
  }
  return false
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: "/Icons/addPicture.png"
  
  },
  chooseImg:function(){
    var that=this
    wx.chooseImage({
      count:1,
      sizeType:"compressed",
      success: function(res) {
        var tempFilePaths=res.tempFilePaths
        that.setData({
        imagePath:tempFilePaths
      })
      },
    })

  },

  onBlur:function(res){
    /*
    console.log(res.detail.value)
    console.log(res.detail)
    */
  },

  onSubmit:function(res){
    var date=new Date()
    /*
    console.log(util.formatTime(date))
    console.log(res.detail.value.input)
    console.log(res.detail.value.textarea)
    */
    var title=res.detail.value.input
    var content=res.detail.value.textarea
    var time=util.formatTime(date)
    var msg=new message(title,time,content)
    if(isEmpty(title)||isEmpty(content)){
      wx.showToast({
        title: '标题或内容不能为空',
        icon:'none'
      })
      return
    }

    console.log(msg)

    wx.showLoading({
      title: '上传中',
      mask:true,
      fail:function(){
        console.log("Loading显示失败")
      },
      success:function(){
        console.log("显示成功")
      }
    })
    /*
    wx.request({
      url: '',
      data:{
        title:title,
        content:content,
        time:time,
      },
      fail:function(res){
        wx.showToast({
          title: '发布失败',
        })
      },
      success:function(res){
        wx.navigateBack({  
        })
      }
    })
    */
    /*
    wx.navigateBack({
      
    })
    */
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