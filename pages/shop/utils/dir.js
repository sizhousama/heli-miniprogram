const YSfac = require('fac.js');
const qiniuUploader = require("qiniuUploader.js");




module.exports = {
setceng:function(cs,dxcs,jg){
  var sco = this;
            if(dxcs>0){//有地下室  2
    var arr = [];
    for (var i = dxcs-1; i >= 0; i--) {
      if(i==dxcs-1){
        var diban ='地下室负'+ sco.data.dixia[i]+'层底板';
        arr.push(diban);
      }
      var type = jg ==1?'柱':'墙柱';
      var qiangzhu ='地下室负'+ sco.data.dixia[i]+'层'+type;
      arr.push(qiangzhu); 
      if(i==0){
        var louban = '地下室负'+sco.data.dixia[i]+'层顶板'; 
        arr.push(louban); 
        var qz = '首层'+type; 
        arr.push(qz);
      }else{
        var louban = '地下室负'+sco.data.dixia[i]+'层梁板';
        arr.push(louban); 
      } 
       
    }
    for (var i = 1; i < cs; i++) {
         var lb = sco.data.zhuti[i]+'层梁板';
         arr.push(lb);
         var type = jg ==='1'?'柱':'墙柱';
         var qz = sco.data.zhuti[i]+'层'+type;
         arr.push(qz);
     }



        }else{//无地下室
             var arr = [];
             for (var i = 0; i < cs; i++) {
                   var lb = sco.data.zhuti[i]+'层梁板';
                   arr.push(lb);
                   var type = jg ==='1'?'柱':'墙柱';
                   var qz = sco.data.zhuti[i]+'层'+type;
                   arr.push(qz);
               }  
        }  
    //加入屋面
    sco.data.wumian.map(function(elem) {
        arr.push(elem);
    });
    return arr;
    }, 
  alert:function(ev){
   
    if(ev.detail.scrollTop>200){
      // console.log(ev.detail.scrollTop);
      this.setData({
        hiddenfb:true,
        hiddenfb2:true
      })
    }else{
      // console.log(ev.detail.scrollTop);
      this.setData({
        hiddenfb:false,
        hiddenfb2: false
      })
    }
  },
    //整理过的一些公共方法
fetch:function(key){      //调用方法：sco.fetch('com_list');
    YSfac.fetdata(this,key); 
  }, 
  //点击，则跑某个接口
tapfetch:function(e){      //调用方法：bindtap="tapfetch" data-key='YS_lista'
YSfac.fetdata(this,e.currentTarget.dataset.key); 
// wx.showToast({
//   title: '保存成功！',
//   icon:'none',
//   success(res){
//     setTimeout(function () {
//       wx.navigateBack();
//     }, 1000);
//   }
// })

  }, 
  ystapshow:function(e){ //调用方法：bindtap="ystapshow" data-value='0'


this.setData({tapshow:e.currentTarget.dataset.value});
  },
ysinput:function(e,v){ //input输入框事实更新 引用方法：bindinput="ysinput" data-name="com_list.params.a"
var a = {};
a[e.target.dataset.name]=e.detail.value;
this.setData(a); 
}, 
ystextarea(e,v){
  var a = {};
  a[e.target.dataset.cont]=e.detail.value;
  this.setData(a);
},
nav:function(ev){ //跳转至页面；引用方法 bindtap="nav" data-to='../mine/mine'
   wx.navigateTo({url: ev.target.dataset.to})
},
back:function(ev){//返回上一页
  wx.navigateBack();
},

//点击设置值
 setvalue:function(ev){//给data里面的变量赋值 引用方法 bindtap="setvalue" data-key='YS_lista.params.etime' data-value='1123' 
  var a = {};
  var d = ev.currentTarget.dataset;
  a[d.key] = d.value; 
  this.setData(a);
},
//日期设定值
 setdate:function(ev){//给data里面的变量赋值 引用方法 bindtap="setvalue" data-key='YS_lista.params.etime' data-value='1123' 
 var a = {};
  var d = ev.currentTarget.dataset;
  a[d.key] = ev.detail.value; 
  this.setData(a);
},
//开关设置值
 setswitch:function(ev){//给data里面的变量赋值 引用方法 bindchange="setvalue" data-key='YS_lista.params.etime'
 var a = {};
  var d = ev.currentTarget.dataset;
  a[d.key] = ev.detail.value; 
  this.setData(a);
},
//私有方法标养日期设定值
 setdateby:function(ev){//给data里面的变量赋值 引用方法 bindtap="setdateby" data-key='YS_lista.params.etime' 
 var sco = this;
 var a = {};
 var d = ev.currentTarget.dataset;
 var type = sco.data.littab;
if(type=='by'||type=='ty'||type=='ks'||type=='zt'||type=='cm'){ 
                 var t = YSfac.time(ev.detail.value); 
                var t1 = t + 28*86400000;
                var t2 = t + 30*86400000;
                var t3 = t + 7*86400000;
                sco.data.YS_obja.params.byriqi = YSfac.numtotime(t);
                sco.data.YS_obja.params.bytime = YSfac.numtotime(t1);
                sco.data.YS_obja.params.zttime = YSfac.numtotime(t1);
                sco.data.YS_obja.params.kstime = YSfac.numtotime(t2);
                sco.data.YS_obja.params.cmtime = YSfac.numtotime(t3);
              } 
              if(type=='dz'){ 
                sco.data.YS_obja.params.dztime = sco.data.YS_obja.params.dzriqi;
              }
              if(type=='qz'||type=='wq'||type=='nq'||type=='zp'){
                var kx = type + 'riqi';
                var tx =  fac.time(sco.data.YS_obja.params[kx]); 
                var t5 = tx + 28*86400000;
                var key = type + 'time';
                sco.data.YS_obja.params[key] = YSfac.numtotime(t5);
              } 
  this.setData({'YS_obja.params':sco.data.YS_obja.params});
},

//子单位送检选中
setchksin:function(ev){//给data里面的变量赋值 引用方法 bindtap="setchk" 
  console.log(ev);
  var sco = this;
  var index = ev.currentTarget.dataset.index;
  var ischk = sco.data.YS_listc.data.datalist[index].ischk;
  var thchk = ischk==0?1:0;

  sco.data.YS_listc.data.datalist[index].ischk=thchk;
// 循环数
 var chkcount = 0;
 sco.data.YS_listc.data.datalist.map(function(el) {
    el.ischk&&chkcount++;
 });


  var str = 'YS_listc.data.datalist['+index+'].ischk';
  var a = {chkcount:chkcount};
  a[str]=thchk;
  sco.setData(a); 
},

//原材送检选中
ycchk:function(ev){//给data里面的变量赋值 引用方法 bindtap="ycchk" 
  
  var sco = this;
  var index = ev.currentTarget.dataset.index;
  var ischk = sco.data.YS_listb.data.datalist[index].ischk;
  var thchk = ischk==0?1:0;

  sco.data.YS_listb.data.datalist[index].ischk=thchk;
// 循环数
 var yccount = 0;
 sco.data.YS_listb.data.datalist.map(function(el) {
    el.ischk&&yccount++;
 });


  var str = 'YS_listb.data.datalist['+index+'].ischk';
  var a = {yccount:yccount};
  a[str]=thchk;
  sco.setData(a); 
},

chkall:function(ev){//给data里面的变量赋值 引用方法 bindtap="chkall" 
 var sco = this; 
// 循环数
var c = 0;
var chkcount = 0;
 if(sco.data.chkcount==sco.data.YS_listc.data.datalist.length){
    
 }else{
  c = 1;
  chkcount=sco.data.YS_listc.data.datalist.length;
 }

 
 sco.data.YS_listc.data.datalist.map(function(el) {
    el.ischk =c; 
 });


  var str = 'YS_listc.data.datalist';
  var a = {chkcount:chkcount};
  a[str]=sco.data.YS_listc.data.datalist;
  sco.setData(a); 
},
ycall:function(ev){//给data里面的变量赋值 引用方法 bindtap="ycall" 
 var sco = this; 
// 循环数
var c = 0;
var yccount = 0;
 if(sco.data.yccount==sco.data.YS_listb.data.datalist.length){
    
 }else{
  c = 1;
  yccount=sco.data.YS_listb.data.datalist.length;
 }

 
 sco.data.YS_listb.data.datalist.map(function(el) {
    el.ischk =c; 
 });


  var str = 'YS_listb.data.datalist';
  var a = {yccount:yccount};
  a[str]=sco.data.YS_listb.data.datalist;
  sco.setData(a); 
},


// 选择标签的两个函数
mchange:function(e){
var sco = this; 
var n = e.detail.value[0];
var w = e.detail.value[1]===null?0:e.detail.value[1];

var nid = sco.data.YS_lista.data[n].noticetype;
var nstr = sco.data.YS_lista.data[n].name;
var wid = sco.data.YS_lista.data[n].child[w].id; 
var wstr = sco.data.YS_lista.data[n].child[w].name;
sco.setData({
  'YS_obja.params.noticetype':nid,
  'YS_obja.params.worktype':wid,
  'YS_obja.params.noticestr':nstr,
  'YS_obja.params.workstr':wstr
});
console.log(sco.data.YS_obja.params);
},
colchange:function(e){
  var sco = this; 
if(e.detail.column==0){ 
  sco.setData({'tworangearr':[sco.data.YS_lista.data, sco.data.YS_lista.data[e.detail.value].child]});
}  
},

//选择省份的两个函数
citymchange:function(e){
var sco = this; 
var n = e.detail.value[0];
var w = e.detail.value[1]===null?0:e.detail.value[1];

var nid = sco.data.YS_listb.data[n].id;
var nstr = sco.data.YS_listb.data[n].name;

var wid = sco.data.YS_listb.data[n].city[w].id;
var wstr = sco.data.YS_listb.data[n].city[w].name;
sco.setData({
  'YS_obja.params.province_id':nid,
  'YS_obja.params.city_id':wid,
  'YS_obja.params.province_str':nstr,
  'YS_obja.params.city_str':wstr
});
console.log(sco.data.YS_obja.params);
},
citycolchange:function(e){
  var sco = this; 
if(e.detail.column==0){ 
  sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[e.detail.value].city]});
}  
},


  /*tabbar方法*/
  editTabBar: function () {
    var tabbar = this.data.gdata.tabbar,
      currentPages = getCurrentPages(),
      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
       
      })
    }
  },
  swiperChange: function (e) {

    this.setData({
      currentTab: e.detail.current,
    })

  },
  swiper1: function (e) {
    var sco = this;
 
var ind=e.detail.current;
var codeid = sco.data.YS_lista.data[ind].codeid;
sco.data.YS_listb.params.codeid = codeid;
sco.data.YS_plistc.params.sid = sco.data.YS_lista.data[ind].sid;

    this.setData({
      currentTab: e.detail.current,
      'YS_listc.data':[],
      'YS_plistc.total':1,
      showpl: false

    });
    this.setData({
      showpl: false,
      selected1: false,
      selected2:false,
      selected: true
    })
    sco.data.YS_listc.data = [];

    setTimeout(function(){
sco.fetch('YS_listb');
sco.fetch('YS_plistc');
    },400);

  },
