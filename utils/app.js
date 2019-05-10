const YSfac = require('fac.js');
const YSdir = require('dir.js');
const qiniuUploader = require("qiniuUploader.js");
// wx.hideTabBar(); 

var system = 'iOS';
try {
var rest = wx.getSystemInfoSync()  
if(rest.system.indexOf('iOS')==-1){
  system = 'android'; 
} 
} catch (e) {
   
} 

 
var quanju = false;








   
const YS = { 
  conf:{ 
    rooturl:'https://api.helii.cn/',//网站根目录 
      index:"home",//默认显示的模块
      jsonpath:'./json/',//约定json路径
      debug:false,//开发模式，会所有的请求为get方法，并请求本地json;
      console:false,//ture开启，则打印一些YS提示错误信息，false关闭,不打印YS的提示信息; 
      subfix:['a','b','c','d','e','f'], //约定数据容器的后缀；
      uploadurl:'',//图片上传
      'wss':'',//socket的url
},
initdata: function(){
    var tem = {
//wyl定义
    showwork:true,
    sintab:'sin',
    sintabname:'',
    littab:'by',
    littabname:'标养',
    str:'',
    showModal:true,
    tapshow:0,
    showls:true,
    chkcount:0,
    yccount:0,
    showload:false, 
    islogin:false,
    wdl:false,
    jzqshare:0,
    sjtzModule:0,
    sjhzModule:0,
    hlwsModule:0,
    sjkzModule:0,
    ycindex:0,
    wroktimes1: '1231',//现场设置时间
    wroktimes2: '231321',//现场设置时间

    tworangearr:[],
    cityrangearr:[],
    imageList:[],//临时图片存储
    options:{}, //临时从url带过来的参数是临时的，只用一次当前页有效
    ctemobj:{},
    cltemobj:{},
    //统计数据
    hasshow:false, 
    choosed:false,
    qdtypelist:[ 
      {'title':'----',t:'0'},    
      {'title':'C10',t:'10'},
      {'title':'C15',t:'15'},
      {'title':'C20',t:'20'},
      {'title':'C25',t:'25'},
      {'title':'C30',t:'30'},
      {'title':'C35',t:'35'},
      {'title':'C40',t:'40'},
      {'title':'C45',t:'45'}, 
      {'title':'C50',t:'50'},
      {'title':'C55',t:'55'},
      {'title':'C60',t:'60'},
      {'title':'C65',t:'65'},
      {'title':'C70',t:'70'},
      {'title':'C75',t:'75'},
      {'title':'C80',t:'80'}, 
      ], 
      yctypelist:[
       {'title':'不限',t:'0'},   
      {'title':'钢筋',t:'1'},
      {'title':'水泥',t:'2'},
      {'title':'砂',t:'3'},
      {'title':'砖',t:'4'},
      {'title':'装饰',t:'5'},
      {'title':'节能',t:'6'},
      {'title':'防水',t:'7'},
      {'title':'水电',t:'8'},
      {'title':'安全',t:'9'} 
      ],
    sjtypelist:[
      {'title':'----',t:'0'},
      {'title':'M5',t:'5'},
      {'title':'M7.5',t:'7.5'},
      {'title':'M10',t:'10'},
      {'title':'M15',t:'15'},
      {'title':'M20',t:'20'},
      {'title':'M25',t:'25'},
      {'title':'M30',t:'30'}],
    kstypelist:[
      {'title':'----',t:'0'},
      {'title':'P4',t:'P4'},
      {'title':'P6',t:'P6'},
      {'title':'P8',t:'P8'},
      {'title':'P10',t:'P10'},
      {'title':'P12',t:'P12'},
      {'title':'>P12',t:'>P12'} 
      ],
    ftypelist:[  
      {'title':'基础',t:'3'},
      {'title':'主体',t:'4'},
      {'title':'装修',t:'5'},
      {'title':'幕墙',t:'6'},
      {'title':'屋面',t:'7'},
      {'title':'节能',t:'8'},
      {'title':'给排水',t:'9'},
      {'title':'电气',t:'10'}, 
      ],

    jichu:['桩芯','基础承台垫层','基础承台、地梁','电梯基坑垫层','电梯基坑'],
    dixia:['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十'],
    zhuti:['首','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一','三十二','三十三','三十四','三十五','三十六','三十七','三十八','三十九','四十','四十一','四十二','四十三','四十四','四十五','四十六','四十七','四十八','四十九','五十','五十一','五十二','五十三','五十四','五十五','五十六','五十七','五十八','五十九','六十','六十一','六十二','六十三','六十四','六十五','六十六','六十七','六十八','六十九','七十','七十一','七十二','七十三','七十四','七十五','七十六','七十七','七十八','七十九','八十'],
    wumian:['屋面梁板','屋面柱','小屋面梁板'],

//wyl定义   
countryIndex:'',
    html: '<div class="div_class" style="line-height: 30px; color: #333333;font-size:14px">任职条件：<br>1 教育背景：高中以上学历<br>2 工作经验：25-35岁，三年以上工程项目的工作经验<br>3 知识/技能：<br>(1)熟悉装饰工程项目的工作流程；<br>(2)熟悉CAD等制作软件，熟练掌握操作...<span style="color:#0094FD">查看全部<span></div>',
    releaseFocus: true,
    focus:false,
    editdate:0,
    ismine:0,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      // iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      // iconPath: '/image/location.png'
    }],
      currentTab: 0,
      showModalStatus: false,
      commentcontent:'',
      find: {
        content: [],
        nv: [],
        px: [],
        qyopen: false,
        fjopen:false,
        qyshow: false,
        nzopen: false,
        pxopen: false,
        nzshow: false,
        pxshow: false,
        fjshow:false,
        isfull: false,
        
        cityleft: [],
        citycenter: {},
        cityright: {},
        select1: '',
        select2: '',
        select3:'',
        select4:'',
        shownavindex: '',
        showModalStatus: false,
        
      },
      //社区
      findjoblx:[
         {'全部':''},
      ],
      


      //添加工程
      prolx:['框剪','框架'],
      prolxindex:'',
      cengshu:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32
      ,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],

      disabled:false,
      //施工进度/河狸卫士下tab切换
      selected: true,
      selected1: false,
      selected2:false,
      sgtype:'',
      uploadPicUrl:'',
      
      delf:true,
      delt:false,

      jxlx: ['塔吊','施工升降机', '物料提升机'],
      jxindex:1,
      begtime:'',
      endtime:'',
      
      currentday: YSfac.numtotime(new Date().getTime()),
      currentTime:61,
      time: '获取验证码', //倒计时 


      dpn:false,
      hbon:1,
      showpl:false,
      nickname: '',
      headimg:'',

      bhvalue:'',
      //授权弹窗
      ysq:true,
      added:false,
      //找工作，找人才发布按钮
      hiddenfb:false,
      hiddenfb2:false,

      //子单位添加
      sglx:['','框架结构','框架剪力墙结构'],
      cengshu:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      dxcengshu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      sgindex:0,
      csindex:0,
      dxcsindex:0,

      checked:true,

      searchjob: 0,
      bhtitle:'',
      bhparams:'',
      
      smf:false,
      joblei:"最近",
      selecttag:false,
      sgitems: [],
      proimg:'',
      hbcodeid: '',
      hbhead:'',
      sharet:'',
      myrpx:'',
      temhbimg:'',
      disabled:false,
	    /*tabbar路由*/
	    gdata:{
	    userInfo: null,
     

      curmb: 'https://api.helii.cn/upload/poster/poster1.png',
	    tabbar: {
	      color: "#666666",
	      selectedColor: "#0094FD ",
	      backgroundColor: "#ffffff",
	      borderStyle: "#eee",
	      list: [
	        {
	          "current": 0,
	          "pagePath": "/pages/index/index",
            "iconPath": "/pages/image/tabbar-shequ@3x.png",
            "selectedIconPath": "/pages/image/tabbar-shequ-select@3x.png",
	          "text": "社区"
	        },
	        {
	          "current": 0,
            "pagePath": "/pages/findjob/findjob",
            "iconPath": "/pages/image/tabbar-zhaogz@3x.png",
            "selectedIconPath": "/pages/image/tabbar-zhaogz-select@3x.png",
	          "text": "找工作"
	
	        },
          {
            "current": 0,
            "pagePath": "/pages/eng/eng",
            "iconPath": "/pages/image/tabbar-center@3x.png",
            "selectedIconPath": "/pages/image/tabbar-center@3x.png",
            "text": "项目"
          },
          {
            "current": 0,
            "pagePath": "pages/findace/findace",
            "iconPath": "/pages/image/tabbar-zhaorc@3x.png",
            "selectedIconPath": "/pages/image/tabbar-zhaorc-select@3x.png",
            "text": "找人才"
          },
	        {
            "current": 0,
	          "pagePath": "/pages/my/system",
            "iconPath": "/pages/image/tabbar-mine@3x.png",
            "selectedIconPath": "/pages/image/tabbar-mine-select@3x.png",
	          "text": "我的"
	        },
	
	      ],
	      position: "bottom"
	    } ,
  },
      
      


      
      
    }; 
     tem.com_del = {sdata:true,url:'',params:{},data:{}};//公共删除
     tem.com_add = {sdata:true,url:'',params:{},data:{}};//公共增加
     YS.conf.subfix.map(function(elem) { //定义接口数据容器
     tem['com_obj'+elem] = {sdata:true,url:'',params:{},data:{}};
     tem['com_list'+elem] = {sdata:true,url:'',params:{},data:[]};
     tem['com_plist'+elem]  = {sdata:true,url:'',page:true,params:{listnum:10,curPage:1},data:{datalist:[]}}; 
     tem['YS_list'+elem] = {sdata:true,url:'',params:{},data:[]};
     tem['YS_plist'+elem]  = {sdata:true,url:'',page:true,params:{listnum:10,curPage:1},data:{datalist:[]}}; 
     tem['YS_obj'+elem] = {sdata:true,url:'',params:{},data:{}};
}); 
return tem;
  }, 
  init:(Page)=>{  
const ysdata = YS.initdata();
  




var a = { 
  data: ysdata,
  conf:YS.conf,
  onLoad: function(options) {  
    console.log('onload',options);
this.setData({options:options});

   this.editTabBar(); 

    if(options.editshow){
      YSfac.setstore('editshow',options.editshow);
    }

    if(options.rid){
      YSfac.setstore('rid',options.rid);
    }
    if(options.bwcodeid){
      YSfac.setstore('bwcodeid',options.bwcodeid);
    }

    if(options.editprcodeid){
      YSfac.setstore('editprcodeid',options.editprcodeid);
    }
 
    if(options.jobcodeid){
      YSfac.setstore('jobcodeid',options.jobcodeid);
      setTimeout(function(){
        YSdir.schaibao()
      },1000)
      
    }


    if(options.jxcodeid){
      YSfac.setstore('jxcodeid',options.jxcodeid);
    }

    if(options.sgcodeid){
      YSfac.setstore('sgcodeid',options.sgcodeid);
    }

    if(options.acecodeid){
      YSfac.setstore('acecodeid',options.acecodeid);
    }

    if(options.discodeid){
      YSfac.setstore('discodeid',options.discodeid);
    }

    if(options.searchtype){
      YSfac.setstore('searchtype',options.searchtype);
    }


    if(options.tagtype){
      YSfac.setstore('tagtype',options.tagtype);
    }


    if(options.currentTid){
      YSfac.setstore('currentTid',options.currentTid);
    }


    if(options.currentUid){
      YSfac.setstore('currentUid',options.currentUid);
    }


    // if(options.currentCodeid){
    //   YSfac.setstore('currentCodeid',options.currentCodeid);
    // }

    if(options.index){
      YSfac.setstore('index',options.index);
    }
    if(options.from){
      YSfac.setstore('fromuid',options.from);
    }


    if(options.scene){
      // var temp = options.scene.split('/');
      // if(temp&&temp[0]=='u'){
      //   YSfac.setstore('fromuid',temp[1]);
      // }else if(temp&&temp[0]=='j'){
      //   YSfac.setstore('jobcodeid',temp[1]);
      // }

      var temp = decodeURIComponent(options.scene).split(';');
      //第一个参数为分享人uid
      if(temp[0]){
        YSfac.setstore('fromuid',temp[0]);
      }

      //第二个参数为分享途径
      if(temp[1]){
        YSfac.setstore('fromtype',temp[1]);
      }

      //第三个参数为工作codeid
      if(temp[2]){
        YSfac.setstore('jobcodeid',temp[2]);
      }

      
    }

    if(options.invitePrcodeid){
      YSfac.setstore('invitePrcodeid',options.invitePrcodeid);
    }
    
   
    
  },  
 
 onReady: function () {  
 // 


  //通过路由拿到当前模块
 const parr = this.route.split('/');
 const p = parr[parr.length-1];
 var that = this;
this.setData({p:p});
 
//执行每一个模块
 YS.main[p]&&YS.main[p](this);//找到相关的模块，传入$scope,执行这个函数  
}, 


  onShow: function() { 
    //隐藏底部导航
// wx.hideTabBar(); 
    var sco = this;
    // console.log(sco);
      if(this.data.p=='eng'){
  

    if(YSfac.getstore('procodeid')){
      sco.fetch('YS_plistb');
      
    }else{
      sco.fetch('YS_plista');
    }

          this.setData({
            ysq: true
          })  
      }
    if(this.data.p=='myinfo'){
    sco.fetch('YS_obja');
    }
  
   if(this.data.p=='single'){
      sco.fetch('YS_plista');
      sco.fetch('YS_plistc');
    }

    
   if(this.data.p=='editsingle'){
      sco.fetch('YS_objc');
    }



    if (this.data.p == 'findjob') {
      sco.fetch('YS_listf');
    } 
    
    if (this.data.p == 'haibao') {
      
    }

    
    if (this.data.p == 'myprogram') {
      sco.fetch('YS_plista');
    }


        if(this.data.p=='my'){
      sco.fetch('YS_obja');
    }
    if (this.data.p == 'editprogram') {
      sco.fetch('YS_obja');
    }

    if (this.data.p == 'release') {
      sco.fetch('YS_lista');
    }
    if (this.data.p == 'ucenter') {
      sco.fetch('YS_plista');
      sco.fetch('YS_plistb');
    }
      // if(this.data.p=='findjob'){

      //     this.setData({
      //       worktype:'',
      //       select1:'',
      //       select2:'',
      //       qyopen: false,
      //       qyshow: false,
      //       nzopen: false,
      //       pxopen: false,
      //       nzshow: false,
      //       pxshow: false,
      //       isfull: false,
      //       shownavindex: ''
      //     }) 


      //     sco.data.YS_plista.params = {curPage:1,listnum:5};
      //     sco.fetch('YS_plista');
      //     YSfac.setstore('temptagarr',[]);

      // }

      if(this.data.p=='findace'){

          this.setData({
            worktype:'',
            select1:'',
            select2:'',
            qyopen: false,
            qyshow: false,
            nzopen: false,
            pxopen: false,
            nzshow: false,
            pxshow: false,
            isfull: false,
            shownavindex: ''
          }) 


          sco.data.YS_plista.params = {curPage:1,listnum:5};
          sco.fetch('YS_plista');
          YSfac.setstore('temptagarr',[]);

      }


      if(this.data.p=='addprograms'){
        sco.data.sgitems = YSfac.getstore('addProData').single;
        sco.setData({
          'sgitems':sco.data.sgitems
        })
      }

   
      if(this.data.p=='schedule'){

          sco.fetch('YS_lista');
          sco.fetch('YS_plistc');

      }



      if(this.data.p=='addemand'){
        var tagarr = [];
        var tagidarr = [];
        var temptagarr = YSfac.getstore('temptagarr');
        if(temptagarr.length>0){
          temptagarr.map(function(elem){ 
            tagarr.push(elem.name);
            tagidarr.push(elem.id);
          })

        sco.data.YS_obja.params.tags = tagidarr.join(',');
          this.setData({
            'tagarr': tagarr.join(',')
          })           
        }
  
      }

      if(this.data.p=='addbelief'){
        var tagarr = [];
        var tagidarr = [];
        var temptagarr = YSfac.getstore('temptagarr');
        if(temptagarr.length>0){
          temptagarr.map(function(elem){
            tagarr.push(elem.name);
            tagidarr.push(elem.id);
          })

        sco.data.YS_obja.params.tags = tagidarr.join(',');
          this.setData({
            'tagarr': tagarr.join(',')
          })           
        }
  
      }


      //送检台帐页面
        if(this.data.p=='plan'){
          //子单位刷新
          if(sco.data.sintab=='sin'){ sco.fetch('YS_listc');  }
          //原材刷新
          if(sco.data.sintab=='yc'){ sco.fetch('YS_listb');  }
          
  
      }
  
   

      //送检台帐页面
        if(this.data.p=='setplan'){
          var weituourl = YSfac.getstore('weituourl')?YSfac.getstore('weituourl'):[];
          sco.data.weituoarr = YSfac.getstore('weituoarr')?YSfac.getstore('weituoarr'):[];
          var jianceurl = YSfac.getstore('jianceurl')?YSfac.getstore('jianceurl'):[];
          sco.data.jiancearr = YSfac.getstore('jiancearr')?YSfac.getstore('jiancearr'):[];


           sco.setData({
             'weituoarr':sco.data.weituoarr,
             'weituourl':weituourl,
             'jiancearr':sco.data.jiancearr,
             'jianceurl':jianceurl,
           })


            if(weituourl){
              if(sco.data.options.field=='by'){
                sco.data.YS_obja.params.byweituo = weituourl.join(";");
                sco.data.YS_obja.params.byjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='ty'){
                sco.data.YS_obja.params.tyweituo = weituourl.join(";");
                sco.data.YS_obja.params.tyjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='ks'){
                sco.data.YS_obja.params.ksweituo = weituourl.join(";");
                sco.data.YS_obja.params.ksjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='zt'){
                sco.data.YS_obja.params.ztweituo = weituourl.join(";");
                sco.data.YS_obja.params.ztjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='cm'){
                sco.data.YS_obja.params.cmweituo = weituourl.join(";");
                sco.data.YS_obja.params.cmjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='dz'){
                sco.data.YS_obja.params.dzweituo = weituourl.join(";");
                sco.data.YS_obja.params.dzjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='qz'){
                sco.data.YS_obja.params.qzweituo = weituourl.join(";");
                sco.data.YS_obja.params.qzjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='nq'){
                sco.data.YS_obja.params.nqweituo = weituourl.join(";");
                sco.data.YS_obja.params.nqjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='wq'){
                sco.data.YS_obja.params.wqweituo = weituourl.join(";");
                sco.data.YS_obja.params.wqjiance = jianceurl.join(";");
              }else if(sco.data.options.field=='zp'){
                sco.data.YS_obja.params.zpweituo = weituourl.join(";");
                sco.data.YS_obja.params.zpjiance = jianceurl.join(";");
              }else{
                sco.data.YS_obja.params.weituo = weituourl.join(";");
                sco.data.YS_obja.params.jiance = jianceurl.join(";");
              }
            } 
            
            console.log(sco.data.weituoarr);
      }
  







     

  },
   onPullDownRefresh:function(option)
  {
    var sco = this;
// console.log(this.data.p);

  if(this.data.p=='eng'){
    wx.showNavigationBarLoading()  
    if(YSfac.getstore('procodeid')){

      sco.fetch('YS_plistb'); 
    }else{
      sco.fetch('YS_plista');
    }      
      }

    //在标题栏中显示加载

    //模拟加载
    
  },
  //监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {

    
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {


      ev.scrollTop = 0;

      // console.log(111111);
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
      // console.log(22222);
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      //向下滚动
    // console.log(33333);
    } else {
      //向上滚动
       // console.log(444444);
    }
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },

    onShareAppMessage: function (res) {
      console.log(res);
//默认描述，邀请描述，文章描述，建筑圈描述
//
//工程、我的、市场默认描述：工程协同管理.形象进度.送检.汇总.预报.送检卫士漏送异常统计.同养提醒
//发现的默认描述：河狸建筑，建筑资讯都在这里
//建筑圈默认描述：建筑行业找工作、找项目、找班组、找活，尽在河狸建筑圈
//邀请描述:我是***，邀请你加入工程[***]
//文章描述：文章标题
//建筑圈描述：内容做为标题
//。





//关于我们，专注于建筑工程信息化系统研发，帮助企业开发官网、企业后台管理信息系统
//方便企业对工程的管理，同时更快速对接到人才、材料供应商等信息。
//建设、施工、监理、私人老板、项目部。缺的是什么，他们可以提供资源
//建筑人、服务商，缺的是买单者。
//对于资源提供者，
//我们平台有几万的建筑人才，有上千家材料商家，几百家施工机械，你们可以更快招人，找到实惠的材料、机械设备。
//另外，你们在自己的管理后台发布招聘、文章等消息；河狸建筑会帮你们分发到平台给几万的建筑行业的人看得到
//发布的内容，提升你们的品牌形象。



//对于建筑人、服务商，
//我们平台有几千个工程，有上千家建筑企业、私人老板。他们就需要你们的商品、以及服务；你想找工作、找项目、找活
//都可以在这里找得到。
//河狸建筑，致力于帮助建筑企业开发信息化系统、官网、小程序的互联网科技公司。


      var fr = '';
      var pages = getCurrentPages() //获取加载的页面
      var currentPage = pages[pages.length-1] //获取当前页面的对象
      var url = currentPage.route //当前页面url
      var title = '工程协同管理•形象进度•送检•汇总•预报•送检卫士•漏送异常统计•同养提醒';
      var realname = YSfac.getstore('realname');
      realname = realname?realname:YSfac.getstore('logininfo')['nickName'];

      if(url=='pages/eng/eng'){//邀请加入工程

        title = '工程协同管理•形象进度•送检•汇总•预报•送检卫士•漏送异常统计•同养提醒';

        // if(res.target){
        //   if(res.target.dataset.url){

        //     url = res.target.dataset.url;
        //     title = '我是'+realname+'，邀请你加入工程['+YSfac.getstore('prname')+']';

        //     if(YSfac.getstore('lgcode')){
        //       fr = '?invitePrcodeid='+YSfac.getstore('procodeid')+'&from='+YSfac.getstore('lgcode');
        //     }          
        //   }          
        // }




      }else if(url=='pages/jobdetail/jobdetail'){
        fr = '?jobcodeid='+YSfac.getstore('jobcodeid')+'&from='+YSfac.getstore('lgcode');
        title = '建筑行业找工作•找项目•找班组•找活，尽在河狸建筑圈';
        if(res.target){
          if(res.target.dataset.title){
            title = res.target.dataset.title;
          }
        }


      }else if(url=='pages/index/index'){
        title = '河狸建筑，建筑资讯都在这里';
        fr = '?from='+YSfac.getstore('lgcode');

      }else if(url=='pages/findjob/findjob'){
        title = '建筑行业找工作•找项目•找班组•找活，尽在河狸建筑圈';
        // fr = '?from='+YSfac.getstore('lgcode');
        fr = '?jobcodeid=' + YSfac.getstore('jobcodeid') + '&from=' + YSfac.getstore('lgcode');
        if (res.target) {
          if(res.target.dataset.tourl)url = res.target.dataset.tourl;
          if (res.target.dataset.title) {
            title = res.target.dataset.title;
          }
        }
      }else if(url=='pages/findace/findace'||url=='pages/my/my'){
        title = '工程协同管理•形象进度•送检•汇总•预报•送检卫士•漏送异常统计•同养提醒';
        fr = '?from='+YSfac.getstore('lgcode');
        
      }else if(url=='pages/recomdetail/recomdetail'){
        title = '河狸建筑，建筑业内资讯都在这里';
        if(res.target){
          if(res.target.dataset.title){
            title = res.target.dataset.title;
            url = res.target.dataset.url;
            fr = '&from='+YSfac.getstore('lgcode');
          }
        }

      }else if(url=='pages/invite/invite'){
      //邀请加入工程

        title = '工程协同管理•形象进度•送检•汇总•预报•送检卫士•漏送异常统计•同养提醒';

        if(res.target){
          if(res.target.dataset.url){

            url = res.target.dataset.url;
            title = '我是'+realname+'，邀请你加入工程['+YSfac.getstore('prname')+']';

            if(YSfac.getstore('lgcode')){
              fr = '?invitePrcodeid='+YSfac.getstore('procodeid')+'&from='+YSfac.getstore('lgcode')+'&roleid='+res.target.dataset.rid;
            }          
          }          
        }




      }


      // wx.showToast({
      //   title: fr,
      //   icon: 'none',
      //   duration: 2000
      // }); 
console.log(title,url+fr);
          return {
            title: title, 
            // title: '轻轻的我走了,正如我轻轻的来 扫一扫二维码,不带走一个泳圈',
            path: url+fr,
          }
    }   





 };

 
