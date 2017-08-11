//app.js
/*fdsdfsd App({ x:2,y:9 }) function abc(){}  abc({})*/
App({
 onLaunch:function(){//当程序启动
  //console.log("你好");//从本地存储 数据库
 },
 onShow:function(){
  //显示 切换到前台运行
 },
 onHide:function(){
  //隐藏 切换到后台运行
 },
 onError:function(){
 //当出错的时候
 } ,
 calc:function(a,b){
  console.log(a+b)
 },
 abc:234,
 version:"1.0.3",
 copy:"北京石新科技有限公司"  
})