// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     left:['鲜花','花盒','生日蛋糕','开业花篮','绿植盆栽'],
     //被点击的左侧菜单
     currentIndex:0,
     //鲜花
     flower:[],
   fireworks:[],
   cakes:[],
   baskets:[],
   plants:[]

  },
    //跳转详情页
    particulars(e){
      let { id } = e.currentTarget.dataset;
      let { flower } = this.data;
      let newarr1 = flower.filter(item=>item.id==id);
      // if(newarr1.length>0) { console.log(newarr1[0]) }
    wx.setStorage({
      data:newarr1,
      key: 'data',
      success:function(res){
        // console.log("缓存成功")
      }
    })
    },
    particulars1(e){
      let { id } = e.currentTarget.dataset;
      let { fireworks } = this.data;
      let newarr1 = fireworks.filter(item=>item.id==id);
      // if(newarr1.length>0) { console.log(newarr1[0]) }
    wx.setStorage({
      data:newarr1,
      key: 'data',
      success:function(res){
        // console.log("缓存成功")
      }
    })
    },
    particulars2(e){
      let { id } = e.currentTarget.dataset;
      let { cake } = this.data;
      let newarr1 = cake.filter(item=>item.id==id);
      // if(newarr1.length>0) { console.log(newarr1[0]) }
    wx.setStorage({
      data:newarr1,
      key: 'data',
      success:function(res){
        // console.log("缓存成功")
      }
    })
    },
    particulars3(e){
      let { id } = e.currentTarget.dataset;
      let { basket } = this.data;
      let newarr1 = basket.filter(item=>item.id==id);
      // if(newarr1.length>0) { console.log(newarr1[0]) }
    wx.setStorage({
      data:newarr1,
      key: 'data',
      success:function(res){
        // console.log("缓存成功")
      }
    })
    },
    particulars4(e){
      let { id } = e.currentTarget.dataset;
      let { plants } = this.data;
      let newarr1 = plants.filter(item=>item.id==id);
      // if(newarr1.length>0) { console.log(newarr1[0]) }
    wx.setStorage({
      data:newarr1,
      key: 'data',
      success:function(res){
        // console.log("缓存成功")
      }
    })
    },
    // 左侧菜单点击事件
    handleItemTap(e){
      // console.log(e)
      const {index}=e.currentTarget.dataset;
      this.setData({
        currentIndex:index
      })
      // console.log(index)
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送异步请求来初始化页面数据
    wx.cloud.init({
      env: 'xianhua-c7peh'
    })
    // 1. 获取数据库引用
const db = wx.cloud.database()
// 2. 构造查询语句
// collection 方法获取一个集合的引用
// where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
// get 方法会触发网络请求，往数据库取数据
db.collection('flower').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    flower:res.data
  })
 }
});
db.collection('fireworks').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    fireworks:res.data
  })
 }
});
db.collection('cakes').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    cakes:res.data
  })
 }
});
db.collection('baskets').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    baskets:res.data
  })
 }
});
db.collection('plants').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    plants:res.data
  })
 }
});
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