for (var k in YSdir) {a[k] = YSdir[k];}
Page(a) 
},








//业务逻辑
main:{
//首页模块
index:function(sco){ 
   wx.setNavigationBarTitle({title: '河狸建筑业内资讯'});
// 一、初始化
// 二、业务逻辑
//    1、接口1：获取推荐列表 
sco.data.YS_lista.data = [];




//    1、接口1：获取推荐列表  
    sco.data.YS_plista.url = 'api/appauth/get_discover_list';
    sco.data.YS_plista.sdata = false;
    sco.data.YS_plista.before = function(sco){

    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.total&&sco.data.YS_lista.data.length>0){return false;}
      sco.loadmore(true); 
    }; 
    sco.data.YS_plista.params = {curPage:1,listnum:10};
    sco.data.YS_plista.done = function(re,sco){
      setTimeout(function(){
sco.loadmore(false); 
      if(re.code==1&&re.data.datalist.length>0){
  
        re.data.datalist.map(function(elem) {
         var a =[];
          elem.picturearr.map(function (el) {
            a.push(el + '?imageView2/1/w/226/h/128')
          });
           sco.data.YS_lista.data.push(elem);
        }); 
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
        sco.setData({'YS_plista.total':re.data.total});
      } 
      },500)
    
    }
    sco.fetch('YS_plista');


    
 


 // wx.showToast({
 //        title: '为了买家方便联系你，请绑定手机号',
 //        icon: 'none',
 //        duration: 2000
 //      }); 
}, 


 


  //工程首页
  eng:function(sco) { 
    wx.setNavigationBarTitle({title: '河狸建筑工程协同'});
    // //    1、接口1：获取全部应用列表；
    // sco.YS_lista.url = 'api/proauth/get_menu_list';
    // sco.fetch('YS_lista');
// sco.chklogin();



    //    1、接口1：获取工程列表；
    sco.data.YS_plista.url = 'api/proauth/program_pro_list';
    sco.data.YS_plista.params = {curPage:1,listnum:5};
    sco.data.YS_plista.done = function(re,sco){
   
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_plista');
          });
        // sco.setData({'ysq':false});
return false;
        }
       
      sco.data.YS_lista.params.codeid = re.data.datalist[0].codeid;
      sco.data.YS_listb.params.codeid = re.data.datalist[0].codeid;
      sco.data.YS_liste.params.prcodeid = re.data.datalist[0].codeid;
      sco.fetch('YS_lista');
      sco.fetch('YS_listb');
      sco.fetch('YS_liste');

      if(re.data.datalist.length>0){
        // console.log(re.data.datalist[0]);
        sco.setData({'YS_obja':re.data.datalist[0]});

        YSfac.setstore('procodeid',re.data.datalist[0].codeid);
        YSfac.setstore('prname',re.data.datalist[0].prname);
      }
    }

    sco.data.YS_plistb.url = 'api/proauth/program_pro_info';
    
    sco.data.YS_plistb.before = function(sco){
     sco.data.YS_plistb.params = {codeid:YSfac.getstore('procodeid')};
    }
    sco.data.YS_plistb.done = function(re,sco){

  // 下拉刷新
  setTimeout(function()
    { 
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },500);


           // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_plistb');
          });
        // sco.setData({'ysq':false});
