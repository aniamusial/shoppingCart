<template>
<div id="navMenuWrapper">
    <el-menu :default-active="activeIndex" 
    theme="light"
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect" 
    >
        <el-menu-item id= "logo" index="0">
            <logo></logo>
        </el-menu-item>
        <el-menu-item index="1">Buy</el-menu-item>
        <el-submenu index="2">
	    <template slot="title">About us</template>
	    <el-menu-item index="2-1">Our mission</el-menu-item>
	    <el-menu-item index="2-2">Shipping</el-menu-item>
    </el-submenu>
    </el-menu>
</div>
</template>

<style>

.el-menu-item, .el-submenu {
    font-family: Arial, Helvetica, sans-serif;
}


</style>

<script>

import Logo from "./Logo"

export default {
    components: {
        Logo
    },
    data() {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>