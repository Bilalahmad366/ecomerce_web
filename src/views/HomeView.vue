
<template>
  <header >
    <div>
      <nav>
        <ul class="nav flex justify-between py-2 m-0 px-3">
          <div class="input flex items-center rounded py-1 sm:px-4 px-2">
            <input
              v-model="search"
              class="capitalize w-96 bg-transparent outline-none font-medium"
              type="text"
              placeholder="Search items "
            />
            <div class="icon mx-1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div 
            v-if="mobilebar"
            class="navigation links flex  lg:font-semibold items-center gap-11 mx-11"
          >
            <li v-if="cross" @:click="Cross" id="cross">
              <i class="fa-solid fa-circle-xmark"></i>
            </li>
            <li><RouterLink to="/home">home</RouterLink></li>
            <li><RouterLink to="/about">about</RouterLink></li>
            <li><RouterLink to="/dashboard">dashboard</RouterLink></li>

            <li>
              <router-link   to="/cart" >
                <i class="fa-solid fa-cart-shopping"></i>
              </router-link>
            </li>

            <div class="flex flex-col justify-center">
              <li>
                <routerLink
                  class="logout lg:absolute lg:right-16 lg:top-3"
                  @:click="logout" 
                  ><i class="fa-solid fa-right-from-bracket text-xl"></i
                ></routerLink>
              </li>
            </div>
          </div>
          <div>
            <li id="mobile" @:click="mobile">
              <i class="fa-solid fa-bars text-white"></i>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>


<div class="home-img  flex justify-around ">
  <div class="flex flex-col text-white items-center p-6 justify-center ">
    <div class=" lg:text-7xl  sm:text-3xl text-2xl flex flex-col items-center"><span >SUMMER </span><span>COLLECTION</span></div>
    <span class="text-xl my-1">upto 40% off</span>
    <button class=" rounded-full px-3 py-2 my-2 bg-blue-800 outline-none text-sm text-white">Shop Now</button>
  </div>
  <img 
   class="w-auto object-cover h-60 sm:h-96 lg:h-lvh bg-transparent " src="https://www.pngplay.com/wp-content/uploads/8/Women-Model-Transparent-PNG.png" alt="" >
</div>
  <header>
    <div class="text-center font-bold my-4">
      <h1 class="font-bold text-2xl">All products</h1>

      <div class="allProducts flex flex-wrap justify-center my-4">
        <div
         @:click="display(items.id)"
          v-for="items in filterlist"
          :key="items.id"
          class="catagory  flex w-56 flex-col items-center m-3 rounded-xl"
        >
          <div class="catagoryImg">
            <img :src="items.images" alt="" />
          </div>
          <div class="title">
            <p class="text-sm font-semibold"> {{ items.title }}</p>
          </div>
          <div class="price my-2">
            <span class="text-blue-600">{{ items.price }}</span>
          </div>

          <div class="btn">
            <button @:click="addTocart(items.id,items.price,items.title,items.images,items.discountPercentage)" >add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <foter />
</template>
    <script  >
import { computed } from "vue";
import foter from "../components/footer.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    foter,
  },

  data() {
    return {

     products:[
     ],
      search: "",
      cross: true,
      mobilebar: true,
      list: [],
    };
  },

  computed: {
    filterlist: function () {
      return this.list.filter((list) => {
        return list.description.match(this.search);
      });
    },
  },
  methods: {
    async addTocart(itemId,price,title,images,discountPercentage){
    await axios.post('http://localhost:3000/cart',{
      id:"itemId",
      price: "price",
      title: "title",
        quantity: "1",
        thumbnail: images,
        discountPercentage:discountPercentage,

    })
    swal("item added to cart","", "success");

    },


    logout() {
    swal("logout succesful");
    localStorage.clear();
    this.$router.push({ name: "/welcome" });
  },
  mobile() {
    this.mobilebar = !this.mobilebar;
  },
  Cross() {
    this.mobilebar = false;
  },
  },
  async mounted() {
    let result = await axios.get("https://dummyjson.com/products");
    this.list = result.data.products;
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "welcome" });
    }
  },
};
</script>
<style  scoped>
.home-img{
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.cart {
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 10;
  overflow-y: scroll;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.input {
  background: #e1ebee;
}
.input:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.catagory {
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 10px 40px 0px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  overflow: hidden;
  background: #e1ebee;
}
.catagory:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.catagoryImg {
  width: 100%;
  height: 60%;
  display: flex;

  align-items: center;
}
.catagoryImg img {
  height: 100%;
  width: 100%;
}

body {
  background-color: #add8e6;
}
ul {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.navigation {
  font-family: "Playwrite SK", ;
  color: #fff;
}
.navigation li:hover {
  color: #add8e6;
}
#mobile {
  display: none;
}
#cross {
  display: none;
}
.btn button {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 40px;
}
@media (max-width: 900px) {
  #cross {
    display: flex;
    position: absolute;
    top: 10px;
    left: 5px;
    font-size: 20px;
  }
  .input input {
    width: 8rem;
  }
  #mobile {
    display: flex;
    position: absolute;
    z-index: 10;
    right: 20px;
    font-size: 20px;
  }

  .navigation {
    z-index: 10;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    right: 0px;
    top: 0px;
    flex-direction: column;
    position: fixed;
    align-items: center;
    padding-top: 60px;
    display: flex;
    height: 100%;
    width: 40%;
    margin: 2px;
    gap: 9px;
    box-shadow: 0cm;
  }
}
</style>
    