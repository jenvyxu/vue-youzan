//与后台对接
let url={
  hotLists:'/index/hotLists',
  banner:'/index/banner',
  topLists:'/category/topLists',
  subLists:'/category/subLists',
  rank:'/category/rank',
  searchList:'/search/list',
  details:'/goods/details',
  deal:'/goods/deal'

}
//开发环境和线上环境的切换

//eolinker
let host="https://mockapi.eolinker.com/GYx5mS96d079826f9913e75ceb3606e774a72480c695c48"
//easy-mock
//let host="https://www.easy-mock.com/mock/5c516eba7bd67d354475c823"
for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key]=host+url[key]
  }
}

export default url