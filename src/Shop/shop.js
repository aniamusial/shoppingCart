import Vue from 'vue'
import products from "../products"

export const Shop = new Vue ({
    data() {
        return {
            products,
            cart: []
        };
    },
    computed: {
        totalCost() {
            return this.cart.reduce((sum, product) => {
                return sum + product.details.price * product.quantity
            },0)
        }
    },
    methods: {
        addToCart(product) {

            const productIndex = this.cart.findIndex(p => {
                return p.details.id === product.id 
            })

            if ( productIndex === -1) {
                this.cart.push ({
                    details: product, quantity: 1
                })     
            } else {
                this.cart[productIndex].quantity++;
            }
        }
    }
})