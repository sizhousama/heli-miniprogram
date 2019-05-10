module.exports = {
  formatTime: wx,
  time:function(str){
//返回时间戳；str 为空则返回当前时间戳；
var timestamp = !str?Date.parse(new Date()):Date.parse(new Date(str)); 
return timestamp; 
},   
 numtotime: function(time) {
            //数字转换成时间格式
            var retime = '';
            if (parseInt(time) > 0) {
                var date = new Date(time);
                var year = date.getYear() + 1900;
                var month = date.getMonth() + 1;
                month = month < 10 ? '0' + month : month;
                var datev = date.getDate();
                datev = datev < 10 ? '0' + datev : datev;
                return year + '-' + month + '-' + datev;
            } else {
                return retime;
            }

        },

        //md5加密
        MD5: function(sMessage) {
            function RotateLeft(lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            }

            function AddUnsigned(lX, lY) {
                var lX4, lY4, lX8, lY8, lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                } else return (lResult ^ lX8 ^ lY8);
            }

            function F(x, y, z) {
                return (x & y) | ((~x) & z);
            }

            function G(x, y, z) {
                return (x & z) | (y & (~z));
            }

            function H(x, y, z) {
                return (x ^ y ^ z);
            }

            function I(x, y, z) {
                return (y ^ (x | (~z)));
            }

            function FF(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function GG(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function HH(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function II(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function ConvertToWordArray(sMessage) {
                var lWordCount;
                var lMessageLength = sMessage.length;
                var lNumberOfWords_temp1 = lMessageLength + 8;
                var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
                var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
                var lWordArray = Array(lNumberOfWords - 1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (sMessage.charCodeAt(lByteCount) << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            }

            function WordToHex(lValue) {
                var WordToHexValue = "",
                    WordToHexValue_temp = "",
                    lByte, lCount;
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    WordToHexValue_temp = "0" + lByte.toString(16);
                    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
                }
                return WordToHexValue;
            }
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d
            var S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22;
            var S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20;
            var S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23;
            var S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;
            x = ConvertToWordArray(sMessage);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = AddUnsigned(a, AA);
                b = AddUnsigned(b, BB);
                c = AddUnsigned(c, CC);
                d = AddUnsigned(d, DD);
            }
            var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
            return temp.toLowerCase();
        },






goback:function(num){ 
setTimeout(function(){
          wx.navigateBack();
      },num?num:1000);
},
setdate:function(obj){ 

  var date = new Date(obj.now-obj.createtime);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds(); 
// console.log(Y+M+D+h+m+s);  
},
hashToobj:function(str){//把地址栏的参数转成对象  a=1&c=3 > {a:1,c:3}
var obj = {};
if(!str)return obj;
    if(str.indexOf('&')>0){
      var arr = str.split('&'); 
      arr.map(function(el){
          var t = el.split('=');
          var a = t.length>1?obj[t[0]] = t[1]:'';
      });  
    }else{ 
          var t = str.split('=');
          var a = t.length>1?obj[t[0]] = t[1]:'';     
    } 
return obj;
},
 fetdata:function(sco,key){
 var _t = this; 
var url,path,page,load,method = ''; 
  // 开启调试模式关闭调试模式
 url = sco.conf.debug?sco.conf.jsonpath:sco.conf.rooturl;  
path = (sco.data[key]&&sco.data[key].url)||(sco.conf[key]&&sco.conf[key].url);
if(!path){console.log(key+'未配置路径信息，可conf中配置或者给sco.'+key+'.url赋值路径');return false;}
url += path + (sco.conf.debug?'.json':''); 
load = (sco.data[key]&&sco.data[key].load)||(sco.conf[key]&&sco.conf[key].load);
page = (sco.data[key]&&sco.data[key].page)||(sco.conf[key]&&sco.conf[key].page);
method = (sco.data[key]&&sco.data[key].method)||(sco.conf[key]&&sco.conf[key].method)||'GET';
method = sco.conf.debug?'GET':method;
 

   //运行前 ，执行的函数；
   if(typeof(sco.data[key].before)==="function"){var v = sco.data[key].before(sco); if(v===false){return false;} }
   if(load){_t.load(1);}  
   //执行请求 

var params = sco.data[key].params||{};

params.token = this.getstore('logininfo')?this.getstore('logininfo').token:'';
// console.log(url);
// console.log(params);
wx.request({  
  url: url,  
  data:params,  
  method:method,
  header: {
      'code': this.getstore('lgcode'),
      'Content-Type': 'application/json'  
  },  
  success:function (re){
    var re = re.data;
   //调试模式打印路径信息
    // sco.conf.console?console.log('接口调试信息，url:'+url,'参数params:',sco.data[key].params,'返回re:',re):'';  
              if(sco.data[key].sdata){ 
                var a = {}; 
                a[key+'.params'] = sco.data[key].params; 
                a[key+'.data'] = re.data?re.data:{};
                
                sco.setData(a);
              }
              
              //运行后拿到数据，执行函数
             if(typeof(sco.data[key].done)==="function"){sco.data[key].done(re,sco);} 
             if(load){setTimeout(function(){_t.load(0);},500)} 
},
error:function (re){
  _t.load(0);
         // sco.conf.console?console.log('模块：'+key+'的接口'+url,'参数params:',sco.data[key].params,'返回err:',re):'';  
         YS('layer',function(){layer.msg('模块：'+key+'的接口'+url+'网络超时！',{icon:0,time: 2000});});
}  
})


//    $.ajax({
// type:method, 
// url: url,
// data:sco[key].params||{},
// headers: {'Content-Type':'application/x-www-form-urlencoded'},
// success:function (re){
//    //调试模式打印路径信息
//     sco.conf.console?console.log('接口调试信息，url:'+url,'参数params:',sco[key].params,'返回re:',re):'';                        
//               sco[key].data = {};
//               if(re.code==1){
//                 sco[key].data = re.data; 
//               }
//               //运行后拿到数据，执行函数
//              if(typeof(sco[key].done)==="function"){sco[key].done(re,sco);} 
//              if(load){YSfac.load(0);} 
// },
// error:function (re){
//          sco.conf.console?console.log('模块：'+key+'的接口'+url,'参数params:',sco[key].params,'返回err:',re):'';  
//          YS('layer',function(){layer.msg('模块：'+key+'的接口'+url+'网络超时！',{icon:0,time: 2000});});
// }
//    }); 
 
 },
   //验证手机号码是否正确，正确返回true  错误返回false；
 testphone: function (num) {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1})|145|147|159|153)+\d{8})$/;
      if (!myreg.test(num)) {
          return false;
      } else {
          return true;
      }
  },
