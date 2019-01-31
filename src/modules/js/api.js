//与后台对接
let url={
  hotLists:'/index/hotLists',
  //http://mock.eolinker.com/A3s4BIEb3cd1095d5d9fd45a81ad657f2dbbf70bd145b4f?uri=/index/hotLists
  banner:'/index/banner'
  //http://mock.eolinker.com/A3s4BIEb3cd1095d5d9fd45a81ad657f2dbbf70bd145b4f?uri=/index/banner

}
//开发环境和线上环境的切换
//let host=
let host='http://mock.eolinker.com/A3s4BIEb3cd1095d5d9fd45a81ad657f2dbbf70bd145b4f?uri='

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key]=host+url[key]
  }
}

export default url