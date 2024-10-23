app.component('product-display', {
    setup(){
        const inStock = ref(10)
        const inStockComputed = computed(() => {
            if(inStock > 10 ) return "In Stock"
            else if (inStock <= 10 && inStock >= 1) return "Almost Out Of Stock"
            else return "Out of Stock"
        })

        const image = ref("./assets/images/t-shirt-blue.png");
        const changeImage = (variantImage) => {
            image.value = variantImage;
        }

        const product_title = 'T-Shirt';
        const brand = "Marconyu"; 
        const titleWithBrand = computed(()=>{
            return product_title + " " + brand;
        });

        return {
          product_title,
          image,
          img_product: "T-Shirt",
          inStock,
          details: ['50% Cotton', '30% Polyester', '20% Wool'],
          variants: [{id:1, color:'blue', image: "./assets/images/t-shirt-blue.png"},{id:2, color:'green', image:"./assets/images/t-shirt-green.png"}],
          changeImage,
          titleWithBrand,
          inStockComputed,
        }
    },
    template:
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :alt="img_product" srcset="">
                </div>
                <div class="product-info">
                    <h1>{{product_title}}</h1>
                    <p>{{inStockComputed}}</p>
                    <ul>
                        <li v-for='detail in details'>
                            {{detail}}
                        </li>
                    </ul>
                    <div 
                    v-for="variant in variants"  
                    :key="variant.id"
                    @mouseover="changeImage(variant.image)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                    </div>
                    <button class="button" :class="{ disabledButton: inStock < 1 }" @click="$emit('add-to-cart')" :disabled="inStock < 1">Add to Cart</button>
                </div>
            </div>
        </div>`
})