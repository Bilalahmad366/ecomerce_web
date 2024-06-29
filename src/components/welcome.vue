<template>
    <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div>
            <span class="text-white text-xl font-bold">E-commerce Store</span>
          </div>
          <div>
            <ul class="flex space-x-4">
              <li><RouterLink to="/login" class="text-white hover:text-gray-300">login</RouterLink></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <div class="container mx-auto mt-8">


        <h1 class="text-4xl font-bold text-center">Welcome to Our E-commerce Store</h1>
        <p class="text-lg text-center mt-4">Explore our wide range of products!</p>
      </div>
    </div>
    <!-- <foter /> -->
  </template>
  
  <script>
import foter from './footer.vue'
  export default {
    name:"welcome",
components:{
    foter
},
mounted(){
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "welcome" });
    }
}
  };
  </script>
  
  <style scoped>
  </style>
  