// //app.js
// App({
//   onLaunch: function () {
//     // 使用场景:在应用第一次启动的时候，获取用户信息
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               // if (this.userInfoReadyCallback) {
//               //   this.userInfoReadyCallback(res)
//               // }
//             }
//           })
//         }
//       }
//     })
//   },
//   //场景，被用户看到
//   onShow(){
//     //对应的数据或页面效果重复


//   },
//   //场景 被隐藏 
// onHide(){
//   //暂停或者清除定时器
// },
// //应用的代码发生报错的时候，就会出发
// onError(){
// //在发生代码报错时候 收集用户的错误信息，通过异步请求 将错误信息发送到后台去
// },
// //页面找不到时候触发 应用第一次启动的时候，如果找不到第一个入口才会触发
// onPageNotFound(){
//   //如果页面不存在，就可以通过js方式来重新跳转页面，跳转到另外一个页面
//   //不能跳TabBar页面
//   // wx.navigateTo({
//   //   url: 'url',
//   // })
// }
// })