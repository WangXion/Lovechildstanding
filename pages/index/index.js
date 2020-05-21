Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
     nav:[],
     hot:[],
     love:[],
     basket:[],
     boxes:[],
     cake:[]
  },
  //跳转详情页
  particulars1(e){
    let { id } = e.currentTarget.dataset;
    let { nav } = this.data;
    let newarr1 = nav.filter(item=>item.id==id);
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
    // console.log(id);
    let { hot } = this.data;
    // console.log(hot);
    let newarr2 = hot.filter(item=>item.id==id);
    // if(newarr2.length>0) { console.log(newarr2[0]) }
  wx.setStorage({
    data:newarr2,
    key: 'data',
    success:function(res){
      // console.log("缓存成功")
    }
  })
  },

  particulars3(e){
    let { id } = e.currentTarget.dataset;
    // console.log(id);
    let { love } = this.data;
    // console.log(love);
    let newarr3 = love.filter(item=>item.id==id);
    // if(newarr3.length>0) { console.log(newarr3[0]) }
    
  wx.setStorage({
    data:newarr3,
    key: 'data',
    success:function(res){
      // console.log("缓存成功")
    }
  })
  },
  particulars4(e){
    let { id } = e.currentTarget.dataset;
    // console.log(id);
    let { basket } = this.data;
    // console.log(basket);
    let newarr4 = basket.filter(item=>item.id==id);
    // if(newarr4.length>0) { console.log(newarr4[0]) }
    
  wx.setStorage({
    data:newarr4,
    key: 'data',
    success:function(res){
      // console.log("缓存成功")
    }
  })
  },
  particulars5(e){
    let { id } = e.currentTarget.dataset;
    // console.log(id);
    let { boxes } = this.data;
    // console.log(boxes);
    let newarr5 = boxes.filter(item=>item.id==id);
    // if(newarr5.length>0) { console.log(newarr5[0]) }
    
  wx.setStorage({
    data:newarr5,
    key: 'data',
    success:function(res){
      // console.log("缓存成功")
    }
  })
  },
  particulars6(e){
    let { id } = e.currentTarget.dataset;
    // console.log(id);
    let { cake } = this.data;
    // console.log(cake);
    let newarr6 = cake.filter(item=>item.id==id);
    // if(newarr6.length>0) { console.log(newarr6[0]) }
    
  wx.setStorage({
    data:newarr6,
    key: 'data',
    success:function(res){
      // console.log("缓存成功")
    }
  })
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
db.collection('banner').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    banner:res.data
  })
 }
});

db.collection('nav').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    nav:res.data
  })
 }
});
db.collection('hot').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    hot:res.data
  })
 }
});
db.collection('love').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    love:res.data
  })
 }
})
db.collection('basket').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    basket:res.data
  })
 }
})
db.collection('boxes').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    boxes:res.data
  })
 }
})
db.collection('cake').get({
  success:(res)=> {
  // 输出 [{ "title": "The Catcher in the Rye", ... }]
  // console.log(res)
  this.setData({
    cake:res.data
  })
 }
})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

    /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载 open-type=""
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //页面的数据或者效果重新刷新
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     //加载下一页
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //页面滚动就能触发
  onPageScroll(){

  },
  //页面尺寸发生改变
  //小程序发生横屏竖屏切换时触发
  onResize(){

  },
  //必须要求当前页面也是TabBar页面
  //点击自己的TabBaritem的时候才能触发
  onTabItemTap(){
    
  }
})