loadmore:function(str){
  this.setData({'showload':str});
},
  upper:function (e) {
    var sco = this;
    // var sctop = e.data.sctop;
    var inter = e.currentTarget.dataset.upinter;

    if(inter == 'YS_plista'){
      sco.data.YS_plista.load = true;
    }else if(inter == 'YS_plistb'){
      sco.data.YS_plistb.load = true;
    }

    sco.fetch(inter);

    console.log('upper');
  },
  lower:function (e) {
   
    console.log('lower');

    if(e.target.dataset.inter) {
      if(e.target.dataset.inter=='YS_plistb')this.data.YS_plistb.params.curPage++;  
      if(e.target.dataset.inter=='YS_plistc')this.data.YS_plistc.params.curPage++;  
      this.fetch(e.target.dataset.inter);
    }else{
      this.data.YS_plista.params.curPage++;   
      this.fetch('YS_plista');
    }


  },
  navto:function (ev) {
        wx.switchTab({url: ev.currentTarget.dataset.to})
  },
 comchk:function (ev) {
    console.log(ev);
     var sco = this;
 var d = ev.currentTarget.dataset;
 sco.data.YS_obja.params.codeid = d.codeid;
 sco.data.YS_obja.params[d.key] = ev.detail.value?1:0;
 sco.fetch('YS_obja'); 
 },

setchk:function (ev) { 
     var sco = this;
 var d = ev.currentTarget.dataset;
 sco.data.YS_obja.params.codeid = d.codeid;
 sco.data.YS_obja.params[d.key] = ev.detail.value?1:0; 
 },

//wyl方法
//切换子单位 原材
// changesin:function (ev) {
//  var sco = this;
//  var d = ev.currentTarget.dataset; 
// sco.setData({
//       sintab: d.type,
//       sintabname: d.sname, 
//       nzopen: false, 
//       nzshow: true, 
//       isfull: false,
//       yccount:0,
//       chkcount:0
//     });

// if(d.type=='sin'){
//   //子单位的部位 参数
// sco.setData({
//      littab:'by',
//     littabname:'标养',
//     });
// sco.data.YS_listc.params.codeid = d.codeid;
// sco.data.YS_listc.params.field = 'by';
// sco.fetch('YS_listc'); 
// YSfac.setstore('littab','by');

// }else{
//   //原材 参数
// sco.setData({
//      littab:'qb',
//     littabname:'全部',
//     });
  
// YSfac.setstore('littab','qb');

// sco.data.YS_listb.params.codeid = d.codeid;
// sco.data.YS_listb.params.field = 'qb';
// sco.fetch('YS_listb'); 
// } 
//   },
changeyc:function (ev){
 var sco = this;
 var d = ev.currentTarget.dataset;  
sco.data.YS_listb.params.field = d.field;
sco.fetch('YS_listb');  
},
changesj:function (ev){
 var sco = this;
 var d = ev.currentTarget.dataset;  
sco.data.YS_listc.params.field = d.field;
sco.fetch('YS_listc');  
},


  //切换 标养同养抗渗柱头等
// changelit:function (ev) {
//  var sco = this;
//  var d = ev.currentTarget.dataset; 
// this.setData({
//       littab: d.type,
//       littabname: d.tname,
//       qyopen: false, 
//       qyshow: true, 
//       isfull: false,
//       yccount:0,
//       chkcount:0
//     });


// YSfac.setstore('littabname',d.tname);
// YSfac.setstore('littab',d.type);

// if(sco.data.sintab=='sin'){
// //子单位的部位 参数
// sco.data.YS_listc.params.field = d.type;
// sco.fetch('YS_listc'); 
// }else{
//   //原材 参数
// sco.data.YS_listb.params.field = d.type;
// sco.fetch('YS_listb'); 
// }




//   },
  //设置样式
settype:function (ev) {
 var sco = this;
    YSfac.setstore('setdata',sco.data.YS_listc.data.datalist);
    YSfac.setstore('littab',sco.data.YS_listc.params.field);
    
    wx.navigateTo({url: '/pages/addplan/addplan'})
  
},
//勾选同养
setornot:function (ev) {
  var sco = this;
  var key = ev.currentTarget.dataset.keys;
  sco.data.YS_obja.params.codeid = sco.data.YS_lista.data[key].codeid;
  var t = sco.data.YS_lista.data[key][sco.data.str];
  sco.data.YS_obja.params[sco.data.str] = t==1?0:1;
  sco.data.YS_obja.done = function(re,sco){
     YSfac.msg(re);
  }
  sco.fetch('YS_obja'); 
    // console.log(ev)
},

//添加部位
addsj:function (ev) {
  var sco = this;
  var sd = {};
  sd.prcodeid = YSfac.getstore('procodeid');
  sd.codeid = sco.data.YS_listc.data.codeid; 
  sd.scodeid = sco.data.YS_listc.params.codeid;
  sd.bybuwei = '部位-新增';
  sd.byriqi = '';
  sd.bytime = '';
  sd.fidarr = [];
  sd.byys = 0;
  sd.byornot = 1;
  sd.tyornot = 0;
  sd.ksornot = 0;
  sd.ztornot = 0;
  sd.cmornot = 0;
  sd.dzornot = 0;
  sd.qzornot = 0;
  sd.wqornot = 0;
  sd.nqornot = 0;
  sd.zpornot = 0;
  sd.isdel = 0;
  sd.ischk = 0;
  // console.log(sd);

  sco.data.YS_objb.params = sd;
  sco.data.YS_objb.done = function(re,sco){

if(re.code==1){ 
                sd.codeid = re.data.codeid;
                delete sd.prcodeid;
                delete sd.scodeid; 
              sco.data.YS_listc.data.datalist.unshift(sd); 

              sco.setData({'YS_listc.data.datalist':sco.data.YS_listc.data.datalist});
                } 

    YSfac.msg(re);
  }
  sco.fetch('YS_objb'); 
},
addyc:function(ev){
var sco = this;
  var field =  sco.data.YS_listb.params.field;
  var sd = {};
  var typ = {qb:'原材名称',gj:'钢筋',sn:'水泥',s:'砂',z:'砖',zs:'装饰',jn:'节能',fs:'防水',sd:'水电',aq:'安全'};
  var yct = {qb:0,gj:1,sn:2,s:3,z:4,zs:5,jn:6,fs:7,sd:8,aq:9};
  sd.prcodeid = sco.data.options.codeid;
  sd.codeid = sco.data.YS_listb.data.codeid; 
  sd.yctype = yct[field]; 
  sd.mname = typ[field]+'-新增'; 
  sd.ycys = 0; 
  // console.log(sd);
  sco.data.YS_objb.params = sd;
  sco.data.YS_objb.done = function(re,sco){  
      sco.fetch('YS_listb'); 
    YSfac.msg(re);
  }
  sco.fetch('YS_objb'); 

},


comdel:function(ev){
  var sco = this;
  var key = ev.currentTarget.dataset.key;
       wx.showModal({
          title: '',
          content: '确定要删除选中项么？',
          success: function (res) {
            if (res.confirm) {
             var arr = sco.data[key].data.datalist;
             var arrs = [];
             arr.map(function(elm) {
            if(elm.ischk==1&&elm.isdel==0){
              arrs.push(elm.codeid);
            }             
          });

sco.data.YS_objc.params.codeid = arrs.join(',');
sco.data.YS_objc.done = function(re,sco){
    YSfac.msg(re);
    sco.fetch(key);
}
sco.fetch('YS_objc');


            } 
          }
        })
},
gotodetail:function(ev){
var sco = this; 
var key = ev.currentTarget.dataset.key; 
var sjdata = sco.data.YS_listc.data.datalist[key];
 
 YSfac.setstore('sjdata',sjdata);

wx.navigateTo({url: '/pages/setplan/setplan'});

},
gotodetailyc:function(ev){
var sco = this; 
var key = ev.currentTarget.dataset.key; 
var sjdata = sco.data.YS_listb.data.datalist[key];
 
 YSfac.setstore('sjdata',sjdata);

wx.navigateTo({url: '/pages/setplan/setplan'});

},
  picker: function(e) {//改变index值，通过setData()方法重绘界面 
     
      this.setData({
        index:e.detail.value,
        ycindex:e.detail.value,
        "YS_obja.params.byqiangdu":this.data.qdtypelist[e.detail.value].t, 
        "YS_obja.params.yctype": this.data.yctypelist[e.detail.value].t, 
      });
  },
ysdelimg:function(e){ //添加模块的，删除图片
    this.data.imageList.splice(e.currentTarget.dataset.id,1);
    this.setData({imageList:this.data.imageList}); 
  }, 
comchooseImage: function (ev) {    //bindtap="comchooseImage" data-key="YS_obja.params.picturearr" data-arr="1" data-siyou="1"
    var sco = this;
var key = ev.currentTarget.dataset.key;
var siyou = ev.currentTarget.dataset.siyou;
var arrstr = ev.currentTarget.dataset.arr; 
var qntoken = YSfac.getstore('qntoken');

var domain = siyou?qntoken.privatedomain:qntoken.domain;
var token = siyou?qntoken.privatetoken:qntoken.token;


    wx.chooseImage({
       count: 1, // 默认9
       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) { 
        YSfac.load(1,'正在上传……');
 
 var filePath = res.tempFilePaths[0];

qiniuUploader.init({ 
region: 'SCN', 
uploadURL:'https://upload-z2.qiniup.com/', 
domain:domain,
uptoken:token,
});

qiniuUploader.upload(filePath, (re) => {  
if(re.key){


   var a = {};
   if(arrstr){
      sco.data.imageList.push(re.imageURL);
       sco.setData({imageList:sco.data.imageList});
   }else{
   a[key] =re.imageURL; 
   a[key+"x"] ='/'+re.key;    
   }

   // console.log(a);
   sco.setData(a); 

}else{
wx.showToast({
        title: '上传失败',
        icon: 'fail',
        duration: 2000
      });
}

          YSfac.load();
        }, (error) => { 
          YSfac.load(); 
        }) 

  setTimeout(function(){
     wx.hideLoading(); 
  },8000);  

      }
    })
  },







