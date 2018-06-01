Page({
  data: {
    fileList: [{
      name: "文件1.ppt",
      isPPT: true,
      size: "2.3M",
      publisher: "用户1",
      time: "18-05-02"  //发送时间
    },
    {
      name: "文件2.ppt",
      isPPT: true,
      size: "1.5M",
      publisher: "用户2",
      time: "18-05-03"
    },
    {
      name: "文件3.ppt",
      isPPT: true,
      size: "4.9M",
      publisher: "用户3",
      time: "18-05-04"
    },
    {
      name: "文件4.word",
      isWORD: true,
      size: "2.1M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件5.pdf",
      isPDF: true,
      size: "3.8M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件6.word",
      isWORD: true,
      size: "4.4M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件7.bat",
      size: "3.1M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件8.md",
      size: "19.0M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件9.pdf",
      isPDF: true,
      size: "3.8M",
      publisher: "用户4",
      time: "18-05-05"
    },
    {
      name: "文件10.pdf",
      isPDF: true,
      size: "3.8M",
      publisher: "用户4",
      time: "18-05-05"
    }
    ]
  },

  onClickSearch: function(){
    wx.navigateTo({
      url: '/Pages/file/FileSearch/fileSearch',
    })
  },

  onClickFile: function () {
    wx.downloadFile({
      url: 'http://example.com/somefile.pdf',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功');
            console.log(res);
            show('打开文档成功');
          }
        })
      },
      fail: function () {
        console.log("下载失败");
      }
    })
  },

  messageAppend: function () {
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
      }
    })
    wx.chooseImage({
  success: function(res) {
    var tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      success: function(res){
        var data = res.data
        //do something
      }
    })
  }
})
  },

  navigatorFunc: function () {
    wx.navigateTo({
      url: '/Pages/FileDetails/fileDetails',
    })
  }
})