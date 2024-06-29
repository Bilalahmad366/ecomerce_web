
<template>

      
  <div v-if="showcart" class="cart  w-2/4 h-2/4 rounded ">
        <div  v-for="items in allcart" :key="items.id" class=" bg-white  rounded-lg shadow-md overflow-hidden border m-6">
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
  <header>
    <header>
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
              class="navigation links flex font-semibold items-center gap-11 mx-11"
            >
              <li v-if="cross" @:click="Cross" id="cross">
                <i class="fa-solid fa-circle-xmark"></i>
              </li>
              <li><RouterLink to="/">home</RouterLink></li>
              <li><RouterLink to="/">about</RouterLink></li>
              <li><RouterLink to="/">blog</RouterLink></li>
              <li><RouterLink to="/">contact us</RouterLink></li>
              <li><RouterLink to="/">dashboard</RouterLink></li>

              <li>
                <button  @:click="cart"
                  ><i class="fa-solid fa-cart-shopping"></i
                ></button>
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
    <div class="text-center font-bold my-4">
      <h1 class="font-bold text-2xl">All products</h1>

      <div class="allProducts flex flex-wrap justify-center my-4">
        <div
          v-for="items in filterlist"
          :key="items.id"
          class="catagory flex w-56 flex-col items-center m-3 rounded-xl"
        >
          <div class="catagoryImg">
            <img :src="items.images" alt="" />
          </div>
          <div class="title">
            <p class="text-sm font-semibold">{{ items.title }}</p>
          </div>
          <div class="price my-2">
            <span class="text-blue-600">{{ items.price }}</span>
          </div>

          <div class="btn">
            <button @:click="AddToCart">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  

  

</header>
  <foter />
</template>
    <script  >
import foter from "../components/footer.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    foter,
  },

  data() {
    return {

      allcart: {
        products: [],
      },
showcart:false,
      quantitiy:1,
      search: "",
      cross: true,
      mobilebar: true,
      list: [],
      imgurl: [],
      cartimg:[],
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
    async cart() {
      await axios
        .get("https://dummyjson.com/carts/1")
        .then((res) => {
          if (res.status == 200) {
            this.allcart = res.data.products;
            this.showcart=!this.showcart
            console.log(this.allcart);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

    AddToCart() {

      axios.post('https://dummyjson.com/carts/add', {
    userId:this.list[0].id,
    products: [
      {
        id: this.id,
        quantity:this.quantity
      }
    ]
  }).then((res=>{
        if(res.status==201){
          swal("cart add sucsesful")
          console.log(res)
        }
      })).catch((err)=>console.log("err",err)
      )
    },
    mobile() {
      this.mobilebar = !this.mobilebar;
    },
    Cross() {
      this.mobilebar = false;
    },
    logout() {
      swal("logout !!!");
      localStorage.clear();
      this.$router.push({ name: "welcome" });
    },
  // },
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
<style scoped >

.cart{
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
  font-family: "Playwrite SK", cursive;
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
    