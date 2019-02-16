//与后台对接
let url={
  hotLists:'/index/hotLists',
  banner:'/index/banner',
  topLists:'/category/topLists',
  subLists:'/category/subLists',
  rank:'/category/rank',
  searchList:'/search/list'

}
//开发环境和线上环境的切换
//let host=
//eolinker
//let host='http://mock.eolinker.com/A3s4BIEb3cd1095d5d9fd45a81ad657f2dbbf70bd145b4f?uri='

//easy-mock
let host="https://www.easy-mock.com/mock/5c516eba7bd67d354475c823"
for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key]=host+url[key]
  }
}

export default url