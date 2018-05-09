Page({
  data:{
    messageList: [{
      title: "通知标题1",
      publishUser: "用户1",
      time: "2018-05-02",  //发送时间
      readTimes: 5, //多少人已阅览
      briefContent: "内容预览"
    },
      {
        title: "通知标题2",
        publishUser: "用户2",
        time: "2018-05-03",
        readTimes: 6,
        briefContent: "内容预览"
      },
      {
        title: "通知标题3",
        publishUser: "用户3",
        time: "2018-05-04",
        readTimes: 7,
        briefContent: "内容预览"
      },
      {
        title: "通知标题4",
        publishUser: "用户4",
        time: "2018-05-05",
        readTimes: 8,
        briefContent: "内容预览"
      }
    ]
  },

  onClickMessage:function(){
    wx.navigateTo({
      url: '/Pages/messageDetails/messageDetails',
    })
  },

  messageAppend:function(){
    wx.navigateTo({
      url: '/Pages/messageEdit/messageEdit',
    })
  }
})