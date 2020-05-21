// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   banner:[
   ]
  },
  //商品对象
  GoodsInfo:{},
     //点击加入购物车
     handleCartAdd(){
      // console.log("加入")
      //获取缓存中的数组
      let cart=wx.getStorageSync('cart')||[];
      
      if(cart.length == 0){
        //不存在第一次添加
        // cart[0].istrue=true;
        // console.log(cart[0])
        cart.push(this.data.banner[0])
      }else{
        //已经存在执行count++
        let index = cart.findIndex(v=>v.id == this.data.banner[0].id)
        
        if (index != -1) {
          cart[index].count++;
        } else {
          cart.push(this.data.banner[0])
        }
      }
      //把购物车重新添加到缓存中
      wx.setStorageSync('cart', cart);
      //弹窗提示加入成功
      wx.showToast({
        title: '加入成功',
        icon:'success',
        //防止用户手抖 疯狂点击
        mask:true
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
 wx.getStorage({
  key: 'data',
  success:(res)=>{
    this.setData({
      banner:res.data
    })
  }
})
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