setstore:function(key,value){
value = typeof(value) ==='object'?JSON.stringify(value):value;
wx.setStorageSync(key, value);
 return true;
},
getstore:function(key){
      var tem = null;
      try {tem = wx.getStorageSync(key);
      tem = JSON.parse(tem); 
      }catch(e){tem = wx.getStorageSync(key);}
      return tem; 
},
unsetstore:function(key){ wx.removeStorageSync(key); return true;},
load:function(num,str){
  if(num){
     wx.showLoading({ 
          title: str?str:'加载中……',
          mask:true
        })
  }else{
  setTimeout(function(){

     wx.hideLoading();

  },500);   
  }
       

}, 
msg:function(re){ 
  wx.showToast({
            title: re.msg,
            icon: 'none',
            duration: 1000
          });
},
texthh(text, num) {  // text为传入的文本  num为单行显示的字节长度
    let strLength = 0; // text byte length
    let rows = 1;
    let str = 0;
    let arr = [];
    for (let j = 0; j < text.length; j++) {
      if (text.charCodeAt(j) > 255) {
        strLength += 2;
        if (strLength > rows * num) {
          strLength++;
          arr.push(text.slice(str, j));
          str = j;
          rows++;
        }
      } else {
        strLength++;
        if (strLength > rows * num) {
          arr.push(text.slice(str, j));
          str = j;
          rows++;
        }
      }
    }
  

    arr.push(text.slice(str, text.length));
    return [strLength, arr, rows]   //  [处理文字的总字节长度，每行显示内容的数组，行数]
},

yssocket:function(url){ 
    wx.connectSocket({url:url});  
    var socket = {};
    socket.send = function(val){
      // console.log('发送消息',val);
    //对象或者字符串转换
    val = typeof(val) ==='object'?JSON.stringify(val):val; 
    wx.sendSocketMessage({data:val})
    } 
    socket.open = function(re){

    }; 
    socket.onmessage = function(re){};  
    socket.onclose = function(re){  socket = null;}; 
    socket.close = function(){wx.closeSocket()};
    wx.onSocketMessage(function (re) {
    //对消息进行转换；
      var tem = '';
      try { 
      tem = JSON.parse(re.data); 
      }catch(e){tem = re.data;}
      socket.onmessage(tem,re); 
    });

    wx.onSocketClose(function (res) {
      socket&&socket.onclose(res);
      socket = null; 
       // console.log('WebSocket已经关闭！')
      
    });
    wx.onSocketError(function(res){ 
        socket&&socket.onclose(res); 
        socket = null;
        // console.log('WebSocket连接打开失败，请检查！')
    }) 
    wx.onSocketOpen(function(res) {  
        socket.open(res); 
        // console.log('WebSocket连接已打开！')
    })

    
    return socket;
},
}