return false;
        }







      sco.data.YS_lista.params.codeid = YSfac.getstore('procodeid');
      sco.data.YS_listb.params.codeid = YSfac.getstore('procodeid');
      sco.data.YS_liste.params.prcodeid = YSfac.getstore('procodeid');

      sco.fetch('YS_lista');
      sco.fetch('YS_listb');
      sco.fetch('YS_liste');
      if(re.data.length>0){
        // console.log(re.data[0]);
        sco.setData({'YS_obja':re.data[0]});

      }
    }


    if(YSfac.getstore('procodeid')){
      sco.fetch('YS_plistb');
      
    }else{
      sco.fetch('YS_plista');
    }
    


    //    2、接口2：工程编辑；
    sco.data.YS_objb.url = 'api/proauth/program_pro_edit';
    sco.data.YS_objb.before = function(sco){
     sco.data.YS_objb.params.codeid = YSfac.getstore('procodeid');
    }
    sco.data.YS_objb.done = function(re,sco){
   
      if(re.code>0){
        wx.showToast({
        title: re.msg,
        icon: 'none',
        duration: 1000
        });
      }
    }
  
    //  3.接口3：获取同养温度提醒
    sco.data.YS_lista.url ="api/proauth/ty_weather_remind";
    // sco.data.YS_lista.before = function (sco) {
    //   sco.data.YS_lista.params.codeid = YSfac.getstore('procodeid');
    // }

    // 4.接口4：获取送检预报

    sco.data.YS_listb.url = 'api/proauth/program_gether';
    sco.data.YS_listb.params.btime = YSfac.numtotime(new Date().getTime());
    sco.data.YS_listb.params.etime = YSfac.numtotime(new Date().getTime() + 7 * 86400000)
    // sco.data.YS_listb.before = function (sco) {
    //   sco.data.YS_listb.params.codeid = YSfac.getstore('procodeid');
    // };
    sco.data.YS_listb.done = function (re,sco) {
      var ext = re.ext;
      if(re.code>0){
       sco.setData({
         ext:re.ext
       })
      }
    };



    // 5.接口5：获取权限菜单
    sco.data.YS_liste.url = 'api/proauth/get_menu_list';
    // sco.data.YS_liste.before = function (sco) {
    //   sco.data.YS_liste.params.prcodeid = YSfac.getstore('procodeid');
    // };
    sco.data.YS_liste.done = function (re,sco) {
      if(re.code>0){
        YSfac.setstore('realname',re.ext);

        re.data.map(function(elem){
          if(elem.url=='#/plan'){
            sco.setData({
              'sjtzModule':1
            })
          }

          if(elem.url=='#/gether'){
            sco.setData({
              'sjhzModule':1
            })
          }

          if(elem.url=='#/plan'){
            sco.setData({
              'hlwsModule':1
            })
          }

          if(elem.url=='#/quick'){
            sco.setData({
              'sjkzModule':1
            })
          }


        })
      }
    };  

    sco.fetch('YS_liste');




  },
  



  //我的工程
  myprogram:function(sco) { 
    //    1、接口1：获取工程列表；
    sco.data.YS_plista.url = 'api/proauth/program_pro_list';    
    sco.data.YS_plista.before = function(sco){
    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.data.total&&sco.data.YS_lista.data.length>0){return false;}
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.load = true;
    sco.data.YS_plista.params = { curPage: 1, listnum: 8,codeid:YSfac.getstore('procodeid')};
    sco.data.YS_plista.done = function(re,sco){
      if(re.data.datalist.length>0){
        re.data.datalist.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    sco.fetch('YS_plista');

    //    2、接口2：添加工程；
    // sco.data.YS_obja.url = 'api/proauth/program_pro_add';

    //    3、接口3：删除工程；
    sco.data.YS_objb.url = 'api/proauth/program_pro_del';
    sco.data.YS_objb.done = function(re,sco){
      if(re.code!=1){
        YSfac.msg(re)
      }else{
        YSfac.msg(re)
        sco.fetch('YS_plista')
      }
    }

    //    4、接口4：获取加入的项目列表；
    sco.data.YS_plistb.url = 'api/proauth/join_pro_list';
    sco.data.YS_plistb.before = function(sco){
      if(sco.data.YS_listb.data.length>=sco.data.YS_plistb.total){return false;} 
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.load = true;
    sco.data.YS_plistb.params = { curPage: 1, listnum: 9,codeid:YSfac.getstore('procodeid')};
    sco.data.YS_plistb.done = function(re,sco){
   
      if(re.data.datalist.length>0){
        sco.setData({'YS_listb.data':re.data.datalist});
      }
    }
    sco.fetch("YS_plistb");

    //    5、接口5：工程编辑；
    sco.data.YS_objc.url = 'api/proauth/program_pro_edit';

    //    6、接口6：获取工程概况；
    sco.data.YS_objd.url = 'api/proauth/program_pro_info';


    sco.setData({'prcodeid':YSfac.getstore('procodeid')});

  },
  //切换工程
  changepro:function(sco) { 
    //    1、接口1：获取工程列表；
    sco.data.YS_plista.url = 'api/proauth/program_pro_list';    
    sco.data.YS_plista.before = function(sco){
    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.data.total&&sco.data.YS_lista.data.length>0){return false;}
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.load = true;
    sco.data.YS_plista.params = { curPage: 1, listnum: 8,codeid:YSfac.getstore('procodeid')};
    sco.data.YS_plista.done = function(re,sco){
      if(re.data.datalist.length>0){
        re.data.datalist.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    sco.fetch('YS_plista');

 
 

    //    4、接口4：获取加入的项目列表；
    sco.data.YS_plistb.url = 'api/proauth/join_pro_list';
    sco.data.YS_plistb.before = function(sco){
      if(sco.data.YS_listb.data.length>=sco.data.YS_plistb.total){return false;} 
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.load = true;
    sco.data.YS_plistb.params = { curPage: 1, listnum: 9,codeid:YSfac.getstore('procodeid')};
    sco.data.YS_plistb.done = function(re,sco){
   
      if(re.data.datalist.length>0){
        sco.setData({'YS_listb.data':re.data.datalist});
      }
    }
    sco.fetch("YS_plistb");

   


    sco.setData({'prcodeid':YSfac.getstore('procodeid')});

  },

  //添加工程
  addprogram:function(sco){

    var proarr = [];
    var proidarr = [];
    var cityarr = [];
    var cityidarr = [];
    var prodata = YSfac.getstore('prodata');

    //1、接口1：添加工程；
    sco.data.YS_obja.url = 'api/proauth/program_pro_add';



    //    2、接口2：获取七牛信息；
    sco.data.YS_objd.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objd.sdata = false;
    sco.data.YS_objd.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'qiniuinfo': re });
      }
    }
    sco.fetch('YS_objd');



    // //    6、接口6：获取省份；
    // sco.data.YS_listb.url = 'api/open/get_province';
    // sco.data.YS_listb.done = function(re,sco){
   
    //   if(re.code>0){

    //       re.data.map(function(elem,index) {
    //         proidarr[elem.pid] = index;
    //         proarr.push(elem.province);
    //       });

        
    //       sco.data.YS_listc.params.pid = 0;


    //     sco.setData({'proarr':proarr,'proidarr':proidarr});
    //   }
    //   if(sco.data.YS_listc.params.pid>0)sco.fetch('YS_listc');
      
    // }
    // sco.fetch('YS_listb');


    // //    7、接口7：获取城市列表；
    // sco.data.YS_listc.url = 'api/open/get_city';

    // sco.data.YS_listc.done = function(re2,sco2){
   
    //   if(re2.code>0){

    //     var citynotin = 0;

    //     re2.data.map(function(elem2,index2) {
    //       cityidarr[elem2.ctid] = index2;
    //       cityarr.push(elem2.city);
    //     });

    //     //如果项目cityid不在，则用第一个
    //     // re2.data.map(function(elem){
    //     //   if(elem.ctid==prodata.cityid){
    //     //     citynotin = 1;
    //     //   }
    //     // });

    //     if(!citynotin){

    //       sco.data.YS_objb.params.cityid = re2.data[0].ctid;

    //       console.log(re2.data[0].city);

    //       sco.setData({
    //         'YS_obja.data.city': re2.data[0].city,
    //         'YS_obja.data.cityid': re2.data[0].ctid,
    //         'YS_obja.data.pid': sco.data.YS_listc.params.pid,
    //         'YS_obja.params.city_id': re2.data[0].ctid,
    //         'YS_obja.params.province_id': sco.data.YS_listc.params.pid
    //       })
    //     }



    //     sco.setData({'cityarr':cityarr,'cityidarr':cityidarr});
    //   }

    // }




//2、获取地区数据
   sco.data.YS_listb.url = '/api/open/get_procity_onarea'; 
    sco.data.YS_listb.done = function(re,sco){    
sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[0].city]});
     }
    sco.fetch('YS_listb');











    







  },
  addprograms: function (sco) {
    sco.data.sgitems = YSfac.getstore('addProData').single;

    // console.log(sco.data.sgitems);

    sco.setData({
      'sgitems':sco.data.sgitems
    })


    //生成层数
 



    //1、接口1：添加工程；
    sco.data.YS_obja.url = 'api/proauth/program_pro_add';
    sco.data.YS_obja.method = 'POST';
    sco.data.YS_obja.before = function (sco) {
      // sco.data.YS_obja.params.single = YSfac.getstore('addProData').single;
    }
    sco.data.YS_obja.done = function(re,sco){
      if(re.code>0){

        YSfac.setstore('addProData','');
        wx.showToast({
          title: '创建成功',
          icon: 'none',
          duration: 1000
        });
        setTimeout(function(){
          wx.navigateTo({url:'/pages/myprogram/myprogram'})
        },1000)
      }else{
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });      
    }
    }
  },
  addprosingle: function (sco) {
    var index = YSfac.getstore('index');
    sco.data.sgitems = YSfac.getstore('addProData').single;
    // console.log(sco.data.sgitems);

    sco.setData({
      'nowsgitems':sco.data.sgitems[index],
      'prolxindex':parseInt(sco.data.sgitems[index].jiegou) - 1
    })


  },


  //编辑工程
  editprogram:function(sco){

    //1、接口1：添加工程；
    sco.data.YS_obja.url = 'api/proauth/program_pro_info';
    sco.data.YS_obja.params.codeid = YSfac.getstore('editprcodeid');
    sco.data.YS_obja.done = function(re,sco){
   
      if(re.code>0){
        sco.setData({'YS_obja.data':re.data[0]});
        YSfac.setstore('prodata',re.data[0]);
      }
    }
    sco.fetch('YS_obja');


  },

  //编辑工程细节
  editprograms:function(sco){
    var jgarr = ['请选择','框架','框剪'];
    var yharr = ['请选择养护方式','洒水','覆盖','喷涂','加热'];
    var proarr = [];
    var proidarr = [];
    var cityarr = [];
    var cityidarr = [];
    var prodata = YSfac.getstore('prodata');
    sco.data.headimg='';



    //    2、接口2：获取省份；
    sco.data.YS_listb.url = 'api/open/get_province';
    sco.data.YS_listb.done = function(re,sco){
   
      if(re.code>0){


          re.data.map(function(elem,index) {
            proidarr[elem.pid] = index;
            proarr.push(elem.province);
          });

        
          sco.data.YS_listc.params.pid = prodata.pid;


        sco.setData({'proarr':proarr,'proidarr':proidarr});
      }

      sco.fetch('YS_listc');
    }
    sco.fetch('YS_listb');


    //    3、接口3：获取城市列表；
    sco.data.YS_listc.url = 'api/open/get_city';

    sco.data.YS_listc.done = function(re2,sco2){
   
      if(re2.code>0){

        var citynotin = 0;

        re2.data.map(function(elem2,index2) {
          cityidarr[elem2.ctid] = index2;
          cityarr.push(elem2.city);
        });

        //如果项目cityid不在，则用第一个
        re2.data.map(function(elem){
          if(elem.ctid==prodata.cityid){
            citynotin = 1;
          }
        });

        if(!citynotin){
          prodata.pid = sco.data.YS_listc.params.pid;
          prodata.cityid = re2.data[0].ctid;
          prodata.city = re2.data[0].city;
          sco.data.YS_objb.params.cityid = re2.data[0].ctid;

          // console.log(re2.data[0].city);

          sco.setData({
            'YS_obja.data.city': re2.data[0].city,
            'YS_obja.data.cityid': re2.data[0].ctid
          })
        }



        sco.setData({'cityarr':cityarr,'cityidarr':cityidarr});
      }

    }


    // sco.data.YS_listc.before = function(sco){
    //   // sco.data.YS_listc.params.pid = prodata.cityid?prodata.cityid:
    //  // sco.data.YS_listc.params.pid = YSfac.getstore('pid')?YSfac.getstore('pid'):;
    // }
    // sco.data.YS_listc.done = function(re,sco){
   
    //   if(re.code>0){
    //     cityarr = re.data;
    //     sco.setData({'cityarr':cityarr});
    //   }
    // }


    sco.setData({
      'editshow':YSfac.getstore('editshow'),
      'YS_obja.data':prodata,
      'jgarr':jgarr,
      'region': [prodata.province, prodata.city],
      'yharr':yharr
    });


    //    4、接口4：编辑工程；
    sco.data.YS_objb.url = "api/proauth/program_pro_edit";
    sco.data.YS_objb.before = function(sco){
      sco.data.YS_objb.params.codeid = YSfac.getstore('procodeid');
    }
    sco.data.YS_objb.done = function (re, sco) {
      if (re.code > 0) {
        setTimeout(function(){
          wx.navigateBack({})
        },1000)
       
      }
    }
    
   // 5.获取信息
    // sco.data.YS_objc.url = 'api/proauth/program_pro_info';
    // sco.data.YS_objc.params.codeid = YSfac.getstore('procodeid');
    // sco.data.YS_objc.done = function (re, sco) {
    //   if (re.code > 0) {
    //   //  sco.setData({
    //   //    'YS_objc.data':re.data
    //   //  })
    //   }
    // }
    // sco.fetch('YS_objc')

    //获取七牛云
    
    sco.data.YS_objd.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objd.sdata = false;
    sco.data.YS_objd.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'qiniuinfo': re });
      }
    }
    sco.fetch('YS_objd');

  },










  //单位工程/施工机械
  single:function(sco) { 


    //    1、接口1：获取子单位信息；

    sco.data.YS_plista.url = 'api/proauth/program_sinlist';
    sco.data.YS_plista.params = {curPage:1,listnum:5,codeid:sco.data.options.codeid};
    sco.data.YS_plista.load = true;
    sco.data.YS_plista.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'YS_lista.data':re.data});
        // YSfac.setstore('sgdata', re.data);
      }
    }

    sco.fetch('YS_plista');
    //    2、接口2：获取机械列表；
    sco.data.YS_plistc.url = 'api/proauth/get_jixie_list';
    sco.data.YS_plistc.params = { curPage: 1, listnum: 5, codeid: sco.data.options.codeid};
  sco.data.YS_plistc.load = true;
  sco.fetch('YS_plistc');
  
    //    4、接口4：删除机械；
    sco.data.YS_obja.url = 'api/proauth/jixie_ed';
    sco.data.YS_obja.done = function (re, sco) {
      if(re.code==1){sco.fetch('YS_plistc');}
      YSfac.msg(re);
    }


 //获取七牛云 
    sco.data.YS_objb.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objb.sdata = false;
    sco.data.YS_objb.done = function (re, sco) { 
      if (re.code > 0) { 
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objb');



 
    //    7、接口7：删除子单位；
    sco.data.YS_objd.url = 'api/proauth/program_pro_sindel';
    sco.data.YS_objd.done = function (re, sco) {
      if(re.code==1){sco.fetch('YS_plista');}
      YSfac.msg(re);
    }
   
  },
  sinjixie: function (sco) {


    //    1、接口1：获取子单位信息；

    sco.data.YS_plista.url = 'api/proauth/program_sinlist';
    sco.data.YS_plista.params = { curPage: 1, listnum: 5, codeid: YSfac.getstore('procodeid') };
    sco.data.YS_plista.load = true;
    sco.data.YS_plista.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'YS_lista.data': re.data });
        // YSfac.setstore('sgdata', re.data);
      }
    }

    sco.fetch('YS_plista');
    //    2、接口2：获取机械列表；
    sco.data.YS_plistc.url = 'api/proauth/get_jixie_list';
    sco.data.YS_plistc.params = { curPage: 1, listnum: 5, codeid: YSfac.getstore('procodeid') };
    sco.data.YS_plistc.load = true;
    sco.fetch('YS_plistc');

    //    4、接口4：删除机械；
    sco.data.YS_obja.url = 'api/proauth/jixie_ed';
    sco.data.YS_obja.done = function (re, sco) {
      if (re.code == 1) { sco.fetch('YS_plistc'); }
      YSfac.msg(re);
    }


    //获取七牛云 
    sco.data.YS_objb.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objb.sdata = false;
    sco.data.YS_objb.done = function (re, sco) {
      if (re.code > 0) {
        YSfac.setstore('qntoken', re);
      }
    }
    sco.fetch('YS_objb');




    //    7、接口7：删除子单位；
    sco.data.YS_objd.url = 'api/proauth/program_pro_sindel';
    sco.data.YS_objd.done = function (re, sco) {
      if (re.code == 1) { sco.fetch('YS_plista'); }
      YSfac.msg(re);
    }

  },
  addsingle: function (sco){
    //获取七牛云

    sco.data.YS_objb.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objb.sdata = false;
    sco.data.YS_objb.done = function (re, sco) { 
      if (re.code > 0) {
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objb');



    sco.data.YS_obja.url = 'api/proauth/program_pro_sinadd';
    sco.data.YS_obja.params = {sinimgx:'/pages/image/defsinimg.png',sinimg:'',cengshu:'',dxcengshu:'',sname:'',jiegou:'',jichu:'',zhuti:''}
    sco.setData({'YS_obja.params':sco.data.YS_obja.params});
    sco.data.YS_obja.before=function(sco){
      YSfac.load(1,'提交中……');
      sco.data.YS_obja.params.codeid =  sco.data.options.codeid;

    };
    sco.data.YS_obja.done = function (re, sco) { 
      YSfac.msg(re);
      YSfac.load(0);
      YSfac.goback();
    }
 







  },
 
  //编辑子单位
  editsingle:function(sco){
    //1.基础信息
    //2.部位详情

    //1.基础信息
    sco.data.YS_obja.url = 'api/proauth/program_pro_sinedit';
     sco.data.YS_obja.before = function(sco){
       sco.data.YS_obja.params.codeid=YSfac.getstore('sgcodeid')
     }
    sco.data.YS_obja.done = function (re, sco) {
      YSfac.msg(re)
      // if (re.code > 0) {
      //   sco.setData({ 'YS_obja': re.data.datalist[0] });
      //   YSfac.setstore('procodeid', re.data.datalist[0].codeid);
      // }
    }

    sco.setData({
      'YS_obja.data':YSfac.getstore('sgdata')
    })
    //获取七牛云

    sco.data.YS_objb.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objb.sdata = false;
    sco.data.YS_objb.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'qiniuinfo': re });
      }
    }
    sco.fetch('YS_objb');

    //获取子单位部位
    sco.data.YS_objc.url = 'api/proauth/program_plan_betonlist';
    sco.data.YS_objc.before = function (sco) {
      sco.data.YS_objc.params.codeid = YSfac.getstore('sgcodeid')
    }
    sco.fetch('YS_objc')

    //添加子单位部位
    sco.data.YS_objd.url ="api//proauth/sjtz_ea";
    // sco.data.YS_objd.before = function (sco) {
    //   sco.data.YS_objd.params.codeid = YSfac.getstore('sgcodeid')
    // }
    //删除子单位部位
    sco.data.YS_obje.url ="api//proauth/sjtz_ed";
    sco.data.YS_obje.done = function (re, sco) {
        wx.showToast({
          title: re.msg,
          icon: 'none',
        })
      sco.fetch('YS_objc')
    }

    //获取子单位信息
    sco.data.YS_objf.url ="api/appauth/com_detail";
    sco.data.YS_objf.before = function (sco) {
      sco.data.YS_objf.params.codeid = YSfac.getstore('sgcodeid');
    }


    sco.fetch('YS_objf');




  },
  addbuwei: function (sco) {
    sco.data.YS_obja.url = "api//proauth/sjtz_em";
    sco.data.YS_obja.before = function (sco) {
      sco.data.YS_obja.params.codeid = YSfac.getstore('bwcodeid')
    }
    sco.data.YS_obja.done = function (re, sco) {
        wx.showToast({
          title: re.msg,
          icon: 'none',
        })
        setTimeout(function(){
          wx.navigateBack();
        },1000)
    }


    sco.data.YS_objb.url = 'api/appauth/com_detail';
    sco.data.YS_objb.before = function (sco) {
      sco.data.YS_objb.params.codeid = YSfac.getstore('bwcodeid');
      sco.data.YS_objb.params.field = 'by';
    }

    sco.fetch('YS_objb');

  },
  //添加机械
  addjixie:function(sco){





    //添加施工机械
    sco.data.YS_obja.url = 'api/proauth/jixie_ea'; 
     sco.data.YS_obja.params = {jximgx:'/pages/image/jixie2.png',jximg:'',jixielx:'1',begintime:'',endtime:''}
    sco.setData({ 'YS_obja.params': sco.data.YS_obja.params });
    sco.data.YS_obja.before = function(sco){
      var value = sco.data.YS_obja.params

      //机械类型对应小标是1 2 3不是 0 1 2 ，故加一
      sco.data.YS_obja.params.jixielx++;
      value.codeid = sco.data.options.codeid;
      if (!value.jname) {
        wx.showToast({
          title: '请输入机械名称！',
          icon: 'none',
        })
        return false
      } 
      if (!value.jixielx) {
        wx.showToast({
          title: '请选择类型！',
          icon: 'none',
        })
        return false
      }
      if (!value.begintime) {
        wx.showToast({
          title: '请选进场时间！',
          icon: 'none',
        })
        return false
      }
      if (!value.endtime) {
        wx.showToast({
          title: '请选结束时间！',
          icon: 'none',
        })
        return false
      }

YSfac.load(1,'提交中……');

    }
    sco.data.YS_obja.done = function (re, sco) {
      YSfac.msg(re);
      YSfac.load(0);
      YSfac.goback(); 
    }

  
  },
  //编辑机械
    editjixie(sco){
    sco.data.YS_obja.url = 'api//proauth/jixie_em';
    
      sco.data.YS_obja.before=function(sco){
        sco.data.YS_obja.params.codeid = YSfac.getstore('jxcodeid');
      }
    sco.data.YS_obja.done = function (re, sco) {
      YSfac.msg(re)
      setTimeout(function(){
        wx.navigateBack();
      },1000)
    }
      //获取七牛云

      sco.data.YS_objb.url = 'api/open/get_qiniuinfo';
      sco.data.YS_objb.sdata = false;
      sco.data.YS_objb.done = function (re, sco) {
        if (re.code > 0) {
          sco.setData({ 'qiniuinfo': re });
        }
      }
      sco.fetch('YS_objb');


      //获取机械信息
    sco.data.YS_objc.url = 'api//appauth/com_detail';
    
    sco.data.YS_objc.before = function(sco){
      sco.data.YS_objc.params={codeid:YSfac.getstore('jxcodeid')}
    }

    sco.fetch('YS_objc');

  },

  //成员管理
  member:function(sco) { 
    //    1、接口1：获取成员列表；
    sco.data.YS_lista.url = 'api//proauth/get_member_list';
    sco.data.YS_lista.params = {codeid: YSfac.getstore('procodeid') };
    sco.fetch('YS_lista');

    //    2、接口2：获取角色列表；
    sco.data.YS_listb.url = 'api//proauth/get_role_list';
    sco.data.YS_listb.params = { codeid: YSfac.getstore('procodeid') };
    sco.fetch('YS_listb');

    //    3、接口3：删除成员；
    sco.data.YS_obja.url = 'api//proauth/delete_member';

    //    4、接口4：邀请成员；
    sco.data.YS_objb.url = 'api//proauth/pro_invite';

  },


  //登录
  login:function(sco) { 

    var userinfo = YSfac.getstore('logininfo');
    //    1、接口1：登录；
    sco.data.YS_obja.url = 'api/open/login';
    sco.data.YS_obja.params = {type:'password',msgcode:''};
    sco.setData({'YS_obja.params':sco.data.YS_obja.params});
    sco.data.YS_obja.before = function (sco) {
      sco.data.YS_obja.params.unionid=userinfo.unionid;
      sco.data.YS_obja.params.wxappopenid=userinfo.wxappopenid;
      sco.data.YS_obja.params.wechatnickname=userinfo.nickName;
      sco.data.YS_obja.params.wxappimg=userinfo.avatarUrl;
      sco.data.YS_obja.params.fromapp=1;


      if(YSfac.getstore('fromuid'))sco.data.YS_obja.params.fromuid=YSfac.getstore('fromuid');
      if(YSfac.getstore('fromtype'))sco.data.YS_obja.params.fromtype=YSfac.getstore('fromtype');
    }
      sco.data.YS_obja.done = function(re,sco){
          wx.showToast({
            title: re.msg,
            icon: 'none',
            duration: 1000
          });

      if(re.code==1){

          userinfo.uid = re.uid;
          userinfo.phone = re.phone;
          userinfo.token = re.token;
          YSfac.setstore('lgcode',re.uid);
          YSfac.setstore('logininfo',userinfo); 

        setTimeout(function(){

          if(YSfac.getstore('invitePrcodeid')){
            wx.navigateTo({url:"/pages/invitenext/invitenext"});
          }else{
            wx.switchTab({url:"/pages/eng/eng"});
          }

        },1000);


      }

    }    




        //    2、接口2：获取验证码；
    sco.data.YS_objb.url = 'api/open/newphonecode';
    sco.data.YS_objb.load = true;
    sco.data.YS_objb.before = function(sco){
      sco.setData({time:'发送中'});
    };
    sco.data.YS_objb.done = function(re,sco){
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });
    }



  },

  //注册
  register:function(sco) { 

    var userinfo = YSfac.getstore('logininfo');
    //    1、接口1：注册；
    sco.data.YS_obja.url = 'api/open/register';
    sco.data.YS_obja.before = function (sco) {
      sco.data.YS_obja.params.unionid=userinfo.unionid;
      sco.data.YS_obja.params.wxappopenid=userinfo.wxappopenid;
      sco.data.YS_obja.params.wechatnickname=userinfo.nickName;
      sco.data.YS_obja.params.wxappimg=userinfo.avatarUrl;
      sco.data.YS_obja.params.isapp=1;

      if(YSfac.getstore('fromuid'))sco.data.YS_obja.params.fromuid=YSfac.getstore('fromuid');
      if(YSfac.getstore('fromtype'))sco.data.YS_obja.params.fromtype=YSfac.getstore('fromtype');
    }
      sco.data.YS_obja.done = function(re,sco){
          wx.showToast({
            title: re.msg,
            icon: 'none',
            duration: 1000
          });
      if(re.code==1){


          userinfo.uid = re.data.uid;
          userinfo.phone = sco.data.YS_obja.params.phone;
          userinfo.token = re.data.token;
          YSfac.setstore('lgcode',re.uid);
          YSfac.setstore('logininfo',userinfo); 

          if(YSfac.getstore('invitePrcodeid')){
            wx.navigateTo({url:"/pages/invitenext/invitenext"});
          }else{
            wx.switchTab({url:"/pages/eng/eng"});
          }
      }

    }    



    //    2、接口2：获取验证码；
    sco.data.YS_objb.url = 'api/open/newphonecode';
    sco.data.YS_objb.load = true;
        sco.data.YS_objb.before = function(sco){
      sco.setData({time:'发送中'});
    };
    sco.data.YS_objb.done = function(re,sco){
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });
    }




  },




  //河狸卫士
  protect:function(sco) {
// 初始化，默认当前



    //    1、接口1：获取子单位列表；
    sco.data.YS_lista.url = 'api/proauth/program_sinlist';
    sco.data.YS_lista.before = function (sco) {
      sco.data.YS_lista.params={codeid:YSfac.getstore('procodeid')}
    }
      sco.data.YS_lista.done = function(re,sco){
    // console.log(re);
      if(re.code==1){
           sco.data.YS_listb.params.codeid = re.data[0].codeid;
           sco.fetch('YS_listb');  
      }

    }
    sco.fetch('YS_lista');

    //    2、接口2：获取子单位送检情况；
      sco.data.YS_listb.url = 'api/proauth/program_work_sinimage';

      sco.data.YS_listb.load = true;
sco.data.YS_listb.done = function(re,sco){
  sco.setData({'remind':re.remind});

}
    //    3、接口3：获取原材送检情况；
    // sco.YS_obja.url = 'api/proauth/open/program_work_matcount';
    // sco.fetch('YS_obja');


  },



  //施工进度
  schedule:function(sco) { 

      wx.setNavigationBarTitle({title:'现场施工进度'});
    //    1、接口1：获取子单位列表； 
    sco.data.YS_lista.url = 'api/proauth/program_sinlist';
    sco.data.YS_lista.before = function (sco) {
      sco.data.YS_lista.params={codeid:YSfac.getstore('procodeid')}
    }
      sco.data.YS_lista.done = function(re,sco){
    // console.log(re);
      if(re.code==1){
           sco.data.YS_listb.params.codeid = re.data[0].codeid;
           sco.fetch('YS_listb');  

           //获取施工进度
           sco.data.YS_plistc.params.sid = re.data[0].sid;
           sco.fetch('YS_plistc');  
      }

    }
    sco.fetch('YS_lista');


        //    2、接口2：获取子单位送检情况；
    sco.data.YS_listb.url = 'api/proauth/process_sinimage';

      sco.data.YS_listb.load = true;
sco.data.YS_listb.done = function(re,sco){
  sco.setData({'remind':re.remind});

}

    //    3、接口3：获取施工进度；
    sco.data.YS_plistc.url = 'api/appauth/get_mission_list';
    sco.data.YS_plistc.before = function(sco){
      if(sco.data.YS_listc.data.length>=sco.data.YS_plistc.total){return false;} 
            sco.loadmore(true); 
    }; 
    sco.data.YS_plistc.load = true;
    sco.data.YS_plistc.params = {curPage:1,listnum:5};
    sco.data.YS_plistc.done = function(re,sco){
   
      setTimeout(function(){
        sco.loadmore(false); 
          if(re.data.datalist.length>0){
            sco.data.YS_listc.data = [];
            re.data.datalist.map(function(elem) {
               sco.data.YS_listc.data.push(elem);
            });
            sco.setData({'YS_listc.data':sco.data.YS_listc.data});
            sco.setData({'YS_plistc.total':re.data.total});
          }      
      },500);
    }


    //    4、接口4：获取评论弹窗内容；
    sco.data.YS_plistd.url = 'api/appauth/get_mission_list';
    sco.data.YS_plistd.params = {curPage:1,listnum:5};
    sco.data.YS_plistd.done = function(re,sco){
        sco.data.YS_listd.data = [];
      if(re.data.datalist.length>0){
        re.data.datalist.map(function(elem) {
           sco.data.YS_listd.data.push(elem);
        });
      }      

      sco.setData({'YS_listd.data':sco.data.YS_listd.data});
      sco.setData({'currentBuwei':re.ext.bybuwei});
      sco.setData({'currentTid':re.ext.tid});
      // console.log(sco.data.YS_listd.data);
    }

    //    5、接口5：删除施工进度；
    sco.data.YS_obja.url = 'api/appauth/del_mission';
    sco.data.YS_obja.done = function(re,sco){
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });
       if(re.code>0){
          sco.data.YS_listd.data.map(function(elem,index){
            if(elem.id==sco.data.YS_obja.params.id){
              sco.data.YS_listd.data.splice(index,1);
            }
          });

          sco.data.YS_listc.data.map(function(elem,index){
            if(elem.id==sco.data.YS_obja.params.id){
              sco.data.YS_listc.data.splice(index,1);
            }
          });

          sco.fetch('YS_listb');

          sco.setData({'YS_listd.data':sco.data.YS_listd.data});
          sco.setData({'YS_listc.data':sco.data.YS_listc.data});
       }
    }






    //    6、接口6：设置施工进度时间；
    sco.data.YS_objb.url = 'api/proauth/set_sinimage_time';

    sco.data.YS_objb.before = function (sco) {
      if (!sco.data.YS_objb.params.jihuariqi) {
        sco.data.YS_objb.params.jihuariqi = '';
      }
      if (!sco.data.YS_objb.params.jiaozhuriqi) {
        sco.data.YS_objb.params.jiaozhuriqi = '';
      }

    };

    sco.data.YS_objb.done = function(re,sco){
        YSfac.msg(re);
      sco.setData({ tapshow: 0 }); 
        re.code&&setTimeout(function(){
          sco.fetch('YS_listb');
        },1000)

    }




    // //    4、接口4：发布施工进度；
    // sco.data.YS_objb.url = '';



  },


  //添加施工进度任务
  addschedule:function(sco){
    sco.data.picturearr = [];
    sco.setData({
      'currentBuwei':YSfac.getstore('currentBuwei')
    });


    //    1、接口1：获取类型；
    sco.data.YS_lista.url = 'api/appauth/get_sgtype';
    sco.data.YS_lista.done = function(re,sco){

        sco.data.YS_lista.data = [];
      if(re.data.length>0){
        re.data.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
      }      
      sco.setData({'YS_lista.data':sco.data.YS_lista.data});
    }

    sco.fetch('YS_lista');



    //    2、接口2：提交；
    sco.data.YS_obja.url = 'api/appauth/add_mission';
    sco.data.YS_obja.before = function (sco) {
      sco.data.YS_obja.params.tid = YSfac.getstore('currentTid');
    }
    sco.data.YS_obja.done = function(re,sco){
        wx.showToast({
          title: '发布成功',
          icon: 'none',
          duration: 1000
        });
      setTimeout(function(){
          wx.navigateBack();
      },1000)
    }




    //    4、接口4：获取七牛信息；
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata=false;
    sco.data.YS_objc.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'qiniuinfo':re});
      }
    }
    sco.fetch('YS_objc');



  },








  //随手拍
  photo:function(sco) { 
    //    1、接口1：获取随手拍列表；
    // sco.YS_lista.url = '';

    //    2、接口2：获取随手拍详情；
    // sco.YS_obja.url = '';

    //    3、接口3：发布随手拍；
    // sco.YS_objb.url = '';

    //    4、接口4：删除随手拍；
    // sco.YS_objc.url = '';
  },
