<template>
  <div id="app">
    <div sticky-container>
      <div v-sticky sticky-offset="offset" sticky-side="top">
        <nav-bar></nav-bar>
      </div>
    <el-row :gutter="20">
      <el-col>
        <h1>What's your style?</h1>
        <products-list></products-list>
      </el-col>
      <el-col :span="8">
        <cart></cart>
        <p><b>Total cost:</b> {{ totalCost }}</p>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<style>

h1 {
  font-family: Arial, Helvetica, sans-serif;
  color:  #444;
  display: block;
  margin: 5% 20%;
  border: solid 3px #E1AD9D;
  padding: 5%;
}

p {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
}

</style>

<script>
import {Shop} from "./Shop/shop"

export default {
  name: 'app',
   
  computed: {
    totalCost(){
      return Shop.totalCost
    }
  } 
}
</script>
