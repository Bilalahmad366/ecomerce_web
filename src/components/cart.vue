
  
<template>
   <nav class=" p-4 flex items-center justify-between">
    <div class="flex items-center">
      <router-link to="/cart" class="text-white ml-2">My carts</router-link>
    </div>
    <div>
      <router-link to="/home"  class="text-white px-4 py-2 rounded-md hover:bg-blue-600">home</router-link>
    </div>
  </nav>

<div v-if="empty"  class="empty flex justify-center items-center p-20  m-0">
  <div class="img bg-transparent flex gap-36 items-center"  >
    <img class="bg-transparent h-48" src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="">
    <h1 class="text-4xl  font-semibold">your cart is empty</h1>
  </div>
</div>

  <div
    class=" margin flex items-center w-full flex-col"
    v-for="product in products"
    :key="product.id" 
  >
    <div  class="bg-white rounded-lg shadow-md w-2/3 overflow-hidden border m-1">
      <div class="flex justify-center items-">
        <div class="img w-1/3">
          <img
            :src="product.thumbnail"
            alt="Product Image"
            class="h-40 w-40 object-cover"
          />
        </div>
        <div class="w-2/3 p-4 ">
          <div class="flex  flex-col justify-between items-center">
            <h2 class="text-xl font-semibold mb-2">
              {{ product.title }}
            </h2>
            <div class="flex flex-col items-center justify-between mb-2">
              <div>
                <span class="text-gray-700">Quantity : </span>
                <span class="font-semibold">{{ product.quantity }}</span>
              </div>
              <div>
                <span class="text-gray-700">Price : </span>
                <span class="font-semibold">{{ product.price }}</span>
              </div>
              <div>
                <span class="text-gray-700">Discount : </span>
                <span class="font-semibold text-green-500">{{
                  product.discountPercentage
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <button @:click="deletecart(product.id)" class="px-1 outline-none border-none font-semibold "><i class="fa-solid fa-trash "></i></button>
        </div>
      </div>
    </div>
  </div>
  <foter/>
</template>

<script>
import axios from "axios";
import foter from "./footer.vue"
export default {
  components: {
    foter,
  },
  data() {
    return {
      products: [],
      empty:false
    };
  },
  async mounted() {
    // http://localhost:3000/cart
    let result = await axios.get("http://localhost:3000/cart");
    this.products = result.data;

    if(this.products.length==0){
      this.empty=true;}
  },
  methods:{
     deletecart(productId){
      axios.delete(`http://localhost:3000/cart/${productId}`)
     this.$router.go();
     swal("item deleted from cart","", "success");
    }
  }
};
</script>
<style scoped>
nav{
background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.empty{
  background: #e1ebee;
}


</style>