<template>
    <el-menu :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect" 
    background-color="#E1AD9D" 
    active-text-color="#fff" 
    text-color="#fff">
        <el-menu-item index="1">Buy</el-menu-item>
        <el-submenu index="2">
	    <template slot="title">About us</template>
	    <el-menu-item index="2-1">Our mission</el-menu-item>
	    <el-menu-item index="2-2">Shipping</el-menu-item>
    </el-submenu>
    </el-menu>
</template>

<script>

export default {
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