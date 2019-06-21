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
    computed:{
        allSelected:{
            get(){
                if(this.lists&&this.lists.length){
                    return this.lists.every(shop=>{
                        return shop.checked
                    })
                }

                return false
            },
            set(newVal){
                this.lists.forEach(shop=>{
                    shop.checked=newVal
                    shop.goodsList.forEach(good=>{
                        good.checked=newVal
                    })
                })

            }
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.post(url.cartLists).then(res=>{
                let lists=res.data.cartList
                lists.forEach(shop=>{
                    shop.checked=true
                    shop.goodsList.forEach(good=>{
                        good.checked=true
                    })
                })
                this.lists=lists //处理完lists再渲染页面，否则不能实现响应式
            })
        },
        selectGood(shop,good){
            good.checked=!good.checked
            shop.checked=shop.goodsList.every(good=>{
                return good.checked
            })
        },
        selectShop(shop){
            shop.checked=!shop.checked
            shop.goodsList.forEach(good=>{
                good.checked=shop.checked
            })
        },
        selectAll(){
            this.allSelected=!this.allSelected
            console.log(this.allSelected)
        }
    },
    mixins:[mixin]
})