planpre:function(sco) { 
  wx.setNavigationBarTitle({title: '选择台帐类型'});
// console.log(sco.data.options);
    sco.data.YS_lista.url = 'api/proauth/program_sinlist';   
    sco.data.YS_lista.before = function(sco){
      sco.data.YS_lista.params.codeid = sco.data.options.codeid;
    }
    sco.fetch('YS_lista');
},
yuancai:function(sco) {

     //    2、接口1：获取原材列表；
  sco.data.YS_listb.url = 'api/proauth/program_plan_matterlist';
  sco.data.YS_listb.load = true;
  sco.data.YS_listb.params = {field:'qb'}
   sco.data.YS_listb.before = function(sco){
      sco.data.YS_listb.params.codeid = sco.data.options.codeid;
    }
  sco.data.YS_listb.done = function(re,sco){ 
sco.setData({yccount:0});
  } 
 sco.fetch('YS_listb');

       // 4、接口4：编辑；
    sco.data.YS_obja.url = 'api/proauth/sjtz_em';
    sco.data.YS_obja.done = function(re,sco){ 
        YSfac.msg(re);
        re.code&&sco.fetch("YS_listb"); 
    }



    //    5、接口5：添加；
     sco.data.YS_objb.url = 'api/proauth/sjtz_ea';

    //    6、接口6：删除；
     sco.data.YS_objc.url = 'api/proauth/sjtz_ed';


 },


  //送检台帐
  plan:function(sco) { 
var pro = YSfac.getstore('prodata');
  wx.setNavigationBarTitle({title: sco.data.options.sname+'-送检台帐'});

   //送检模块功能如下————送检台账 
//1、根据prcodeid 获取子单位的列表；YS_lista
//2、根据第一个子单位的scodeid去获取部位列表；
//3、获取原材列表
//4、删除部位、删除原材
//5、编辑部位、原材

//龄期计算方法；
sco.lq = function(btime,etime){
if(!btime||!etime)return '';
return (YSfac.time(etime)-YSfac.time(btime))/86400000; 
}


sco.slq = function(riqi,time,ys) { 
          //已送,就两个相减，未送就今天减去日期 
         var timex = ys==1?YSfac.time(time):YSfac.time();
         var a = parseInt((timex - YSfac.time(riqi))/86400000); 
         a = a + '天';  
         return a;
  };


//数有多少个，如果没有就为0；
// YSfac.setstore('littabname','标养');
// YSfac.setstore('littab','by');

//      //    1、接口2：获取子单位列表；
//     sco.data.YS_lista.url = 'api//proauth/program_sinlist'; 
//     sco.data.YS_lista.params = {codeid: YSfac.getstore('procodeid')};
    
//     sco.data.YS_lista.before = function(sco){
//       sco.data.YS_lista.params.codeid = YSfac.getstore('procodeid');
//     }
//     sco.data.YS_lista.done = function(re,sco){  
//      sco.data.YS_lista.data.length>0&&sco.data.YS_lista.data.map(function(el,k){
//       el.ngclass = '';el.type='sin';k==0&&(el.ngclass = 'act');
//     }); 
//     sco.data.YS_lista.data.push({sname:'原材',codeid:YSfac.getstore('procodeid'),type:'yc',ngclass:''}); 
 
//  sco.setData({'YS_lista.data':sco.data.YS_lista.data,sintabname:sco.data.YS_lista.data[0].sname});

 
//     sco.data.YS_listc.params.codeid = sco.data.YS_lista.data[0].codeid;//获取子单位
//     sco.data.YS_listc.params.field = 'by';//获取标养
   
    
//     sco.fetch('YS_listc'); 
//     };


//     sco.fetch('YS_lista');







    //    3、接口3：获取子单位部位列表；
    sco.data.YS_listc.url = 'api/proauth/program_plan_betonlist';
    sco.data.YS_listc.load = true;
    sco.data.YS_listc.params = {field:'by'}
      sco.data.YS_listc.before = function(sco){
      sco.data.YS_listc.params.codeid = sco.data.options.codeid;
    }
    sco.data.YS_listc.done = function(re,sco){ 

  var ty=0,ks=0,zt=0,dz=0,cm=0,qz=0,wq=0,nq=0,zp = 0;    
  sco.data.YS_listc.data.datalist.length&&sco.data.YS_listc.data.datalist.map(function(el) {
      el.bylq = sco.lq(el.byriqi,el.bytime);
      el.tylq = sco.slq(el.byriqi,el.tytime,el.tyys);
      el.kslq = sco.lq(el.byriqi,el.kstime);
      el.ztlq = sco.lq(el.byriqi,el.zttime);
      el.cmlq = sco.lq(el.byriqi,el.cmtime);
      el.qzlq = sco.lq(el.qzriqi,el.qztime);
      el.nqlq = sco.lq(el.nqriqi,el.nqtime);
      el.wqlq = sco.lq(el.wqriqi,el.wqtime);
      el.zplq = sco.lq(el.zpriqi,el.zptime);
      el.tyornot==1&&ty++;
      el.ksornot==1&&ks++;
      el.ztornot==1&&zt++;
      el.dzornot==1&&dz++;
      el.cmornot==1&&cm++;
      el.qzornot==1&&qz++;
      el.wqornot==1&&wq++;
      el.nqornot==1&&nq++;
      el.zpornot==1&&zp++;





  })
// var hs = false;,hasshow:hs

// if(sco.data.littab=='ty'&&ty==0){hs = true;}
// if(sco.data.littab=='ks'&&ks==0){hs = true;} 
// if(sco.data.littab=='zt'&&zt==0){hs = true;}
// if(sco.data.littab=='cm'&&cm==0){hs = true;} 
// if(sco.data.littab=='dz'&&dz==0){hs = true;}
// if(sco.data.littab=='qz'&&qz==0){hs = true;}
// if(sco.data.littab=='wq'&&wq==0){hs = true;}
// if(sco.data.littab=='nq'&&nq==0){hs = true;}
// if(sco.data.littab=='zp'&&zp==0){hs = true;}



sco.setData({'YS_listc.data':sco.data.YS_listc.data,chkcount:0});
    }
  sco.fetch('YS_listc');

       // 4、接口4：编辑；
    sco.data.YS_obja.url = 'api/proauth/sjtz_em';
    sco.data.YS_obja.done = function(re,sco){
       if(re.code==1){
          YSfac.msg(re);
          sco.fetch("YS_listc");
       }else{
         YSfac.msg(re);
       }
    }
    //    5、接口5：添加；
     sco.data.YS_objb.url = 'api/proauth/sjtz_ea';

    //    6、接口6：删除；
     sco.data.YS_objc.url = 'api/proauth/sjtz_ed';
  },

  //送检设置
  addplan:function(sco) {
    //1、接收部位列表
    //2、更新部位信息
    //1、接收部位列表 
var littab = YSfac.getstore('littab'); 
var str = littab +'ornot';
var a = YSfac.getstore('setdata');
// console.log(a);
 
var typ = {by:'标养',ty:'同养',ks:'抗渗',zt:'柱头',cm:'拆模',dz:'焊接',qz:'砌筑',wq:'外抹灰',nq:'内抹灰',zp:'找平'};
  


 sco.setData({'YS_lista.data':a,'littabname':typ[littab],str:str});
  
    //2、更新部位信息
    sco.data.YS_obja.url = 'api/proauth/sjtz_em';
    sco.data.YS_obja.params = {codeid:''};

  },
  //送检部位编辑
  setplan:function(sco) {



 // console.log(sco.data.options);
 
    //1、更新部位信息 
var field = sco.data.options.field; 

sco.setData({littab:field});
// var a = YSfac.getstore('sjdata');
//   console.log(a); 


  sco.data.YS_obja.url = 'api/proauth/sjtz_em';
  sco.data.YS_obja.method = 'POST';
  sco.data.YS_obja.done=function(re,sco){
     YSfac.msg(re)
      if(re.code>0){
         setTimeout(function () {
          wx.navigateBack();
        }, 1000)
      } 
    }

 //2.查询详情
  sco.data.YS_objb.url = 'api/appauth/com_detail';
  sco.data.YS_objb.before = function(sco){
    sco.data.YS_objb.params={codeid:sco.data.options.codeid,field:field}
  }
  sco.data.YS_objb.done = function(re,sco){
   if(re.code>0){
var el = re.data;
//对多行进行处理
if(el.xinpian){var a = el.xinpian.split(','); el.xinpian = a.join('\n');
  console.log(el.xinpian.replace(/\n/g,','))
}
if(el.byjg){var a = el.byjg.split(','); el.byjg = a.join('\n');}
if(el.bybh){var a = el.bybh.split(','); el.bybh = a.join('\n');}

if(el.tyjg){var a = el.tyjg.split(','); el.tyjg = a.join('\n');}
if(el.tyxinpian){var a = el.tyxinpian.split(','); el.tyxinpian = a.join('\n');}
if(el.tybh){var a = el.tybh.split(','); el.tybh = a.join('\n');}

if(el.ksjg){var a = el.ksjg.split(','); el.ksjg = a.join('\n');} 
if(el.ksbh){var a = el.ksbh.split(','); el.ksbh = a.join('\n');}

if(el.ztjg){var a = el.ztjg.split(','); el.ztjg = a.join('\n');}  
if(el.ztxinpian){var a = el.ztxinpian.split(','); el.ztxinpian = a.join('\n');}
if(el.ztbh){var a = el.ztbh.split(','); el.ztbh = a.join('\n');}

if(el.cmjg){var a = el.cmjg.split(','); el.cmjg = a.join('\n');} 
if(el.cmbh){var a = el.cmbh.split(','); el.cmbh = a.join('\n');}

if(el.dzjg){var a = el.dzjg.split(','); el.dzjg = a.join('\n');} 
if(el.dzbh){var a = el.dzbh.split(','); el.dzbh = a.join('\n');}

if(el.qzjg){var a = el.qzjg.split(','); el.qzjg = a.join('\n');} 
if(el.qzbh){var a = el.qzbh.split(','); el.qzbh = a.join('\n');}

if(el.wqjg){var a = el.wqjg.split(','); el.wqjg = a.join('\n');} 
if(el.wqbh){var a = el.wqbh.split(','); el.wqbh = a.join('\n');}


if(el.nqjg){var a = el.nqjg.split(','); el.nqjg = a.join('\n');} 
if(el.nqbh){var a = el.nqbh.split(','); el.nqbh = a.join('\n');}

if(el.zpjg){var a = el.zpjg.split(','); el.zpjg = a.join('\n');} 
if(el.zpbh){var a = el.zpbh.split(','); el.zpbh = a.join('\n');}



if(field=='by'){
  YSfac.setstore('weituoarr',el.byweituoarr);
  YSfac.setstore('weituourl',el.byweituoarrurl);
  YSfac.setstore('jiancearr',el.byjiancearr);
  YSfac.setstore('jianceurl',el.byjiancearrurl);
}else if(field=='ty'){
  YSfac.setstore('weituoarr',el.tyweituoarr);
  YSfac.setstore('weituourl',el.tyweituoarrurl);
  YSfac.setstore('jiancearr',el.tyjiancearr);
  YSfac.setstore('jianceurl',el.tyjiancearrurl);
}else if(field=='ks'){
  YSfac.setstore('weituoarr',el.ksweituoarr);
  YSfac.setstore('weituourl',el.ksweituoarrurl);
  YSfac.setstore('jiancearr',el.ksjiancearr);
  YSfac.setstore('jianceurl',el.ksjiancearrurl);
}else if(field=='zt'){
  YSfac.setstore('weituoarr',el.ztweituoarr);
  YSfac.setstore('weituourl',el.ztweituoarrurl);
  YSfac.setstore('jiancearr',el.ztjiancearr);
  YSfac.setstore('jianceurl',el.ztjiancearrurl);
}else if(field=='cm'){
  YSfac.setstore('weituoarr',el.cmweituoarr);
  YSfac.setstore('weituourl',el.cmweituoarrurl);
  YSfac.setstore('jiancearr',el.cmjiancearr);
  YSfac.setstore('jianceurl',el.cmjiancearrurl);
}else if(field=='dz'){
  YSfac.setstore('weituoarr',el.dzweituoarr);
  YSfac.setstore('weituourl',el.dzweituoarrurl);
  YSfac.setstore('jiancearr',el.dzjiancearr);
  YSfac.setstore('jianceurl',el.dzjiancearrurl);
}else if(field=='qz'){
  YSfac.setstore('weituoarr',el.qzweituoarr);
  YSfac.setstore('weituourl',el.qzweituoarrurl);
  YSfac.setstore('jiancearr',el.qzjiancearr);
  YSfac.setstore('jianceurl',el.qzjiancearrurl);
}else if(field=='nq'){
  YSfac.setstore('weituoarr',el.nqweituoarr);
  YSfac.setstore('weituourl',el.nqweituoarrurl);
  YSfac.setstore('jiancearr',el.nqjiancearr);
  YSfac.setstore('jianceurl',el.nqjiancearrurl);
}else if(field=='wq'){
  YSfac.setstore('weituoarr',el.wqweituoarr);
  YSfac.setstore('weituourl',el.wqweituoarrurl);
  YSfac.setstore('jiancearr',el.wqjiancearr);
  YSfac.setstore('jianceurl',el.wqjiancearrurl);
}else if(field=='zp'){
  YSfac.setstore('weituoarr',el.zpweituoarr);
  YSfac.setstore('weituourl',el.zpweituoarrurl);
  YSfac.setstore('jiancearr',el.zpjiancearr);
  YSfac.setstore('jianceurl',el.zpjiancearrurl);
}else{
  YSfac.setstore('weituoarr',el.weituoarr);
  YSfac.setstore('weituourl',el.weituoarrurl);
  YSfac.setstore('jiancearr',el.jiancearr);
  YSfac.setstore('jianceurl',el.jiancearrurl);

}











     sco.setData({
       'YS_obja.params':el,
       'weituoarr':YSfac.getstore('weituoarr'),
       'weituourl':YSfac.getstore('weituourl'),
       'jiancearr':YSfac.getstore('jiancearr'),
       'jianceurl':YSfac.getstore('jianceurl'),
     })
   }
  }
  sco.fetch('YS_objb')
       
  

  },
  tywendu: function (sco) {
    sco.data.YS_lista.url ='api/proauth/wendu';
    sco.data.YS_lista.before = function(sco){
      sco.data.YS_lista.params = { codeid: sco.data.options.codeid , 'type':"ty"}
    }
    sco.fetch('YS_lista')
  },
  //送检汇总
  gether:function(sco) { 
    //1、接口1：获取送检汇总列表；
    //
  

    // 1、接口1：获取送检汇总列表；
    sco.data.YS_lista.url = 'api/proauth/program_gether'; 
    sco.data.YS_lista.load = true;
    sco.data.YS_lista.params.btime = YSfac.numtotime(new Date().getTime());
    sco.data.YS_lista.params.etime = YSfac.numtotime(new Date().getTime()+7*86400000) 
    sco.data.YS_lista.before = function(sco){
    sco.data.YS_lista.params.codeid = YSfac.getstore('procodeid');

    if(sco.data.YS_lista.params.btime>sco.data.YS_lista.params.etime){
       wx.showToast({
          title: '开始日期必须小于结束日期',
          icon:'none'
        })
      return false;
    }
}; 

    sco.data.YS_lista.done = function(re,sco){ 
        sco.setData({tapshow:0}); 
    }
    sco.fetch('YS_lista');

    // sco.setData({'tapshow':true});

    //    2、接口2：存入快照；
    sco.data.YS_objb.url = 'api//proauth/program_gether_save';
    sco.data.YS_objb.before = function(sco) { 
      sco.data.YS_objb.params.btime = YSfac.numtotime(new Date().getTime());
      sco.data.YS_objb.params.etime = YSfac.numtotime(new Date().getTime() + 7 * 86400000) 
      sco.data.YS_objb.params.codeid = YSfac.getstore('procodeid');
    }
    sco.data.YS_objb.done = function (re, sco) {
      if(re.code!=1){
         YSfac.msg(re)
      }else{
        wx.showToast({
          title: '成功存入快照，请前往电脑端查看！',
          icon:'none'
        })
      }
    }

       // 3、接口3：编辑；
    sco.data.YS_obja.url = 'api//proauth/com_em';
    sco.data.YS_obja.done = function(re,sco){ 
      wx.showToast({
        title: re.msg,
        icon: 'none',
        duration: 1000
      });
    }
  },

  //代理商
  proxy:function(sco) { 

  },













  //发现
  recomdetail:function(sco) { 



    //    2、接口2：获取发现详情；
    sco.data.YS_obja.url = 'api/appauth/get_disdetail';
    sco.data.YS_obja.load = true;
    sco.data.YS_obja.params = {codeid:YSfac.getstore('discodeid')};
    sco.data.YS_obja.done = function(re,sco){
      
      if(re.code>0){
        let content = re.data.content;
        
        content = content.replace(/\<img/g, '<img class="rich-img" ');
        re.data.content = content.replace(/font-size\: 16px/g, 'font-size: 18px; '); 
        // console.log(re.data.content)
        sco.setData({'YS_obja':re.data});


        sco.data.YS_plista.params = {curPage:1,listnum:5,id:re.data.id};

        sco.data.YS_plista.done = function(re2,sco2){
       
         if(sco2.data.YS_plista.params.curPage==1)
          sco2.data.YS_lista.data = [];
            if(re2.data.datalist.length>0){
              re2.data.datalist.map(function(elem) {
                 sco2.data.YS_lista.data.push(elem);
              });
            }
          sco2.setData({'YS_lista.data':sco2.data.YS_lista.data});
        }
        sco.fetch('YS_plista');
      }
    }
    sco.fetch('YS_obja');


    //    3、接口3：点赞；
    sco.data.YS_objb.url = 'api/appauth/click_thumb';
    // sco.data.YS_objb.done = function(re,sco){
    //   // 如果未登录
    //     if(re.code==-1){
    //       sco.chklogin(function(){
    //         sco.fetch('YS_objb');
    //       });
    //       return false;
    //     }
    //   YSfac.msg(re);
      
    // }



    //    4、接口4：评论；
    sco.data.YS_objc.url = 'api/appauth/add_comment';
    sco.data.YS_objc.before = function(sco){

    }
    sco.data.YS_objc.done = function(re,sco){
      // 如果未登录
      if(re.code==-1){
        sco.chklogin(function(){
          sco.fetch('YS_objc');
        });
        return false;
      }

      if(re.code>0){
        wx.showToast({
          title: '评论成功',
          icon: 'none',
          duration: 1000
        });

        sco.data.YS_obja.commentnum ++;
        sco.data.YS_objc.params.content = '';
        sco.data.YS_lista.data.unshift(re.data);
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
        sco.setData({'YS_objc':sco.data.YS_objc});
        sco.setData({'YS_obja':sco.data.YS_obja});
        sco.setData({showpl:false });
      } else {
        wx.showToast({
          title: '评论失败！',
          icon: 'none',
          duration: 1000
        });
      }
    }

    //    5、接口5：获取评论；
    sco.data.YS_plista.url = 'api/appauth/get_dis_comment';


    //    6、接口6：收藏；
    sco.data.YS_objd.url = 'api/appauth/click_collect';
    sco.data.YS_objd.done = function(re,sco){
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_objd');
          });
          return false;
        }
        wx.showToast({
          title: '成功',
          icon: 'none',
          duration: 1000
        });
    }


  },

