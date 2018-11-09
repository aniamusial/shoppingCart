<template>
    <el-table id="cart" :data="cart"
    style="width: 100%">
    <el-table-column
	    prop="details.name"
		label="Name">
    </el-table-column>
    <el-table-column
        label="Price">
            <template scope='scope'>
				{{ scope.row.details.price }}
            </template>
    </el-table-column>
    <el-table-column
        prop="quantity"
        label="Quantity">
    </el-table-column>
</el-table>
</template>

<style>

.el-table {
    font-family: Arial, Helvetica, sans-serif;
    border: solid 3px #E1AD9D;
}
</style>

<script>

import {Shop} from "../Shop/shop"

    export default {
        computed: {
            cart() {
                return Shop.$data.cart
            }
        },
        methods: {
            addToCart(product) {
                Shop.addToCart(product)
            }
        }
    }

</script>
