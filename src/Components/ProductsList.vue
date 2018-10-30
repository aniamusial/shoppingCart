<template>
    <el-row>
        <el-col :span="8" v-for="product in products" :key="product.id">
            <el-card :body-style="{ padding: '0px' }">
                <img src="product.image[0]" class="productImage">
                <div style="padding: 5%;">
                    <span>{{product.name}}</span>
                        <div class="bottom clearfix">
                            <el-button type="info" @click='addToCart(product)'>Add to cart</el-button>
                        </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style>
  .image {
    width: 100%;
    display: block;
  } 
</style>

<script>
import {Shop} from './Shop/shop.js'

export default {
    data() {
        return {
           products: Shop.data.products 
        };
    },
    methods: {
        addToCart() {
            Shop.addToCart(product)
        }
    }
}
</script>