//检查是否去      
chklogin:function(cb){
  var sco = this;
      //调用登录接口
    wx.showModal({
      title: '',
      content: '点击确定前往授权登录',
      success: function (res) {
        if (res.confirm) {
             
              wx.login({
                success: function (re) {
                    wx.navigateTo({url: '../auth/auth'});
        //             wx.getUserInfo({
        //               withCredentials: true,
        //             success: function (res) {
        //               res.userInfo.code = re.code;  
        //               // console.log(res);
        //               // sco.setData({
        //               //   avatarUrl: res.avatarUrl,
        //               //   nickName: res.nickName,
        //               // })

        //             //  wx.showToast({
        //             //   title:'登录中…',
        //             //   icon: 'none',
        //             //   duration: 2000
        //             // });

        //             //初始化配置接口参数
        //             sco.data.com_obja.url = 'api/open/miniapplogin'; 
        //             sco.data.com_obja.method = 'POST';
        //             sco.data.com_obja.params = res.userInfo;
        //             if(YSfac.getstore('fromuid')){
        //               sco.data.com_obja.params.fromuid = YSfac.getstore('fromuid'); 
        //             }
        //             if(YSfac.getstore('ftype')){
        //               sco.data.com_obja.params.fromtype = YSfac.getstore('ftype'); 
        //             }
                    
        //             sco.data.com_obja.done = function(ret,sco){ 
        //              if(ret.code ==1 ){
        //               res.userInfo.uid = ret.data.uid; 
        //               res.userInfo.phone = ret.data.phone;
        //               res.userInfo.token = ret.data.token;
        //               res.userInfo.unionid = ret.data.unionid;
        //               res.userInfo.wxappopenid = ret.data.wxappopenid;
        //               sco.resetlgdata(res.userInfo);  //重置登陆信息 
        //                // sco.opensock();//登陆成功，调用
        //               typeof cb == "function" && cb(res.userInfo); 
        //              }else if(ret.code ==2 ){
        //                 res.userInfo.uid = ret.data.uid;
        //                 res.userInfo.phone = ret.data.phone;
        //                 res.userInfo.wxappopenid = ret.data.wxappopenid;
        //                 res.userInfo.unionid = ret.data.unionid;
        //                 res.userInfo.token = ret.data.token;
        //                 sco.resetlgdata(res.userInfo);  //重置登陆信息 
        //                 // console.log(res.userInfo);
        //                   wx.navigateTo({url: '/pages/user/user'});
        //                } 
        //             }

        // //看是否给地理位置
        // // if(YSfac.getstore('location')!=1){
        // //  sco.chklocation();
        // //  return false;
        // // }
        // // sco.data.com_obja.params.latitude = sco.data.userinfo.latitude;
        // // sco.data.com_obja.params.longitude = sco.data.userinfo.longitude; 
        // sco.fetch('com_obja');
         

        //  },
        //             fail:function(re){  
        //               sco.resetlgdata();//重置登陆信息
        //               // 去授权页面
        //               wx.showModal({
        //                 title: '提 示',
        //                 content: '请先进行登陆授权才可以使用该功能，点“确定”进入授权管理。',
        //                 success: function (res) {
        //                  if (res.confirm) { 
        //                     wx.navigateTo({url: '../auth/auth'});
        //                  }else{
        //                     sco.setData({
        //                       ysq:false
        //                     })

        //                  }
        //                 }
        //                }); 
        //               // console.log('getUserInfo未授权',re);  
        //             }
        //           })      
                  
                  }
              });
        } else if (res.cancel) {
          // console.log('用户点击取消')
          return false;
        }
      }
    })



},
resetlgdata:function(res){//重置登陆的基本信息
  var sco = this;
  if(res){ 
      YSfac.setstore('lgcode',res.uid);
      YSfac.setstore('logininfo',res);    
  }else{ 
      YSfac.unsetstore('lgcode');
      YSfac.unsetstore('logininfo');
  } 
},
//检查是否有授权地理位置
chklocation:function(cb){
var sco = this; 
  wx.showModal({
  title: '温馨提示',
  content: '该功能需要获取地理位置，请点"确定"进入授权管理页面，同时要在手机“设置”中，开启微信获取地理位置的权限。',
  success: function (res) {
    if(res.cancel)return;
          wx.openSetting({
            success:function(re){
              if(re.authSetting['scope.userLocation']){
                 YSfac.setstore('location',1);
                 sco.savelocation();//存入到userinfo里面
              }else{
                YSfac.unsetstore('location');
              } 
              // console.log(re);
            },
            fail:function(re){ 
               // console.log(re);
               YSfac.unsetstore('location'); 
               YSfac.unsetstore('userinfo');
            }
          });
  }
});
},
 //用户点击授权按钮 通过授权
 onGotUserInfo: function(e) {
  var sco = this;
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)

    var userInfo = e.detail.userInfo;
    e.detail.userInfo&&wx.login({
        success: function (re) {
          userInfo.code = re.code;
            //初始化配置接口参数
            sco.data.com_obja.url = 'api/open/miniapplogin'; 

            sco.data.com_obja.method = 'POST';
            sco.data.com_obja.params = userInfo;  

    if(YSfac.getstore('fromuid')){
              sco.data.com_obja.params.fromuid = YSfac.getstore('fromuid'); 
            }
    if(YSfac.getstore('fromtype')){
      sco.data.com_obja.params.fromtype = YSfac.getstore('fromtype'); 
    }

            sco.data.com_obja.done = function(ret,sco){ 
               if(ret.code ==1 ){
                userInfo.uid = ret.data.uid;
                userInfo.phone = ret.data.phone;
                userInfo.wxappopenid = ret.data.wxappopenid;
                userInfo.unionid = ret.data.unionid;
                userInfo.token = ret.data.token;
                sco.resetlgdata(userInfo);  //重置登陆信息 
                // console.log(userInfo);
                // sco.opensock();//登陆成功，调用
                //最后，返回首页
                wx.navigateBack();
                  // wx.switchTab({url: '/pages/eng/eng'});
               }else if(ret.code ==2 ){
                userInfo.uid = ret.data.uid;
                userInfo.phone = ret.data.phone;
                userInfo.wxappopenid = ret.data.wxappopenid;
                userInfo.unionid = ret.data.unionid;
                userInfo.token = ret.data.token;
                sco.resetlgdata(userInfo);  //重置登陆信息 
                // console.log(userInfo);
                  wx.navigateTo({url: '/pages/user/user'});
               }
              }
            sco.fetch('com_obja'); 
 
        }
    });

  }, 
//wyl方法








































































































// 贾仕通事件代码
showpl(e){
  var sco = this;
  var showpl = this.data.showpl;
  var disabled= this.data.disabled;

  if(e.currentTarget.dataset.tid==undefined){
    this.setData({
      showpl:!showpl,
      disabled:!disabled,
      'YS_objc.params.content':''
    })
    return false;
  }

  YSfac.setstore('currentTid',e.currentTarget.dataset.tid);
  YSfac.setstore('currentBuwei',e.currentTarget.dataset.buwei);
  if(!e.currentTarget.dataset.missionnum){
    wx.navigateTo({url: '/pages/addschedule/addschedule'});
   
  }else{
    
    this.setData({
      showpl:!showpl
    })


    if(!showpl){
      sco.data.YS_plistd.params.tid = e.currentTarget.dataset.tid;
      sco.fetch('YS_plistd');
    }    
  }

},
selecttag(e){
  var selecttag = this.data.selecttag;
  this.setData({
    selecttag: !selecttag
  })
},
scrollup(e){
  // console.log(e)
},
//我的信息  myinfo
//头像
torc(e){
  var _this = this;
  wx.showActionSheet({
    itemList: ['拍照','从相册选取'],
    success: function (res) {
      if (res.tapIndex == 0) {
          wx.chooseImage({
            sourceType: ['camera'],
            success: function (res) {
              _this.setData({
                tempFilePaths: res.tempFilePaths
              })
            }
          })
      } else {
        wx.chooseImage({
          sourceType: ['album'],
          success: function (res) {
            _this.setData({
              tempFilePaths: res.tempFilePaths
            })
          }
        })
      }
    }
  })
},

