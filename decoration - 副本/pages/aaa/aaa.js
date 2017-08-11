//
var a=getApp();
Page({
 data:{
        items:[
            {name:'JAVA',value:'Android',checked:'true'},
            {name:'Object-C',value:'IOS'},
            {name:'JSX',value:'ReactNative'},
            {name:'JS',value:'wechat'},
            {name:'Python',value:'Web'}
        ],

     background: ['green', 'red', 'yellow'],
     indicatorDots: true,
     vertical: false,
     autoplay: false,
     interval: 3000,
     duration: 1200,
     list: [
         { title: "rdfd", type: "1" },
         { title: "rdfd", type: "1" }
         ],
    

     array:['Android','IOS','ReactNative','WeChat','Web'],
     index:0,
     time:'17:30',
     data:'2017-6-15',
     actionSheetHidden: true,
     actionSheetItems: [ 'item1'],
     hiddenToast: true,
     hiddenLoading:true,
     hiddenVideo:true
 },
  
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeVertical: function (e) {
        this.setData({
            vertical: !this.data.vertical
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    cilckButton:function(e){
        console.log("点击事件启动");
    },
    listenCheckboxChange:function(e){
        console.log("当checkbox-group中的checkbox选中或者取消时调用我")
        console.log(e.detail.value);
    },
   
    /**
     * 监听普通picker选择器
     */
    listenerPickerSelected: function(e) {
        //改变index值，通过setData()方法重绘界面
        this.setData({
            index:e.detail.value
        });
    },
    /**
     * 监听时间picker选择器
     */
    listenerTimePickerSelected:function(e){
        //调用setDate()重新绘制
        this.setData({
            index:e.detail.value
        })
    },
    /**
     * 监听日期picker选择器
     */
    listenerDatePickerSelected:function(e) {
        this.setDate({
            date: e.detail.value
        })
    },
    /**
     * switch开关监听
     */
    listenerSwitch: function(e) {
        console.log('switch类型开关当前状态-----', e.detail.value);

    },
    /**
     * checkbox类型开关监听
     */
    listenerCheckboxSwitch: function(e) {
        console.log('checkbox类型开关当前状态-----', e.detail.value)
    },
    listenerButton: function() {
        this.setData({
            //取反
            actionSheetHidden: !this.data.actionSheetHidden
        });
    },

    listenerActionSheet:function() {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    /**
     * 监听button点击事件
     */
    // listenerButton: function() {
    //     this.setData({
    //         hiddenToast: !this.data.hiddenToast
    //     })
    // },
    // /**
    //  *    toast显示时间到时处理业务
    //  */
    // toastHidden:function(){
    //     this.setData({
    //         hiddenToast: true
    //     })
    // },
    /*loading组件的button点击事件监听*/
    // listenerButton:function(){
    //     this.setData({
    //         hiddenLoading: !this.data.hiddenLoading
    //     })
    // },
    listenervideoButton:function(){
        this.setData({
            hiddenVideo:!this.data.hiddenVideo
        })
    },
    listenerVideo:function(e){
        console.log(e.detail.errMsg)
    },
    onLoad:function(){ },
     onShow:function(){},
     onHide:function(){},
     onReady:function(){},
     onUnload:function(){},
     onPullDownRefresh:function(){},
     onReachBottom:function(){},
     onShareAppMessage:function(){}
})

