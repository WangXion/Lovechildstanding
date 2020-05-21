// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cart:[],
      allchecked:false,
      totalPrice:0,
      totalNum:0
  },
  //输入框执行逻辑
  handleInput(e){
    // console.log(e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
        // console.log(e)
        //获取自定义属性
        const operation=e.currentTarget.dataset.operation;
        this.setData({
          num:this.data.num+operation
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
   //获取缓存中购物车数据
   const cart=wx.getStorageSync('cart')||[];
   this.setCart(cart);
  },
  //商品选中
  handleItemChange(e){
//获取被修改的id
const id=e.currentTarget.dataset.id
// console.log(id)
//获取购物车数组
let {cart}=this.data;
let index=cart.findIndex(v=>v.id===id);
// console.log(index)
//选中状态取反
cart[index].istrue=!cart[index].istrue;
 this.setCart(cart);
  },
  //设置购物车状态 重新计算 底部工具栏 价格 数量
  setCart(cart){
//总价 数量
let totalPrice=0;
let totalNum=0;
let allchecked=true;
cart.forEach(v=>{
  if (v.istrue) {
   totalPrice+=v.count*v.newprice;
   totalNum+=v.count;
  }else{
   allchecked=false;
  }
});
//判断数组是否为空
allchecked=cart.length!=0?allchecked:false;
//把数据重新设置会data中和缓存中
this.setData({
  cart,
  allchecked,
  totalPrice,
  totalNum
});
wx.setStorageSync('cart', cart)
  },
  //商品全选功能
  handleItemAllcheck(){
    //获取data中的数据
    let {cart,allchecked}=this.data;
    //修改值
    allchecked=!allchecked;
    //循坏修改cart数组中的状态
    cart.forEach(v=>v.istrue=allchecked);
    //把修改好的值 填回data或者缓存中
    this.setCart(cart);
  },
  //商品数量加减
  handleEdit(e){
//获取事件传递的参数
const {operation,id}=e.currentTarget.dataset;
// console.log(operation,id)
//获取购物车数组
let {cart}=this.data;
//找到需要修改商品的索引
const index=cart.findIndex(v=>v.id===id);
//判断是否要执行删除
if (cart[index].count==1&&operation==-1) {
      //删除到1的时候提醒
      wx.showModal({
        title: '提示',
        content: '你是否要删除',
        success :(res)=> {
          if (res.confirm) {
          cart.splice(index,1);
          this.setCart(cart)
          }
        }
      })
}
//开始进行修改数量
cart[index].count+=operation;
//设置会缓存或者data中
this.setCart(cart)
  }
})