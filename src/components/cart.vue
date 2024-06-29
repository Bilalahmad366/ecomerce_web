<template>
    <div>
      
  <div  v-for="items in allcart" :key="items.id">
    <div class="bg-white rounded-lg shadow-md w-2/4 overflow-hidden border m-6">
      <div class="flex justify-center items-center">
        <div class="w-1/3">
          <img
            :src="items.thumbnail"
            alt="Product Image"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="w-2/3 p-4">
          <h2 class="text-xl text-center font-semibold mb-2">
            {{ items.title }}
          </h2>
          <div class="flex justify-between items-center">
            <div class="flex flex-col items-center mb-2">
              <div>
                <span class="text-gray-700">Quantity : </span>
                <span class="font-semibold">{{ items.quantity }}</span>
              </div>
              <div>
                <span class="text-gray-700">Price : </span>
                <span class="font-semibold">{{ items.price }}</span>
              </div>
              <div>
                <span class="text-gray-700">Discount : </span>
                <span class="font-semibold text-green-500">{{
                  items.discountPercentage
                }}</span>
              </div>
            </div>

            <div class="flex flex-col items-center mb-2">
              <div>
                <span class="text-gray-700">Total Discount : </span>
                <span class="font-semibold text-green-500">{{
                  items.discountedTotal
                }}</span>
              </div>
              <div>
                <span class="text-gray-700">Total Price : </span>
                <span class="font-semibold">{{ items.total }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      allcart: {
        products: [],
      },
    };
  },
  methods: {
    cart() {
      axios
        .get("https://dummyjson.com/carts/1")
        .then((res) => {
          if (res.status == 200) {
            this.allcart = res.data.products;
            console.log(this.allcart);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>