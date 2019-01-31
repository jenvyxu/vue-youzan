//与后台对接
let url={
  hotLists:'/index/hotLists'

}
//开发环境和线上环境的切换
//let host=
let host='http://mock.eolinker.com/dI3Jqk69b4bf5cdb7381fe38284a05d44d0631cf253c095?uri='

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key]=host+url[key]
  }
}

export default url