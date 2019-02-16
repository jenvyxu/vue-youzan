import './search.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'
import mixin from 'js/mixin.js'

let {keyword,id}=qs.parse(location.search.substr(1))

new Vue({
  el:'.container',
  data:{
    searchList:null,
    show:false,
  },
  methods:{
    getsearchList(){
      axios.post(url.searchList,{keyword,id}).then(res=>{
        this.searchList=res.data.lists
      })
    },
    move() {
      if(window.scrollY > 100) {
        this.show = true
      } else {
        this.show = false
      }
    },
    toTop(){
      Velocity(document.body, "scroll", { duration: 1000 })
    }
  },
  created(){
    this.getsearchList()
  },
  mixins:[mixin]
})