<template>
	<el-row>
	  <el-col :span="12" v-for="(product) in products" :key="product.sku">
	    <el-card>
	    	<img :src="product.image[0]" class="image">
	        <span>{{ product.name }}</span>
	        <p class="price">{{ product.price }}</p>
	        <div class="bottom clearfix">
	        	<el-button type="info" @click='addToCart(product)'>Add to cart</el-button>
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

  .price {
    font-family: Arial, Helvetica, sans-serif;
  }

</style>

<script>
import {Shop} from '../Shop/shop.js'

export default {
    data() {
        return {
           products: Shop.$data.products 
        };
    },
    methods: {
        addToCart(product) {
            Shop.addToCart(product)
        }
    }
}
</script>