ucenter:function(sco) {
  // 1.用户头像和发布信息数据
  // 2.用户发布文章列表
  // 3.用户发布建筑圈列表

  var uid = YSfac.getstore('currentUid');

  if(uid==YSfac.getstore('logininfo')['uid']){
    sco.setData({ 'ismine': 1 });
  }


    // 1.用户头像和发布信息数据
  sco.data.YS_obja.url = 'api/appauth/userinfo_by_uid';
  sco.data.YS_obja.before =function(sco){
    sco.data.YS_obja.params.uid = uid;
  };
  sco.data.YS_obja.done = function (re, sco) {
    if(re.code>0){
      wx.setNavigationBarTitle({ title: re.data.realname+'的建筑圈动态' });
    }
  };
    sco.fetch('YS_obja');
  

  //4.删除文章
  sco.data.YS_objb.url = 'api/appauth/delete_news';
  sco.data.YS_objb.done = function (re, sco) {
    if(re.code>0) {
      YSfac.msg(re);

      sco.data.YS_lista.data = [];
      sco.data.YS_plista.params.curPage = 0;
      sco.fetch('YS_plista');
      sco.fetch('YS_obja')

    }else{
      YSfac.msg(re);
    }
  }

  //5.删除工作
  sco.data.YS_objc.url = 'api/appauth/delete_job';
  sco.data.YS_objc.done = function (re, sco) {
    
    if (re.code>0) {
     
      YSfac.msg(re);
      sco.data.YS_listb.data=[];
      sco.data.YS_plistb.params.curPage=0;
      sco.fetch('YS_plistb');
      sco.fetch('YS_obja')

    }else{
      YSfac.msg(re);
    }
  }



     // 2.用户发布文章列表
  sco.data.YS_plista.url = 'api/appauth/get_discover_list';
  sco.data.YS_plista.sdata = false;
  sco.data.YS_plista.params = { curPage: 1, listnum: 5 };
  sco.data.YS_plista.before = function(sco){
   
    sco.data.YS_plista.params.uid = uid;
    if (sco.data.YS_lista.data.length >= sco.data.YS_plista.data.total && sco.data.YS_lista.data.length > 0) { return false; }
    sco.loadmore(true); 
  };
  
  sco.data.YS_plista.done = function (re,sco) {
    setTimeout(function () {
      sco.loadmore(false);
      if (re.code == 1 && re.data.datalist.length > 0) {

        re.data.datalist.map(function (elem) {
          var a = [];
          elem.picturearr.map(function (el) {
            a.push(el + '?imageView2/1/w/226/h/128')
          });
          sco.data.YS_lista.data.push(elem);
        });
        sco.setData({ 'YS_lista.data': sco.data.YS_lista.data });
        sco.setData({ 'YS_plista.data': re.data});
      }
    }, 500)

  };
  sco.fetch('YS_plista');

  // 3.用户发布建筑圈列表
  sco.data.YS_plistb.url = 'api/appauth/get_joblist';
  sco.data.YS_plistb.sdata = false;
  sco.data.YS_plistb.params = { curPage: 1, listnum: 5 };
  sco.data.YS_plistb.before = function (sco) {
   
    sco.data.YS_plistb.params.uid = uid;
    if (sco.data.YS_listb.data.length >= sco.data.YS_plistb.data.total && sco.data.YS_listb.data.length > 0) { return false; }
    sco.loadmore(true); 
  };
  sco.data.YS_plistb.done = function (re, sco) {
    setTimeout(function () {
      sco.loadmore(false);

      if (sco.data.YS_plistb.params.curPage == 1) sco.data.YS_listb.data = [];
      if (re.code == 1 && re.data.datalist.length > 0) {
        re.data.datalist.map(function (elem) {
          var arr = [];
          elem.picturearr.map(function (em) {
            em && arr.push(em + '?imageView2/1/w/2260/h/1280');
          });
          elem.picturearr = arr;


          sco.data.YS_listb.data.push(elem);

        });
      }
      sco.setData({ 'YS_listb.data': sco.data.YS_listb.data });
      sco.setData({ 'YS_plistb.data': re.data });
    }, 500)

  };
  sco.fetch('YS_plistb');
  },



  //发现
  //找工作
  findjob:function(sco) { 

    sco.data.favorite = [];

    //获取地理位置
    sco.data.YS_obja.url = 'api/open/get_location';
    sco.data.YS_obja.done = function(re,sco){

    sco.data.favorite.unshift({worktype:0,noticetype:0,city_id:0,province_id:0,name:'最新',myclass:'',id:-1});
    sco.data.favorite.unshift({worktype:0,noticetype:0,city_id:re.data.cityid,province_id:0,name:'最近',myclass:'on',id:0});
    sco.setData({'favorite':sco.data.favorite});

    sco.data.YS_plista.params.worktype = 0;
    sco.data.YS_plista.params.noticetype = 0;
    sco.data.YS_plista.params.province_id = 0;
    sco.data.YS_plista.params.city_id = re.data.cityid;

    sco.fetch('YS_plista');
      console.log(re);
    }




    // sco.setData({
    //   px: [{'name':'全部','type':0}, {'name':'企业','type':'company'}, {'name':'工程','type':'program'}]
    // });

    //获取工种
    //    0、接口0：获取工种；
    // sco.data.YS_liste.url = 'api/open/get_worktype';
    // sco.data.YS_liste.done = function(re,sco){
    //   if(re.code>0){
    //     sco.setData({'nv':re.data});
    //   }
    // }
    // sco.fetch('YS_liste');




    //    1、接口1：获取工作列表；

    sco.data.YS_plista.url = 'api/appauth/get_joblist';
    sco.data.YS_plista.sdata = false;
    sco.data.YS_plista.before = function(sco){

    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.total&&sco.data.YS_lista.data.length>0){return false;}
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.params = {curPage:1,listnum:5};

    sco.data.YS_plista.done = function(re,sco){

      setTimeout(function(){
        sco.loadmore(false); 
   
   if(sco.data.YS_plista.params.curPage==1)sco.data.YS_lista.data = [];
      if(re.code==1&&re.data.datalist.length>0){
        re.data.datalist.map(function(elem) {
var arr = [];
elem.picturearr.map(function(em) {
   em&&arr.push(em + '?imageView2/1/w/2260/h/1280');     
});
elem.picturearr = arr;


           sco.data.YS_lista.data.push(elem);
          
        });
      }
      sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      sco.setData({'YS_plista.total':re.data.total});
      },500)

    }



    //    2、接口2：获取省份；
    // sco.data.YS_listb.url = 'api/open/get_province';
    // sco.data.YS_listb.done = function(re,sco){
   
    //   if(re.code>0){
    //     re.data.unshift({pid:0,province:'全部'});

    //     sco.setData({'find.cityleft':re.data});
    //   }
    // }
    // sco.fetch('YS_listb');

    // //    3、接口3：获取城市列表；
    // sco.data.YS_listc.url = 'api/open/get_city';
    // sco.data.YS_listc.params = {};
    // sco.data.YS_listc.done = function(re,sco){
   
    //   if(re.code>0){

    //     sco.setData({'find.citycenter':re.data});
    //   }
    // }


    //    4、接口4：获取区列表；
    // sco.data.YS_listd.url = 'api/open/get_area';
    // sco.data.YS_listd.done = function(re,sco){
   
    //   if(re.code>0){

    //     sco.setData({'find.citycenter':re.data});
    //   }
    // }


    //    5、接口5：获取个人信息；
    // sco.data.YS_obja.url = 'api/appauth/userinfo';
    // sco.data.YS_obja.done = function(re,sco){
   
    //   if(re.code>0){

    //     sco.setData({'userinfo':re.data});
    //   }
    // }
    // sco.fetch('YS_obja');

   //    2、接口2：添加我喜欢的；
    // sco.data.YS_obja.url = 'api/appauth/add_favorite';
    // sco.data.YS_obja.before = function(sco){
    //   if(!sco.data.YS_obja.params.noticetype){
    //     wx.showToast({
    //       title: '请选择标签！',
    //       icon: 'none',
    //       duration: 1000
    //     });
    //     return false;
    //   }
    // }
    // sco.data.YS_obja.done = function(re,sco){
    //     wx.showToast({
    //       title: re.msg,
    //       icon: 'none',
    //       duration: 1000
    //     }); 
    // }


    //    6、接口6：获取我喜欢的；
    sco.data.YS_listf.url = 'api/appauth/get_myfavorite';
    sco.data.YS_listf.done = function(re,sco){

      if(re.code==-1){
        sco.data.YS_listf.data.code = -1;
        sco.setData({'tapshow':4});
      }else{
        // sco.setData({'favorite':re.data});
        //获取地理位置
        wx.getLocation({
            type: 'gcj02',
            success: function(re) {
              console.log(re);
              sco.data.YS_obja.params = {longitude : re.longitude,latitude : re.latitude};
              sco.fetch('YS_obja');

            },
            fail:function(){
               //调用公共方法去请求授权地理位置；
              YSfac.unsetstore('userinfo'); 
              sco.chklocation();
            },
        });        
      }

      // if(re.code<=0){
      //   if(quanju){return false;}
      //   // setTimeout(function () {
      //   //    sco.setData({'tapshow':1});
      //   //  },3000);
      //   quanju=true;
      // }


//弹出提示，引导用户去设置我喜欢的类型；
// if(true){
//   setTimeout(function(){
//      sco.setData({'tapshow':1});
//   },6000);
// }
  
    re.data.map(function(elem,index){
      re.data[index]['myclass'] = '';
      if(index==0){
        // re.data[index]['myclass'] = 'on';
        // sco.data.YS_plista.params.worktype = elem.worktype;
        // sco.data.YS_plista.params.noticetype = elem.noticetype;
        // sco.data.YS_plista.params.province_id = elem.province_id;
        // sco.data.YS_plista.params.city_id = elem.city_id;
      }
    })
var str = '';
if(re.code<=0){
sco.data.YS_plista.params = {curPage:1,listnum:5}; 
};
if(re.code>0){
  sco.setData({'tapshow':0});
};


    sco.fetch('YS_plista');


        sco.setData({'favorite':re.data});


    }
    sco.fetch('YS_listf');


//1、获取标签类型接口
   // sco.data.YS_listc.url = 'api/appauth/get_classify'; 
   //  sco.data.YS_listc.done = function(re,sco){ 
   //    console.log(sco.data.YS_listc.data);
   //  }
   //  sco.fetch('YS_listc');

    //2、获取地区数据
   // sco.data.YS_listb.url = '/api/open/get_procity_onarea'; 
   //  sco.data.YS_listb.done = function(re,sco){  
   //  var obj = {id: 0, name: "不限", city: [{id: 0, name: "不限", pid: 1}]};  
   //  sco.data.YS_listb.data.unshift(obj);
   //    sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[0].city]});
   //  }
   //  sco.fetch('YS_listb');
    
  // 分享数量
    sco.data.YS_objc.url ='api/appauth/add_job_repeat';
    
  },


  //我喜欢
  release:function(sco){
    wx.setNavigationBarTitle({ title: '设置建筑圈动态标签' });

    //    1、接口1：获取我喜欢的；
    sco.data.YS_lista.url = 'api/appauth/get_myfavorite';
    sco.data.YS_lista.done = function(re,sco){
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_lista');     
          });
          return false;
        }
      sco.setData({'favorite':re.data});
    }
    sco.fetch('YS_lista');

    //    2、接口2：删除我喜欢的；
    sco.data.YS_obja.url = 'api/appauth/del_favorite';
    sco.data.YS_obja.done = function(re,sco){
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });
        if(re.code>0){
          sco.fetch('YS_lista');
        }
    }



  },


