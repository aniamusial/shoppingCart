<template>
	<el-row>
	  <el-col :span="12" v-for="(product) in products" :key="product.sku">
	    <el-card>
	    	<img :src="product.images[0]" class="image">
	        <span>{{ product.name }}</span>
	        <span>{{ product.price | currency }}</span>
	        <div class="bottom clearfix">
	        	<el-button type="info" @click='addToCart(product)'>Add to cart</el-button>
	        </div>
	    </el-card>
	  </el-col>
	</el-row>
</template>

<style>

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>

<script>
import {Shop} from '../Shop/shop.js'

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



