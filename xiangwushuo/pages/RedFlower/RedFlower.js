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
    taskList1: [
      {
        src: '../../images/Screenshot_2019_0601_154631.png',
        detail: '好友签到',
        btn: '最高30朵'
      }
    ],
    taskList2: [
      {
        src: '../../images/Screenshot_2019_0601_154738.png',
        detail: '邀请新人',
        btn: '+50~80朵'
      },
    ],
    taskList3: [
      {
        src: '../../images/Screenshot_2019_0601_154755.png',
        detail: '送物赚花',
        btn: '+10朵'
      },
    ],
    taskList4: [
      {
        src: '../../images/Screenshot_2019_0601_154807.png',
        detail: '视频红花',
        btn: '最高10朵'
      }
    ],
    show:false
    
  
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showShareMenu({
    //   withShareTicket: true,
    //   success(res) {
    //     console('成功的分享');
    //     console('分享' + res);
    //   },
    //   fail(err) {
    //     console.log('分享失败');
    //   }
    // })
    this.otehrApp();
    this.showToast();
   
  },
  rule(){
    this.setData({
      show: true
    })
  },
  close: function() {
    this.setData({
      show: false,
    })
  },

  touchMove: function() {
  },

  maskTouchMove: function() {
  },
  showToast(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
   
  },
  otehrApp(){
    wx.navigateToMiniProgram({
      appId: 'wxeae00915600c9e68',
      path: '../index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      },
      fail(res){
        console.log('打开失败')
      }
    })
  },
  // onShareAppMessage() {
  //   return {
  //     title: '享物说一个好玩的小程序',
  //     path: '../RedFlower/RedFlower',
  //     success(res) {
  //       console.log(res.shareTickets[0])
  //       // console.log
  //       wx.getShareInfo({
  //         shareTicket: res.shareTickets[0],
  //         success: function (res) { console.log(res) },
  //         fail: function (res) { console.log(res) },
  //         complete: function (res) { console.log(res) }
  //       })
  //     },
  //     fail(res) {
  //       // 分享失败
  //       console.log(res)
  //     }
  //   }

  // },

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