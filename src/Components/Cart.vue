<template>
    <el-table :data="cart"
    stripe
    style="width: 100%">
    <el-table-column
	    prop="name"
		label="Name">
    </el-table-column>
    <el-table-column
        prop="price"
        label="Price"
        :formatter="formatter">
    </el-table-column>
    <el-table-column
        prop="quantity"
        label="Quantity"
        :formatter="formatter">
    </el-table-column>
    
</el-table>
</template>

<script>

import {Shop} from "../Shop/shop"

    export default {
        data() {
            return Shop.$data.cart
        }
    }

</script>