//清空昵称
rest(e){
  this.setData({
    nickname:''
  })
},
//存入快照
snap(e){
  var sco = this;
  sco.fetch('YS_objb');
},
//修改密码

  editpwd: function (e) {
    var sco = this;

    // sco.data.YS_obja.params.yspassword = YSfac.MD5(sco.data.YS_obja.params.oldpassword);
    // sco.data.YS_obja.params.yspassword = YSfac.MD5(sco.data.YS_obja.params.newpassword);
    sco.fetch('YS_obja');
  },

 


  //上传单张头像
  upheadimg: function (e) {

    const qiniuUploader = require("qiniuUploader.js");
    var that = this
    var obj = e.currentTarget.dataset.key//例.bindtap="upheadimg" data-key="YS_objb.params.headimg"
    // console.log(obj)
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {

        YSfac.load(1, '正在上传……');

        var filePath = res.tempFilePaths[0];

        qiniuUploader.init({
          region: 'SCN',
          uploadURL: 'https://upload-z2.qiniup.com/',
          domain: 'http://p5u15xcze.bkt.clouddn.com/',
          uptoken: that.data.qiniuinfo.token,
        });

        qiniuUploader.upload(filePath, (re) => {
         
          // console.log(re);
          if (re.key) {
            var a={};
            a[obj] = re.imageURL;
           that.setData({
             headimg: re.imageURL,
              })
            that.setData(a)
           that.fetch("YS_objb")
          } else {
            wx.showToast({
              title: '上传失败',
              icon: 'fail',
              duration: 2000
            });
          }

          YSfac.load();
        }, (error) => {
          YSfac.load();


        })
        setTimeout(function () {
          wx.hideLoading();
        }, 8000);

      }
    })
  },
  //x修改手机验证码
  editphonecode() {
   var sco = this

    if (!sco.data.YS_obja.params.tel || sco.data.YS_obja.params.tel == '') {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    //验证码倒数
    sco.getCode();


    sco.data.YS_objb.params.tel = sco.data.YS_obja.params.tel;
    sco.fetch('YS_objb');


    sco.setData({
      disabled: true
    })

  },
getfocus(e){
  this.setData({
    focus:true
  })
},
losefocus(e){
  this.setData({
    focus: false
  })
},
ch_notice(e){
  
 this.setData({
   ctemobj: e.currentTarget.dataset.child,
   cltemobj: e.currentTarget.dataset.ctl,
    'YS_obja.params.noticetype':e.currentTarget.dataset.id,
   'YS_obja.params.noticestr': e.currentTarget.dataset.name
 })

},
ch_work(e){
  this.setData({
    'YS_obja.params.worktype':e.currentTarget.dataset.id,
    'YS_obja.params.workstr': e.currentTarget.dataset.name,
  })
},
addre(e){
  wx.navigateTo({
    url: '../../pages/addrelease/addrelease',
  })
  this.setData({
      tapshow: 0
    })
 
    
 
  
},

  //删除个人建筑圈弹窗
  detearictl: function (e) {
    var sco = this;
    var jzqid = e.currentTarget.dataset.id;
    sco.data.YS_objc.params.id = jzqid;
    wx.showModal({
      title: '',
      content: '您确定删除该条建筑圈么？',
      success: function (res) {
        if (res.confirm) {
          sco.fetch('YS_objc');

        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
  // 删除个人文章弹窗
  detearictl_a: function (e) {
    var sco = this;
    var wzid = e.currentTarget.dataset.id;
    sco.data.YS_objb.params.id = wzid;
    wx.showModal({
      title: '',
      content: '您确定删除这篇文章么？',
      success: function (res) {
        if (res.confirm) {
          sco.fetch('YS_objb');

        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

jzqshare(e){
  var jzqshare = e.currentTarget.dataset.key;
  var id = e.currentTarget.dataset.id;
  var des = e.currentTarget.dataset.des;
  YSfac.setstore('jobcodeid',id);
  
  if (!e.currentTarget.dataset.id){
    id="";
  }
  if (!e.currentTarget.dataset.des) {
    des = "";
  }
  this.setData({
    jzqshare: jzqshare,
    hbcodeid:id,
    sharet: des,
  })
  
 
},

addsharenum(e){
   var sco = this;
  sco.data.YS_objc.params.jobcodeid = e.currentTarget.dataset.id;
  sco.fetch("YS_objc")
},




jdgotohb(e) {
    var sco = this;
    var id = e.currentTarget.dataset.id;
    var rpx;

    wx.navigateTo({
      url: '../../pages/haibao/haibao?jobcodeid=' + id,
    });

    wx.getImageInfo({
      src: YSfac.getstore('logininfo').avatarUrl,
      success: function (res) {
        YSfac.setstore('myheadimg', res.path)
      }
    });
    wx.getSystemInfo({
      success: function (res) {
        rpx = res.windowWidth / 375;
        sco.setData({
          myrpx: rpx,
        })
      },
    })
  },
gotohb(e){
  var sco = this;
  var id = sco.data.hbcodeid;
  var rpx;
  
   wx.navigateTo({
     url: '../../pages/haibao/haibao?jobcodeid='+id,
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   });
   wx.getSystemInfo({
    success: function (res) {
      rpx = res.windowWidth / 375;
      sco.setData({
        myrpx:rpx,
      })
    },
  })
},



choosemb(e){
  let sco = this;
    sco.setData({
    hbon:e.currentTarget.dataset.value
  })
  var cmb = e.currentTarget.dataset.mb;
  YSfac.setstore('mb',cmb);
 
  sco.schaibao()
 
},

schaibao(e){
  let sco = this;
  let rpx
  let mbbg
  let head
  wx.getImageInfo({
    src: YSfac.getstore('mb'),
    success: function (ress) {
     mbbg= ress.path
    }
  });

  wx.getImageInfo({
    src: YSfac.getstore('hbinfo').head,
    success: function (ress) {
      head = ress.path
    },
    fail:function(){
      
    }
  });
  setTimeout(function () {
  const ctx = wx.createCanvasContext('haibao');
  ctx.clearRect(0, 0, 0, 0);  
  // 获取屏幕宽度，获取自适应单位
  wx.getSystemInfo({
    success: function (res) {
      rpx = res.windowWidth / 375;
      
    },
  })
  // '../../pages/image/hbmuban.png'
ctx.drawImage(mbbg, 0, 0, 247 * rpx, 440 * rpx);
  
// 绘制标题
  ctx.setFillStyle('rgb(170,147,113)')
  let [bcontentLeng, bcontentArray, bcontentRows] = YSfac.texthh(YSfac.getstore('hbinfo').tag, 12);
  ctx.setTextAlign('center')
  ctx.setFontSize(30);
  let bcontentHh = 25 * 1.3; //设置行高
  for (let m = 0; m < bcontentRows; m++) {
    ctx.fillText(bcontentArray[m], 125 * rpx, 38 * rpx + bcontentHh * m);
  }

// 绘制内容
  ctx.setTextAlign('left')
  ctx.setFillStyle('rgb(170,147,113)')
    let [contentLeng, contentArray, contentRows] = YSfac.texthh(YSfac.getstore('hbinfo').des, 26);
  ctx.setTextAlign('left')
  ctx.setFontSize(12);
  let contentHh = 16 * 1.3; //设置行高
  if (contentRows>9){
    contentRows = 9;
    contentArray[8] = contentArray[8] + '...';
  }
  for (let m = 0; m < contentRows; m++) {
    ctx.fillText(contentArray[m], 47*rpx, 155*rpx + contentHh * m);
  }
  
// 绘制昵称
  ctx.setTextAlign('left')
  ctx.setFontSize(10);
  ctx.setFillStyle('rgb(255,255,255)')
  ctx.fillText('我是 ' + YSfac.getstore('hbinfo').name, 72*rpx, 402*rpx);

  ctx.setTextAlign('left')
  ctx.setFontSize(10);
  ctx.setFillStyle('rgb(255,255,255)')
  ctx.fillText("我已加入“建筑圈”,扫一扫联系我吧", 72 * rpx, 422 * rpx);

// 绘制二维码
  ctx.save();
  ctx.beginPath();
  let r2 = 26*rpx;
  let d2 = r2 * 2;
  let cx2 = 15 * rpx;
  let cy2 = 382 * rpx;
  ctx.arc(cx2 + r2, cy2 + r2, r2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(YSfac.getstore("jobqrcode"), cx2, cy2, d2, d2);
  ctx.restore();

// 绘制二维码头像
  ctx.save();
  ctx.beginPath();
  let sr = 12 * rpx;
  let sd = sr * 2;
  let scx = 29 * rpx;
  let scy = 396 * rpx;
  ctx.arc(scx + sr, scy + sr, sr, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(head, scx, scy, sd, sd);
  ctx.restore();
 
  
  ctx.draw();
  },1000);
  // setTimeout(function () {
  // wx.canvasToTempFilePath({
  //   x: 0,
  //   y: 0,
  //   width: 750,
  //   height: 1334,
  //   fileType: 'png',
  //   canvasId: 'haibao',
  //   success: function (res) {
  //     YSfac.setstore('temhbimg', res.tempFilePath)
  //   }
  // })
  // },600);
 
},
// 长按保存
longsave(e){
  var sco =this
 wx.showModal({
   title: '',
   content: '是否保存到相册',
   confirmText: '保存',
   success: function (res) {
     if (res.confirm) {
       sco.savelocal()
     } else if (res.cancel) {
       // console.log('用户点击取消')
     }
   }
 })

},
  //保存图片至相册
savelocal: function (e) {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 750,
      height:1334,
      fileType: 'png',
      canvasId: 'haibao',
      success: function (res) {
        // console.log("get tempfilepath(success) is:", res.tempFilePath)
        //将图片保存在系统相册中(应先获取权限，)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon:'none'
            })
          },
          fail: function () {
            console.log("save photo is fail")
          }
        })
      },
      fail: function () {
        console.log('get tempfilepath is fail')
      }
    })
   
},


gohome(e){
  wx.switchTab({
    url: '../../pages/findjob/findjob'
  })
},


// 贾仕通事件代码









































































// 池家昊事件代码
  tel: function (e) {
    // wx.makePhoneCall({
    //   phoneNumber: e.currentTarget.dataset.tel,
    // })
    wx.showModal({
      title: '温馨提示',
      content: '联系我时，请说是在“河狸建筑”看到的，对方沟通过程中若向你收费，请举报！',
      confirmText:'拨打电话',
      success: function (res) {
        if (res.confirm) {
           wx.makePhoneCall({
           phoneNumber: e.currentTarget.dataset.tel,
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

  setTapshow:function(e){
    var sco = this; 
    var tap = e.currentTarget.dataset.tap;
    if(e.currentTarget.dataset.tap==this.data.tapshow){tap = 0};
    sco.setData({
      tapshow : tap
    })
  },

  //监听picker
  bindSalaryChange(e){

    var sco = this;
    var salaryValue = this.data.salary[e.detail.value];
    this.data.YS_obja.params.salary = salaryValue['name'];
    this.data.YS_obja.params.salaryid = salaryValue['id'];
    this.setData({
      'salaryValue': salaryValue['name']
    })


    // console.log(this.data.YS_obja);

  },


  // //监听picker
  // bindgangweiChange(e){

  //   var sco = this;
  //   var gangweiValue = this.data.gangwei[e.detail.value];
  //   this.data.YS_obja.params.zhuleiid = gangweiValue['id'];
  //   this.setData({
  //     'gangweiValue': gangweiValue['name'],
  //     'gongzhongValue':''
  //   })


  //   //获取工种信息
  //  this.data.YS_obje.params = {cate:'zilei',pid:gangweiValue['id']};
  //  this.fetch('YS_obje');


  //   console.log(this.data.YS_obja);

  // },


  //监听picker
  bindgongzhongChange(e){

    var sco = this;
    var gongzhongValue = this.data.gongzhong[e.detail.value];
    this.data.YS_obja.params.worktype = gongzhongValue['id'];
    this.data.YS_obja.params.title = gongzhongValue['name'];
    this.setData({
      'gongzhongValue': gongzhongValue['name'],
      'YS_obja.params.title': gongzhongValue['name']
    })


    // console.log(this.data.YS_obja);

  },


  //监听picker
  bindTagsChange(e){

    var sco = this;
    var TagsValue = this.data.Tags[e.detail.value];
    this.data.YS_obja.params.zileiid = TagsValue['id'];
    this.setData({
      'TagsValue': TagsValue['name']
    })


    // console.log(this.data.YS_obja);

  },




  //添加工作
  add_job(){
    var sco = this;

    if(this.data.tapshow==0&&(!this.data.YS_obja.params.companyName||this.data.YS_obja.params.companyName=="")){
      wx.showToast({
        title: '公司名称不能为空',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    if(this.data.tapshow==1&&(!this.data.YS_obja.params.prname||this.data.YS_obja.params.prname=="")){
      wx.showToast({
        title: '工程名称不能为空',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if(!this.data.YS_obja.params.salary||this.data.YS_obja.params.salary==""){
      wx.showToast({
        title: '请选择薪资范围',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if(!this.data.YS_obja.params.worktype||this.data.YS_obja.params.worktype==""){
      wx.showToast({
        title: '请选择岗位类别',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    if(!this.data.YS_obja.params.title||this.data.YS_obja.params.title==""){
      wx.showToast({
        title: '请填写职位名称',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    if(!this.data.YS_obja.params.province_id||this.data.YS_obja.params.province_id==""){
      wx.showToast({
        title: '请选择省份',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if(!this.data.YS_obja.params.city_id||this.data.YS_obja.params.city_id==""){
      wx.showToast({
        title: '请选择城市',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    if(!this.data.YS_obja.params.contact||this.data.YS_obja.params.contact==""){
      wx.showToast({
        title: '请填写联系人',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    if(!this.data.YS_obja.params.tel||this.data.YS_obja.params.tel==""){
      wx.showToast({
        title: '请填写联系电话',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if(!this.data.YS_obja.params.description||this.data.YS_obja.params.description==""){
      wx.showToast({
        title: '请填写描述',
        icon: 'none',
        duration: 1000
      });
      return false;
    }






    sco.fetch('YS_obja');

  },


chooseImage: function (e) {
  var key = e.currentTarget.dataset.key;
    const qiniuUploader = require("qiniuUploader.js");
    var that = this
    wx.chooseImage({
       count: 1, // 默认9
       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        
        YSfac.load(1,'正在上传……');
 
 var filePath = res.tempFilePaths[0];

qiniuUploader.init({ 
region: 'SCN', 
uploadURL:'https://upload-z2.qiniup.com/', 
domain:'http://p5u15xcze.bkt.clouddn.com/',
uptoken: that.data.qiniuinfo.token, 
});

qiniuUploader.upload(filePath, (re) => { 
          // console.log(re); 
if(re.key){
   var a = {};
   a[key] = re.imageURL;
    if(Array.isArray(that.data.picturearr)){
      that.data.picturearr.push(re.imageURL);
         that.setData({
          'picturearr': that.data.picturearr,
        })
    }
   that.setData({
          'uploadPicUrl': re.imageURL,
          'userinfo.photourl': re.imageURL,
          'YS_objb.params.certurl':re.imageURL,
          'YS_obja.params.sinimg':re.imageURL,
        })
        that.setData(a)
}else{
wx.showToast({
        title: '上传失败',
        icon: 'fail',
        duration: 2000
      });
}

          YSfac.load();
        }, (error) => { 
          YSfac.load();
        

        })

 



            setTimeout(function(){
               wx.hideLoading(); 
            },8000);  

      }
    })
  },




  didPressChooseImage: function() {
 
    const qiniuUploader = require("qiniuUploader.js");
    var that = this;
 // console.log(that.data.qiniuinfo.token);


    wx.chooseImage({
 
      count: 1,
 
      success: function (res) {
 
        var filePath = res.tempFilePaths[0];
 
        qiniuUploader.upload(filePath, (res) => {
 
          that.setData({
 
            'userinfo.photourl': res.imageURL,
            'uploadPicUrl': res.imageURL,
 
          });
 
        }, (error) => {
 
          // console.log('error: ' + error);
 
        }, {
          region: 'SCN', 

          uploadURL:'https://upload-z2.qiniup.com/', 
 
          domain: 'http://p5u15xcze.bkt.clouddn.com/',
 
          uptokenURL: that.data.qiniuinfo.token,
 
        })
 
      }
    });
  },



  add_tag:function(e){
    var sco = this;

    sco.fetch('YS_obja');
  },


  choice_tag:function(e){
    var sco =this;
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    var temptagarr = YSfac.getstore('temptagarr')?YSfac.getstore('temptagarr'):[];



    sco.data.taglist.map(function(elem,index){
      if(elem.id==id){
        if(elem.myclass == 'active'){
          elem.myclass = '';

          for(var i=0; i<temptagarr.length; i++) {
            if(temptagarr[i].name == elem.name) {
              temptagarr.splice(i, 1);
              break;
            }
          }

        }else{

          if(temptagarr.length==3){
            wx.showToast({
              title: '最多只能选择3个标签',
              icon: 'none',
              duration: 1000
            });
            return false;
          }

          elem.myclass = 'active';
          temptagarr.push(elem);
        }
        
        YSfac.setstore('temptagarr',temptagarr);
      }
    });

    this.setData({
      'taglist': sco.data.taglist
    })

    // console.log(temptagarr);


  },


  confirm_tag:function(e){
    var sco =this;

      wx.showToast({
        title: '成功!',
        icon: 'none',
        duration: 1000
      });
      setTimeout(function () {
        wx.navigateBack();
      }, 1000)
  },





  add_ace:function(e){
    var sco =this;

    if (!this.data.YS_obja.params.worktype || this.data.YS_obja.params.worktype == "") {
      wx.showToast({
        title: '请选择期望的岗位',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    if (!this.data.YS_obja.params.province_id || this.data.YS_obja.params.province_id == "") {
      wx.showToast({
        title: '请选择省份',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if (!this.data.YS_obja.params.city_id || this.data.YS_obja.params.city_id == "") {
      wx.showToast({
        title: '请选择城市',
        icon: 'none',
        duration: 1000
      });
      return false;
    }
    if (!this.data.YS_obja.params.salary || this.data.YS_obja.params.salary == "") {
      wx.showToast({
        title: '请选择期望的工资',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if (!this.data.YS_obja.params.contact || this.data.YS_obja.params.contact == "") {
      wx.showToast({
        title: '请填写联系人',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    if (!this.data.YS_obja.params.tel || this.data.YS_obja.params.tel == "") {
      wx.showToast({
        title: '请填写联系电话',
        icon: 'none',
        duration: 1000
      });
      return false;
    }


    if (!this.data.YS_obja.params.description || this.data.YS_obja.params.description == "") {
      wx.showToast({
        title: '请填写描述',
        icon: 'none',
        duration: 1000
      });
      return false;
    }
    // console.log(sco.data.YS_obja.params);

    sco.fetch('YS_obja');
  },



  //提交任务进度
  add_sgjd:function(e){
    var sco =this;

    if(sco.data.picturearr.length<1){
      wx.showToast({
        title: '请上传图片',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    if(!sco.data.YS_obja.params.content||sco.data.YS_obja.params.content==''){
      wx.showToast({
        title: '请输入施工进度',
        icon: 'none',
        duration: 1000
      });
      return false;      
    }

    if(!sco.data.YS_obja.params.type||sco.data.YS_obja.params.type==''){
      wx.showToast({
        title: '请选择类型',
        icon: 'none',
        duration: 1000
      });
      return false;      
    }



    sco.data.YS_obja.params.picture = sco.data.picturearr.join(';');

    // console.log(sco.data.YS_obja.params);

    sco.fetch('YS_obja');
    
  },




  bindsgriqiChange:function(e){
    var sco = this;
    var currentday = YSfac.numtotime(new Date().getTime());
    // console.log(currentday)
    // var currentday = e.
    // sco.data.YS_listb.data.map(function(elem){
    //   if(elem.tid == sco.data.currentTid)
    //     elem.sgriqi = e.detail.value;
    // })

    // this.setData({
    //   'sco.data.YS_listb':sco.data.YS_listb
    // })
   sco.data.YS_objb.params.tid =e.currentTarget.dataset.tid;

    // sco.data.YS_objb.params.tid = sco.data.currentTid;
    sco.data.YS_objb.params.sgriqi = e.detail.value;
    if (e.detail.value>currentday){
      wx.showToast({
        title: '施工时间，应该为今天或今天之前的日期！',
        icon:'none'
        
      })
      return false
    }
    sco.fetch('YS_objb');
  },


imageInstead: function (e) {
    const qiniuUploader = require("qiniuUploader.js");
    var that = this
    wx.chooseImage({
       count: 1, // 默认9
       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        
        YSfac.load(1,'正在上传……');
 
 var filePath = res.tempFilePaths[0];

qiniuUploader.init({ 
region: 'SCN', 
uploadURL:'https://upload-z2.qiniup.com/', 
domain:'http://p5u15xcze.bkt.clouddn.com/',
uptoken: that.data.qiniuinfo.token, 
});

qiniuUploader.upload(filePath, (re) => { 
          // console.log(re); 
if(re.key){

    if(Array.isArray(that.data.picturearr)){

      that.data.picturearr.map(function(elem,index){
        if(index==e.currentTarget.dataset.index){
          that.data.picturearr[index] = re.imageURL;
        }
      });

         that.setData({
          'picturearr': that.data.picturearr,
        })
    }

}else{
wx.showToast({
        title: '上传失败',
        icon: 'fail',
        duration: 2000
      });
}

          YSfac.load();
        }, (error) => { 
          YSfac.load();
        

        })

 



            setTimeout(function(){
               wx.hideLoading(); 
            },8000);  

      }
    })
  },

  appLogin:function(e){
    var sco =this;
if(sco.data.YS_obja.params.type=='password'){
 sco.data.YS_obja.params.yspassword = YSfac.MD5(sco.data.YS_obja.params.password);
}
   
    
    sco.fetch('YS_obja');
  },

  getCode: function (e){
    var sco = this;
    var currentTime = sco.data.currentTime
    var interval = setInterval(function () {
      currentTime--;
      sco.setData({
        time: currentTime+'秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        sco.setData({
          time: '获取验证码',
          currentTime:61,
          disabled: false   
        })
      }
    }, 1000)  
  },
  getVerificationCode(){
    var sco = this;


    if(!sco.data.YS_obja.params.phone||sco.data.YS_obja.params.phone==''){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    //验证码倒数
    sco.getCode();


    sco.data.YS_objb.params.tel = sco.data.YS_obja.params.phone;
    sco.fetch('YS_objb');


    sco.setData({
      disabled:true
    })
  },

  getVef(){
    var sco = this;


    if(!sco.data.YS_obja.params.ysusername){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    //验证码倒数
    sco.getCode();


    sco.data.YS_objb.params.tel = sco.data.YS_obja.params.ysusername;
    sco.fetch('YS_objb');


    sco.setData({
      disabled:true
    })
  },

  //注册
  submit_reg:function(e){
    var sco =this;

    if(!sco.data.YS_obja.params.phone||sco.data.YS_obja.params.phone==''){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    if(!sco.data.YS_obja.params.msgcode||sco.data.YS_obja.params.msgcode==''){
      wx.showToast({
        title: '请输入验证码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }  
   
    if(!sco.data.YS_obja.params.regpsd||sco.data.YS_obja.params.regpsd==''){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1000
      });
      return false;
    }   

    sco.fetch('YS_obja');

  },


  //保存工程子单位信息
  saveProsingle:function(e){
    var sco = this;
    var i = YSfac.getstore('index');
    var data = YSfac.getstore('addProData');
    var singles = data.single;
    sco.data.nowsgitems.jiegou = parseInt(sco.data.prolxindex) +1;


    if(!sco.data.nowsgitems.cengshu||sco.data.nowsgitems.cengshu==''){
      wx.showToast({
        title: '请设置地上层数',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

   if(sco.data.nowsgitems.cengshu>80){
      wx.showToast({
        title: '地上层数不能大于80层',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

   if(sco.data.nowsgitems.dxcengshu>20){
      wx.showToast({
        title: '地下层数不能超过20层',
        icon: 'none',
        duration: 1000
      });
      return false;
    }

    if(!sco.data.nowsgitems.dxcengshu||sco.data.nowsgitems.dxcengshu==''){
      wx.showToast({
        title: '请设置地下层数',
        icon: 'none',
        duration: 1000
      });
      return false;
    }



    // console.log(sco.data.prolxindex);
    // console.log(sco.data.nowsgitems);

    singles.map(function(elem,index){
      if(index == i){
        singles[index] = sco.data.nowsgitems;
      }

    })

    data.single = singles;


    YSfac.setstore('addProData',data);

    wx.showToast({
      title: '保存成功',
      icon: 'none',
      duration: 1000
    });

    setTimeout(function(){
      wx.navigateBack();
    },1000)

    // console.log(data);
  },

  //保存工程子单位信息
  delProsingle:function(e){
    var sco = this;
    var i = YSfac.getstore('index');
    var data = YSfac.getstore('addProData');
    var singles = data.single;

    singles.map(function(elem,index){
      if(index == i){
        singles.splice(index,1);
      }
    }) 

    data.single = singles;

    YSfac.setstore('addProData',data);

    wx.showToast({
      title: '删除成功',
      icon: 'none',
      duration: 1000
    });

    setTimeout(function(){
      wx.navigateBack();
    },1000)

    // console.log(data);

  },


  //添加工程子单位信息f

  addProsingle:function(e){
    var sco = this;
    var data = YSfac.getstore('addProData');
    var singles = data.single;
    var obj = {
      "checkde": false,
      "sname": "",
      "cengshu": "",
      "dxcengshu": "",
      "jiegou": 1,
      "jichu": "",
      "zhuti": ""
    }

    singles.push(obj);

    YSfac.setstore('addProData',data);

    sco.setData({
      'sgitems':singles
    })

    wx.showToast({
      title: '添加成功',
      icon: 'none',
      duration: 1000
    });
  },


  sumbit_Program:function(e){
    var sco = this;
    var data = YSfac.getstore('addProData');
    var hasfalse = false;

    data.cityid = data.city_id;
    data.pid = data.province_id;


    data.single.map(function(elem,index){
      if(elem.sname==''){
        wx.showToast({
          title: '请设置子单位名称',
          icon: 'none',
          duration: 1000
        });
        hasfalse = true;
      }

      if(elem.cengshu==''){
        wx.showToast({
          title: '请设置'+elem.sname+'的地上层数',
          icon: 'none',
          duration: 1000
        });
        hasfalse = true;        
      }

         if(elem.cengshu>80){
      wx.showToast({
        title: elem.sname+'地上层数不能大于80层',
        icon: 'none',
        duration: 1000
      });
      hasfalse = true;
    }

   if(elem.dxcengshu>20){
      wx.showToast({
        title: elem.sname+'地下层数不能超过20层',
        icon: 'none',
        duration: 1000
      });
      hasfalse = true;
    }

      if(elem.dxcengshu==''){
        wx.showToast({
          title: '请设置'+elem.sname+'的地下层数',
          icon: 'none',
          duration: 1000
        });
        hasfalse = true;        
      }




      var cs = parseInt(elem.cengshu);
      var dxcs = parseInt(elem.dxcengshu);
      var jg = elem.jiegou; 

      //基础
      data.single[index].jichu = sco.data.jichu.join(';');
      //主体
      var arr = sco.setceng(cs,dxcs,jg);
      data.single[index].zhuti = arr.join(';');



    })

    if(hasfalse)return false;


    sco.data.YS_obja.params = data;

    sco.fetch('YS_obja');


  },
  delimg:function(e){ //添加模块的，删除图片

    // console.log(this.data.picturearr);

    this.data.picturearr.splice(e.currentTarget.dataset.id,1);
    this.setData({picturearr:this.data.picturearr}); 
  }, 
  delimg2: function (e) { //添加模块的，删除图片

    this.data.picturearr2.splice(e.currentTarget.dataset.id, 1);
    this.setData({ picturearr2: this.data.picturearr2 });
  },

  scrollToViewFn: function (e) {
    this.setData({
      toView: 'inToView'
    })
    // console.log(this.data.toView)
  },


 logout:function(e){
  var sco = this;
  sco.data.YS_objd.params.wxappopenid = YSfac.getstore('logininfo').wxappopenid;

  sco.fetch('YS_objd');
 },

  previewImage: function (e) {  //图片查看
    var current = e.target.dataset.src;
    var listname = e.target.dataset.list;
    var arr = [];
   

    if(listname){
      wx.previewImage({
        current: current,
        urls: this.data.listname
      })  
    }else{
      // arr.push(current);
      wx.previewImage({
        current: current,
        urls: e.target.dataset.arr
      })      
    }

  },

  //已送漏送转换
  ysls:function(e){
    var sco =this;
    var tid = e.currentTarget.dataset.tid;
    sco.data.YS_objb.params.codeid = e.currentTarget.dataset.codeid;
    sco.data.YS_objb.params.byys = e.currentTarget.dataset.byys?0:1;

    if(e.currentTarget.dataset.inter == 'by.lslist'){
      sco.data.YS_lista.data.by.lslist.map(function(elem,index){
        if(elem.tid==tid){
          sco.data.YS_lista.data.by.lslist[index].byys = elem.byys?0:1;
        }
      })
    }



    sco.setData({
      'sco.data.YS_lista' :sco.data.YS_lista
    })

    

    sco.fetch('YS_objb');

    // console.log(e);
  },
//检查是否去 --邀请加入工程     
chkloginInvite:function(cb){
  var sco = this;
      //调用登录接口
    
     
      wx.login({
        success: function (re) {
            wx.getUserInfo({
              withCredentials: true,
            success: function (res) {
              res.userInfo.code = re.code;  
              // console.log(res);
              sco.setData({
                avatarUrl: res.avatarUrl,
                nickName: res.nickName,
              })

            //  wx.showToast({
            //   title:'登录中…',
            //   icon: 'none',
            //   duration: 2000
            // });

            //初始化配置接口参数
            sco.data.com_obja.url = 'api/open/miniapplogin'; 
            sco.data.com_obja.method = 'POST';
            sco.data.com_obja.params = res.userInfo;
            if(YSfac.getstore('fromuid')){
              sco.data.com_obja.params.fromuid = YSfac.getstore('fromuid'); 
            }
            if(YSfac.getstore('ftype')){
              sco.data.com_obja.params.fromtype = YSfac.getstore('ftype'); 
            }
            
            sco.data.com_obja.done = function(ret,sco){ 
             if(ret.code ==1 ){
              res.userInfo.uid = ret.data.uid; 
              res.userInfo.phone = ret.data.phone;
              res.userInfo.token = ret.data.token;
              res.userInfo.unionid = ret.data.unionid;
              res.userInfo.wxappopenid = ret.data.wxappopenid;
              sco.resetlgdata(res.userInfo);  //重置登陆信息 
               // sco.opensock();//登陆成功，调用
              typeof cb == "function" && cb(res.userInfo); 
             }else if(ret.code ==2 ){
                res.userInfo.uid = ret.data.uid;
                res.userInfo.phone = ret.data.phone;
                res.userInfo.wxappopenid = ret.data.wxappopenid;
                res.userInfo.unionid = ret.data.unionid;
                res.userInfo.token = ret.data.token;
                sco.resetlgdata(res.userInfo);  //重置登陆信息 
                // console.log(res.userInfo);
                  wx.navigateTo({url: '/pages/user/user'});
               } 
            }

//看是否给地理位置
// if(YSfac.getstore('location')!=1){
//  sco.chklocation();
//  return false;
// }
// sco.data.com_obja.params.latitude = sco.data.userinfo.latitude;
// sco.data.com_obja.params.longitude = sco.data.userinfo.longitude; 
sco.fetch('com_obja');
 

 },
            fail:function(re){  
              sco.resetlgdata();//重置登陆信息
              // 去授权页面
              wx.showModal({
                title: '提 示',
                content: '请先进行登陆授权才可以使用该功能，点“确定”进入授权管理。',
                success: function (res) {
                 if (res.confirm) { 
                    wx.navigateTo({url: '../auth/auth'});
                 }else{
                    sco.setData({
                      ysq:false
                    })

                 }
                }
               }); 
              // console.log('getUserInfo未授权',re);  
            }
          })      
          
          }
      });


},


//建筑圈
favorite_tap:function(e){
  var sco = this;
  var id = e.currentTarget.dataset.id;
  sco.data.YS_plista.params = {curPage:1,listnum:5};
  sco.data.YS_lista.data = [];

  sco.data.favorite.map(function(elem,index){
    sco.data.favorite[index]['myclass'] = '';
    if(elem.id==id){
      sco.data.favorite[index]['myclass'] = 'on';
      sco.data.YS_plista.params.worktype = elem.worktype;
      sco.data.YS_plista.params.noticetype = elem.noticetype;
      sco.data.YS_plista.params.province_id = elem.province_id;
      sco.data.YS_plista.params.city_id = elem.city_id;
    }
  })

  sco.setData({
    favorite:sco.data.favorite
  });

  sco.fetch('YS_plista');
  // console.log(sco.data.YS_plista);
},


//删除喜欢
del_favorite:function(e){
  var sco = this;
  var id = e.currentTarget.dataset.id;

  sco.data.YS_obja.params.id = id;

  sco.fetch('YS_obja');
},

//添加部位
singleaddsj:function (ev) {
  var sco = this;
  var sd = {};
  sd.prcodeid = YSfac.getstore('procodeid');
  sd.codeid = sco.data.YS_objc.data.codeid; 
  sd.scodeid = YSfac.getstore('sgcodeid');
  sd.bybuwei = '部位-新增';
  sd.byriqi = '';
  sd.bytime = '';
  sd.fidarr = [];
  sd.byys = 0;
  sd.byornot = 1;
  sd.tyornot = 0;
  sd.ksornot = 0;
  sd.ztornot = 0;
  sd.cmornot = 0;
  sd.dzornot = 0;
  sd.qzornot = 0;
  sd.wqornot = 0;
  sd.nqornot = 0;
  sd.zpornot = 0;
  sd.isdel = 0;
  sd.ischk = 0;
  // console.log(sd);

  sco.data.YS_objd.params = sd;
  sco.data.YS_objd.done = function(re,sco){

if(re.code==1){ 
                sd.codeid = re.data.codeid;
                delete sd.prcodeid;
                delete sd.scodeid; 
              sco.data.YS_objc.data.datalist.push(sd); 

              sco.setData({'YS_objc.data.datalist':sco.data.YS_objc.data.datalist});
                } 

    YSfac.msg(re);
  }
  sco.fetch('YS_objd'); 
},
  //部位弹窗
  buweitc: function (e) {
    var system = 'iOS';
    try {
      var rest = wx.getSystemInfoSync()
      if (rest.system.indexOf('iOS') == -1) {
        system = 'android';
      }
    } catch (e) {

    }
    var arr = system == 'iOS' ? ['编辑', '删除'] : ['编辑', '删除', '取消'];
    var sco = this;
    var bwcodeid = e.currentTarget.dataset.id;
    sco.data.YS_obje.params.codeid = bwcodeid;
    wx.showActionSheet({
      itemList: arr,//显示的列表项
      
      success: function (res) {//res.tapIndex点击的列表项
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '../../pages/addbuwei/addbuwei?bwcodeid=' + bwcodeid,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },

          })
          sco.fetch('YS_listb')
        } else if(res.tapIndex == 1){
          wx.showModal({
            title: '',
            content: '您确定删除该施工机械吗。',
            success: function (res) {
              if (res.confirm) {
                sco.fetch('YS_obje');

              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { }
    })
  },
  bindqiangduChange: function (e) {
    var sco = this;
    sco.data.YS_obja.params.byqiangdu = sco.data.qdtypelist[e.detail.value]['t'];
    sco.setData({
      'YS_objb.data.byqiangdu' : sco.data.qdtypelist[e.detail.value]['t']
    })

    // console.log(sco.data.YS_obja.params);
  },


  bindbytimeChange: function (e) {
    var param = 'YS_obja.params.' + e.currentTarget.dataset.paramname;
    var a = {};
      a[param] = e.detail.value;
      a[e.currentTarget.dataset.time] = e.detail.value;

    this.setData(a);
  },


formSubmit: function (e) {

  var sco = this;
  sco.data.YS_obje.params.appfromid = e.detail.formId;

  sco.fetch('YS_obje');
  console.log(e) 

},


nav_job: function (e) {

  var sco = this;
  var url = '/pages/' + e.currentTarget.dataset.url + '/' + e.currentTarget.dataset.url;
  if(sco.data.YS_listf.data.code == -1){
    wx.navigateTo({url: '/pages/auth/auth'})
  }else{
    wx.navigateTo({url: url})
  }
  // console.log(sco.data.YS_listf);

},






// 池家昊事件代码









  //复选框
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    // console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    // console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    // console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  bindjxlxChange(e){
  
    this.setData({
      jxindex: e.detail.value,
      'YS_obja.params.jixielx': e.detail.value,
    })
  },
  bindprolxChange(e){
    this.setData({
      prolxindex:e.detail.value,
      'YS_obja.params.jiegou':e.detail.value,
    })
  },
  bindbegChange(e){
    this.setData({
      begtime:e.detail.value,
      'YS_objb.params.kaigong': e.detail.value,
      'YS_obja.params.begintime': e.detail.value,
      'YS_objc.params.begintime': e.detail.value,
      'YS_objc.data.begintime': e.detail.value,
    })
  },
  bindendChange(e) {
    this.setData({
      endtime: e.detail.value,
      'YS_objb.params.jungong': e.detail.value,
      'YS_obja.params.endtime': e.detail.value,
      'YS_objc.params.endtime': e.detail.value,
      'YS_objc.data.endtime': e.detail.value,
    })
  },
  bindkgChange(e) {

    this.setData({
      kgtime: e.detail.value,
      'YS_obja.params.kaigong': e.detail.value,
    })
  },
  bindjgChange(e) {
    this.setData({
      jgtime: e.detail.value,
      'YS_obja.params.jungong': e.detail.value,
    })
  },
  bindsglxChange(e){
    var sgtype = e.detail.value -1 + 47;
    this.setData({
      sgindex:e.detail.value,
      'YS_obja.data.jiegou': e.detail.value,
      'YS_obja.params.jiegou': e.detail.value,
      'YS_objb.params.jiegou': e.detail.value,
      'YS_obja.params.type': sgtype,
      'YS_objf.data.jiegou': e.detail.value,
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // bindcsChange(e) {
  //   var index = this.data.cengshu[e.detail.value];
  //   console.log(index);
  //   this.setData({
  //     csindex: e.detail.value,
  //     'YS_obja.params.cengshu':index,
  //     'YS_objb.params.cengshu': index,

  //   })
  // },
  // binddxcsChange(e) {
  //   var index = this.data.dxcengshu[e.detail.value];
  //   this.setData({
  //     dxcsindex: e.detail.value,
  //     'YS_obja.params.dxcengshu':index,
  //      'YS_objb.params.dxcengshu':index,
  //   })
  // },
  bindjcDateChange(e){
    this.setData({
      jcdate:e.detail.value,
      'YS_obja.params.jcriqi': e.detail.value,
    })
  },
  bindztDateChange(e) {
    this.setData({
      ztdate: e.detail.value,
      'YS_obja.params.ztjgriqi': e.detail.value,
    })
  },
  bindqtDateChange(e) {
    this.setData({
      qtdate: e.detail.value,
      'YS_obja.params.sqzriqi': e.detail.value,
    })
  },
  bindzxDateChange(e) {
    this.setData({
      zxdate: e.detail.value,
      'YS_obja.params.zxriqi': e.detail.value,
    })
  },
  bindnqDateChange(e) {
    this.setData({
      nqdate: e.detail.value,
      'YS_obja.params.snqriqi': e.detail.value,
    })
  },
  bindwqDateChange(e) {
    this.setData({
      wqdate: e.detail.value,
      'YS_obja.params.swqriqi': e.detail.value,
    })
  },
  bindwmDateChange(e) {
    this.setData({
      wmdate: e.detail.value,
      'YS_obja.params.wmriqi': e.detail.value,
    })
  },
  bindyhChange(e){
    
    this.setData({
      'YS_obja.data.yanghu': e.detail.value,
      'YS_objb.params.yanghu': e.detail.value,
    })
  },
  bindregChange(e){
    var reg = e.detail.value;
   this.setData({
     reg:e.detail.value,
   })
   // console.log(reg)
  },




  swichNavAndFetch: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {

      if(e.target.dataset.inter=='YS_plista'){

        that.data.YS_plista.params.curPage = 1;
        that.data.YS_lista.data = [];
        this.fetch('YS_plista');
      }else if(e.target.dataset.inter=='YS_plistb'){

        that.data.YS_plistb.params.curPage = 1;
        that.data.YS_listb.data = [];
        this.fetch('YS_plistb');        
      }
      else if (e.target.dataset.inter == 'YS_plistc') {

        that.data.YS_plistb.params.curPage = 1;
        that.data.YS_listb.data = [];
        this.fetch('YS_plistc');
      }

      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  listqy: function (e) {
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        nzopen: false,
        fjopen:false,
        fjshow:true,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        pxopen: false,
        nzopen: false,
        fjopen:false,
        fjshow:true,
        nzshow: true,
        pxshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  list: function (e) {
    if (this.data.nzopen) {
      this.setData({
        nzopen: false,
        fjopen:false,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        fjshow: false,
        pxshow: true,
        qyshow: true,
        
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({ 
        nzopen: true,
        fjopen:true,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        fjshow: false,
        pxshow: true,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listpx: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    // console.log(e.target)
  },
  selectleft: function (e) {

    this.setData({
      cityright: {},
      // citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.provincename,
      select2: ''
    });

      var a = {};
      a['YS_listc.params.pid'] = e.target.dataset.pid;
      this.setData(a); 
       
      this.fetch('YS_listc');
    
  },
  selectcenter: function (e) {

      var a = {};
      a['YS_plista.params.curPage'] = 1;
      a['YS_plista.params.ctid'] = e.target.dataset.cityid;
      a['YS_lista.data'] = [];
      this.setData(a); 
       
      this.fetch('YS_plista');


    this.setData({
      // cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.cityname,
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: false,
      isfull: false,
      shownavindex: 0
    });



  },
  hidebg: function (e) {

    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },


  fetchInter: function (e) {
    var that = this;

      var a = {};
      if(e.target.dataset.key){
        a['YS_plista.params.curPage'] = 1;
        a[e.target.dataset.inter+'.params.'+e.target.dataset.key]  = e.target.dataset.value;
        a['YS_lista.data'] = [];
        this.setData(a); 
      }


      if(e.target.dataset.key=='worktype'){
        this.setData({
          nzopen: false,
          pxopen: false,
          qyopen: false,
          nzshow: false,
          pxshow: true,
          qyshow: true,
          isfull: false,
          shownavindex: 0,
        })
        this.setData({worktype:e.target.dataset.name});
      }else if(e.target.dataset.key=='jobtype'){
        this.setData({
          nzopen: false,
          pxopen: false,
          qyopen: false,
          nzshow: false,
          pxshow: true,
          qyshow: true,
          isfull: false,
          shownavindex: 0,
        })
        this.setData({jobtype:e.target.dataset.name});
      }


      this.fetch(e.target.dataset.inter);

  },
    click_thumb: function (e) {
      var sco = this; 
      var bool = 1;


      if(e.currentTarget.dataset.type=='news'){ //新闻
       sco.data.YS_objb.params = {'type':'news','id':e.currentTarget.dataset.newsid};
        // bool = sco.data.YS_obja.isthumb?0:1;
        // sco.setData({'YS_obja.isthumb':bool});
      }else{//评论
        // var currentcomment = sco.data.YS_lista.data[e.currentTarget.dataset.index];
        // var thumbnum = currentcomment.thumbnum;
        sco.data.YS_objb.params = {'type':'comment','id':e.currentTarget.dataset.newsid};
        // bool = currentcomment.isthumb?0:1;

        // if(currentcomment.isthumb){
        //   bool = 0;
        //   thumbnum--;
        // }else{
        //   bool = 1;
        //   thumbnum++;
        // }

        // var str1 = 'YS_lista.data['+e.currentTarget.dataset.index+'].isthumb';
        // var str2 = 'YS_lista.data['+e.currentTarget.dataset.index+'].thumbnum';
        // var temp = sco.data.YS_lista.data[e.currentTarget.dataset.index];


        // var a = {};
        // a[str1] = bool;
        // a[str2] = thumbnum;


        // sco.setData(a);
        
      } 


    sco.data.YS_objb.done = function(re,sco){

      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_objb');
          });
          return false;
        }
      YSfac.msg(re);

      if(re.code>0){
        if(e.currentTarget.dataset.type=='news'){ //新闻
          bool = sco.data.YS_obja.isthumb?0:1;
          sco.setData({'YS_obja.isthumb':bool});
        }else{//评论
          var currentcomment = sco.data.YS_lista.data[e.currentTarget.dataset.index];
          var thumbnum = currentcomment.thumbnum;
          // bool = currentcomment.isthumb?0:1;

          if(currentcomment.isthumb){
            bool = 0;
            thumbnum--;
          }else{
            bool = 1;
            thumbnum++;
          }

          var str1 = 'YS_lista.data['+e.currentTarget.dataset.index+'].isthumb';
          var str2 = 'YS_lista.data['+e.currentTarget.dataset.index+'].thumbnum';
          var temp = sco.data.YS_lista.data[e.currentTarget.dataset.index];


          var a = {};
          a[str1] = bool;
          a[str2] = thumbnum;


          sco.setData(a);
          
        }
      }

    }
        this.fetch('YS_objb');

  },

    click_collect: function (e) {
      var sco = this; 
      var bool = 1;
      if(e.currentTarget.dataset.type=='news'){ //新闻

       sco.data.YS_objd.params = {'type':'news','id':e.currentTarget.dataset.newsid};
        bool = sco.data.YS_obja.iscollect?0:1;
        sco.setData({'YS_obja.iscollect':bool});

        this.fetch('YS_objd');

      }else if(e.currentTarget.dataset.type=='job'){//工作

       sco.data.YS_objb.params = {'type':'job','id':e.currentTarget.dataset.jobid};

        bool = sco.data.YS_obja.iscollect?0:1;
        sco.setData({'YS_obja.iscollect':bool});

        this.fetch('YS_objb');

      }else if(e.currentTarget.dataset.type=='ace'){

       sco.data.YS_objb.params = {'type':'ace','id':e.currentTarget.dataset.aceid};

        bool = sco.data.YS_obja.iscollect?0:1;
        sco.setData({'YS_obja.iscollect':bool});

        this.fetch('YS_objb');

      }else if(e.currentTarget.dataset.type=='notice'){//建筑圈

       sco.data.YS_objd.params = {'type':'notice','id':e.currentTarget.dataset.nid};

        bool = sco.data.YS_obja.data.iscollect?0:1;
        sco.setData({'YS_obja.data.iscollect':bool});

        this.fetch('YS_objd');
      } 


  },

    add_comment: function (e) {
      var sco = this; 


      if(e.currentTarget.dataset.type=='news'){ //新闻
       sco.data.YS_objc.params.type = 'news';
       sco.data.YS_objc.params.newsid = e.currentTarget.dataset.id;
       if(!sco.data.YS_objc.params.content||sco.data.YS_objc.params.content==''||sco.data.YS_objc.params.content == 'undefined'){
          wx.showToast({
            title: '评论内容不能为空',
            icon: 'none',
            duration: 1000
          });
          return false;
       }
      }else{//评论
       sco.data.YS_objc.params.type = 'notice';
       sco.data.YS_objc.params.id = e.currentTarget.dataset.id;
       if(!sco.data.YS_objc.params.content||sco.data.YS_objc.params.content==''||sco.data.YS_objc.params.content == 'undefined'){
          wx.showToast({
            title: '评论内容不能为空',
            icon: 'none',
            duration: 1000
          });
          return false;
       }       
      }


      this.fetch('YS_objc');
  },
 
  tap() {
    // console.log('tap')
  },

  // onReady: function (e) {
  //   this.mapCtx = wx.createMapContext('myMap')
  // },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        // console.log(res.longitude)
        // console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 22.568349,
        longitude: 113.890419,
      },
      animationEnd() {
        // console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 22.568349,
        longitude: 113.890419,
      }, {
        latitude: 22.568349,
        longitude: 113.890419,
      }]
    })
  },

  setModal(e) {
    this.setData({'showModal1':e.currentTarget.dataset.modal});
  },

  setValue(e) {
    var a ={};
    a[e.currentTarget.dataset.key] = e.currentTarget.dataset.value;
    this.setData(a);
  },

  switchRole(e) {
    if(e.currentTarget.dataset.roletype==1){
      this.setData({'YS_obja.roletype':0});
    }else{
      this.setData({'YS_obja.roletype':1});
    }

    this.fetch('YS_objc');
    this.setData({'showModal':0});
  },
  navAndSave:function(ev){
    
    var sco = this;
    var value = sco.data.YS_obja.params
    value.single = [];
    var str = "栋";
    var obj = {
      "checkde": false,
      "sname": "",
      "cengshu": "",
      "dxcengshu": "",
      "jiegou": parseInt(value.jiegou)+1,
      "jichu": "",
      "zhuti": ""
    }

    if(value.prname == undefined){
      wx.showToast({
        title: '请输入项目名称！',
        icon:'none'
      })
      return false;
    }
    if(value.kaigong == undefined){
      wx.showToast({
        title: '请选择开工日期！',
        icon: 'none'
      })
      return false;
    }
    if(value.jungong == undefined){
      wx.showToast({
        title: '请选择竣工日期！',
        icon: 'none'
      })
      return false;
    }
    if(value.jiegou == undefined){
      wx.showToast({
        title: '请选择结构类型！',
        icon: 'none'
      })
      return false;
    }
    if(value.sinnum == undefined||value.sinnum <1){
      wx.showToast({
        title: '请输入子单位数量！',
        icon: 'none'
      })
      return false;
    }


    if(value.mianji == undefined){
      wx.showToast({
        title: '请输入建筑面积！',
        icon: 'none'
      })
      return false;
    }
    if(value.zaojia == undefined){
      wx.showToast({
        title: '请输入建筑造价！',
        icon: 'none'
      })
      return false;
    }
    if (value.gcdizhi== undefined) {
      wx.showToast({
        title: '请输入工程地址！',
        icon: 'none'
      })
      return false;
    }
      
    value.proimg = sco.data.uploadPicUrl;
    value.pid = sco.data.YS_obja.data.pid;
    value.cityid = sco.data.YS_obja.data.city_id;


    for (var i = 1; i <= value.sinnum; i++) {
      var cpobj = JSON.parse(JSON.stringify(obj));
      cpobj.sname = i + str;
      value.single.push(cpobj)
    }
    YSfac.setstore('addProData',value);

    // console.log(value)




    wx.navigateTo({url: ev.target.dataset.to});
    
    

  },
  
  choicePro:function(ev){
    var sco = this;
YSfac.setstore('procodeid', ev.currentTarget.dataset.codeid);
          YSfac.setstore('prname', ev.currentTarget.dataset.prname);
          wx.showToast({
            title: '切换成功!',
            icon: 'none',
            duration: 1000
          });
          setTimeout(function () {
            wx.switchTab({url:"/pages/eng/eng"});
          }, 1000)


    
    // sco.data.YS_plistb.params.codeid = ev.currentTarget.dataset.codeid;
    
    // wx.showModal({
    //   title: '',
    //   content: '是否切换当前工程？',
    //   success: function (res) {
    //     if (res.confirm) {
          

    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
},

 //编辑删除工程
 editpro(ev){
   var sco = this;
   var proid = ev.currentTarget.dataset.id;
   sco.data.YS_objb.params.codeid = proid;
   sco.data.YS_objd.params.codeid = proid;


var system = 'iOS';
try {
var rest = wx.getSystemInfoSync()  
if(rest.system.indexOf('iOS')==-1){
  system = 'android'; 
} 
} catch (e) {
   
} 



   var arr = system == 'iOS' ? ['编辑', '删除']:['编辑', '删除', '取消'];
  
// console.log(wx);

   wx.showActionSheet({
     itemList: arr,//显示的列表项
     
     success: function (res) {//res.tapIndex点击的列表项
      //  if (res.tapIndex ==0){
      //    YSfac.setstore('procodeid', ev.currentTarget.dataset.id);
      //    wx.showToast({
      //      title: '切换成功',
      //      icon: 'none',
      //      duration: 1000
      //    });
      //    setTimeout(function () {
      //      wx.navigateBack();
      //    }, 1000)
      //  }else 
      if (res.tapIndex == 0) {
         wx.navigateTo({
           url: '../../pages/editprogram/editprogram?editprcodeid='+ proid,
           success: function (res) { },
           fail: function (res) { },
           complete: function (res) { },

         })
         
      } else if (res.tapIndex == 1){
         wx.showModal({
           title: '',
           content: '您确定删除该工程吗，删除后将不会恢复。',
           success: function (res) {
             if (res.confirm) {
               sco.fetch('YS_objb');

               // var sco = this;
               // // sco.data.YS_objd.params.codeid = ev.currentTarget.dataset.codeid;
               // YSfac.setstore('codeid', e.currentTarget.dataset.codeid);
               // sco.setData({
               //   'YS_objd.params.codeid': e.currentTarget.dataset.codeid
               // })
               // this.fetch('YS_objd'),
              //  wx.showToast({
              //    title: '请先删除子单位！',
              //    icon: 'none',
              //    mask: true,
              //    success: function (res) { },
              //    fail: function (res) { },
              //    complete: function (res) { },
              //  })
              //  sco.fetch('YS_plista');

             } else if (res.cancel) {
               // console.log('用户点击取消')
             }
           }
         })
       }else{
        
       }
     },
     fail: function (res) { },
     complete: function (res) { }
   })
 },

  // setDate(e) {
  //   var a ={};
  //   a[e.currentTarget.dataset.key] = e.detail.value;
  //   this.setData(a);

  //   if(e.currentTarget.dataset.key=='kaigong'){
  //     this.setData({'YS_obja.kaigong':e.detail.value});
  //   }else if(e.currentTarget.dataset.key=='jungong'){
  //     this.setData({'YS_obja.jungong':e.detail.value});
  //   }

  // },


  setkaigong(e) {
    this.setData({
      'YS_obja.kaigong':e.detail.value,
      'YS_objb.params.kaigong':e.detail.value
    });
    this.fetch('YS_objb');

  },

  setjungong(e) {
    this.setData({
      'YS_obja.jungong':e.detail.value,
      'YS_objb.params.jungong':e.detail.value
    });
    this.fetch('YS_objb');

  },

  switchFetch(e){
    var v = e.detail.value?1:0;
    var a = {};

    if(e.currentTarget.dataset.change){
      a[e.currentTarget.dataset.change] = v;
    }


    a[e.currentTarget.dataset.key] = v;


    this.setData(a);
    this.fetch(e.currentTarget.dataset.inter);

    // console.log(e);
  },
  bindProvinceChange(e){
    var pid = 0;





    this.data.proidarr.map(function(elem,index){
      if(elem==e.detail.value){
        pid = index;
      }
    });

    // this.data.YS_obja.data.province = this.data.proarr[e.detail.value];

    this.setData({
      'YS_obja.data.province': this.data.proarr[e.detail.value],
      'YS_objb.params.pid': pid
    })


    // console.log(pid);
    this.data.YS_listc.params.pid = pid;
    this.fetch('YS_listc');

  },
  savePro(e){

    var sco = this;
    sco.fetch('YS_objb');
    wx.showToast({
      title: '保存成功',
      icon:'none'
    })



  },
  stoptuch(e){

  },
  //tab切换
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2:false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2:false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected2:true,
      selected: false,
      selected1: false
    })
  },
  //勾选删除按钮
  
  selectone:function(e) {
    
  },
  selectall:function(e){
    
  },
  //施工动态删除框
  
  //拍照
  takephoto() {
    var _this = this;
    wx.chooseImage({
      // count: 1, // 默认9
      // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  //上传图片
  upimg() {
    var _this = this;
    wx.chooseImage({
      // count: 1, // 默认9
      // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['image','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  //施工进度动态弹窗
  
  delschedule: function (e) {
    var system = 'iOS';
    try {
      var rest = wx.getSystemInfoSync()
      if (rest.system.indexOf('iOS') == -1) {
        system = 'android';
      }
    } catch (e) {

    }

    var arr = system == 'iOS' ? ['删除'] : ['删除', '取消'];
    var sco = this;
    wx.showActionSheet({
      itemList: arr,//显示的列表项
      // itemColor:'red',
      success: function (res) {//res.tapIndex点击的列表项
        if(res.tapIndex==0){//选中删除
          sco.data.YS_obja.params.id = e.currentTarget.dataset.id;
          sco.fetch('YS_obja');

        }
      },
      fail: function (res) { },
      complete: function (res) { }
    })
  },
  //单位工程弹窗
  singletc: function (e) {
    var system = 'iOS';
    try {
      var rest = wx.getSystemInfoSync()
      if (rest.system.indexOf('iOS') == -1) {
        system = 'android';
      }
    } catch (e) {

    }
    var arr = system == 'iOS' ? ['编辑', '删除'] : ['编辑', '删除', '取消'];
    var sco = this;
    var singid = e.currentTarget.dataset.id;
    sco.data.YS_objd.params.codeid= singid;
    sco.data.YS_listb.params.codeid = singid;
    
    wx.showActionSheet({
      itemList: arr,//显示的列表项
      
      success: function (res) {//res.tapIndex点击的列表项
        if(res.tapIndex==0){
        YSfac.setstore('sgcodeid', singid)
         wx.navigateTo({
           url: '/pages/editsingle/editsingle?codeid=' + singid,
         })
        sco.fetch('YS_listb')
        }
        if (res.tapIndex == 1){
          wx.showModal({
            title: '',
            content: '您确定删除该子单位吗，删除后将不会恢复。',
            success: function (res) {
                if(res.confirm){
                 sco.fetch('YS_objd'); 
               
               
                
              } 
              if (res.tapIndex == 2){

              }
             if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { }
    })
  },
  //施工机械弹窗
  jixietc: function (e) {
    var system = 'iOS';
    try {
      var rest = wx.getSystemInfoSync()
      if (rest.system.indexOf('iOS') == -1) {
        system = 'android';
      }
    } catch (e) {

    }
    var arr = system == 'iOS' ? ['编辑', '删除'] : ['编辑', '删除', '取消'];
    var sco = this;
    var jixieid = e.currentTarget.dataset.id;
    sco.data.YS_obja.params.codeid = jixieid;
    wx.showActionSheet({
      itemList: arr,//显示的列表项
      
      success: function (res) {//res.tapIndex点击的列表项
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '../../pages/editjixie/editjixie?jxcodeid=' + jixieid,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },

          })
          sco.fetch('YS_listb')
        } else if (res.tapIndex == 1){
          wx.showModal({
            title: '',
            content: '您确定删除该施工机械吗。',
            success: function (res) {
              if (res.confirm) {
                sco.fetch('YS_obja');

                // var sco = this;
                // // sco.data.YS_objd.params.codeid = ev.currentTarget.dataset.codeid;
                // YSfac.setstore('codeid', e.currentTarget.dataset.codeid);
                // sco.setData({
                //   'YS_objd.params.codeid': e.currentTarget.dataset.codeid
                // })
                // this.fetch('YS_objd'),
                // wx.showToast({
                //   title: '删除成功！',
                //   icon: 'success',
                //   mask: true,
                //   success: function (res) { },
                //   fail: function (res) { },
                //   complete: function (res) { },
                // })
                sco.fetch('YS_plistc');

              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { }
    })
  },
  //添加子单位下一步
  sgaddsave:function(ev) {
    var sco = this;
if (!sco.data.YS_obja.params.sname) {
      wx.showToast({
        title: '请输入子单位名称！',
        icon: 'none',
      })
      return false;
    }
 if (!sco.data.YS_obja.params.jiegou ) {
      wx.showToast({
        title: '请选择结构类型！',
        icon: 'none',
      })
      return false;
    } 
if (!sco.data.YS_obja.params.cengshu) {
      wx.showToast({
        title: '请选地上层数！',
        icon: 'none',
      })
      return false;
    }


  if(sco.data.YS_obja.params.cengshu>80){
      wx.showToast({
        title: '地上层数不能大于80层',
        icon: 'none',
        duration: 1000
      });
      hasfalse = true;
    }

   if(sco.data.YS_obja.params.dxcengshu>20){
      wx.showToast({
        title:'地下层数不能超过20层',
        icon: 'none',
        duration: 1000
      });
      hasfalse = true;
    }

    if (!sco.data.YS_obja.params.dxcengshu) {
      wx.showToast({
        title: '请选地下层数！',
        icon: 'none',
      })
      return false;
    } 

// 生成部位 

var cs = parseInt(sco.data.YS_obja.params.cengshu);
      var dxcs = parseInt(sco.data.YS_obja.params.dxcengshu);
      var jg = sco.data.YS_obja.params.jiegou; 

      //基础
      sco.data.YS_obja.params.jichu = sco.data.jichu.join('\n');
      //主体
      var arr = sco.setceng(cs,dxcs,jg);
      sco.data.YS_obja.params.zhuti = arr.join('\n');
 

 sco.setData({tapshow : 1,'YS_obja.params':sco.data.YS_obja.params});   
   
  },
  //添加子单位
  addsgsubmit(e) {
    var sco = this;
    sco.data.YS_obja.params = YSfac.getstore('addsgData');
    sco.fetch('YS_obja');

    // wx.showToast({
    //   title: '添加成功！',
    // });
    setTimeout(function () {
      wx.navigateTo({ url: e.target.dataset.to })
    }, 1000)
  },
  //编辑子单位
  eidtsgbase(e){
    var sco = this;
    YSfac.setstore('editsgbase', sco.data.YS_obja.params);
    sco.data.YS_obja.params.codeid = YSfac.getstore('codeid');
    sco.fetch('YS_obja')
    // wx.showToast({
    //   title: '保存成功！',
    // })
  },













































































  commentBtn(e){
    alert(123);
  }











}