//   //添加我喜欢
//   addrelease:function(sco){


//     //    2、接口2：添加我喜欢的；
//     sco.data.YS_obja.url = 'api/appauth/add_favorite';
//     sco.data.YS_obja.before = function(sco){
//       if(sco.data.YS_obja.params.noticetype==''||!sco.data.YS_obja.params.noticetype){
//         wx.showToast({
//           title: '请选择标签！',
//           icon: 'none',
//           duration: 1000
//         });
//         return false;
//       }
//     }
//     sco.data.YS_obja.done = function(re,sco){
//         wx.showToast({
//           title: re.msg,
//           icon: 'none',
//           duration: 1000
//         });
//         setTimeout(function(){
//           wx.navigateBack();
//         },1000)

//     }
// //1、获取标签类型接口
//    sco.data.YS_lista.url = 'api/appauth/get_classify'; 
//     sco.data.YS_lista.done = function(re,sco){ 
//      sco.setData({'tworangearr':[sco.data.YS_lista.data, sco.data.YS_lista.data[0].child]});
//     }
//     sco.fetch('YS_lista');    
// //2、获取地区数据
//    sco.data.YS_listb.url = '/api/open/get_procity_onarea'; 
//     sco.data.YS_listb.done = function(re,sco){ 
    
// sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[0].city]});
//      }
//     sco.fetch('YS_listb');


//   },
















  //找工作详情
  jobdetail:function(sco) { 
    //    1、接口1：获取工作详情；
    sco.data.YS_obja.url = 'api/appauth/get_jobdetail';
    sco.data.YS_obja.load = true;
    sco.data.YS_obja.params = {codeid:YSfac.getstore('jobcodeid')};
    sco.data.YS_obja.done = function(re,sco){
           sco.data.YS_plista.params = {curPage:1,listnum:5,id:re.data.id};

        sco.data.YS_plista.done = function(re2,sco2){
       
         if(sco2.data.YS_plista.params.curPage==1)
          sco2.data.YS_lista.data = [];
            if(re2.data.datalist.length>0){
              re2.data.datalist.map(function(elem) {
                 sco2.data.YS_lista.data.push(elem);
              });
            }
          sco2.setData({'YS_lista.data':sco2.data.YS_lista.data});
        }
      sco.fetch('YS_plista');
     
    }
    sco.fetch('YS_obja');




    //    6、接口6：收藏；
    sco.data.YS_objd.url = 'api/appauth/click_collect';
    sco.data.YS_objd.done = function(re,sco){
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_objd');
          });
          return false;
        }
        wx.showToast({
          title: '成功',
          icon: 'none',
          duration: 1000
        });
    }




    //    3、接口3：点赞；
    sco.data.YS_objb.url = 'api/appauth/click_thumb';
    sco.data.YS_objb.done = function(re,sco){
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_objb');
          });
          return false;
        }
        wx.showToast({
          title: '成功',
          icon: 'none',
          duration: 1000
        });
    }



    //    4、接口4：评论；
    sco.data.YS_objc.url = 'api/appauth/add_notice_comment';
    sco.data.YS_objc.before = function(sco){

    }
    sco.data.YS_objc.done = function(re,sco){
      // 如果未登录
      if(re.code==-1){
        sco.chklogin(function(){
          sco.fetch('YS_objc');
        });
        return false;
      }

      if(re.code>0){
        wx.showToast({
          title: '评论成功',
          icon: 'none',
          duration: 1000
        });

        sco.data.YS_obja.commentnum ++;
        sco.data.YS_objc.params.content = '';
        sco.data.YS_lista.data.unshift(re.data);
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
        sco.setData({'YS_objc':sco.data.YS_objc});
        sco.setData({'YS_obja':sco.data.YS_obja});
        sco.setData({showpl:false });
      } else {
        wx.showToast({
          title: '评论失败！',
          icon: 'none',
          duration: 1000
        });
      }
    }

    //    5、接口5：获取评论；
    sco.data.YS_plista.url = 'api/appauth/get_notice_comment';
    sco.data.YS_plista.before = function(sco){

    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.data.total&&sco.data.YS_lista.data.length>0){return false;} 
          sco.loadmore(true);
    }; 


    sco.data.YS_obje.url = 'api/appauth/get_job_qrcode';
    sco.data.YS_obje.before = function (sco) {
      sco.data.YS_obje.params = { jobcodeid: YSfac.getstore('jobcodeid') }
    }
    sco.data.YS_obje.done = function (re, sco) {
      YSfac.setstore('jobqrcode', 'https://api.helii.cn/' + re.data)
      wx.getImageInfo({
        src: YSfac.getstore('jobqrcode'),
        success: function (res) {
          YSfac.setstore('jobqrcode', res.path)
          // sco.setData({
          //   hbhead: res.path
          // })


        }
      });
    }
    sco.fetch("YS_obje")















  },


  //找牛人详情
  acedetail:function(sco) { 
    //    1、接口1：获取牛人详情；
    sco.data.YS_obja.url = 'api/appauth/get_acedetail';
    sco.data.YS_obja.load = true;
    sco.data.YS_obja.params = {codeid:YSfac.getstore('acecodeid')};
    sco.data.YS_obja.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({
          'YS_obja':re.data,
        });



        sco.data.YS_plista.params = {uid:re.data.uid};

        sco.data.YS_plista.done = function(re2,sco2){
       
         if(sco2.data.YS_plista.params.curPage==1)
          sco2.data.YS_lista.data = [];
            if(re2.data.length>0){
              re2.data.map(function(elem) {
                 sco2.data.YS_lista.data.push(elem);
              });
            }
          sco2.setData({'YS_lista.data':sco2.data.YS_lista.data});
        }
        sco.fetch('YS_plista');


      }
    }
    sco.fetch('YS_obja');




    //    2、接口2：收藏；
    sco.data.YS_objb.url = 'api/appauth/click_collect';
    sco.data.YS_objb.done = function(re,sco){
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_objb');
          });
          return false;
        }
        wx.showToast({
          title: '成功',
          icon: 'none',
          duration: 1000
        });
    }



    //    3、接口3：获取工作经历；
    sco.data.YS_plista.url = 'api/appauth/get_experience';

    //    4、接口4：获取相关牛人；
    sco.data.YS_plistb.url = 'api/appauth/get_experience';


  },
  // onPageScroll: function (e) {
  //   console.log(e);//{scrollTop:99}
  // },
  //找牛人
  findace:function(sco) { 
   

    sco.setData({
      px: [{'name':'全部','type':0}, {'name':'企业','type':'company'}, {'name':'工程','type':'program'}]
    });

    //获取工种
    //    0、接口0：获取工种；
    sco.data.YS_liste.url = 'api/open/get_worktype';
    sco.data.YS_liste.done = function(re,sco){
      if(re.code>0){
        sco.setData({'nv':re.data});
      }
    }
    sco.fetch('YS_liste');


    //    1、接口1：获取牛人列表；

    sco.data.YS_plista.url = 'api/appauth/get_acelist';
    sco.data.YS_plista.sdata = false;
    sco.data.YS_plista.before = function(sco){

    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.total&&sco.data.YS_lista.data.length>0){return false;} 
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.params = {curPage:1,listnum:5};
    sco.data.YS_plista.done = function(re,sco){
     
      setTimeout(function(){
          sco.loadmore(false); 
   
          if(sco.data.YS_plista.params.curPage==1)sco.data.YS_lista.data = [];
          if(re.code==1&&re.data.datalist.length>0){
            re.data.datalist.map(function(elem) {
               sco.data.YS_lista.data.push(elem);
            });
          }
          sco.setData({'YS_lista.data':sco.data.YS_lista.data});
          sco.setData({'YS_plista.total':re.data.total});

        },500)
      }
    sco.fetch('YS_plista');



    //    2、接口2：获取省份；
    sco.data.YS_listb.url = 'api/open/get_province';
    sco.data.YS_listb.done = function(re,sco){
   
      if(re.code>0){
        re.data.unshift({pid:0,province:'全部'});
        sco.setData({'find.cityleft':re.data});
      }
    }
    sco.fetch('YS_listb');

    //    3、接口3：获取城市列表；
    sco.data.YS_listc.url = 'api/open/get_city';
    sco.data.YS_listc.params = {};
    sco.data.YS_listc.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'find.citycenter':re.data});
      }
    }


    //    4、接口4：获取区列表；
    sco.data.YS_listd.url = 'api/open/get_area';
    sco.data.YS_listd.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'find.citycenter':re.data});
      }
    }



  },
  

  //发布牛人需求
  addemand:function(sco) { 


    var proarr = [];
    var proidarr = [];
    var cityarr = [];
    var cityidarr = [];
    var prodata = YSfac.getstore('prodata');
    var experiencearr = [];


       // 1、接口1：发布牛人需求；
    sco.data.YS_obja.url = 'api/appauth/add_ace';
    sco.data.YS_obja.done = function(re,sco){
   
      if(re.code>0){

        YSfac.setstore('temptagarr',[]);
        wx.showToast({
        title: '发布成功',
        icon: 'none',
        duration: 1000
        });       
        setTimeout(function () {
          wx.navigateBack();
        }, 1000)
      }
    }



    //    2、接口2：获取个人信息；
    sco.data.YS_objb.url = 'api/appauth/userinfo';
    sco.data.YS_objb.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'userinfo':re.data});
        sco.fetch('YS_listd');
      }
    }
    sco.fetch('YS_objb');

    //    3、接口3：获取七牛信息；
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.done = function(re,sco){
   
      if(re.code>0){

        sco.setData({'qiniuinfo':re});
      }
    }
    sco.fetch('YS_objc');


    //    4、接口4：获取薪资信息；
    sco.data.YS_objd.url = 'api/appauth/get_cate';
    sco.data.YS_objd.before = function(sco){
     sco.data.YS_objd.params = {cate:'salary',pid:0};
    }
    sco.data.YS_objd.done = function(re,sco){
      // 如果未登录
      if(re.code==-1){
        sco.chklogin(function(){
          sco.fetch('YS_objd');
        });
      }

      sco.data.salary = [];
      if(re.code>0){
        re.data.map(function(elem){
          sco.data.salary.push({name:elem.name,id:elem.id});
        });

        sco.setData({'salary':sco.data.salary});
      }
      // console.log(sco.data.salary);
    }
    sco.fetch('YS_objd');






    //获取工种
    //    5、接口5：获取工种；
    sco.data.YS_liste.url = 'api/open/get_worktype';
    sco.data.YS_liste.before = function(sco){
     sco.data.YS_liste.params = {notall:1};
    }
    sco.data.YS_liste.done = function(re,sco){
      if(re.code>0){
        sco.setData({'gongzhong':re.data});
      }
    }
    sco.fetch('YS_liste');




    //    6、接口6：获取省份；
    sco.data.YS_listb.url = 'api/open/get_province';
    sco.data.YS_listb.done = function(re,sco){
   
      if(re.code>0){

          re.data.map(function(elem,index) {
            proidarr[elem.pid] = index;
            proarr.push(elem.province);
          });

        
          sco.data.YS_listc.params.pid = 0;


        sco.setData({'proarr':proarr,'proidarr':proidarr});
      }
      if(sco.data.YS_listc.params.pid>0)sco.fetch('YS_listc');
      
    }
    sco.fetch('YS_listb');


    //    7、接口7：获取城市列表；
    sco.data.YS_listc.url = 'api/open/get_city';

    sco.data.YS_listc.done = function(re2,sco2){
   
      if(re2.code>0){

        var citynotin = 0;

        re2.data.map(function(elem2,index2) {
          cityidarr[elem2.ctid] = index2;
          cityarr.push(elem2.city);
        });

        //如果项目cityid不在，则用第一个
        // re2.data.map(function(elem){
        //   if(elem.ctid==prodata.cityid){
        //     citynotin = 1;
        //   }
        // });

        if(!citynotin){

          sco.data.YS_objb.params.cityid = re2.data[0].ctid;

          // console.log(re2.data[0].city);

          sco.setData({
            'YS_obja.data.city': re2.data[0].city,
            'YS_obja.data.cityid': re2.data[0].ctid,
            'YS_obja.data.pid': sco.data.YS_listc.params.pid,
            'YS_obja.params.city_id': re2.data[0].ctid,
            'YS_obja.params.province_id': sco.data.YS_listc.params.pid
          })
        }



        sco.setData({'cityarr':cityarr,'cityidarr':cityidarr});
      }

    }



    // //    8、接口8：获取工作经历；
    // sco.data.YS_listd.url = 'api/appauth/get_experience';
    // sco.data.YS_listd.before = function(sco){
    //  sco.data.YS_listd.params.uid = sco.data.userinfo.uid;
    // }
    // sco.data.YS_listd.done = function(re,sco){
   
    //   if(re.code>0){
    //       experiencearr = [];
    //       re.data.map(function(elem,index) {
    //         experiencearr.push(elem);
    //       });

    //     sco.setData({'experiencearr':experiencearr});
    //   }

    // }






  },


  //发布职位需求
   addbelief:function(sco) { 
      wx.setNavigationBarTitle({title: '发布-建筑圈动态'});
//1、获取标签类型接口
//2、获取地区数据
//3、提交数据发布后台
//4、获取七牛云的信息




//1、获取标签类型接口
   sco.data.YS_lista.url = 'api/appauth/get_classify'; 
    sco.data.YS_lista.done = function(re,sco){ 
     sco.setData({'tworangearr':[sco.data.YS_lista.data, sco.data.YS_lista.data[0].child]});
    }
    sco.fetch('YS_lista');
//2、获取地区数据
   sco.data.YS_listb.url = '/api/open/get_procity_onarea'; 
    sco.data.YS_listb.done = function(re,sco){ 
    
sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[0].city]});
     }
    sco.fetch('YS_listb');


