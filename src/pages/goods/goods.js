import './goods_base.css'
import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Swipe from 'components/Swiper.vue'

let {id}=qs.parse(location.search.substr(1))

let detailTab=['商品详情','本店成交']

new Vue({
  el:'#app',
  data:{
    details:null,
    detailTab,
    tabIndex:0,
    dealLists:null,
    bannerLists:null,
    skyType:1
  },
  created(){
    this.getDetails()
  },
  methods:{
    getDetails(){
      axios.post(url.details,{id}).then(res=>{
        this.details=res.data.data
        this.bannerLists=[] //传过来的数据不一致，需要作出修改
        this.details.imgs.forEach(item=> {
          this.bannerLists.push({
            clickUrl:'',
            image:item
          })
        });
      })

    },
    changeTab(index){
      this.tabIndex=index
      if(index===1){
        this.getDeal()
      }
    },
    getDeal(){
      axios.post(url.deal,{id}).then(res=>{
        this.dealLists=res.data.data.lists
      })
    }
  },
  components:{
    Swipe
  },
  mixins:[mixin]
})
