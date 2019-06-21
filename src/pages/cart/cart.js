import './cart.css'
import './cart_trade.css'
import './cart_base.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
    el:'.container',
    data:{
        lists:null
    },
    computed:{},
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.post(url.cartLists).then(res=>{
                this.lists=res.data.cartList
                console.log(this.lists)
            })
        }
    },
    mixins:[mixin]
})