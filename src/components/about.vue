<template>
    <body class="bg-gray-100 text-gray-800">
        <nav class=" p-4 flex items-center justify-between">
    <div class="flex items-center">
      <router-link to="/about" class="text-white ml-2">Ecomerce-web</router-link>
    </div>
    <div>
      <router-link to="/home"  class="text-white px-4 py-2 rounded-md hover:bg-blue-600">home</router-link>
    </div>
  </nav>

    <!-- About Us Section -->
    <div class="container mx-auto mt-8 mb-8">
        <div class="bg-white p-8 rounded shadow">
            <h1 class="text-3xl font-bold mb-4">About Our Website</h1>
            <p class="mb-4">Welcome to our e-commerce platform! We're dedicated to providing you with a seamless shopping experience and a wide range of products to choose from. Whether you're browsing for the latest tech gadgets, trendy fashion pieces, or everyday essentials, we've got you covered.</p>
            
            <h2 class="text-2xl font-bold mb-4">E-commerce Web Details</h2>
            <ul class="list-disc pl-8">
                <li class="mb-2">Product Variety: We curate a diverse selection of products, ranging from electronics and home appliances to fashion and beauty items.</li>
                <li class="mb-2">User Experience: Our intuitive design and navigation make it easy for you to explore and find products that match your interests and needs.</li>
                <li class="mb-2">Security: We prioritize the security of your personal information and transactions, ensuring a safe shopping environment.</li>
                <li class="mb-2">Customer Support: Our dedicated support team is available to assist you with any inquiries or issues you may have during your shopping experience.</li>
                <li class="mb-2">Shipping and Returns: We offer reliable shipping options and a hassle-free return policy to guarantee your satisfaction with every purchase.</li>
            </ul>
            
            <p class="mt-4 ">Thank you for visiting us at <span class="font-bold">Ecomerce-web</span>. We're excited to have you explore our offerings and look forward to serving you in your online shopping journey!</p>
        </div>
    </div>
    <foter />
</body>
</template>
<script>
import foter from './footer.vue'
export default{

    components: {
        foter,
    },
}
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
</style>
