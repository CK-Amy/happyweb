var a = getApp();
Page({
  data: {
    items: [
      { name: 'JAVA', value: 'Android', checked: 'true' },
      { name: 'Object-C', value: 'IOS' },
      { name: 'JSX', value: 'ReactNative' },
      { name: 'JS', value: 'wechat' },
      { name: 'Python', value: 'Web' }
    ],

    backgroundImage: ['../images/banner.png', '../images/banner.png', '../images/banner.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    list: [
      { title: "rdfd", type: "1" },
      { title: "rdfd", type: "1" }
    ],
    // 搜索框
    search: {
      searchValue: '',
      showClearBtn: false
    }
  },
  // navigateto_city: function () {
  //   wx.redirectTo({
  //     url: '../city/city?province=' + provinceName,
  //   })
  // },
  // //输入内容时
  // searchActiveChangeinput: function (e) {
  //   const val = e.detail.value;
  //   this.setData({
  //     'search.showClearBtn': val != '' ? true : false,
  //     'search.searchValue': val
  //   })
  // },
  // //点击清除搜索内容
  // searchActiveChangeclear: function (e) {
  //   this.setData({
  //     'search.showClearBtn': false,
  //     'search.searchValue': ''
  //   })
  // },
  // //点击聚集时
  // focusSearch: function () {
  //   if (this.data.search.searchValue) {
  //     this.setData({
  //       'search.showClearBtn': true
  //     })
  //   }
  // },
  // //搜索提交
  // searchSubmit: function () {
  //   const val = this.data.search.searchValue;
  //   if (val) {
  //     const that = this,
  //       app = getApp();
  //     wx.showToast({
  //       title: '搜索中',
  //       icon: 'loading'
  //     });
  //     wx.request({
  //       url: app.globalData.API_URL + 'searchTeam',
  //       data: {
  //         keywords: val,
  //         user_id: app.globalData.myInfo.user_id
  //       },
  //       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //       // header: {}, // 设置请求的 header
  //       success: function (res) {
  //         // success
  //         let searchResult = res.data.data;
  //         const len = searchResult.length;
  //         for (let i = 0; i < len; i++) {
  //           searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
  //         }
  //         that.setData({
  //           searchResult: searchResult,
  //           'search.showClearBtn': false,
  //         })
  //       },
  //       fail: function () {
  //         // fail
  //       },
  //       complete: function () {
  //         // complete
  //         wx.hideToast();
  //       }
  //     })
  //   }
  // },\
  
  onLoad: function () { 
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    // var array=this.data.backgroundImage;
    // for (let i = 1; i < 3; i++) {
    //   array.push("../images/" + i + ".png")
    // }
    // this.setDate({ backgroundImage : array});
  },
  onShow: function () { },
  onHide: function () { },
  onReady: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})