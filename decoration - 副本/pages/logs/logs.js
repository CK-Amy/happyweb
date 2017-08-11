//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    phone: '',
    password: ''
  },
      /** 监听手机号输入*/
      listenerPhoneInput : function(e) {
        this.data.phone = e.detail.value;

      },

  /**
   * 监听密码输入
   */
  listenerPasswordInput: function (e) {
    this.data.password = e.detail.value;
  },

  /**
   * 监听登录按钮
   */
  listenerLogin: function () {
    //打印收入账号和密码
    console.log('手机号为: ', this.data.phone);
    console.log('密码为: ', this.data.password);
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