//3、提交数据发布后台
    sco.data.YS_obja.url = 'api/appauth/add_job';
    sco.data.YS_obja.params = {
        description:"", 
        picture:"", 
        noticetype:"",
        noticestr:'',  
        worktype:"",
        workstr:'',   
        city_id:"",   
        city_str:"", 
        province_id:"", 
        province_str:"", 
        area_id:"", 
        tel:"" };
    sco.data.YS_obja.before = function(sco){ 

     if(!sco.data.YS_obja.params.noticetype){wx.showToast({title: '请选择标签！',icon:'none'});return false }; 
     if (!sco.data.YS_obja.params.worktype) { wx.showToast({ title: '请选择标签！', icon: 'none' }); return false }; 
     if(!sco.data.YS_obja.params.province_id){wx.showToast({title: '请选择省份城市！',icon:'none'});return false }; 
     if(!sco.data.YS_obja.params.description){wx.showToast({title: '请填写动态内容！',icon:'none'});return false }; 
     if(!sco.data.YS_obja.params.tel){wx.showToast({title: '请填写联系方式！',icon:'none'});return false }; 
     if(!YSfac.testphone(sco.data.YS_obja.params.tel)){wx.showToast({ title: '请输入正确的手机号码！', icon: 'none' }); return false };
     if(sco.data.added) { wx.showToast({ title: '已发布！', icon: 'none' }); return false}
      sco.data.YS_obja.params.picture = sco.data.imageList.join(';');

      YSfac.load(1);
    } 
    sco.data.YS_obja.done = function(re,sco){      
     // 如果未登录
      if(re.code==-1){
        YSfac.msg('请先登录');
        sco.chklogin(function(){
          sco.fetch('YS_obja');
        });
        return false;
      }
      YSfac.msg(re);
      sco.setData({
        added:true,
        disabled:true,
      })
      YSfac.goback(); 
    }


