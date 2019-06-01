// pages/jifen/jifen.js
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
  currentNav:0,
  jifenNav:[
    {name:'交易记录'},
    {name:'其他记录'}
  ],
  jiluList:[
    {
      type:'每日签到',
      date:'2019-06-01 10：29',
      count:5
    },
    {
      type:'海报分享',
      date:'2019-06-01 10：29',
      count:5
    },
    {
      type:'海报分享',
      date:'2019-06-01 10：29',
      count:5
    },
    {
      type:'注册用户',
      date:'2019-06-01 10：29',
      count:266
    },
  ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  switchNav(e){
    this.setData({
      currentNav:e.target.dataset.index
    })

  },
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