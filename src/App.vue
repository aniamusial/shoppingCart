<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row :gutter="20">
      <el-col :span="12">
        <h1>What's your style?</h1>
        <products-list></products-list>
      </el-col>
      <el-col :span="8">
        <cart></cart>
        <p><b>Total cost:</b> {{ totalCost }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<style>

h1 {
  font-family: Arial, Helvetica, sans-serif;
  color:  #444;
  display: block;
  align-self: center;
  margin: 10% 20%;
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
