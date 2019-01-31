import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'

new Vue({
  el:'#app',
  data:{
    topLists:null,
    topIndex:0
  },
  methods:{
    getTopList(){
      axios.post(url.topLists).then(res=>{
        this.topLists=res.data.lists
      })
    },
    getSubList(id,index){
      this.topIndex=index
    }
  },
  created(){
    this.getTopList()
  },
  components:{
    Foot
  }
})

