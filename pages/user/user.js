// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
  },
  handleGetuserinfo(e){
    const userInfo=e.detail.userInfo;
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo=wx.getStorageSync('userInfo');
   if (userInfo) {
    this.setData({
      userInfo
    })
   }
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

  }
})