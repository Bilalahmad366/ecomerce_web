<template>
  <header>
    <h2 class="text-2xl font-bold mb-6 text-center m-8 my-24">Sign-Up</h2>
    <div class="flec flex-col m-auto sm:w-96 w-64">
      <form @submit.prevent="validateForm">
        <div class="mb-6">
          <label for="username" class="block text-gray-700 font-bold mb-2"
            >Email :</label
          >
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
            class="form-input w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2"
            >Password :</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="form-input w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <input
          class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        />
      </form>
      <div class="flex items-center justify-end">
        <span class="text-left m-4">Go to</span
        ><RouterLink class="text-blue-700 font-bold" to="login"
          >login</RouterLink
        >
      </div>
    </div>
  </header>
</template>
<script >
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async validateForm() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
      });
      if (result.status == 201) {
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        swal("Sign-Up","", "success");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>