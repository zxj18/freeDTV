//新方圆小棉袄公众号特供版
//规则编辑By香雅情。2021/05/04

//主页解析
function hikhmrule() {
var json = JSON.parse(getResCode());
var res = {};
var d = [];
var ssmd=json.ssmode;
d.push({col_type: 'line'});
var len=[];
for (var i = 0; i < json.data.length; i++) {
var tab = json.data[i];
/*
    d.push({
    title : '““'+tab.type+'””',
    col_type : 'text_center_1'
})
*/
for (var k = 0; k < tab.list.length; k++) {
var list = tab.list[k];
    d.push({
    title : list.title,
    img : list.ico+'@Referer=',
    url : 'hiker://empty$$'+list.url+'$$fypage$$',
    col_type:'icon_4_card'
})
len.push({title:list.title});
}
}
if(json.note!=''){
d.unshift({
    title : '““'+json.note+'””'+'('+len.length+')',
    url:$('hiker://empty').rule((json)=>{
    var res = {};var d = [];
    var json = json;
    d.push({
    title : json.note,
    desc : json.content,
    url : json.uplink,
    col_type:'text_center_1'
})
    res.data = d;setHomeResult(res);
    },json),
    col_type:'text_2'
});
}
d.unshift({
    title : '搜索模式切换'+'('+(ssmd==1?'聚':'列')+')',
    url : $('hiker://empty').lazyRule((json)=>{
    var md=json.ssmode;
    if(md==1){
    var fileUrl=fetch("hiker://files/rules/xyq/hikermovie.json",{}).replace('\"ssmode\":\"1\"','\"ssmode\":\"0\"');
    writeFile("hiker://files/rules/xyq/hikermovie.json",fileUrl);
    refreshPage(false);return 'toast://切换为搜索引擎列表单选模式成功！';
    }
    else{
    var fileUrl=fetch("hiker://files/rules/xyq/hikermovie.json",{}).replace('\"ssmode\":\"0\"','\"ssmode\":\"1\"');
    writeFile("hiker://files/rules/xyq/hikermovie.json",fileUrl);
    refreshPage(false);return 'toast://切换为聚合搜索模式成功！'
    }
    },json),
    col_type:'text_2'
})

res.data = d;
setHomeResult(res);
}
//主页二级
function hikhmerj() {
var res = {};var d = [];
var spl = MY_URL.split('$$')[1];
var pn = MY_URL.split('$$')[2];
//var cook=getVar('hikernfcookie');
//取主页源码
try{
if(/cqzyw/.test(spl)){
var link=spl+'/index.php/index/index/page/'+pn+'.html';
var html=fetch(link,{headers:{'User-Agent':MOBILE_UA,'Referer':spl}});
}else if(/leduozy/.test(spl)){
var link=spl+'/?m=vod-index-pg-'+pn+'.html';
var html=fetch(link,{headers:{'User-Agent':MOBILE_UA,'Referer':spl}});
}else if(/kunyu77/.test(spl)){
var html=fetch(spl+'/searchFilter?type_id=0&pagenum='+pn+'&pagesize=24',{headers:{'User-Agent':'Dalvik/2.1.0'}});
}else if(/789pan|apibdzy|rrzyw|bajiecaiji|wfss100|4kyima/.test(spl)){
var html=request(spl+'?ac=videolist&pg='+pn,{});
}else if(/bbkdj/.test(spl)){
var html=request(spl+'?ac=list&pg='+pn,{});
}else{
 if(pn==1){
if(/nfmovies/.test(spl)){
var html=fetch(spl,{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
}else if(/paofan/.test(spl)){
var pfbd='{"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","channel_id":"0","udid":"70cf34e9-3ef2-39e1-9f5f-a9067d18aec9","debug":"1","ver":"5.1.7","product":"1"}';
var html=fetch(spl+'/video/index', {headers:{'Content-Type':'application/json','User-Agent':'okhttp/4.1.0'},body:pfbd,method:'POST'});
//setError(html);
}else{
var html=fetch(spl,{headers:{'User-Agent':MOBILE_UA,'Sec-Fetch-Site':'none','Sec-Fetch-Mode':'navigate','Sec-Fetch-User':'?1','Sec-Fetch-Dest':'document'}});}
 }
}

if (html.indexOf('检测中') != -1) {
html=request(spl + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
//setError(html);

//第一页要显示分类
if(pn==1){
//分类标题与替换词
if(/7xiady/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('dianying&lianxuju&zongyi&dongman').split('&');}
else if(/ganfantv/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('dianying&dianshiju&zongyi&dongman').split('&');}
else if(/kunyu77|dxys|ysftv|46nb|paofan/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('1&2&3&4').split('&');}
else if(/521x5/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&哔哩').split('&');
var clsu=('1&2&3&4&34').split('&');}
else if(/siguyy/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('m&tv&va&ct').split('&');}
else if(/moyuy/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('dianying&guoju&zongyi&dongman').split('&');}
else if(/cqzyw/.test(spl)){
var clst=('电影&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&动漫电影&纪录片&连续剧&国产剧&港台剧&日韩剧&欧美剧&海外剧&综艺&动漫&国产动漫&日韩动漫').split('&');
var clsu=('1&6&7&8&9&10&11&12&20&21&2&13&14&15&16&35&3&4&36&37').split('&');}
else if(/ak1080/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&犯罪片&冒险片&奇幻片&悬疑片&记录片&动画片&预告片&国产剧&港台剧&日韩剧&欧美剧&海外剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&22&23&24&25&44&13&14&15&16&26').split('&');}
else if(/gudanys/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&欧美剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&16').split('&');}
else if(/jpysvip/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&香港剧&韩国剧&欧美剧&日本剧&台湾剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&15&16&20&21').split('&');}
else if(/zhenbuka/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&动画片&纪录片&国产剧&港台剧&日韩剧&欧美剧&海外剧&纪录片').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&23&25&13&14&15&16&20&24').split('&');}
else if(/bwl87/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&纪录片&动漫电影&国产剧&韩日剧&欧美剧&泰国剧&日本剧').split('&');
var clsu=('1&2&3&4&20&26&13&15&16&21&27').split('&');}
else if(/aidi/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&传记&国产剧&港台剧&韩剧&美剧&日剧&英剧&泰剧&日韩动漫&国产动漫&欧美动漫&动漫电影').split('&');
var clsu=('dianying&lianxuju&zongyi&dongman&dongzuopian&xijupian&aiqingpian&kehuanpian&kongbupian&juqingpian&zhanzhengpian&zhuanji&guochanju&gangtaiju&hanju&meiju&riju&yingju&taiju&rihan&guoman&oumei&cartoon').split('&');}
else if(/zhaikanys/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&欧美剧&日韩剧&动漫电影').split('&');
var clsu=('1&2&4&3&6&7&8&9&10&11&12&13&14&16&15&22').split('&');}
else if(/klysw|789pan|hktvyb|syg520/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&日韩剧&欧美剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&15&16').split('&');}
else if(/nfstar|nfxtv|nfxhd/.test(spl)){
var clst=('电影&美剧&国语&日韩&动漫&纪录&油管&综艺').split('&');
var clsu=('mAAAAAAH&sAAAAAAH&0AAAAAAH&DAAAAAAH&kAAAAAAH&fAAAAAAH&bAAAAAAH&RAAAAAAH').split('&');}
else if(/subaibai/.test(spl)){
var clst=('全部&电影&电视剧&热门电影&动漫电影&高分电影&动漫剧&动漫电影&国产剧&国产电影&日剧&日韩电影&欧美剧&欧美电影&泰国电影&港剧&港台电影&纪录片&综艺&韩剧&香港经典电影').split('&');
var clsu=('movie_bt&new-movie&dianshiju&hot-month&movie_bt_series/dongmandy&gf&movie_bt_series/dongmanju&movie_bt_series/dongmandy&movie_bt_series/guochanju&movie_bt_series/guochandy&movie_bt_series/riju&movie_bt_series/rihandy&movie_bt_series/oumeiju&movie_bt_series/oumeidy&movie_bt_series/thaidy&movie_bt_series/gangju&movie_bt_series/gangtaidy&movie_bt_series/documentary&movie_bt_series/zongyi&movie_bt_series/hanju&movie_bt_series/xianggangdy').split('&');}
else if(/qianoo/.test(spl)){
var clst=('高分影视&最新电影&电视剧&动漫&全部&俄罗斯电影&加拿大电影&印度电影&日剧&日本电影&欧美电影&法国电影&海外剧&港台电影&电影&美剧&英国电影&韩剧&韩国电影').split('&');
var clsu=('zuixindianying/gaofenyingshi&zuixindianying&dsj&dm&movie_bt&movie_bt_series/eluosidianying&movie_bt_series/jianadadianying&movie_bt_series/yindudianying&movie_bt_series/rj&movie_bt_series/ribendianying&movie_bt_series/meiguodianying&movie_bt_series/faguodianying&movie_bt_series/hwj&movie_bt_series/xianggangdianying&movie_bt_series/dyy&movie_bt_series/mj&movie_bt_series/yingguodianying&movie_bt_series/hj&movie_bt_series/hanguodianying').split('&');}
else if(/mjhd/.test(spl)){
var clst=('都市&惊悚&犯罪&动漫&科幻&综艺&电影').split('&');
var clsu=('2&20&3&4&1&21&23').split('&');}
else if(/qkan8/.test(spl)){
var clst=('高清原碟&日漫&女频&劇場&漫画&国漫&美漫').split('&');
var clsu=('33&21&50&24&55&51&22').split('&');}
else if(/nicotv/.test(spl)){
var clst=('全部&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');
var clsu=('&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');}
else if(/agefan/.test(spl)){
var clst=('全部&TV&剧场版&OVA').split('&');
var clsu=('all&TV&剧场版&OVA').split('&');}
else if(/1090ys/.test(spl)){
var clst=('电影&国产剧&韩剧&美剧&日剧&综艺&动漫').split('&');
var clsu=('1&2&3&4&5&22&23').split('&');}
else if(/cokemv/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&抖音电影&动作片&科幻片&喜剧片&爱情片&恐怖片&剧情片&战争片&犯罪片&奇幻片&悬疑片&微电影&纪录片&国产剧&香港剧&台湾剧&日本剧&韩国剧&欧美剧&泰国剧').split('&');
var clsu=('1&2&3&4&5&6&9&7&8&10&11&12&23&24&25&26&27&13&14&21&20&15&16&22').split('&');}
else if(/80ysm/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&蓝光片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&动画片&犯罪片&国产剧&港台剧&日韩剧&欧美剧&海外剧&国产动漫&日本动漫&欧美动漫&其他动漫&B站资源&好看番剧（B站）&好看国创（B站）&好看电影（B站）&电视剧（B站）').split('&');
var clsu=('1&2&3&4&47&6&7&8&9&10&11&26&21&13&14&15&16&28&22&23&24&25&34&35&38&39&40').split('&');}
else if(/bbkdj/.test(spl)){
var clst=('综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&台湾剧&韩国剧&欧美剧&微电影&香港剧&日本剧&海外剧&泰国剧&纪录片&动画片').split('&');
var clsu=('3&4&6&7&8&9&10&11&12&13&14&15&16&20&21&22&23&24&25&26').split('&');}
else if(/apibdzy/.test(spl)){
var clst=('动作片&喜剧片&爱情片&科幻片&恐怖片&犯罪片&战争片&动画电影&剧情片&记录片&国产剧&香港剧&日本剧&欧美剧&大陆综艺&日韩综艺&港台综艺&欧美综艺&国产动漫&日本动漫&欧美动漫&海外动漫&海外剧&台湾剧&韩国剧').split('&');
var clsu=('21&22&23&24&25&26&27&28&29&30&32&33&34&35&37&38&39&40&42&43&44&45&57&58&59').split('&');}
else if(/leduozy/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港剧&日剧&欧美剧&台剧&韩剧&海外剧&纪录片').split('&');
var clsu=('1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16&17&21&22').split('&');}
else if(/rrzyw/.test(spl)){
var clst=('电影&美剧&科幻动作&欧美片&综艺选秀&悬疑烧脑&喜剧青春&日韩片&科幻片&动作片&动漫卡通&精英文艺&喜剧片&恐怖片&爱情片&剧情片&韩剧&国产剧').split('&');
var clsu=('1&2&5&6&9&10&11&12&14&15&16&18&19&20&21&22&24&26').split('&');}
else if(/zju8/.test(spl)){
var clst=('Netflix自建&电影&连续剧&动漫&综艺&日韩剧&欧美剧').split('&');
var clsu=('25&1&2&4&3&15&16').split('&');}
else if(/bde4/.test(spl)){
var clst=('不限&动作&爱情&喜剧&科幻&恐怖&战争&武侠&魔幻&剧情&动画&惊悚&3D&灾难&悬疑&警匪&文艺&青春&冒险&犯罪&纪录&古装&奇幻&国语&综艺&历史&运动&原创压制&美剧&韩剧&国产电视剧&日剧&英剧&德剧&俄剧&巴剧&加剧&西剧&意大利剧&泰剧&港台剧&法剧&澳剧').split('&');
var clsu=('all&dongzuo&aiqing&xiju&kehuan&kongbu&zhanzheng&wuxia&mohuan&juqing&donghua&jingsong&3D&zainan&xuanyi&jingfei&wenyi&qingchun&maoxian&fanzui&jilu&guzhuang&qihuan&guoyu&zongyi&lishi&yundong&yuanchuang&meiju&hanju&guoju&riju&yingju&deju&eju&baju&jiaju&spanish&yidaliju&taiju&gangtaiju&faju&aoju').split('&');}
else if(/nfmovies/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&奈菲独家&动作片&爱情片&科幻片&恐怖片&战争片&喜剧片&纪录片&剧情片&大陆剧&港台剧&欧美剧&日韩剧').split('&');
var clsu=('tid=1&tid=2&tid=3&tid=4&player=奈菲独家&tid=5&tid=6&tid=7&tid=8&tid=9&tid=10&tid=11&tid=12&tid=13&tid=14&tid=15&tid=16').split('&');}
else if(/daishudy/.test(spl)){
var clst=('全部&电影&连续剧&综艺&动漫&动作片&喜剧片&科幻片&恐怖片&大陆剧&欧美剧&港台剧&日韩剧').split('&');
var clsu=('0&1&2&3&4&5&10&7&8&13&15&14&16').split('&');}
else if(/yanetflix/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&悬疑片&冒险片&犯罪片&奇幻片&惊悚片&青春片&纪录片&灾难片&古装片&动画片&国产剧&港台剧&日韩剧&欧美剧&泰国剧&海外剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&22&23&24&25&26&27&28&29&13&14&15&16&30&31').split('&');}
else if(/saohuotv/.test(spl)){
var clst=('电影&电视剧&动漫&喜剧&爱情&恐怖&动作&科幻&战争&犯罪&动画&奇幻&剧情&冒险&悬疑&惊悚&其它片&大陆&TVB&韩剧&美剧&日剧&英剧&台剧&其它剧').split('&');
var clsu=('1&2&4&6&7&8&9&10&11&12&13&14&15&16&17&18&19&20&21&22&23&24&25&26&27').split('&');}
else if(/nicemov/.test(spl)){
var clst=('全部&电影&电视剧&综艺&动漫').split('&');
var clsu=('0&1&2&3&4').split('&');}
else if(/nangua55/.test(spl)){
var clst=('电影&电视剧&动漫&综艺&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&香港剧&台湾剧&日本剧&韩国剧&欧美剧&海外').split('&');
var clsu=('1&2&3&4&5&6&7&8&9&10&11&14&15&16&17&18&19&20').split('&');}
else if(/bddysf/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&奇幻片&犯罪片&武侠片&惊悚片&悬疑片&国产剧&港台剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&47&51&49&52&53&13&14').split('&');}
else if(/jisuyswang/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&记录片&国产剧&港台剧&日韩剧&欧美剧&泰国剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&32&13&14&15&16&38').split('&');}
else if(/5180s/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&记录片&国产剧&港台剧&日韩剧&欧美剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&21&13&14&15&16').split('&');}
else if(/hxys/.test(spl)){
var clst=('电影&动作&喜剧&爱情&科幻&恐怖&剧情&战争&悬疑&冒险&犯罪&奇幻&惊悚&纪录&灾难&古装&动画&剧集&国产剧&欧美剧&日韩剧&港台剧&动漫&国产动漫&日本动漫&海外动漫&综艺').split('&');
var clsu=('1&6&7&8&9&10&11&12&20&21&22&23&24&25&26&27&28&2&13&16&15&14&4&31&32&33&3').split('&');}
else if(/auete/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&其它&喜剧片&动作片&爱情片&科幻片&恐怖片&战争片&剧情片&美剧&韩剧&日剧&泰剧&网剧&台剧&国产&港剧').split('&');
var clsu=('Movie&Tv&Zy&Dm&qita&Movie/xjp&Movie/dzp&Movie/aqp&Movie/khp&Movie/kbp&Movie/zzp&Movie/jqp&Tv/oumei&Tv/hanju&Tv/riju&Tv/yataiju&Tv/wangju&Tv/taiju&Tv/neidi&Tv/tvbgj').split('&');}
else if(/kyikan/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&日韩剧&欧美剧&纪录片&微电影&泰剧&惊悚片&悬疑片&TV版&电影版&剧场版&TV综艺&国语经典&音乐MV&海外剧&4K电影').split('&');
var clsu=('1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16&18&19&20&21&23&24&25&26&36&31&32&40').split('&');}
else if(/cocoman/.test(spl)){
var clst=('全部&玄幻&热血&恋爱&都市&古风&冒险&穿越&其他&爆笑&搞笑&修真&少女&少男&校园&霸总&动作&奇幻&后宫&少年&生活&武侠&科幻&悬疑&魔幻&恐怖&战斗&重生&连载&总裁&励志').split('&');
var clsu=('&mainCategoryId=10024&mainCategoryId=10023&mainCategoryId=10126&mainCategoryId=10124&mainCategoryId=10143&mainCategoryId=10210&mainCategoryId=10129&mainCategoryId=10560&mainCategoryId=10201&mainCategoryId=10122&mainCategoryId=10133&mainCategoryId=10301&mainCategoryId=10641&mainCategoryId=10131&mainCategoryId=10127&mainCategoryId=10125&mainCategoryId=10242&mainCategoryId=10138&mainCategoryId=10321&mainCategoryId=10142&mainCategoryId=10139&mainCategoryId=10181&mainCategoryId=10183&mainCategoryId=10227&mainCategoryId=10185&mainCategoryId=10309&mainCategoryId=10461&mainCategoryId=11062&mainCategoryId=10306&mainCategoryId=10207').split('&');}
else if(/bowang/.test(spl)){
var clst=('電影&劇集&綜藝&動漫&動作片&喜劇片&愛情片&科幻片&恐怖片&劇情片&戰爭片&紀録片&微電影&國產劇&港台劇&日韓劇&歐美劇&海外劇').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&13&14&15&16&22').split('&');}
else if(/4ytv/.test(spl)){
var clst=('奈飞Netflix蓝光&电影&连续剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&动画片&国产剧&港台剧&日韩剧&欧美剧&纪录片').split('&');
var clsu=('42&1&2&3&4&6&7&8&9&10&11&12&37&13&14&15&16&35').split('&');}
else if(/bajiecaiji/.test(spl)){
var clst=('综艺&动漫&国产动漫&日本动漫&欧美动漫&其他动漫&韩国美女&写真美女&展会美女&主播美女&动作片&喜剧片&爱情片&科幻片&恐怖片&奇幻片&动画片&战争片&剧情片&微电影&国产剧&香港剧&台湾剧&韩国剧&日本剧&欧美剧&海外剧&纪录片&大陆综艺&国外综艺&港台综艺').split('&');
var clsu=('3&4&91&92&93&94&53&47&48&95&5&6&7&8&9&10&100&101&11&19&12&13&14&15&16&17&42&99&96&97&98').split('&');}
else if(/wfss100/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&国产剧&港台剧&日韩剧&欧美剧&奇幻片&动画片&犯罪片&古装片&记录片&悬疑片&惊悚片&武侠片&冒险片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&其他剧').split('&');
var clsu=('1&2&3&4&13&14&15&16&20&21&22&23&24&25&26&28&29&30&31&32&33&34&35&36&37').split('&');}
else if(/unss/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&犯罪片&动画电影&国产剧&港台剧&日韩剧&欧美剧&大陆综艺&港台综艺').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&13&14&15&16&22&23').split('&');}
else if(/kanju77/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&直播&动作片&爱情片&科幻片&恐怖片&剧情片&战争片&音乐片&记录片&动漫电影&国产剧&香港剧&欧美剧&海外剧').split('&');
var clsu=('1&2&3&4&22&6&7&8&9&10&11&12&13&14&15&16&20&21').split('&');}
else if(/fantuan/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&微电影&灾难片&国产剧&港剧&韩剧&美剧&日剧&泰剧&台剧&英剧&大陆综艺&台湾综艺&韩国综艺').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&21&22&13&14&15&16&24&25&26&27&29&30&31').split('&');}
else if(/juhaokan/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&犯罪片&纪录片&国产剧&港台剧&日韩剧&欧美剧&海外剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&13&14&15&16&22').split('&');}
else if(/nkdyw/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&哔哩哔哩&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&欧美剧&日韩剧&其他剧&番剧&国创').split('&');
var clsu=('1&2&3&4&26&6&7&8&9&10&11&12&13&14&21&16&25&27&28').split('&');}
else if(/vdxj/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&国产剧&港台剧&日韩剧&欧美剧').split('&');
var clsu=('1&2&3&4&13&14&15&16').split('&');}
else if(/aiyy/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&纪录片&动画片&悬疑片&犯罪片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&香港剧&韩国剧&欧美剧&台湾剧&日本剧&海外剧&泰国剧&印度剧&港台综艺&大陆综艺&韩国综艺&欧美综艺&国产动漫&欧美动漫&日本动漫&海外动漫').split('&');
var clsu=('1&2&3&4&26&27&36&37&6&7&8&9&10&11&12&13&20&21&16&22&23&24&34&35&31&32&33&38&28&29&30&39').split('&');}
else if(/tv.ci/.test(spl)){
var clst=('电影&动作片&喜剧片&爱情片&科幻片&奇幻片&恐怖片&剧情片&战争片&记录片&悬疑片&冒险片&犯罪片&连续剧&国产剧&港台剧&日韩剧&欧美剧&海外剧&动画片&综艺&内地综艺&港台综艺&日韩综艺&欧美综艺&动漫&国产动漫&日韩动漫&欧美动漫&港台动漫&海外动漫&动漫电影&番剧&国创').split('&');
var clsu=('1&6&7&8&9&38&10&11&12&22&44&45&46&2&13&14&15&16&23&50&3&29&30&31&32&4&33&34&35&36&37&39&60&61').split('&');}
else if(/o8tv/.test(spl)){
var clst=('Netflix蓝光4k&蓝光电影&蓝光连续剧&蓝光动漫&蓝光综艺&蓝光纪录片&电影&精品推荐&喜剧片&爱情片&科幻片&犯罪片&动作片&恐怖片&战争片&剧情片&日韩电影&连续剧&热剧推荐&国产剧&港台剧&日韩剧&欧美剧&动漫&热漫推荐&国产动漫&日本动漫&欧美动漫&综艺&热综推荐&内地综艺&日韩综艺&港台综艺&欧美综艺&纪录片&纪录片&热片推荐').split('&');
var clsu=('RSS&KSS&8SS&ESS&JSS&OSS&SCS&ZSS&dSS&DSS&uSS&0SS&HSS&PSS&aSS&iSS&lSS&qCS&tSS&vCS&9CS&KCS&8CS&ICS&NSS&eSS&nSS&rSS&xCS&MSS&9SS&oCS&CSS&zCS&TSS&USS&hSS').split('&');}
else if(/dianyingim/.test(spl)){
var clst=('电影&电视剧&动漫&综艺&预告&动作片&喜剧片&剧情片&动画片&爱情片&恐怖片&科幻片&奇幻片&战争片&纪录片&微电影&国产剧&欧美剧&韩剧&日剧&台湾剧&港剧&泰剧&海外剧&日韩动漫&国产动漫&欧美动漫&其他动漫').split('&');
var clsu=('dianying&dianshiju&dongman&zongyi&yugao&dongzuopian&xijupian&juqingpian&donghuapian&aiqingpian&kongbupian&kehuanpian&qihuanpian&zhanzhengpian&jilupian&weidianying&guochanju&oumeiju&hanju&riju&taiwanju&gangju&taiju&haiwai&rihandongman&guochandongman&oumeidongman&qita').split('&');}
else if(/4kyima/.test(spl)){
var clst=('电影&连续剧&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&日韩剧&欧美剧&国产动漫&日本动漫&动漫片').split('&');
var clsu=('1&2&4&6&7&8&9&10&11&12&13&14&15&16&21&22&30').split('&');}

for(var i=0;i<clst.length;i++){
//分类链接
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){var url=spl+'?ac=videolist&pg=fypage&t='+clsu[i];}
else if(/<rss/.test(html)&&/<video>/.test(html)){var url=spl+'?ac=list&pg=fypage&t='+clsu[i];}
else if(/jpysvip|zhaikan|gudanys|moyuy|unss|juhaokan|mjhd/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage.html';}
else if(/nfstar|nfxtv|nfxhd|zhenbuka|cokemv/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage/';}
else if(/ak1080|hxys|aiyy/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---.html';}
else if(/zju8|nkdyw/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---/';}
else if(/o8tv/.test(spl)){var url=spl+'/index.php/vodshow/'+clsu[i]+'--------fypage---/';}
else if(/80ysm/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'/page/fypage.html';}
else if(/bddysf|fantuan/.test(spl)){var url=spl+'/vodshow/id/'+clsu[i]+'/page/fypage.html';}
else if(/7xiady|bwl87/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage/';}
else if(/46nb/.test(spl)){var url=spl+'/type/'+clsu[i]+'/fypage.html';}
else if(/saohuotv/.test(spl)){var url=spl+'/list/'+clsu[i]+'-fypage.html';}
else if(/siguyy/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage.html';}
else if(/subaibai|qianoo/.test(spl)){var url=spl+'/'+clsu[i]+'/page/fypage[firstPage='+spl+'/'+clsu[i]+']';}
else if(/auete/.test(spl)){var url=spl+'/'+clsu[i]+'/indexfypage.html[firstPage='+spl+'/'+clsu[i]+'/index.html]';}
else if(/kyikan/.test(spl)){var url=spl+'/index.php?m=vod-list-id-'+clsu[i]+'-pg-fypage-order--by--class--year--letter--area--lang-.html';}
else if(/aidi|ganfantv|5180s/.test(spl)){var url=spl+'/show/'+clsu[i]+'--------fypage---.html';}
else if(/bowang/.test(spl)){var url=spl+'/show/'+clsu[i]+'/page/fypage.html';}
else if(/dianyingim/.test(spl)){var url=spl+'/pianku-'+clsu[i]+'--------fypage---/';}
else if(/hktvyb/.test(spl)){var url=spl+'/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/qkan8|cqzyw|vdxj/.test(spl)){var url=spl+'/index.php/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/klysw|dxys|jisuyswang|tv.ci|syg520|4ytv|521x5/.test(spl)){var url=spl+'/index.php/vod/show/id/'+clsu[i]+'/page/fypage.html';}
else if(/nicotv/.test(spl)){var url=spl+'/video/type3/'+clsu[i]+'-------fypage.html';}
else if(/agefan/.test(spl)){var url=spl+'/catalog/'+clsu[i]+'-all-all-all-all-time-fypage';}
else if(/1090ys/.test(spl)){var url=spl+'/whole/'+clsu[i]+'/page/fypage.html';}
else if(/bde4/.test(spl)){var url=spl+'/s/'+clsu[i]+'/fypage';}
else if(/kunyu77/.test(spl)){var url=spl+'/searchFilter?type_id='+clsu[i]+'&pagenum=fypage&pagesize=24;get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/leduozy/.test(spl)){var url=spl+'/?m=vod-type-id-'+clsu[i]+'-pg-fypage.html';}
else if(/nfmovies/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&order=time&'+clsu[i]+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
else if(/daishudy/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&tid='+clsu[i];}
else if(/yanetflix/.test(spl)){var url=spl+'/index.php/vod/show/id/'+clsu[i]+'/page/fypage.html[firstPage='+spl+'/index.php/vod/show/id/'+clsu[i]+'.html]';}
else if(/nicemov/.test(spl)){var url=spl+'/search.php?page=fypage&searchtype=5&tid='+clsu[i]+'[firstPage='+spl+'/search.php?searchtype=5&tid='+clsu[i]+']';}
else if(/nangua55/.test(spl)){var url=spl+'/index.php?s=home-vod-type-id-'+clsu[i]+'-picm-1-p-fypage';}
else if(/ysftv/.test(spl)){var url=spl+'/Class/'+clsu[i]+'-fypage.html';}
else if(/cocoman/.test(spl)){var url=spl+'/show?'+clsu[i]+'&orderBy=weeklyCount&page=fypage';}
else if(/kanju77/.test(spl)){var url=spl+'/y/'+clsu[i]+'/fypage.html';}
else if(/paofan/.test(spl)){var url=spl+'/video/filter?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","page_num":"fypage","sysVer":"7.1.2","osType":"2","channel_id":"'+clsu[i]+'","debug":"1","ver":"5.1.7","product":"1"};post;utf-8;{User-Agent@okhttp/4.1.0}';}

//显示分类
d.push({
   title:clst[i],
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));clsrule();`,
   col_type:clst[i].length>=4?'text_3':'text_4'
   //col_type:'flex_button'
})
}//for结束

//分类结束
d.push({col_type: 'line'});}

//首页推荐开始,取首页推荐列表
if(/<rss/.test(html)&&/<video>/.test(html)){var conts=parseDomForArray(html,'body&&rss');}
else if(/kunyu77/.test(spl)){var conts = '[]';}
else if(/paofan/.test(spl)){var conts = JSON.parse(html).data.label;}
else if(/saohuotv/.test(spl)){var conts=parseDomForArray(html,'body&&.v_list');}
else if(/agefan/.test(spl)){var conts=parseDomForArray(html,'body&&.ul_li_a5');}
else if(/bde4/.test(spl)){var conts=parseDomForArray(html,'body&&.cards');}
else if(/klysw|nkdyw/.test(spl)){var conts=parseDomForArray(html,'body&&section:has(li[class~=^leo-video-])');}
else if(/subaibai|qianoo/.test(spl)){var conts=parseDomForArray(html,'body&&.bt_img');}
else if(/cqzyw/.test(spl)){var conts=parseDomForArray(html,'body&&.stui-vodlist');}
else if(/mo-part-round/.test(html)&&/mo-situ-name/.test(html)){var conts=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)');}
else if(/menuBar/.test(html)&&/imgBox/.test(html)){var conts=parseDomForArray(html,'body&&.imgBox:has(.ImgA)');}
else if(/myui-vodlist/.test(html)&&/pic-text/.test(html)){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}
else if(/myui-vodlist/.test(html)&&/pic-tag/.test(html)){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-tag)');}
else if(/stui-vodlist/.test(html)&&/pic-tag/.test(html)){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-tag)');}
else if(/stui-vodlist/.test(html)&&/pic-text/.test(html)){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-text)');}
else if(/vodlist/.test(html)&&/vodlist_item/.test(html)){var conts=parseDomForArray(html,'body&&.vodlist:has(.vodlist_item)');}
else if(/pack-packcover/.test(html)){var conts=parseDomForArray(html,'body&&.vodlist:has(.pack-packcover)');}
else if(/fed-list-info/.test(html)&&/fed-col-sm3/.test(html)){var conts=parseDomForArray(html,'body&&.fed-list-info:has(.fed-col-sm3)');}
else if(/list-unstyled/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.list-unstyled:has(.col-sm-3)');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.hy-video-list:has(.col-sm-3)');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){var conts=parseDomForArray(html,'body&&.hl-vod-list:has(.hl-list-item)');}
else if(/layout-box/.test(html)&&/col-sm-3/.test(html)){var conts=parseDomForArray(html,'body&&.layout-box:has(.col-sm-3)');}
else if(/forum_card_fid/.test(html)&&/threadlist/.test(html)){var conts=parseDomForArray(html,'body&&.threadlist');}
else if(/index-area/.test(html)&&/link-hover/.test(html)&&/sj-nav-search/.test(html)){var conts=parseDomForArray(html,'body&&.index-area');}
else if(/indexShowBox/.test(html)&&/video-model-list/.test(html)){var conts=parseDomForArray(html,'body&&.video-model-list');}
else if(/module-item/.test(html)&&/module-list/.test(html)){var conts=parseDomForArray(html,'body&&.module-list');}
else if(/movie-list/.test(html)&&/m-item/.test(html)){var conts=parseDomForArray(html,'body&&.movie-list');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var conts=parseDomForArray(html,'body&&#data_list');}
else if(/tbox_t/.test(html)&&/tbox_m/.test(html)){var conts=parseDomForArray(html,'body&&.tbox_m');}


//setError(conts);
for(var i = 0;i<conts.length;i++){
//主页片单列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=parseDomForArray(conts[i],"body&&video");}
else if(/kunyu77/.test(spl)){
var list=JSON.parse(html).data.result;}
else if(/paofan/.test(spl)){
var list=JSON.parse(html).data.label[i].list;}
else if(/bde4/.test(spl)){
var list=parseDomForArray(conts[i],"body&&.card");}
else if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(conts[i],'body&&.mo-cols-info');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(conts[i],'body&&.col-sm-3');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){
var list=parseDomForArray(conts[i],'body&&.hl-list-item');}
else if(/layout-box/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(conts[i],'body&&.col-sm-3');}
else if(html.indexOf('fed-list-info')!=-1){
var list=parseDomForArray(conts[i],'body&&.fed-col-sm3');}
else if(html.indexOf('pack-packcover')!=-1){
var list=parseDomForArray(conts[i],'body&&.pack-packcover');}
else if(/module-item/.test(html)&&/module-list/.test(html)){var list=parseDomForArray(conts[i],'body&&.module-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(html.indexOf('link-hover')!=-1){
var list=parseDomForArray(conts[i],'body&&li:has(.link-hover)');}
else{
var list=parseDomForArray(conts[i],'body&&li:has(a)')}

//setError(list);

for(var j = 0;j<list.length;j++){
//图片
try{
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){
var img=parseDomForHtml(list[j],"body&&pic&&Text");}
else if(/agefan|klysw|auete|moyuy|ysftv/.test(spl)){
var img=parseDomForHtml(list[j], 'img&&src');}
else if(/bde4/.test(spl)){
var img=parseDomForHtml(list[j], 'img&&data-src');}
else if(/kunyu77/.test(spl)){
var img=list[j].videoCover;}
else if(/paofan/.test(spl)){
var img=list[j].cover;}
else if(/module-list/.test(html)&&/module-item/.test(html)){
var img=parseDomForHtml(list[j],".lazyloaded||.lazyload||.lazy&&data-src||data-original");}
else if(/vbox_t/.test(html)&&/vbox/.test(html)){
var img=parseDomForHtml(list[j],"a&&style");}
else if(/data-background/.test(list[j])&&/swiper-lazy/.test(list[j])){
var img=parseDomForHtml(list[j],"a&&data-background");}
else{
var img=parseDomForHtml(list[j], '.lazy||.lazyload||.lazyloaded||.mo-situ-pics||.myui-vodlist__thumb||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.hl-lazy||.leo-lazy&&data-original||style||data-src');
}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var last = parseDomForHtml(list[j],"body&&last&&Text");
var dt = parseDomForHtml(list[j],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;}
else if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var desc = parseDomForHtml(list[j],"body&&note&&Text");}
else if(/class="jidi"|class="hdinfo"/.test(list[j])){
var desc=parseDomForHtml(list[j], '.jidi||.hdinfo&&Text');}
else if(/leo-video-remark/.test(list[j])&&/leo-video-sitem/.test(list[i])){
var desc=parseDomForHtml(list[j], '.leo-video-remark&&Text');}
else if(/cqzyw/.test(spl)){
var typ=parseDomForHtml(list[j], '.type&&Text');
var tim=parseDomForHtml(list[j], '.time&&Text');
var desc=typ+' '+tim;}
else if(/leduozy/.test(spl)){
var desc='更新时间：'+parseDomForHtml(list[j], 'font,-1&&Text')+' '+parseDomForHtml(list[j], 'a,-1&&Text');}
else if(/bde4/.test(spl)){
var desc = parseDomForHtml(list[j],".ep||.rate||.meta&&Text");}
else if(/kunyu77/.test(spl)){
var desc=list[j].msg;}
else if(/paofan/.test(spl)){
var desc=list[j].video_remarks;}
else{
var desc=parseDomForHtml(list[j], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.anime_icon1_name1||.v_note||.pack-prb||.note||.pic-tag-left||.hl-pic-text||.hdtag||.tag-mark||.other||.zhuangtai||.module-item-text||span&&Text')}

//标题
if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[j],"body&&note&&Text");
var title = name+"  状态:"+note;}
else if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var title = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];}
else if(/subaibai|qianoo|cqzyw/.test(spl)){
var title=parseDomForHtml(list[j], 'h3&&Text');}
else if(/leduozy/.test(spl)){
var title=parseDomForHtml(list[j], 'a&&Text');}
else if(/kunyu77/.test(spl)){
var title=list[j].title;}
else if(/paofan/.test(spl)){
var title=list[j].video_name;}
else if(/bde4/.test(spl)){
var title=parseDomForHtml(list[j], '.content&&Text');}
else if(/mo-situ-name/.test(list[j])){
var title=parseDomForHtml(list[j], '.mo-situ-name&&Text');
}else if(/txtA/.test(list[j])){
var title=parseDomForHtml(list[j], '.txtA&&Text');
}else if(/txt-area/.test(list[j])){
var title=parseDomForHtml(list[j], '.txt-area&&a&&Text');
}else if(/fed-list-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.fed-list-title&&Text');
}else if(/video-model-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.video-model-title&&Text');
}else if(/ff-text-right|anime_icon1_name|zoomOverlay/.test(list[j])){
var title=parseDomForHtml(list[j], 'img&&alt');}
else{
var title=parseDomForHtml(list[j], 'a&&title')}

//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[j],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else if(/kunyu77/.test(spl)){
var url=spl+'/videoPlaylist?ids='+list[j].id+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/paofan/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[j].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/nfmovies/.test(spl)){
var nfurl = parseDomForHtml(list[j],"a&&href");
var url=spl+nfurl+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[j],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[j],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else{
var url=parseDomForHtml(list[j], 'a&&href')}

//首页无图的
if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
  });
}
//首页有图的
else{
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
   desc:desc,
   col_type: 'movie_3_marquee'
  });
}

 }//for j
}//for i
} catch(e) {}
res.data = d;setHomeResult(res);

}

//分类规则函数
function clsrule() {
var res = {};var d = [];
var html = getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//setError(html);
if(/<rss/.test(html)&&/<video>/.test(html)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//取分类片单列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=parseDomForArray(html,"rss&&video");}
else if(/kunyu77/.test(MY_URL)){var list = JSON.parse(html).data.result;}
else if(/paofan/.test(MY_URL)){var list = JSON.parse(html).data.list;}
else if(/subaibai|qianoo/.test(MY_URL)){
var list=parseDomForArray(html,'.bt_img&&li');}
else if(/myui-vodlist/.test(html)&&/pic-tag|pic-text/.test(html)){
var list = parseDomForArray(html,".myui-vodlist&&li:has(a)");}
else if(/stui-vodlist/.test(html)&&/pic-text|pic-tag|<\/em>/.test(html)){
var list = parseDomForArray(html,".stui-vodlist&&li:has(a)");}
else if(/vodlist/.test(html)&&/pack-ykpack/.test(html)){
var list=parseDomForArray(html,'.vodlist&&.pack-ykpack');}
else if(/vodlist/.test(html)&&/vodlist_item/.test(html)){
var list = parseDomForArray(html,".vodlist&&li");}
else if(/mo-part-round/.test(html)&&/mo-situ-name/.test(html)){
var list=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)&&.mo-cols-info');}
else if(/fed-list-info/.test(html)){
var list=parseDomForArray(html,'.fed-list-info&&li');}
else if(/list-unstyled/.test(html)){
var list=parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefan/.test(MY_URL)){
var list=parseDomForArray(html,'body&&.cell');}
else if(/cards/.test(html)&&/card/.test(html)){
var list=parseDomForArray(html,'.cards&&.card');}
else if(/v_list/.test(html)&&/grid_box/.test(html)){
var list=parseDomForArray(html,'.v_list&&li:has(a)');}
else if(/leo-video-item/.test(html)){
var list=parseDomForArray(html,'body&&.leo-video-item');}
else if(/hy-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(html,'.hy-video-list&&.col-sm-3');}
else if(/hl-vod-list/.test(html)&&/hl-list-item/.test(html)){
var list=parseDomForArray(html,'.hl-vod-list&&.hl-list-item');}
else if(/box-video-list/.test(html)&&/col-sm-3/.test(html)){
var list=parseDomForArray(html,'.box-video-list&&.col-sm-3');}
else if(/forum_card_fid/.test(html)&&/threadlist/.test(html)){var list=parseDomForArray(html,'body&&.threadlist&&li');}
else if(/index-area/.test(html)&&/link-hover/.test(html)){var list=parseDomForArray(html,'body&&.main&&li:has(.link-hover)');}
else if(/search-class-list-common/.test(html)&&/search-class-list-li/.test(html)){var list=parseDomForArray(html,'body&&.search-class-list-common&&li');}
else if(/module-list/.test(html)&&/module-item/.test(html)){var list=parseDomForArray(html,'body&&.module-item');}
else if(/menuBar/.test(html)&&/movie-item/.test(html)){var list=parseDomForArray(html,'body&&.movie-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(/tbox_m/.test(html)&&/tbox_t/.test(html)){var list=parseDomForArray(html,'body&&.tbox_m&&li');}
else if(/vod_list/.test(html)&&/common-action/.test(html)){var list=parseDomForArray(html,'body&&#vod_list&&li');}

//setError(list.length);

for(var i=0;i<list.length;i++){
//图片
try{
if(/<rss/.test(html)&&/<video>/.test(html)&&/<pic>/.test(html)){
var img=parseDomForHtml(list[i],"body&&pic&&Text");}
else if(/agefan|klysw|bde4|auete|moyuy|ysftv/.test(MY_URL)){
var img=parseDomForHtml(list[i], 'img&&src');}
else if(/kunyu77/.test(MY_URL)){var img = list[i].videoCover;}
else if(/paofan/.test(MY_URL)){var img = list[i].cover;}
else if(/module-list/.test(html)&&/module-item/.test(html)){
var img=parseDomForHtml(list[i],".lazyloaded||.lazyload||.lazy&&data-src||data-original");}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var img=parseDomForHtml(list[i],"a&&style");}
else{var img=parseDom(list[i], '.lazy||.lazyload||.lazyloaded||.mo-situ-pics||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.hl-lazy||.leo-lazy&&data-original||data-src');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
try{
if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var desc = parseDomForHtml(list[i],"body&&note&&Text");}
else if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[i],"body&&type&&Text");
var last = parseDomForHtml(list[i],"body&&last&&Text");
var dt = parseDomForHtml(list[i],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;}
else if(/qianoo|subaibai/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.jidi||.hdinfo&&Text');}
else if(/cokemv|klysw|nkdyw/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.pic-tag||.leo-video-remark&&Text');}
else if(/kunyu77/.test(MY_URL)){
var desc = list[i].msg;}
else if(/paofan/.test(MY_URL)){var desc = list[i].flag;}
else if(/bde4/.test(MY_URL)){
var desc = parseDomForHtml(list[i],".ep||.rate||.meta&&Text");}
else if(/leduozy/.test(MY_URL)){
var desc='更新时间：'+parseDomForHtml(list[i], 'font,-1&&Text')+' '+parseDomForHtml(list[i], 'a,1&&Text');}
else if(/cqzyw/.test(MY_URL)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var desc=typ+' '+tim;}
else{
var desc=parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.newname||.v_note||.pack-prb||.note||.pic-tag-left||.hl-pic-text||.hdtag||.other||.zhuangtai||.module-item-text||span&&Text');}
} catch(e) {}

//标题
if(img&&/<rss/.test(html)&&/<video>/.test(html)){
var title = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];}
else if(!img&&/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;}
else if(/subaibai|qianoo|cqzyw/.test(MY_URL)){
var title=parseDomForHtml(list[i], "h3&&Text");}
else if(/kunyu77/.test(MY_URL)){
var title = list[i].title;}
else if(/paofan/.test(MY_URL)){
var title = list[i].video_name;}
else if(/bde4/.test(MY_URL)){
var title=parseDomForHtml(list[i], '.content&&Text');}
else if(/leduozy/.test(MY_URL)){
var title=parseDomForHtml(list[i], 'a&&Text');}
else if(/mo-situ-name/.test(list[i])){
var title=parseDomForHtml(list[i], '.mo-situ-name&&Text');}
else if(/fed-list-title/.test(list[i])){
var title=parseDomForHtml(list[i], '.fed-list-title&&Text');}
else if(/ff-text-right|cell_imform|zoomOverlay/.test(list[i])){
var title=parseDomForHtml(list[i], 'img&&alt');}
else if(/video-model-title/.test(list[i])){
var title=parseDomForHtml(list[i], '.video-model-title&&Text');}
else if(/txtA/.test(list[i])){
var title=parseDomForHtml(list[i], '.txtA&&Text');}

else{
var title=parseDomForHtml(list[i], 'a&&title');
}

//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else if(/kunyu77/.test(MY_URL)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id;}
else if(/paofan/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[i].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[i],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[i],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else{ 
var url=parseDom(list[i], 'a&&href');}

//分类片单无图的
if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
});}
//分类片单有图的
else{
d.push({
   title:title,
   pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
   desc:desc,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   col_type:'movie_3_marquee'
});}

}
res.data = d;setHomeResult(res);

}

//搜索解析规则函数
function hiksearch() {
function urlph(){
if(/jpysvip|zhaikan|ak1080|80ysm|gudanys|moyuy|unss|juhaokan|aiyy|hxys|mjhd/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---.html';}
else if(/nfstar|nfxtv|nfxhd|zhenbuka|cokemv|zju8/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---/';}
else if(/bddysf/.test(url)){url=url+'/vodsearch'+spl[2]+'/page/fypage.html';}
else if(/fantuan/.test(url)){url=url+'/vodsearch/page/fypage/wd/'+spl[2]+'.html';}
else if(/aidi/.test(url)){url=url+'/vsearch/'+spl[2]+'----------fypage---.html';}
else if(/siguyy|ganfantv|5180s/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---.html';}
else if(/7xiady|bwl87/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---/';}
else if(/dianyingim/.test(url)){url=url+'/search-'+spl[2]+'-----------fypage--/';}
else if(/nkdyw/.test(url)){url=url+'/nk/'+spl[2]+'----------fypage---/';}
else if(/1090ys/.test(url)){url=url+'/search/wd/'+spl[2]+'/page/fypage.html';}
else if(/bowang/.test(url)){url=url+'/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/subaibai|qianoo/.test(url)){url=url+'/page/fypage?s='+spl[2];}
else if(/46nb/.test(url)){url=url+'/s/'+spl[2]+'/fypage.html';}
else if(/bde4/.test(url)){url=url+'/search/'+spl[2]+'/fypage';}
else if(/hktvyb/.test(url)){url=url+'/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/qkan8|cqzyw|klysw|yanetflix|jisuyswang|dxys|syg520|4ytv|tv.ci|vdxj|521x5/.test(url)){url=url+'/index.php/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/o8tv/.test(url)){url=url+'/index.php/vodsearch/'+spl[2]+'----------fypage---/';}
else if(/saohuotv|nicemov/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/auete/.test(url)){url=url+'/search.php?searchword='+spl[2];}
else if(/nfmovies/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype='+';get;utf-8;{User-Agent@Mozilla/5.0&&Cookie@.js:getVar("hikernfcookie")}';}
else if(/daishudy/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/nicotv/.test(url)){url=url+'/vod-search-wd-'+spl[2]+'-p-fypage.html';}
else if(/kyikan|ysftv/.test(url)){url=url+'/index.php?m=vod-search-pg-fypage-wd-'+spl[2]+'.html';}
else if(/agefans/.test(url)){url=url+'/search?query='+spl[2]+'&page=fypage';}
else if(/789pan|bbkdj|apibdzy|rrzyw|bajiecaiji|wfss100|4kyima/.test(url)){url=url+'?wd='+spl[2]+'&pg=fypage&ac=list';}
else if(/leduozy/.test(url)){url=url+'/index.php？？m=vod-search?wd='+spl[2]+';post;utf-8';}
else if(/kunyu77/.test(url)){url=url+'/searchVideo?searchName='+spl[2]+'&pg=fypage;get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/nangua/.test(url)){url=url+'/index.php?s=home-search-index-wd-'+spl[2]+'-sid-1-p-fypage;get;utf-8;{User-Agent@Mozilla/5.0&&Referer@http://www.nangua55.com/search/&&X-Requested-With@XMLHttpRequest}';}
else if(/paofan/.test(url)){url=url+'/search/result?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","page_num":"fypage","sysVer":"7.1.2","osType":"2","keyword":"'+spl[2]+'","page_size":"12","channel_id":"","debug":"1","ver":"5.1.7","product":"1"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/kanju77/.test(url)){url=url+'/so/'+spl[2]+'----------fypage---.html';}
else if(/cocoman/.test(url)){url=url+'/search?searchString='+spl[2]+'&page=fypage';}
}

var res = {};var d = [];
var spl = MY_URL.split('$$$');
var num=spl[3];
var le = num*5;
//setError(le);
var json=JSON.parse(fetch(spl[1],{}));
//正文开始
var ssph=[];
var ssmd=json.ssmode;
for (var m = 0; m < json.data.length; m++) {
for (var i = 0; i < json.data[m].list.length; i++) {
var url=json.data[m].list[i].url;
var title=json.data[m].list[i].title;
//搜索链接拼合

if(ssmd==1){
//排除掉无法正常搜索的再输出搜索列表
if(!/zhenbuka|1090ys|cokemv|bwl87|nfmovies|leduozy|nangua|cocoman/.test(url)){
urlph()
ssph.push({sslin:url.replace('fypage','1'),sstit:title});}
}
//处理非聚合搜索开始
else{
urlph()
//搜索结果直接进网页的
if(/zhenbuka|1090ys|cokemv|bwl87/.test(url)){
var link=url+`@lazyRule=.js:input.replace('fypage','1')`;
}else{
var link=url
}
d.push({
    title : title,
    url : link
})
}//处理非聚合搜索结束

}//for i
}
//////////////////////////////////////////////////////////////////
if(ssmd==1){

var Data=[];
var Tit=[];
for(var j=le-5;j<le;j++){
if(j<ssph.length){
var arrt = ssph[j].sstit;
var Url = ssph[j].sslin;
Data.push({url:Url,options:{headers:{"User-Agent":MOBILE_UA}}});
Tit.push({tit:arrt});
}//if
}//for j

//---代码分界线---- 
if(Data!=''){
var bhtml=batchFetch(Data);
//setError(html[2]);

for(var k=0;k<bhtml.length;k++){
var html=bhtml[k];

if(/btwaf/.test(html)||html!=''){

if(/<rss/.test(html)&&/<video>/.test(html)){
var spl = Data[k].url.split("?")[0];
}else{
var spl = Data[k].url.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//setError(spl);
eval(fetch('hiker://files/rules/xyq/hikermovie.js'));
ssjiex();

}else{
d.push({
   title:Tit[k].tit+' '+'未搜索到',
   url:Data[k].url+`@lazyRule=.js:input.split(';')[0]`,
   col_type: 'text_1'
});
}

}//for k

}//if Data

}//结束聚合搜索

res.data = d;setSearchResult(res);
}

//搜索列表解析函数
function ssjiex() {
//取搜索结果列表
if(/<rss/.test(html)&&/<video>/.test(html)){var list=parseDomForArray(html,"rss&&video");}
else if(/kunyu77/.test(spl)){var list = JSON.parse(html).data;}
else if(/paofan/.test(spl)){var list = JSON.parse(html).data.list;}
else if(/agefans|klysw|nkdyw/.test(spl)){var list = parseDomForArray(html,'body&&.cell||.leo-detail-wrap');}
else if(/search_list/.test(html)){var list = parseDomForArray(html,'.search_list&&li');}
else if(/list-unstyled/.test(html)&&/justify-content-between/.test(html)){var list = parseDomForArray(html,'body&&.list-unstyled');}
else if(/globalMarginTop/.test(html)&&/globalPicList/.test(html)){var list = parseDomForArray(html,'#data_list&&li');}
else if(/list-unstyled/.test(html)){var list = parseDomForArray(html,'.list-unstyled&&li');}
else if(/pack-packcover/.test(html)){var list = parseDomForArray(html,'body&&.search-list');}
else if(/hl-list-item|hy-main-content/.test(html)){var list = parseDomForArray(html,'body&&.hl-list-item||.hy-video-details');}
else if(/search-list/.test(html)&&/card/.test(html)){var list = parseDomForArray(html,'.search-list&&.card');}
else if(/searchList/.test(html)){var list = parseDomForArray(html,'#searchList&&li');}
else if(/stui-vodlist__media/.test(html)){var list = parseDomForArray(html,'.stui-vodlist__media&&li');}
else if(/stui-vodlist/.test(html)){var list = parseDomForArray(html,'.stui-vodlist&&li:has(a)');}
else if(/vodlist/.test(html)&&/searchlist_item/.test(html)){var list = parseDomForArray(html,'.vodlist&&li');}
else if(/v_list/.test(html)&&/grid_box/.test(html)){var list = parseDomForArray(html,'.v_list&&li');}
else if(/mo-main-info/.test(html)){var list = parseDomForArray(html,'.mo-main-info&&.mo-deta-info:has(a)');}
else if(/fed-main-info/.test(html)){var list = parseDomForArray(html,'.fed-main-info&&.fed-deta-info');}
else if(/long-list/.test(html)&&/long-result/.test(html)){var list = parseDomForArray(html,'.long-result&&li');}
else if(/index-area/.test(html)&&/link-hover/.test(html)&&/sy-nav-down/.test(html)){var list=parseDomForArray(html,'body&&.main&&li:has(.link-hover)');}
else if(/box-main-content/.test(html)&&/col-sm-4/.test(html)){var list=parseDomForArray(html,'.box-main-content&&.col-sm-4');}
else if(/module-list/.test(html)&&/module-search-item/.test(html)){var list=parseDomForArray(html,'body&&.module-search-item');}
else if(/data_list/.test(html)&&/DianDian/.test(html)){var list=parseDomForArray(html,'body&&#data_list&&.DianDian');}
else if(/tbox_m/.test(html)&&/tbox_t/.test(html)){var list=parseDomForArray(html,'body&&.tbox_m&&li');}
else if(/common-action/.test(html)&&/vod_list/.test(html)){var list=parseDomForArray(html,'body&&#vod_list&&li');}

//setError(list);

if(list){
for (var i = 0; i < list.length; i++) {

//标题
try{
if(/<rss/.test(html)&&/<video>/.test(html)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;}
else if(/img/.test(list[i])&&/alt/.test(list[i])){var title = parseDomForHtml(list[i], 'img&&alt');}
else if(/bde4/.test(spl)){var title = parseDomForHtml(list[i], '.header&&title');}
else if(/kunyu77/.test(spl)){var title = list[i].videoName;}
else if(/paofan/.test(spl)){var title = list[i].video_name;}
else if(/leduozy/.test(spl)){var title=parseDomForHtml(list[i], 'a&&Text');}
else if(/h1|h2|h3|h4/.test(list[i])){var title = parseDomForHtml(list[i], 'h1||h2||h3||h4&&a&&Text');}
else if(/title/.test(list[i])){var title = parseDomForHtml(list[i], 'a&&title');}
else{var title = parseDomForHtml(list[i], 'a&&Text');}
}catch(e){}

//图片
try{
if(/agefans|klysw|bde4|moyuy|ysftv/.test(spl)){var img = parseDomForHtml(list[i], 'img&&src');}
else if(/kunyu77/.test(spl)){var img = list[i].videoCover;}
else if(/paofan/.test(spl)){var img = list[i].cover;}
else if(/module-list/.test(html)&&/module-search-item/.test(html)){
var img=parseDomForHtml(list[i],".lazyload||.lazyloaded||.lazy&&data-src||data-original");}
else if(/background-position/.test(list[i])){
var img=list[i].match(/url\((.*?)\)/)[1];}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var img=parseDomForHtml(list[i],"a&&style");}
else{
var img = parseDom(list[i], '.lazyload||.lazyloaded||.lazy||.mo-situ-pics||.fed-list-pics||.img-responsive||.eclazy||.video-pic||.videopic||.hl-lazy||.leo-lazy&&data-original||data-src||style');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//状态
try{
var desc='';
if(/cqzyw/.test(spl)){
var desc=parseDomForHtml(list[i], 'em&&Text');}
else if(/kunyu77/.test(spl)){
var desc = list[i].msg;}
else if(/paofan/.test(spl)){
var pfscore = list[i].score;
var pfflag = list[i].flag;
var desc = '评分:'+pfscore+'  状态:'+pfflag;}
else if(/vbox/.test(list[i])&&/vbox_t/.test(list[i])){
var desc=parseDomForHtml(list[i], 'span&&Text');
}
else{
var desc = parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.jidi||.hdinfo||.continu||.newname||.meta||.v_note||.note||.pack-prb||.hl-pic-text||.pic-tag||.other||.score||.video-serial&&Text');}
} catch(e) {}

//简介
try{
if(/<rss/.test(html)&&/<video>/.test(html)){
var typ = parseDomForHtml(list[i],'body&&type&&Text');
var dt = parseDomForHtml(list[i],'body&&dt&&Text');
var cont=typ+' · '+dt;}
else if(/aidi/.test(spl)){
var cont = parseDomForHtml(list[i], 'p,-1&&Text');}
else if(/cqzyw/.test(spl)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var cont=typ+' '+tim;}
else if(/kunyu77/.test(spl)){
var cont = list[i].briefContext;}
else if(/paofan/.test(spl)){var cont = list[i].intro;}
else if(/leduozy/.test(spl)){
var cont='更新时间：'+parseDomForHtml(list[i], 'font,-1&&Text');}
else{
var cont = parseDomForHtml(list[i], '.detail||dd||.fed-deta-content||.cell_imform_kv_desc||.leo-detail-media||.description||.ecitem-desc||.hl-item-content||.hy-video-details||.list-detail||.actor||.video-info-main||.stui-vodlist__detail&&Text');}
} catch(e) {}

//链接
if(/<rss/.test(html)&&/<video>/.test(html)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else if(/kunyu77/.test(spl)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id;}
else if(/paofan/.test(spl)){
var url=spl+'/video/info?JsonBody={"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","appId":"1","sysVer":"7.1.2","osType":"2","debug":"1","ver":"5.1.7","product":"1","video_id":"'+list[i].video_id+'"};post;utf-8;{User-Agent@okhttp/4.1.0}';}
else if(/moyuy/.test(spl)){
var mourl = parseDomForHtml(list[i],"a&&href");
var url=spl+mourl.replace('/vod/','/play/').replace('.html','-1-1.html');}
else if(/ganfantv/.test(spl)){
var deturl = parseDomForHtml(list[i],"a&&href");
var url=spl+deturl.replace('/detail/','/play/').replace('.html','-1-1.html');}
else if(/nkdyw/.test(spl)){
var url = parseDomForHtml(list[i],".leo-mt-15&&a&&href");}
else{       
var url = parseDomForHtml(list[i], 'a&&href');}
//无图的显示
if(!img){
if(ssmd==0){
d.push({
   title:'““'+title+'””',
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
   desc:cont,
   col_type: 'text_1'
     });
}
else{
d.push({
   title:title,
   url:$((url.substring(0,4)=='http'?url:spl+url)).rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();}),
   desc:cont+' '+Tit[k].tit,
   col_type: 'text_center_1'
      });
   }
}
//有图的显示
else{
   if(ssmd==0){
        d.push({
            title: '““'+title+'””'+'\n'+desc,
            pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
            url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();`,
            desc: cont,
            col_type: 'movie_1_vertical_pic'
        });
     }
    else{
     d.push({
     title: title+' '+desc,
     pic_url:/nfmovies|imgdb/.test(img)?img+'@Referer=':img+'@Referer='+img,
     url:$((url.substring(0,4)=='http'?url:spl+url)).rule(()=>{eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omerj();}),
     desc: ' '+Tit[k].tit,
     content:cont,
     col_type: 'movie_1_vertical_pic'
        });
      }
    }               
  }//for i
  
}//if(list)

}

//搜索二级解析函数
function hikseaerji() {
var res={};var d=[];
var html=getResCode().replace(/\\/g,"");
var json=JSON.parse(fetch('hiker://files/rules/xyq/hikermovie.json',{}));
var ssmd=json.ssmode;
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//setError(html);
if(/<rss/.test(html)&&/<video>/.test(html)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//取搜索结果列表
eval(fetch('hiker://files/rules/xyq/hikermovie.js'));
ssjiex();
res.data = d;setHomeResult(res);
}

//选集列表规则函数
function omerj() {
var res ={};var d=[];
//声明x5框架
d.push({
	title: '',
    desc:'255&&float',
    url:'',
	col_type: 'x5_webview_single'
});
refreshX5WebView('');

var html=getResCode().replace(/\\/g,"");
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//取网址
if(/<rss/.test(html)&&/<video>/.test(html)){
var omdomin=MY_URL.split("?")[0];
}else{
var omdomin = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}

//setError(html);
//线路统计
if(/<rss/.test(html)&&/<video>/.test(html)){
var tabs = parseDomForArray(html,'rss&&dl&&dd');
var conts = parseDomForArray(html,'rss&&dl&&dd');}
else if(/kunyu77/.test(omdomin)){
var tabs = JSON.parse(html).data.episodes;
var conts=tabs;}
else if(/paofan/.test(omdomin)){
var tabs = JSON.parse(html).data.info.source;
var conts=[{}];}
else if(/cqzyw/.test(omdomin)){
var tabs = parseDomForArray(html,"body&&#playlist");}
else if(/agefan/.test(omdomin)){
var tabs = parseDomForArray(html, '.menu0&&li');
var conts=parseDomForArray(html,'body&&.movurl:has(a)');}
else if(/saohuotv/.test(omdomin)){
var tabs = parseDomForArray(html, 'body&&.from_list&&li');
var conts = parseDomForArray(html, 'body&&#play_link&&li');}
//mac_url
else if(/kyikan|ysftv/.test(omdomin)){
var ahref=parseDom(html,'body&&.videourl||.lhmain&&a&&href');
var mhtml=request(ahref,{});
var jsurl = parseDom(mhtml,'.player||#player&&script&&Html').replace('base64decode','base64Decode');
eval(jsurl);
var tabs = mac_from.split("$$$");
var conts = mac_url.split("$$$");
}

else if(/hy-play-list/.test(html)&&/tab-content/.test(html)){
var tabs = parseDomForArray(html, '.tab-content&&.option');
var conts = parseDomForArray(html, '.tab-content&&.playlist');}
else if(/hl-plays-list/.test(html)&&/hl-plays-from/.test(html)){
var tabs = parseDomForArray(html, '.hl-plays-from&&a');
var conts = parseDomForArray(html, '.hl-play-source&&.hl-plays-list');}
else if(/nav-tabs/.test(html)&&/#playlist/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&li");}
else if(/nav-tabs/.test(html)&&/#player/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&.item&&li");}
else if(/nav-tabs/.test(html)&&/player-sidebar/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&.item&&li");}
else if(/nav-tabs/.test(html)&&/ff-playurl-tab/.test(html)){
var tabs = parseDomForArray(html,".nav-tabs&&li");}
else if(/nav-tabs/.test(html)&&/#con_playlist/.test(html)){
var tabs = parseDomForArray(html,"body&&.nav-tabs&&.gico");}
else if(/stui-content__detail/.test(html)&&/stui-content__playlist/.test(html)){
if(/fa-youtube-play/.test(html)){
var tabs = parseDomForArray(html,"body&&.stui-pannel__head");}
else if(/s-playsite/.test(html)){
var tabs = parseDomForArray(html,"body&&.js-list&&li");}
else if(/stui-vodlist__head/.test(html)){
var tabs = parseDomForArray(html,"body&&.stui-vodlist__head");}
else{
var tabs = parseDomForArray(html,"body&&.playlist");}
}
else if(/stui-player__video/.test(html)&&/stui-play__list/.test(html)){
var tabs = parseDomForArray(html,".play-tab&&li");}
else if(/myui-panel__head/.test(html)&&/sort-button/.test(html)){
var tabs = parseDomForArray(html,"body&&.myui-panel_hd:has(.sort-button)");}
else if(html.indexOf('mo-sort-head')!=-1){
var tabs = parseDomForArray(html,'body&&.mo-sort-head&&.mo-movs-btns');
var conts=parseDomForArray(html,'body&&.mo-main-info&&.mo-movs-item');}
else if(html.indexOf('play_source_tab')!=-1){
var tabs = parseDomForArray(html,'.play_source_tab&&a');}
else if(/fed-tabs-item/.test(html)){
var tabs = parseDomForArray(html, '.fed-tabs-item&&.fed-btns-info');}
else if(/leo-source-cho/.test(html)){
var tabs = parseDomForArray(html, 'body&&.leo-source-cho&&li');}
else if(/player_list/.test(html)&&/justify-content-center/.test(html)){
var tabs = parseDomForArray(html, 'body&&#player_list&&h2');
var conts=parseDomForArray(html,'#player_list&&ul');}
else if(/tagContent/.test(html)&&/js-list/.test(html)){
var tabs = parseDomForArray(html,"body&&.js-list&&li");
var conts = parseDomForArray(html, 'body&&#tagContent&&ul');}
else if(/playNumTab/.test(html)&&/tabContainer/.test(html)){
var tabs = parseDomForArray(html,'body&&#playNumTab&&a');}


//setError(tabs);
//列表统计
if(/subaibai|qianoo/.test(omdomin)){
var conts=parseDomForArray(html,'body&&.paly_list_btn');}
else if(/bde4/.test(omdomin)){
var conts = parseDomForArray(html, 'body&&.movie-info');}
else if(/tab-content/.test(html)&&/list-unstyled/.test(html)){
var conts = parseDomForArray(html, 'body&&.tab-content&&ul');}
else if(/tab-content/.test(html)&&/stui-content__playlist/.test(html)){
var conts = parseDomForArray(html, 'body&&.stui-content__playlist');}
else if(/stui-content__detail/.test(html)&&/stui-content__playlist/.test(html)){
var conts = parseDomForArray(html, 'body&&.stui-content__playlist');}
else if(/stui-player__video/.test(html)&&/stui-play__list/.test(html)){
var conts = parseDomForArray(html,"body&&.stui-play__list");}
else if(/tab-content/.test(html)&&/myui-content__list/.test(html)){
var conts = parseDomForArray(html, 'body&&.myui-content__list');}
else if(/tabContainer/.test(html)&&/playNumList/.test(html)){
if(/urlsTab/.test(html)){
var conts = parseDomForArray(parseDomForHtml(html,'body&&#tabContainer&&Html'),'body&&.tabContainer');}
else{
var conts = parseDomForArray(html,'#tabContainer&&.playNumList')}
;}
else if(/playlist_full/.test(html)&&/content_playlist/.test(html)){
var conts=parseDomForArray(html,'body&&.playlist_full:has(.content_playlist)');}
else if(/tab-play/.test(html)&&/content_playlist/.test(html)){
var tabs = parseDomForArray(html,'body&&#bofy&&h2');
var conts=parseDomForArray(html,'body&&.content_playlist');}
else if(/details-info/.test(html)&&/con_playlist/.test(html)){
var conts=parseDomForArray(html,'.playlist&&ul');}
else if(/fed-play-item|leo-play-num/.test(html)){
var conts = parseDomForArray(html, 'body&&.fed-play-item||.leo-play-num');}
else if(/contentURL/.test(html)&&/movievod/.test(html)){
var conts = parseDomForArray(html, 'body&&.contentURL&&ul');}
else if(/module-tab-item/.test(html)&&/scroll-content/.test(html)){
var tabs = parseDomForArray(html,'body&&.module-tab-item');
var conts = parseDomForArray(html,'body&&.scroll-content');}
else if(/tabs_block/.test(html)&&/list_block/.test(html)){
var tabs = parseDomForArray(html,'body&&.tabs');
var conts = parseDomForArray(html,'body&&.list_block');}
else if(/albumSelect/.test(html)&&/mod-head-title/.test(html)){
var tabs = parseDomForArray(html,'body&&section:has(.albumSelect)');
var conts = parseDomForArray(html,'body&&.albumSelect');}
else if(/playListBox/.test(html)&&/play-list/.test(html)){
var tabs = parseDomForArray(html,'body&&#playListBox&&.play-list');
var conts = parseDomForArray(html,'body&&#playListBox&&.play-list');}


//setError(conts);
//-----华丽的分割线-----
if(conts||tabs){
for(var i = 0;i<conts.length;i++){
//取各列表
if(/<rss/.test(html)&&/<video>/.test(html)){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");}
else if(/kunyu77/.test(omdomin)){
var list=conts[i].playurls;}
else if(/paofan/.test(omdomin)){
var list=JSON.parse(html).data.info.videos;}
else if(/kyikan|ysftv/.test(omdomin)){
var list=conts[i].split('#');}
else if(/bde4/.test(omdomin)){
var list=parseDomForArray(conts[i],'body&&.secondary');}
else if(/contentURL/.test(html)&&/movievod/.test(html)){
var list=conts[i].match(/name=\"copy_sel[\s\S]*?<span>/g);}
else if(/fed-btns-info/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&.fed-btns-info');}
else if(/<li>/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&li');}
else{
var list=parseDomForArray(conts[i],'body&&a:not(a:contains(展开全部))');
}

if (getVar('hikermsort','1')=='1') {
list=list;
  }else{
list=list.reverse();
  }
  
 //需要显示线路名的
if(tabs){
 if(/<rss/.test(html)&&/<video>/.test(html)){
  	var tabt=parseDomForHtml(tabs[i], "body&&dd&&flag");}
 else if(/<\/h3>/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], "h3&&Text");}
 else if(/albumSelect|stui-vodlist__head/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], "span&&Text");}
 else if(/pull-left/.test(tabs[i])){
  	var tabt=parseDomForHtml(tabs[i], ".pull-left&&Text");}
 else if(/aidi/.test(omdomin)){
  	var tabt=parseDomForHtml(tabs[i], "a&&alt");}
 else if(/kunyu77/.test(omdomin)){
  	var tabt=tabs[i].episode+'';}
  else if(/paofan/.test(omdomin)){
  	var tabt=tabs[i].name+'';}
  else if(/kyikan|ysftv/.test(omdomin)){
  	var tabt=tabs[i];}
else{
  	var tabt=parseDomForHtml(tabs[i], "body&&Text");}
  
//显示线路
		d.push({
			title:tabt+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
			url:"hiker://empty@lazyRule=.js:putVar('hikermsort', getVar('hikermsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
			col_type: 'text_1'
		});}
else if(conts){
		d.push({
			title:'在线播放'+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
			url:"hiker://empty@lazyRule=.js:putVar('hikermsort', getVar('hikermsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
			col_type: 'text_1'
		});}
		
//选集
var link={};
for(var j = 0; j<list.length; j++){
//选集标题与链接
if(/<rss/.test(html)&&/<video>/.test(html)){
if(list[j].split('$')[1]!=null){link=list[j].split('$')[1].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
else{link=list[j].split('$')[0].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
if(tabt=='789pan'){link='http://101.37.76.245:8183/79/?url='+link}
if(/languang/.test(tabt)){link='https://j.languang.wfss100.com/?url='+link}
if(/bbkdj/.test(omdomin)){link='http://jx.yparse.com/index.php?url='+link}
if(/rrm3u8/.test(omdomin)){link='https://www.meiju11.com/ckplayerx/m3u8.php?url='+link}

var title=(list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0]);}

else if(/kunyu77/.test(omdomin)){
var title=tabs[i].episode+'-'+list[j].playfrom;
var link=list[j].playurl;}
else if(/paofan/.test(omdomin)){
var title=list[j].title;
var cid=list[j].chapter_id;
var vid=list[j].video_id;
var sid=tabs[i].source_id;
var link='{"packageName":"com.meibai.yinzuan","token":"","marketChannel":"huawei","chapter_id":"'+cid+'","appId":"1","sysVer":"7.1.2","osType":"2","source_id":"'+sid+'","debug":"1","ver":"5.1.7","video_id":"'+vid+'","product":"1"}';}
else if(/leduozy/.test(omdomin)){
var title=list[j].split('$')[0].split('value="')[1];
var link=list[j].split('$')[1].split('"')[0];}
else if(/kyikan|ysftv/.test(omdomin)){
var title=list[j].split('$')[0];
var link='hiker://empty#'+tabt+'#'+list[j].split('$')[1];}
else if(/cqzyw/.test(omdomin)){
var title=list[j].split('copy_text\">')[1].split('<')[0];
var link=list[j].split('$')[1].split('<')[0].replace('amp;','');}
else if(/521x5/.test(omdomin)){
var title=parseDomForHtml(list[j], "a&&Text");
var link=omdomin+parseDomForHtml(list[j],"a&&href").replace('/play/','/player/');}
else{
var title=parseDomForHtml(list[j], "a&&Text");
var link=parseDom(list[j], "a&&href");}

//setError(MY_URL);
//显示选集
if(title.length>=11){var clt='text_center_1';}else if(title.length>=6){var clt='text_2';}else{var clt='text_3'}
			d.push({
				title:title,
                url:'hiker://empty$$$'+omdomin+'$$$'+link+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/xyq/hikermovie.js'));omlazy();`,
                col_type: clt
			});
   }//for j
}//for i
}

//厂长显示下载线路
if(/qianoo/.test(omdomin)){
if(html.indexOf('ypbt_down_list')!=-1){
d.push({
			title: '下载地址',
			col_type: 'text_1'
		});
var dnli = parseDomForArray(html, '.ypbt_down_list&&li');

for (var i = 0; i < dnli.length; i++) {
    d.push({
        title: parseDomForHtml(dnli[i], "a&&title"),
        col_type: 'text_center_1',
        url: parseDom(dnli[i], "a&&href")
    });
  }
 }
}//end 下载

res.data=d;setHomeResult(res);
}

//动态解析部分函数
function omlazy() {
var myurl=input.split('$$$')[1];
var srcurl=input.split('$$$')[2];
try{
//通用解析代码
//开始bt_token
function btoken(html){
if(!fetch("hiker://files/rules/xyq/token.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js",{});writeFile("hiker://files/rules/xyq/token.js",fileUrl);eval(fileUrl);}else{var fileUrl=fetch("hiker://files/rules/xyq/token.js",{});eval(fileUrl)};
var play=(tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl);
if(play.indexOf('titan.mgtv.com')!=-1){return play+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else{return play};}
//结束bt_token
//开始阿里
function alizy(srcurl){
var html=fetch('https://ssl.vip.cqzyw.net:11551/?url='+srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
if(/bt_token/.test(html)){
if(!fetch("hiker://files/rules/xyq/token.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js",{});writeFile("hiker://files/rules/xyq/token.js",fileUrl);eval(fileUrl);}else{var fileUrl=fetch("hiker://files/rules/xyq/token.js",{});eval(fileUrl)};
var play=(tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl);}
return 'x5Play://'+play
}
//结束阿里
//开始PAR
function parwix(html){
var dom=jiek.split('?')[0];
var aly=parseDomForHtml(html,"body&&iframe&&src");
var html=fetch(dom+aly,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
if(/vod_\w{10}/.test(html)){
if(!fetch("hiker://files/rules/xyq/vodkey.js",{})){var fileUrl=fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/vodkey.js",{});writeFile("hiker://files/rules/xyq/vodkey.js",fileUrl);eval(fileUrl);}else{var fileUrl=fetch("hiker://files/rules/xyq/vodkey.js",{});eval(fileUrl)};if(fro=='bilibili'){return vodurl+';{Referer@https://www.bilibili.com&&User-Agent@Mozilla/5.0}';}else if(fro=='mgtv'){return vodurl+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else{return vodurl};}else{
return html.match(/var url = \"(.*?)\"/)[1]
}
}
//结束PAR
//资源网yun
function zywyun(srcurl){
var link=srcurl.split("/share")[0];
var fc=fetch(srcurl,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
var play=(main.indexOf("http")!=-1?main:link+main);}
else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
var play=(main.indexOf("http")!=-1?main:link+main)};
return play;
}
//结束资源网yun
//结束通用解析

//资源网yun链
if(srcurl.indexOf("135-cdn")!=-1){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}else if(srcurl.indexOf("/share/")!=-1){
return zywyun(srcurl);
}
//77影视
else if(/kunyu77/.test(myurl)){

if(srcurl.indexOf('html')!=-1){
var jx='http://jx.quanmingjiexi.com/?url='+srcurl;
return 'x5WebView://'+(jx);}

else{
if(srcurl.indexOf('GetDownUrlDoc')!=-1){
var ul=JSON.parse(request(srcurl, {headers:{"Referer":"https://www.nfmovies.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0]+'#isVideo=true#';}else{return srcurl}}else if(srcurl.indexOf('GetDownUrlMu')!=-1){return srcurl+';{User-Agent@Lavf/57.83.100}'}
else{return srcurl}}
}
//泡饭APP
else if(/paofan/.test(myurl)){
var json=JSON.parse(fetch('http://www.paofan.live/video/parse', {headers:{'Content-Type':'application/json','User-Agent':'okhttp/4.1.0'},body:srcurl,method:'POST'}));
return json.data.url;
}
//秋霞
else if(/7xiady/.test(myurl)){
var phtml =request(srcurl,{});
var js = eval(parseDomForHtml(phtml,".stui-player__video&&script&&Html").replace(/player_.*?={/,'player_data={'));
var fro=player_data.from;var urll=player_data.url;
if(fro=='niux'){refreshX5WebView('');
var jiexi=fetch(myurl+'/jx.php?id='+urll,{headers:{"User-Agent":PC_UA,"Referer":myurl}});
var re=fetch(myurl+'/'+jiexi.match(/var u=\"(.*?)\"/)[1],{});
if(re=='error'){return 'toast://解析失败，该资源无播放地址。';}else{return re.match(/url: \"(.*?)\"/)[1]};}
else{var jk=request(myurl+'/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\"/)[1].split("'")[0];refreshX5WebView(jk+urll);return 'toast://切换选集成功，请等待加载播放框架。'}

}
//789盘
else if(/789pan/.test(myurl)){
var phtml=request(srcurl);
return JSON.parse(phtml).url
}
//阿里资源
else if(/alizy-/.test(srcurl)){
return alizy(srcurl);
}
//步步高资源
else if(/bbkdj/.test(myurl)){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}
//乐多资源网
else if(/leduozy/.test(myurl)){
var ldlink='https://api.leduotv.com/wp-api/glid.php?vid='+srcurl;
var pla=request(ldlink,{}).split("var url=\'")[1].split("\'")[0];
if(pla.indexOf("m3u8")!=-1){
return pla.split("=")[1];
}else{
return ldlink};
}
//解b64链接
else if(srcurl.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(srcurl.split("&")[0]));
}
//人人资源网
else if(/rrzyw/.test(myurl)){
var meiju=fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}
//去看吧
else if(/qkan8|5180s|huihev/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var urll=parseDomForHtml(phtml,'.fed-play-player&&iframe&&data-play');
if(/qkan8/.test(myurl)){urll=base64Decode(urll.slice(3))}
var pars=parseDom(phtml,'.fed-play-player&&iframe&&data-pars');
//直链
if(/.m3u8|.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){if(urll.indexOf('cqzyw')!=-1){var ul=JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true}));if(ul.statusCode=="302"){return ul.headers.location[0];}else{return urll};}else{return urll+'#isVideo=true#'};}
//全看
else if(/qkan8/.test(myurl)){if(urll.indexOf('http')!=-1){
if(urll.indexOf('html')!=-1){
var html=fetch('https://www.cuan.la/m3u8.php?url='+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
eval(fetch('https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js',{}));
return tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl;}else{return urll+'#isVideo=true#'};}
else{
var html=fetch(pars+urll,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
if(html.indexOf('purl')!=-1){
var kjjx=parseDomForHtml(html,'body&&Html').match(/var purl = \'(.*?)\'/)[1];
var html=fetch('https://qkan8.com'+kjjx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}})};
var vurl=html.indexOf('var vid')!=-1?html.match(/var vid=\"(.*?)\"/)[1]:html.match(/var url = \'(.*?)\'/)[1];return vurl;}
}
//80
else if(/5180s/.test(myurl)){
if(/html/.test(urll)){
return 'https://jx.m3u8.tv/jiexi/?url='+urll;}
else{return pars+urll}
}
else{return pars+urll}
}
//妮可
else if(/nicotv/.test(myurl)){
var phtml =request(srcurl,{});
eval(fetch(parseDom(phtml,".embed-responsive&&script&&src"),{}).split(';')[0]);
var pinh=fetch(cms_player.jiexi+encodeURIComponent(cms_player.url)+'&time='+cms_player.time+'&auth_key='+cms_player.auth_key,{});
var cc=fetch(parseDomForHtml(pinh,'body&&iframe&&src'),{headers:{"User-Agent":MOBILE_UA,"Referer":"http://jiexi.kingsnug.cn/"}});
return cc.match(/video src=\"(.*?)\"/)[1]
}
//素白白&厂长影视
else if(/subaibai|qianoo/.test(myurl)){
var phtml=parseDom(fetch(srcurl,{headers:{'User-Agent':'Windows'}}),"body&&script:not([src]),2&&Html");
eval(getCryptoJS());
var scrpt=phtml.match(/var.*?\)\);/g)[0];
eval(scrpt.replace(/md5/g,'CryptoJS').replace('eval','var data = '));
return data.match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace('https://wy','http://wy')+"#isVideo=true#"+';{Referer@'+myurl+'}';
}
//奈飞星
else if(/nfxhd/.test(myurl)){
var phtml=request(srcurl,{});
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll = player_data.url;
if(fro=='ppayun2'||fro=='tt10'){var play='https://wy.bigmao.top/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='gangtiexia'){var play='https://wy.bigmao.top/api/ShowVideoWy/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='docker'){var doclin='https://wy.bigmao.top/api/ShowVideoDoc/3bb24322f78b47dfb8723c13d46d45ee/'+urll;
var ul=JSON.parse(request(doclin, {headers:{"Referer":"https://www.nfxhd.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){var play=ul.headers.location[0];}else{var play=doclin;}
}
else if(fro=='bilibili'||urll.indexOf('html')!=-1){
var jxhtml=request('https://nfxhd.com/jx/analysis.php?v='+urll,{headers:{"Referer":"https://nfxhd.com"}});
var play=jxhtml.match(/var urls = \"(.*?)\"/)[1];
}
else{var play=urll}
if(fro=='ppayun2'||fro=='tt10'||fro=='gangtiexia'){
var mlki=parseDomForHtml(fetch(play,{}),"body&&#dplayer&&result");
var fileUrl ="https://gitee.com/lzk23559/rulehouse/raw/master/pako-min.js";
eval(fetch(fileUrl,{}));return realUrl;
}else{return play}
}
//真不卡影视
else if(/zhenbuka/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro=='niuxyun'){
var one=fetch('https://cq.mmiyue.com/jiekou/zbk-bkby/jx.php?id='+urll,{headers:{"Referer":"https://www.zhenbuka.com/"},method:"GET"}).match(/var u=\"(.*?)\"/)[1];
var tow=fetch('https://cq.mmiyue.com/jiekou/zbk-bkby/'+one,{headers:{"Referer":"https://www.zhenbuka.com/"},method:"GET"});
return tow.match(/url: \"(.*?)\"/)[1];}
else if(urll.indexOf('m3u8')!=-1){return urll;}
else{var jiek=fetch('https://www.zhenbuka.com/static/player/'+fro+'.js?v='+new Date().getTime()+'',{headers:{"User-Agent":MOBILE_UA}}).match(/src=\"(.*?)\"/)[1].split("'")[0];
refreshX5WebView(jiek+urll);return 'toast://切换选集成功，请等待加载播放框架。'}
}
//91美剧
else if(/mjtvs/.test(myurl)){
var phtml =request(srcurl);var scrpt =parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/base64decode/g,'base64Decode');eval(scrpt);
if(now.indexOf('http')!=-1){
return now;}
else{
var cod=request('https://www.mjtvs.com/js/player/'+pn+'.html',{}).match(/parent.now\+\'(.*?)\"/)[1];
var qq=fetch('https://oss.306kan.com/?url='+now+cod,{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.mjtvs.com'}});
var vkey=qq.match(/var vkey = \'(.*?)\'/)[1]+'&ip=192.168.0.109&dq=CHINA';
var jiek=qq.replace(/\/\*[\s\S]*?\*\//g,'').replace(/<!--[\s\S]*?-->/g,'').match(/post\([\"\'](.*?)[\"\']/)[1];
var play=fetch('https://oss.306kan.com/'+jiek, {headers:{'User-Agent':MOBILE_UA,'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},body:'vkey='+vkey,method:'POST'});
return JSON.parse(play).url;}
}
//阿房影视
else if(/bwl87/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro.indexOf('m3u8')!=-1||fro=='qie'){refreshX5WebView('');return urll;}
else if(fro=='vip'){refreshX5WebView('');return JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0","Referer":"https://bwl87.com"}, redirect:false, withHeaders:true})).headers.location[0];}
else if(fro=='xin'||fro=='ddyunp'){
return srcurl;}
else if(urll.indexOf('html')!=-1){refreshX5WebView('');
if(fro=='mgtv'){
var jx='https://www.mgtv.com.flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}
else{
var jx='https://flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]};
}
else if(fro.indexOf('age')!=-1){return urll;}
else{return refreshX5WebView(urll)}
}
//cokemv影视
else if(/cokemv/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"http://cokemv.cn"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=decodeURIComponent(base64Decode(player_data.url)).replace(/&.*/,'');
if(urll.indexOf('m3u8')!=-1){return urll;}
else if(fro=='age01'||fro=='age02'){return urll;}
else if(fro=='90mm'||fro=='xin'||fro=='cokeqie01'){return srcurl;}
else{return srcurl}
}
//奈菲影视
else if(/nfmovies/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":"Mozilla/5.0","Cookie":getVar('hikernfcookie')}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");eval(scrpt);
if(now.indexOf('http')!=-1){
 if(now.indexOf("/share/")!=-1){
 try{
var link=now.split("/share")[0];
var fc=fetch(now,{headers:{"User-Agent":"Mozilla/5.0"}}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];eval(mat);
return main.indexOf("http")!=-1?main:link+main;}
else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
return main.indexOf("http")!=-1?main:link+main}
 } catch(e) {
refreshX5WebView(now);return "toast://请等待加载选集！"};
 }//if /share/
else if(now.indexOf('GetDownUrlDoc')!=-1){
var ul=JSON.parse(request(now, {headers:{"Referer":"https://www.nfmovies.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0]+'#isVideo=true#'}else{return now}
}
else{return now}
}//if http
else{return srcurl}
}
//袋鼠电影
else if(/daishudy/.test(myurl)){
var phtml =request(srcurl,{});
var scrpt = parseDom(phtml,".hy-player&&script&&Html");eval(scrpt);

if(/daishudy/.test(myurl)){
if(pn=='alizy'){
return alizy(now);
}
else if(/.m3u8|.mp4|obj\/tos/.test(now)&&/http/.test(now)){return now;}
else{return now}
}//结束袋鼠
}
//4K鸭
else if(/yanetflix/.test(myurl)){
var phtml =fetch(srcurl.replace('/play/','/player/'),{headers:{"User-Agent":PC_UA,"Referer":"https://www.4kya.com/"}});
var scrpt = parseDomForHtml(phtml,"body&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);
var fro=player_data.from;var urll=unescape(player_data.url);
if(fro=='4kya'){return urll+';{Referer@https://m3u8.4kya.com/}';}else{return urll}
}
//骚火
else if(/saohuotv/.test(myurl)){
var phtml =fetch(srcurl,{headers:{'User-Agent':MOBILE_UA}});
var src = parseDomForHtml(phtml,"body&&iframe&&src");
var cc=parseDomForHtml(fetch(src,{}),'body&&script,0&&Html').split('endebug()\;')[1].split('var act')[0];
eval(cc);
var cs='url='+url+'&t='+t+'&key='+key+'&act=0';
var fc=fetch('http://play.hhplayer.com/hhjx/api.php',{headers:{'User-Agent':MOBILE_UA,'referer':'http://play.hhplayer.com/'},body:cs,method:'POST'});
var playlink=JSON.parse(fc).url;
return playlink.indexOf('http')!=-1?playlink:'http://play.hhplayer.com'+playlink
}
//扛把子
else if(/46nb/.test(myurl)){
var srclink =fetch(parseDom(fetch(srcurl,{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.46nb.com/'}}),".mplayer&&script&&src"),{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.46nb.com/'}});
if(srclink.indexOf('iframe')==-1){var cc=parseDomForHtml(srclink,'body&&video&&src');}else{var cc=parseDomForHtml(srclink,'body&&iframe&&src')}
/*代码开始-蛊惑解析*/
if(cc.indexOf('gg.79da')!=-1){
var jx=fetch(cc,{});
var tim=jx.match(/timestamp:(.*?)\,/)[1];
var sig=jx.match(/sign: \"(.*?)\"/)[1];
var eurl=encodeURIComponent(cc.split('v=')[1]);
var getip=fetch('https://ip.if.iqiyi.com/cityjson',{});
eval(getip);var ip=returnIpCity.data.ip;
var link='https://gg.79da.com/video.php?ip='+ip+'&timestamp='+tim+'&sign='+sig+'&v='+eurl+'&h5=1';
var play=fetch(link,{});
return JSON.parse(play).url;}
/*快快解析*/
else if(cc.indexOf('play.79da')!=-1){
var da = fetch(cc,{headers:{'Referer':'http://www.46nb.com/'}});
if(/api.php/.test(da)){
var purl=da.match(/\'url\':\'(.*?)\'/)[1];
var pref=da.match(/\'referer\':\'(.*?)\'/)[1];
var ptim=da.match(/\'time\':\'(.*?)\'/)[1];
var ptyp=da.match(/\'type\':\'(.*?)\'/)[1];
var poth=base64Encode(cc.split('url=')[1]);
var pinh=('url='+purl+'&referer='+pref+'&ref=1&time='+ptim+'&type='+ptyp+'&other='+poth+'&ios=0');
var json=fetch('https://play.79da.com/api.php', {headers:{'x-requested-with':'XMLHttpRequest','Origin':'https://play.79da.com'},body:pinh,method:'POST'});
return JSON.parse(json).url;}else{return da.match(/var vid=\"(.*?)\"/)[1]};}
/*huagu解析*/
else if(cc.indexOf('new.79da')!=-1){
var cs='v='+cc.split('url=')[1];
var json=fetch('https://new.79da.com/api.php', {headers:{'x-requested-with':'XMLHttpRequest','Origin':'https://new.79da.com'},body:cs,method:'POST'});
return JSON.parse(json).url;}
/*不是上面的解析就打开链接*/
else{return cc.indexOf('godsong')!=-1?cc+'#.mp4':cc}
}
//肖先生&干饭&回响&淘淘&大师兄&BD电影&思古&爱迪&极品&播王&迪迪&九州&饭团
else if(/syg520|ganfantv|hxys|jisuyswang|tv.ci|bddysf|siguyy|aidi|jpysvip|bowang|4ytv|unss|fantuan|klysw|zhaikanys|nkdyw|juhaokan|vdxj|kanju77|o8tv|jushetv|dtjos|dikotv|mjhd/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
//var scrpt = parseDomForHtml(phtml,".leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script&&Html").replace(/player_.*?={/,'player_data={');
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;var nxt=player_data.url_next;
if(urll.substring(0,2)=='JT'){urll=unescape(base64Decode(urll));nxt=unescape(base64Decode(nxt));}
else if(urll.substring(0,1)=='%'){urll=unescape(urll);nxt=unescape(nxt);}
//打开直链
if(/.m3u8|.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){return urll+'#isVideo=true#';}
//阿里资源
else if(/alizy-/.test(urll)){
return alizy(urll);}
//爱迪
else if(/aidi/.test(urll)&&/93eS5/.test(urll)){
var durl =urll.split('date=')[1];var qz = durl.substr(0, 20);
var jm = '';
for (let i=0; i< 20; i++) {if(i%2== 0){jm += qz[i]}}
var b64u= (jm + durl.substr(20)).replace(/O0O0O/g, '=').replace(/o000o/g,'+');
var purl = base64Decode(b64u);
if(/mlkioiy|bigmao/.test(purl)){
if(/VideoDoc/.test(purl)){
var ul=JSON.parse(request(purl, {headers:{"Referer":srcurl}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0];}else{return purl;};}
else if(/ShowVideo/.test(purl)){
var mlki=parseDomForHtml(fetch(purl,{}),"body&&#dplayer&&result");
//setError(mlki);
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(request(fileUrl,{}));
return realUrl;
}else{
return purl+"#isVideo=true#"};
 }
}
//加自带接口
else{
var jconf = parseDom(phtml,".leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script,1&&src");
var jso=request(jconf,{}).match(/player_list=(.*?),MacPlayerConfig/)[1];
eval("json="+jso);
var jiek=eval("json['"+fro+"'].parse");
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
//setError(jiek);

//璇玑
if(/vdxj/.test(myurl)&&/php?/.test(jiek)){
var json=fetch(jiek+urll+"&next="+nxt,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
return JSON.parse(json).url;
}

//干饭
if(/ganfan/.test(myurl)&&/html/.test(urll)){var html=request('https://jx.zui.cm/?url='+urll,{});}
else{var html=fetch(jiek+urll+"&next="+nxt,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});}
//setError(html);
if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis/.test(html)){
return parwix(html);
}//结束PAR
else if(/llqplayer/.test(html)){return 'x5WebView://'+(jiek+urll+"&next="+nxt);}
else if(/jhplayer/.test(html)&&/jianghu\/js\/setting/.test(html)){return html.match(/\"url\": \"(.*?)\"/)[1];}
else if(/var urls/.test(html)){return html.match(/urls = \"(.*?)\"/)[1]}
//其它打开自带解析页面
else{
return (jiek+urll+"&next="+nxt)}
}//结束加接口
}
//墨鱼&孤单&TVB云播&追剧
else if(/moyuy|gudanys|hktvyb|zju8|aiyy|dianyingim|xiaopao/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
//var scrpt = parseDomForHtml(phtml,".dt-info-header-wap||.leo-player||.embed-responsive||.stui-player__video||.myui-player__video||.myui-player__item||#bofang_box||.player-box-main&&script&&Html").replace(/player_.*?={/,'player_data={');
var scrpt=phtml.match(/var player_.*?\}/)[0].replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;var nxt=player_data.url_next;
if(urll.substring(0,2)=='JT'){urll=unescape(base64Decode(urll));nxt=unescape(base64Decode(nxt));}
else if(urll.substring(0,1)=='%'){urll=unescape(urll);nxt=unescape(nxt);}
//直链
if(/.m3u8|.mp4|obj\/tos/.test(urll)&&/http/.test(urll)){if(urll.indexOf('cqzyw')!=-1){var ul=JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withHeaders:true}));if(ul.statusCode=="302"){return ul.headers.location[0];}else{return urll};}else{return urll+'#isVideo=true#'};}
//阿里资源
else if(/alizy-/.test(urll)){
return alizy(urll);}
//TVB云播直链
else if(/hktvyb/.test(myurl)&&/hkm3u8/.test(fro)){return srcurl;}
else{
var jiek=request(myurl+'/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\"/)[1].split("'")[0];
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
//setError(jiek+urll);

if(/sxmj/.test(jiek)){
var html=request(parseDomForHtml(html, "body&&iframe&&src"),{});}
else{
var html=fetch(jiek+urll+"&next="+nxt,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});}
//setError(htl);
if(/bt_token/.test(html)){
return btoken(html);}
//结束bt_token
//开始PAR
else if(/my-loading/.test(html)&&/analysis/.test(html)){
return parwix(html);
}//结束PAR
else if(/hanmiys/.test(html)&&/m3u8/.test(html)){return myurl+html.match(/\"url\": \"(.*?)\"/)[1]}
else if(/llqplayer/.test(html)){return 'x5WebView://'+(jiek+urll+"&next="+nxt);}
else if(/jhplayer/.test(html)&&/.m3u8/.test(html)&&/iframe/.test(html)){var ifsrc=parseDomForHtml(html,"body&&iframe&&src");
return ifsrc.split('?v=')[1];
}
else if(/var urls/.test(html)){return html.match(/urls = \"(.*?)\"/)[1]}
//其它打开自带解析页面
else{
return (jiek+urll+"&next="+nxt)}
}
}
//南瓜
else if(/nangua/.test(myurl)){
var phtml =request(srcurl,{});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");
eval(scrpt);var urll=zanpiancms_player.apiurl+zanpiancms_player.url;return urll
}
//闪电&80影视
else if(/ak1080|80ysm/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var urll=parseDomForHtml(phtml,'.mo-play-load&&data-play');
if(/ak1080|80ysm/.test(myurl)){urll=base64Decode(urll.slice(3))}
var jiek=parseDomForHtml(phtml,'.mo-play-load&&data-parse');
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){return urll;}//结束直链
else if(/ak1080/.test(myurl)){return srcurl;}//结束ak1080
else if(/80ysm/.test(myurl)){
if(/80ysm/.test(jiek)){
var lg=request(jiek+urll,{});
return lg.match(/vodurl = \'(.*?)\'/)[1];}
else if(/pw\/dp/.test(jiek)){
var html=request(jiek+urll,{});
if(/my-loading/.test(html)&&/analysis/.test(html)){
var dom=jiek.split('?')[0];
var aly=parseDomForHtml(html,"body&&iframe&&src");
var html=fetch(dom+aly,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
return html.match(/var urls = \"(.*?)\"/)[1];}
}else{
return (jiek+urll)}
 }//结束80ysm
}
//auete
else if(/auete/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var scrpt = parseDomForHtml(phtml,"#player||#video&&script&&Html").replace(/base64decode/g,"base64Decode");
eval(scrpt);var urll=now;var fro=pn;
if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){return urll;}
else{
var jiek=request(myurl+'/js/player/'+pn+'.html',{}).match(/src=\"(.*?)\'/)[1];
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
return (jiek+now)
 }
}
//蓝光资源
else if(/wfss100/.test(myurl)){
var phtml =request(srcurl,{});
var ifsrc=srcurl.split('/?url=')[0]+parseDomForHtml(phtml,"body&&iframe&&src");
var ifsrct=ifsrc.split('?url=')[0]+parseDomForHtml(request(ifsrc,{}),"body&&iframe&&src");
var urll=request(ifsrct,{}).match(/vodurl = \'(.*?)\'/)[1];
return urll
}
//看一看&影视饭
else if(/kyikan|ysftv/.test(myurl)){
var fro=srcurl.split('#')[1];
var urll=srcurl.split('#')[2];
var pars=fetch(myurl+'/player/'+fro+'.js',{});
if(/apiurl/.test(pars)){
var apiurl=pars.match(/apiurl = \'(.*?)\'/)[1];
pars=pars.replace("'+apiurl+'",apiurl).replace("'+MacPlayer.PlayUrl+'",urll);
var jiex=parseDom(pars,'iframe&&src');}
else{
pars=pars.replace("'+MacPlayer.PlayUrl+'",urll);
var jiex=parseDom(pars,'iframe&&src');
}
if(/kyikan/.test(myurl)){
var phtml=fetch(jiex,{headers:{"User-Agent":MOBILE_UA,"Referer":myurl}});
if(/fuck_you/.test(phtml)){
var pdata=phtml.match(/data = \"(.*?)\"/)[1];
eval(getCryptoJS());
//以下代码由努力大佬提供解码支持
var keya=new Date().getTime().toString();
var keyb=keya.substr(0x0,0x7)+'00000KONG';
Wt = CryptoJS.enc.Utf8.parse(keyb);
Qt = CryptoJS.enc.Utf8.parse("erkongkkjfipatdv");
function Decrypt(word) {
    var w = word;
    var decrypted = CryptoJS.AES.decrypt(w, Wt,
        {
            iv: Qt,
            padding: CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
};
var purl=Decrypt(base64Decode(pdata));
if(purl.substring(0,4)=='http'){return purl;}
else{return 'https://php.playerla.com/erkong/'+purl};
}
else if(/erkong|obj\/tos/.test(jiex)){var purl=phtml.match(/url: \'(.*?)\'/)[1];if(/mgtv/.test(urll)){return purl+'#isVideo=true#'+';{Referer@'+urll+'&&User-Agent@Mozilla/5.0}';}else{return purl+'#isVideo=true#'};}
else if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){
refreshX5WebView('');return urll;}
else{return 'x5WebView://'+(jiex)};
}//结束看一看
else if(/ysftv/.test(myurl)){
if(/.m3u8|.mp4/.test(urll)&&/http/.test(urll)){
refreshX5WebView('');return urll;}
else{
return 'x5WebView://'+jiex};
 }//结束影视饭
}
//冷月影视
else if(/521x5/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document"}});
var scrpt = parseDomForHtml(phtml,"body&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=decodeURIComponent(base64Decode(player_data.url));
var jconf = parseDom(phtml,"body&&script,1&&src");
var jso=request(jconf,{}).match(/player_list=(.*?),MacPlayerConfig/)[1];
eval("json="+jso);
var jiek=eval("json['"+fro+"'].parse");
if(jiek!=''){
 if(jiek.substring(0,4)=='http'){jiek=jiek;}
else if(jiek.substring(0,2)=='\/\/'){jiek='https:'+jiek;}
else{jiek=myurl+jiek}
}
return jiek+urll
}

//打开源链接
else{return srcurl}
}catch(e){return srcurl}
}


//预处理代码
function hikerpre(){
	try{
if(!getVar('hikersbbmfwaf')){
putVar('hikersbbmfwaf','1');
request('https://www.subaibai.com/mfwaf-reset',{header:{'Referer':'https://www.subaibai.com'}});}

if(!getVar('hikernfcookie')){
var nfcookie = JSON.parse(fetchCookie('https://www.nfmovies.com/search.php',{headers:{'User-Agent':'Mozilla/5.0'}})).join(';');
putVar('hikernfcookie',nfcookie)}

}catch(e){}
}