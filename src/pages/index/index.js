import 'css/common.css'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swiper.vue'

Vue.use(InfiniteScroll);

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum:1,
    loading:false,
    allLoaded:false,
    pageSize:6,
    bannerLists:null
  },
  created() {
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists() {
      if(this.allLoaded)return//判断所有数据是否在加载完毕，如果是则退出请求
      this.loading=true //当你请求来时，不允许再次请求
      axios.get(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists=res.data.lists
        if(curLists.length<this.pageSize){//判断所有数据是否加载完了
          this.allLoaded=true
        }
        if(this.lists){
          this.lists=this.lists.concat(curLists)
        }else{
          //第一次请求数据
          this.lists = curLists
        }
        this.loading=false //请求结束后才能进行下一次请求
        this.pageNum++
      })
    },
    getBanner(){
      axios.get(url.banner).then(res=>{
        this.bannerLists=res.data.lists
      })
    }
  },
  components:{
    Foot,
    Swipe
  }


})


