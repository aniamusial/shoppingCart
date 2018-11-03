<template>
  <div id="app">
    <nav-bar></nav-bar>
    <h1>What's your style?</h1>
    <products-list></products-list>
    <el-row :gutter="20">
      <el-col :span="12">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Shop from "./Shop/shop.js"

export default {
  name: 'app'
}
</script>