//4、获取七牛云的信息 
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) { 
      if (re.code > 0) { 
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objc');






   },



   //添加我喜欢的标签
      addrelease:function(sco) { 
        wx.setNavigationBarTitle({ title: '设置建筑圈动态标签' });
//1、获取标签类型接口
//2、获取地区数据
//3、提交数据发布后台
//4、获取七牛云的信息




    //    2、接口2：添加我喜欢的；
    sco.data.YS_obja.url = 'api/appauth/add_favorite';
    sco.data.YS_obja.before = function(sco){

      if(sco.data.YS_obja.params.noticetype==''||!sco.data.YS_obja.params.noticetype){
        wx.showToast({
          title: '请选择标签！',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      
    }
    sco.data.YS_obja.done = function(re,sco){
      if (re.code == -1) {
        sco.chklogin(function () {

        });
        return false;
      }
        wx.showToast({
          title: re.msg,
          icon: 'none',
          duration: 1000
        });
        setTimeout(function(){
          wx.navigateBack();
        },1000)

    }
//1、获取标签类型接口
   sco.data.YS_lista.url = 'api/appauth/get_classify'; 
    sco.data.YS_lista.done = function(re,sco){ 
     sco.setData({'tworangearr':[sco.data.YS_lista.data, sco.data.YS_lista.data[0].child]});
    
    }
    sco.fetch('YS_lista');  



//2、获取地区数据
   sco.data.YS_listb.url = '/api/open/get_procity_onarea'; 
    sco.data.YS_listb.done = function(re,sco){    
sco.setData({'cityrangearr':[sco.data.YS_listb.data, sco.data.YS_listb.data[0].city]});
     }
    sco.fetch('YS_listb');
   
   
    sco.data.YS_obje.url = 'api/open/set_fromid';


   },


  addbeliefbeifen:function(sco) { 



    var proarr = [];
    var proidarr = [];
    var cityarr = [];
    var cityidarr = [];
    var prodata = YSfac.getstore('prodata');




    //   1、接口1：发布职位需求；
    sco.data.YS_obja.url = 'api/appauth/add_job';
    sco.data.YS_obja.before = function(sco){
     sco.data.YS_obja.params.jobtype = sco.data.tapshow == 0?'company':'program';
     sco.data.YS_obja.params.type = 'job';
    }
    sco.data.YS_obja.done = function(re,sco){
        YSfac.setstore('temptagarr',[]);
      if(re.code>0){
        wx.showToast({
        title: '发布成功',
        icon: 'none',
        duration: 1000
        });       
      }
      setTimeout(function () {
        wx.navigateBack();
      }, 1000)
    }
    // //    2、接口2：获取个人信息；
    // sco.data.YS_objb.url = 'api/appauth/userinfo';
    // sco.data.YS_objb.done = function(re,sco){
   
    //   if(re.code>0){

    //     sco.setData({'userinfo':re.data});
    //   }
    // }
    // sco.fetch('YS_objb');



    //    3、接口3：获取薪资信息；
    sco.data.YS_objc.url = 'api/appauth/get_cate';
    sco.data.YS_objc.before = function(sco){
     sco.data.YS_objc.params = {cate:'salary',pid:0};
    }
    sco.data.YS_objc.done = function(re,sco){

      // 如果未登录
      if(re.code==-1){
        sco.chklogin(function(){
          sco.fetch('YS_objc');
        });
      }


      sco.data.salary = [];
      if(re.code>0){
        re.data.map(function(elem){
          sco.data.salary.push({name:elem.name,id:elem.id});
        });

        sco.setData({'salary':sco.data.salary});
      }
      // console.log(sco.data.salary);
    }
    sco.fetch('YS_objc');






    // //    4、接口4：获取岗位信息；
    // sco.data.YS_objd.url = 'api/appauth/get_cate';
    // sco.data.YS_objd.before = function(sco){
    //  sco.data.YS_objd.params = {cate:'zhulei',pid:0};
    // }
    // sco.data.YS_objd.done = function(re,sco){
    //   sco.data.gangwei = [];
    //   if(re.code>0){
    //     re.data.map(function(elem){
    //       sco.data.gangwei.push({name:elem.name,id:elem.id});
    //     });


    //     sco.setData({'gangwei':sco.data.gangwei});
    //   }
    //   console.log(sco.data.gangwei);
    // }
    // sco.fetch('YS_objd');




    // //    5、接口5：获取工种信息；
    // sco.data.YS_obje.url = 'api/appauth/get_cate';
    // sco.data.YS_obje.done = function(re,sco){
    //   sco.data.gongzhong = [];
    //   if(re.code>0){
    //     re.data.map(function(elem){
    //       sco.data.gongzhong.push({name:elem.name,id:elem.id});
    //     });


    //     sco.setData({'gongzhong':sco.data.gongzhong});
    //   }
    // }


    //获取工种
    //    5、接口5：获取工种；
    sco.data.YS_liste.url = 'api/open/get_worktype';
    sco.data.YS_liste.before = function(sco){
     sco.data.YS_liste.params = {notall:1};
    }
    sco.data.YS_liste.done = function(re,sco){
      if(re.code>0){
        sco.setData({'gongzhong':re.data});
      }
    }
    sco.fetch('YS_liste');




    //    6、接口6：获取省份；
    sco.data.YS_listb.url = 'api/open/get_province';
    sco.data.YS_listb.done = function(re,sco){
   
      if(re.code>0){

          re.data.map(function(elem,index) {
            proidarr[elem.pid] = index;
            proarr.push(elem.province);
          });

        
          sco.data.YS_listc.params.pid = 0;


        sco.setData({'proarr':proarr,'proidarr':proidarr});
      }

      if(sco.data.YS_listc.params.pid>0)sco.fetch('YS_listc');
    }
    sco.fetch('YS_listb');


    //    7、接口7：获取城市列表；
    sco.data.YS_listc.url = 'api/open/get_city';

    sco.data.YS_listc.done = function(re2,sco2){
   
      if(re2.code>0){

        var citynotin = 0;

        re2.data.map(function(elem2,index2) {
          cityidarr[elem2.ctid] = index2;
          cityarr.push(elem2.city);
        });

        //如果项目cityid不在，则用第一个
        // re2.data.map(function(elem){
        //   if(elem.ctid==prodata.cityid){
        //     citynotin = 1;
        //   }
        // });

        if(!citynotin){

          sco.data.YS_objb.params.cityid = re2.data[0].ctid;

          // console.log(re2.data[0].city);

          sco.setData({
            'YS_obja.data.city': re2.data[0].city,
            'YS_obja.data.cityid': re2.data[0].ctid,
            'YS_obja.data.pid': sco.data.YS_listc.params.pid,
            'YS_obja.params.city_id': re2.data[0].ctid,
            'YS_obja.params.province_id': sco.data.YS_listc.params.pid
          })
        }



        sco.setData({'cityarr':cityarr,'cityidarr':cityidarr});
      }

    }





  },
  // 上传检测报告
  upjiance: function (sco) {
    var field = sco.data.options.field; 
    sco.setData({
      littab:field,
      imageList:YSfac.getstore('jiancearr')
    });
    //4、获取七牛云的信息 
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) {
      if (re.code > 0) {
        YSfac.setstore('qntoken', re);
      }
    }
    sco.fetch('YS_objc');
  },
// 上传委托单
  upweituo:function(sco){

    var field = sco.data.options.field; 
    sco.setData({
      littab:field,
      imageList:YSfac.getstore('weituoarr')
    });


    //4、获取七牛云的信息 
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) {
      if (re.code > 0) {
        YSfac.setstore('qntoken', re);
      }
    }
    sco.fetch('YS_objc');
  },

  //搜索页
  search:function(sco) { 


    if(YSfac.getstore('searchtype')=='job'){
      //    1、接口1：搜索职位需求；
      sco.data.YS_plista.url = 'api/appauth/get_joblist';
      
    }else if(YSfac.getstore('searchtype')=='ace'){
      //    2、接口2：搜索求职需求；
      sco.data.YS_plista.url = 'api/appauth/get_acelist';      
    }

    sco.setData({'searchtype':YSfac.getstore('searchtype')});

    sco.data.YS_plista.before = function(sco){

    if(sco.data.YS_lista.data.length>=sco.data.YS_plista.total&&sco.data.YS_lista.data.length>0){return false;}
          sco.loadmore(true); 
    }; 
    sco.data.YS_plista.done = function(re,sco){
      if(re.data.total==0){
        sco.data.YS_lista.data = [];
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
      if(re.data.datalist.length>0){
        sco.data.YS_lista.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    

    // sco.data.YS_plistb.done = function(re,sco){
   
    //   if(re.data.datalist.length>0){
    //     sco.data.YS_lista.data = [];
    //     re.data.datalist.map(function(elem) {
    //        sco.data.YS_lista.data.push(elem);
    //     });
    //     sco.setData({'YS_lista.data':sco.data.YS_lista.data});
    //   }
    // }

  },
    
  //邀请成员
  invite:function(sco) {


    //    1、接口1：获取成员列表；
    sco.data.YS_lista.url = 'api/appauth/get_role_list';
    sco.data.YS_lista.params = {'codeid':YSfac.getstore('procodeid')};
    sco.data.YS_lista.before = function(sco){
    }
    sco.data.YS_lista.done = function(re,sco){

    }
    sco.fetch('YS_lista');
  },


  //邀请加入工程
  invitenext:function(sco) { 
    var fromuid = YSfac.getstore('fromuid');
    var prcodeid = YSfac.getstore('invitePrcodeid');
    var roleid= YSfac.getstore('rid');


    //获取项目信息
    sco.data.YS_obja.url = 'api/open/program_pro_info';
    sco.data.YS_obja.before = function(sco){
     sco.data.YS_obja.params = {codeid:prcodeid};

    }
    sco.data.YS_obja.done = function(re,sco){
      
// console.log(sco.data.YS_obja.url);
//  console.log(sco.data.YS_obja.params);     
//  console.log(re);
      if(!re.data.islogin){
        sco.chklogin(function(){
          // sco.fetch('YS_obja');
        });
      }

      if(re.code>0){

        if(re.data['isjoin']==1){
          wx.showToast({
          title: '你已是该工程的成员,即将跳转至该工程信息',
          icon: 'none',
          duration: 1500
          });
          setTimeout(function(){
            YSfac.setstore('procodeid',prcodeid);
            wx.switchTab({url:'/pages/eng/eng'});
          },1500)
          return false;
        }


        
        sco.data.YS_obja.data = re.data;

        sco.setData({
          'YS_obja.data':sco.data.YS_obja.data,
          'islogin':true
        })

      }
    }
    sco.fetch('YS_obja');
    


    //获取项目信息
    // sco.data.YS_objb.url = 'api/open/program_pro_info';
    // sco.data.YS_objb.before = function(sco){
    //  sco.data.YS_objb.params = {codeid:prcodeid};

    // }
    // sco.data.YS_objb.done = function(re,sco){

    //   if(re.code>0){

    //     if(re.data[0]['isjoin']==1){
    //       wx.showToast({
    //       title: '你已是该工程的成员,即将跳转至该工程信息',
    //       icon: 'none',
    //       duration: 1500
    //       });
    //       setTimeout(function(){
    //         YSfac.setstore('procodeid',prcodeid);
    //         wx.switchTab({url:'/pages/eng/eng'});
    //       },1500)
    //       return false;
    //     }

    //     sco.data.YS_objb.data = re.data[0];

    //     sco.setData({
    //       'YS_obja.data':sco.data.YS_objb.data
    //     })

    //   }
    // }



    //    3、接口3：加入工程；
    sco.data.YS_objc.url = 'api/proauth/pro_takein';
    sco.data.YS_objc.before = function(sco){
     sco.data.YS_objc.params = {codeid:prcodeid,isapp:1,roleid:roleid};
    }
    sco.data.YS_objc.done = function(re,sco){
   
      if(re.code>0){


        wx.showToast({
        title: '加入成功,即将跳转至该工程信息',
        icon: 'none',
        duration: 1500
        });

        setTimeout(function(){
          YSfac.setstore('procodeid',prcodeid);
          wx.switchTab({url:'/pages/eng/eng'});
        },1500)
      }else{

        wx.showToast({
        title: re.msg,
        icon: 'none',
        duration: 1500
        });

      }


    }

    // //    4、接口4：判断用户状态；
    // sco.data.YS_objd.url = 'api/open/has_user';

    // sco.data.YS_objd.done = function(re,sco){
   
    //       YSfac.setstore('phone',phone);
    //   if(re.code>0){

    //       wx.navigateTo({url:'/pages/invitelogin/invitelogin'});
    //   }else{

    //       wx.navigateTo({url:'/pages/register/register'});

    //   }


    // }












    // sco.data.YS_plistb.done = function(re,sco){
   
    //   if(re.data.datalist.length>0){
    //     sco.data.YS_lista.data = [];
    //     re.data.datalist.map(function(elem) {
    //        sco.data.YS_lista.data.push(elem);
    //     });
    //     sco.setData({'YS_lista.data':sco.data.YS_lista.data});
    //   }
    // }

  },


  //检查是否有授权地理位置
  chklocation:function(cb){
  var sco = this; 
    wx.showModal({
    title: '温馨提示',
    content: '该功能需要获取地理位置，请点"确定"进入授权管理页面。',
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
              }
            });
    }
  });
  },

  addlabel:function(sco){

    var temptagarr = YSfac.getstore('temptagarr');


    //    1、接口1：获取标签；
    sco.data.YS_lista.url = 'api/appauth/get_taglist';
    sco.data.YS_lista.before = function(sco){
     sco.data.YS_lista.params = {tagtype:YSfac.getstore('tagtype')};
    }
    sco.data.YS_lista.done = function(re,sco){
      if(re.code>0){
        if(temptagarr.length>0){
          re.data.map(function(elem){
            temptagarr.map(function(elem2){
              if(elem.id==elem2.id){
                elem.myclass = 'active';
              }
            }); 

          });          
        }


        sco.setData({'taglist':re.data});
      }
    }
    sco.fetch('YS_lista');

    //    2、接口2：添加标签；
    sco.data.YS_obja.url = 'api/appauth/add_tag';
    sco.data.YS_obja.before = function(sco){
     sco.data.YS_obja.params.tagtype = YSfac.getstore('tagtype');
    }
    sco.data.YS_obja.done = function(re){
        wx.showToast({
        title: re.msg,
        icon: 'none',
        duration: 1000
        });
      if(re.code>0){
        sco.data.taglist.push(re.data);

        sco.data.YS_obja.params.name = '';
        sco.setData({'taglist':sco.data.taglist,'YS_obja.params.name':sco.data.YS_obja.params.name});


      }
    }


  },

  haibao: function (sco){
    wx.setNavigationBarTitle({ title: '选择模板' });
    sco.data.YS_obja.url = 'api/appauth/get_jobdetail';
    sco.data.YS_obja.load = true;
    sco.data.YS_obja.params = { codeid: YSfac.getstore('jobcodeid') };
    sco.data.YS_obja.done = function (re, sco) {
      var head
      if(re.data.wxphotourl){
       head = re.data.wxphotourl;
      }else{
        head = 'https://api.helii.cn/upload/poster/mrtx.png';
      }
      var name = re.data.realname;
      var tag = re.data.biaoqian;
      var des = re.data.description;
      var mb = 'https://api.helii.cn/upload/poster/mb1.png'
      des = des.replace(/\<br\>/gi, ' ');
      var obj = { head: head, name: name, des: des, tag: tag }
      YSfac.setstore('mb', mb)
      YSfac.setstore('hbinfo', obj)
    }
    sco.fetch('YS_obja');

    sco.data.YS_objb.url = 'api/appauth/get_job_qrcode';
    sco.data.YS_objb.before = function (sco) {
    sco.data.YS_objb.params={jobcodeid:YSfac.getstore('jobcodeid')}
    }
    sco.data.YS_objb.done=function(re,sco){
      YSfac.setstore('jobqrcode','https://api.helii.cn/'+re.data)
      wx.getImageInfo({
        src: YSfac.getstore('jobqrcode'),
        success: function (res) {
          YSfac.setstore('jobqrcode', res.path)
          // sco.setData({
          //   hbhead: res.path
          // })


        }
      });
    }
    wx.getSystemInfo({
      success: function (res) {
        var rpx = res.windowWidth / 375;
        sco.setData({
          myrpx: rpx,
        })
      },
    })
    sco.fetch('YS_objb');
    wx.showLoading({
      title: '正在生成海报...',
    })
    
  },

   





  //我的
  //我的首页
  my:function(sco) { 
    //    1、接口1：获取我的信息；
    sco.data.YS_obja.url = 'api/appauth/userinfo';
    sco.data.YS_obja.done = function(re,sco){
      // 如果未登录
        if(re.code==-1){
          sco.chklogin(function(){
            sco.fetch('YS_obja');
          });
        }

    
    }
    sco.fetch('YS_obja');
    
    //    2、接口2：获取签到信息；
    sco.data.YS_objb.url = 'api/appauth/get_sign';
    // sco.data.YS_objb.done = function (re, sco) {
    //   if (re.code > 0) {
    //     sco.setData({ 'YS_objb': re.data });
    //   }
    // }
    // sco.fetch('YS_objb');


    //    3、接口3：切换角色；
    sco.data.YS_objc.url = 'api/appauth/switch_role';
    sco.data.YS_objc.done = function(re,sco){
   
      if(re.code>0){
        wx.showToast({
        title: '切换成功',
        icon: 'none',
        duration: 1000
        });
      }
    }


    //    3、接口3：切换角色；
    sco.data.YS_objd.url = 'api/open/loginout';
    sco.data.YS_objd.done = function(re,sco){
   
      if(re.code>0){
        wx.showToast({
        title: '退出成功',
        icon: 'none',
        duration: 1000
        });
      }

      wx.clearStorage();

    }


    sco.data.YS_obje.url = 'api/appauth/set_fromid';
    sco.data.YS_obje.done = function(re,sco){
   
      if(re.code>0){
        wx.showToast({
        title: '成功',
        icon: 'none',
        duration: 1000
        });
      }

    }





  },


  //个人信息
  myinfo:function(sco) { 
    //    1、接口1：获取我的信息；
    sco.data.YS_obja.url = 'api/appauth/userinfo';
    sco.data.YS_obja.before = function ( sco) {
    }
    sco.data.YS_obja.done = function (re, sco) {

      
    }
    sco.fetch('YS_obja');
    
    //    2、接口2：编辑个人信息；
    sco.data.YS_objb.url = 'api/appauth/edit_userinfo';
    sco.data.YS_objb.done = function(re,sco){
    if(re.code>0){
      setTimeout(function(){
       wx.showToast({
         title: '修改头像成功',
         icon:''
       })
      }, 500)
     }
    }
 

    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'qiniuinfo': re });
      }
    }
    sco.fetch('YS_objc');
  },


  //编辑昵称
  myeditnick(sco){
    sco.data.headimg="";
    sco.data.YS_obja.url ='api/appauth/edit_userinfo'
    sco.data.YS_obja.done = function(re,sco){
      if(re.code){
        YSfac.msg(re);
      }    
      setTimeout(function(){
        wx.navigateBack({

        })
      },1000)
     
    }


    //获取七牛云信息
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) {

      if (re.code > 0) {

        sco.setData({ 'qiniuinfo': re });
      }
    }
    sco.fetch('YS_objc');
  },
  myeditphone(sco) {
    sco.data.YS_obja.url = 'api/proauth/user_password_phone';
    sco.data.YS_obja.before = function(sco) {
      var value = sco.data.YS_obja.params
      if(!value.oldpasswd){wx.showToast({title: '请输入密码！',icon:'none'});return false };
      if (!value.tel) { wx.showToast({ title: '请输入新手机号！', icon: 'none' }); return false };
      if (!value.phcode) { wx.showToast({ title: '请输入验证码！', icon: 'none' }); return false };
      sco.data.YS_obja.params.oldpasswd = YSfac.MD5(sco.data.YS_obja.params.oldpasswd)
    }
    sco.data.YS_obja.done = function(re,sco){
      if(re.code>0){
       wx.showToast({
         title: '修改成功！',
       })
      }else{
        YSfac.msg(re)
      }
    }
    //获取验证码
    sco.data.YS_objb.url = 'api/open/newphonecode';
    sco.data.YS_objb.load = true;
    sco.data.YS_objb.done = function (re, sco) {
      wx.showToast({
        title: re.msg,
        icon: 'none',
        duration: 1000
      });
    }
  },
  myeditpwd(sco){
    sco.data.YS_obja.url = 'api/proauth/user_password_change';
    sco.data.YS_obja.before = function (sco) {
      if(!sco.data.YS_obja.params.oldpasswd||!sco.data.YS_obja.params.newpasswd){wx.showToast({title: '密码不能为空！',icon: "none"});return false;}
      if(sco.data.YS_obja.params.newpasswd!=sco.data.YS_obja.params.newpasswd1){wx.showToast({title: '两次新密码输入不一致！',icon: "none"});return false;}
      
      sco.data.YS_obja.params.oldpasswd = YSfac.MD5(sco.data.YS_obja.params.oldpasswd)
      sco.data.YS_obja.params.newpasswd = YSfac.MD5(sco.data.YS_obja.params.newpasswd)
    }
    sco.data.YS_obja.done = function(re,sco){
      if(re.code>0){
        YSfac.msg(re)
      }else{
        YSfac.msg(re)
      }
    }
  },

  //签到页
  mySign:function(sco) { 

  },




  //积分任务
  integral:function(sco) { 

  },


  //积分商城
  Shop:function(sco) { 

  },


  //积分商城详情
  details:function(sco) { 

  },






  //实名认证
  myidentity:function(sco) {  

    //    1、接口1：获取我的信息；
    sco.data.YS_obja.url = 'api/appauth/userinfo'; 
    sco.fetch('YS_obja');
    
    //    2、接口2：身份认证；
    sco.data.YS_objb.url = 'api/appauth/auth_post';
    sco.data.YS_objb.params = {'type':'person',img1:'',img2:"",img1x:'',img2x:'',name:'',certnum:'',certurl:[]};
     sco.data.YS_objb.before = function(sco){ 
    if(!sco.data.YS_objb.params.name){wx.showToast({title: '请输入姓名！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.certnum){wx.showToast({title: '请输入身份证号！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.img1){wx.showToast({title: '请上传身份证正面照片！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.img2){wx.showToast({title: '请上传身份证反面照片！',icon: "none"});return false;}
    sco.data.YS_objb.params.certurl = [sco.data.YS_objb.params.img1,sco.data.YS_objb.params.img2]; 
  }
    sco.data.YS_objb.done = function (re, sco) {
      YSfac.msg(re);
      if(re.code==1){
        setTimeout(function () {
          wx.navigateBack();
        }, 1000);
      }
    }


    //获取七牛云信息
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) { 
      if (re.code > 0) { 
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objc');
   

  },




  //公司认证
  mycompany:function(sco) {  

    //    1、接口1：获取我的信息；
    sco.data.YS_obja.url = 'api/appauth/userinfo'; 
    sco.fetch('YS_obja');
    
 
    //    2、接口2：身份认证；
    sco.data.YS_objb.url = 'api/appauth/auth_post';
    sco.data.YS_objb.params = {'type':'company',img1:'',img1x:'',name:'',certnum:'',certurl:[]};
     sco.data.YS_objb.before = function(sco){ 
    if(!sco.data.YS_objb.params.name){wx.showToast({title: '请输入企业名称！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.certnum){wx.showToast({title: '请输入营业执照号！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.img1){wx.showToast({title: '请上传营业执照照片！',icon: "none"});return false;}
    sco.data.YS_objb.params.certurl = [sco.data.YS_objb.params.img1]; 
  }
    sco.data.YS_objb.done = function (re, sco) {
      YSfac.msg(re);
      if(re.code==1){
        setTimeout(function () {
          wx.navigateBack();
        }, 1000);
      }
    }


    //获取七牛云信息
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) { 
      if (re.code > 0) { 
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objc');
  },





  //项目认证
  myengineering:function(sco) {   
  
    //    1、接口1：获取我的信息；
    sco.data.YS_obja.url = 'api/appauth/userinfo'; 
    sco.fetch('YS_obja');
    
 
    //    2、接口2：身份认证；
    sco.data.YS_objb.url = 'api/appauth/auth_post';
    sco.data.YS_objb.params = {'type':'program',img1:'',img1x:'',name:'',certurl:[]};
     sco.data.YS_objb.before = function(sco){ 
    if(!sco.data.YS_objb.params.name){wx.showToast({title: '请输入工程名称！',icon: "none"});return false;}
    if(!sco.data.YS_objb.params.img1){wx.showToast({title: '请上传施工许可证！',icon: "none"});return false;}
    sco.data.YS_objb.params.certurl = [sco.data.YS_objb.params.img1]; 
  }
    sco.data.YS_objb.done = function (re, sco) {
      YSfac.msg(re);
      if(re.code==1){
        setTimeout(function () {
          wx.navigateBack();
        }, 1000);
      }
    }


    //获取七牛云信息
    sco.data.YS_objc.url = 'api/open/get_qiniuinfo';
    sco.data.YS_objc.sdata = false;
    sco.data.YS_objc.done = function (re, sco) { 
      if (re.code > 0) { 
        YSfac.setstore('qntoken',re);
      }
    }
    sco.fetch('YS_objc');
  },




  //我的招聘
  myRelease:function(sco) { 

    //    1、接口1：获取我发布的；
    sco.data.YS_plista.url = 'api/appauth/get_mypublish';
    sco.data.YS_plista.params = {curPage:1,listnum:5};
    sco.data.YS_plista.done = function(re,sco){
   
      if(re.data.datalist.length>0){
        sco.data.YS_lista.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    sco.fetch('YS_plista');
    

    //    2、接口2：获取我期望的；
    sco.data.YS_plistb.url = 'api/appauth/get_myforward';
    sco.data.YS_plistb.params = {curPage:1,listnum:5};
    sco.data.YS_plistb.done = function(re,sco){
   
      if(re.data.datalist.length>0){
        sco.data.YS_listb.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_listb.data.push(elem);
        });
        sco.setData({'YS_listb.data':sco.data.YS_listb.data});
      }
    }


    //    3、接口3：获取我的收藏；
    sco.data.YS_plistc.url = 'api/appauth/get_mycollect';
    sco.data.YS_plistc.params = {curPage:1,listnum:5};
    sco.data.YS_plistc.done = function(re,sco){
      if(re.code==0){
        wx.showToast({
          title: re.msg,
          icon:'none'
        })
      }
      if(re.data.datalist.length>0){
        sco.data.YS_listc.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_listc.data.push(elem);
        });
        sco.setData({'YS_listc.data':sco.data.YS_listc.data});
      }
    }




  },




  //招聘详情
  item:function(sco) { 

    //    1、接口1：获取招聘详情；
    sco.YS_lista.url = 'api/appahtu/get_jobdetail';
    
  },  



  //评论
  mycomment:function(sco) { 

    //    1、接口1：获取评论（回复我的）；
    sco.data.YS_plista.url = 'api/appauth/get_myreceive';
    sco.data.YS_plista.params = {curPage:1,listnum:5};
    sco.data.YS_plista.done = function(re,sco){
      if(re.code!=1){
        YSfac.msg(re)
      }
      if(re.data.datalist.length>0){
        sco.data.YS_lista.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    // sco.fetch('YS_plista');
    
    //    2、接口2：获取我发出的评论；
    sco.data.YS_plistb.url = 'api/appauth/get_mysend';
    sco.data.YS_plistb.params = {curPage:1,listnum:5};
    sco.data.YS_plistb.done = function(re,sco){
   
      if(re.data.datalist.length>0){
        sco.data.YS_listb.data = [];
        re.data.datalist.map(function(elem) {
           sco.data.YS_listb.data.push(elem);
        });
        sco.setData({'YS_listb.data':sco.data.YS_listb.data});
      }
    }
    sco.fetch('YS_plistb');
  },  



  //获取我的收藏
  mycollection:function(sco) { 

    //    1、接口1：获取我的收藏；
    sco.data.YS_plista.url = 'api/appauth/get_mycollect';
    sco.data.YS_plista.params = {curPage:1,listnum:5};
    sco.data.YS_plista.done = function(re,sco){
      if(re.code==0){
        wx.showToast({
          title: re.msg,
          icon:'none'
        })
      }
      if(re.code&&re.data.datalist.length>0){
        re.data.datalist.map(function(elem) {
         
          
           sco.data.YS_lista.data.push(elem);
        });
        sco.setData({'YS_lista.data':sco.data.YS_lista.data});
      }
    }
    sco.fetch('YS_plista');
    
    //    2、接口2：收藏/取消收藏；
    sco.data.YS_obja.url = 'api/appauth/click_collect';
  },  


}

};

 
module.exports = YS
