// pages/RedFlower/RedFlower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    flowerList: [{
      userImg: '../../images/user.jpg',
      todayCount: 5,
      totalCount: 281
    }

    ],
    taskList:[
      {
        src:'../../images/Screenshot_2019_0601_154631.png',
        detail:'好友签到',
        btn:'最高30朵'
      },
      {
        src:'../../images/Screenshot_2019_0601_154738.png',
        detail:'邀请新人',
        btn:'+50~80朵'
      },
      {
        src:'../../images/Screenshot_2019_0601_154755.png',
        detail:'送物赚花',
        btn:'+10朵'
      },
      {
        src:'../../images/Screenshot_2019_0601_154807.png',
        detail:'视频红花',
        btn:'最高10朵'
      }
    ]



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