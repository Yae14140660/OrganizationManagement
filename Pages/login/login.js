// Pages/index/index.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmptyGroup:true,
    userInfo:{},
    userPhoneNumber:""
  },

  onLogin:function(){
    var that=this
    if(this.data.userPhoneNumber.length!=11){
      wx.showToast({
        title: '输入的手机号格式不正确！',
        icon:'none'
      })
      return
    }

    wx.showLoading({
      title: '认证中',
    })

    var account = {
      TUNAME: '20103069',//学号
      PASSWORD:'123456',//密码
    }

    console.log(account)

    wx.request({
      method:"GET",
      dataType:'json',
      url: 'http://202.175.81.109:8080/index.php?r=index/checkUser',
      data:account,
      success: function(data) {
        wx.redirectTo({
          url: '../index/index',
        })
      },
      fail:function(){
        /*
        wx.showModal({
          title: '登录失败',
          content: '登录失败，请检查网络或联系客服',
        })
        console.log(this.data)
        */
        wx.redirectTo({
          url: '../index/index',
        })
      }
      
    })

    wx.hideLoading()

  },


  onInput:function(res){
    this.setData({
      userPhoneNumber:res.detail.value
    })
  },

  

  getUserInfo:function(res){
    this.setData({
      userInfo:res.detail.userInfo
    })
    console.log(this.data.userInfo)
  },

  getPhoneNumber:function(res){
    console.log(res.detail.errMsg)
    console.log(res.detail.iv)
    console.log(res.detail.encryptedData)

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
    
  }
  
})