<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row :gutter="20">
      <el-col :span="12">
        <h1>What's your choice?</h1>
        <products-list></products-list>
      </el-col>
      <el-col :span="8">
        <h1>Your cart:</h1>
        <cart></cart>
        <p>Total cost:</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Shop} from "./Shop/shop"

export default {
  name: 'app'
}
</script>
