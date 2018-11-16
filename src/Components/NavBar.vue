<template>
<div id="navMenuWrapper">
    <el-menu :default-active="activeIndex" 
    theme="light"
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect" 
    :router="true"
    >
    <el-menu-item id= "logo" index="/" :route="{ name: 'Root'}">
        <logo></logo>
    </el-menu-item>
    <el-menu-item id="menuItem" index="/buy" :route="{ name: 'Buy'}" >Buy</el-menu-item>
    <el-menu-item id="menuItem" index="/about" :route="{ name: 'About' }">About us</el-menu-item>
    <el-button type="info" icon="el-icon-star-off" @click="showCart" circle></el-button>
    </el-menu>
    <div class="cartIcon" v-show="showCart">
        <cart z-index="10" position="absolute"></cart>
    </div>
</div>
</template>

<style>

#menuItem.el-menu-item {
    border-bottom-color: #E1AD9D; 
}

.el-menu-item, .el-submenu {
    font-family: Arial, Helvetica, sans-serif;
}

#logo.el-menu-item {
    border-bottom-color: transparent;
}

.el-button {
    margin-left: 70%;
    margin-top: 0.5em;
    font-size: 1em;

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