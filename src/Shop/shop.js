import Vue from 'vue'

export const Shop = new Vue ({
    data() {
        return {
            products,
            cart: []
        }
    },
    methods: {
        addToCart(product) {
            this.cart.push({
                details: product, quantity: 1
            })
        }
    }
})