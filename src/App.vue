<template>
  <main class="relative">
    <header class="py-4 px-2 sm:px-2">
      <div
        class="container mx-auto flex gap-6 lg:gap-[20%] justify-between items-center"
      >
        <font-awesome-icon
          icon="fa-bars"
          class="md:hidden cursor-pointer text-3xl"
          @click="navBar"
        />
        <img src="./assets/logo.png" alt="logo" class="w-[150px]" />
        <input
          class="border-2 border-gray-500 p-2 rounded-lg grow hidden md:inline-block text-center"
          type="search"
          id="search"
          placeholder="what are you looking for?"
        />

        <div class="cart cursor-pointer" @click="openCart">
          <font-awesome-icon icon="fa-cart-shopping" class="mr-2 text-lg" />
          <strong class="text-red-500"
            >EGP <span>{{ this.totalPrice }}</span></strong
          >
        </div>
      </div>
      <nav>
        <div
          class="flex flex-col md:flex-row md:justify-around text-main md:border md:h-fit p-3 md:border-x-0 md:relative nav"
        >
          <font-awesome-icon
            icon=" fa-circle-xmark"
            class="text-white text-5xl cursor-pointer md:hidden"
            @click="navBar"
          />
          <router-link @click="navBar" class="py-1 px-2 rounded-sm" to="/">
            Home</router-link
          >
          <router-link
            @click="navBar"
            class="py-1 px-2 rounded-sm"
            to="/laptops"
            >Laptops</router-link
          >
          <router-link
            @click="navBar"
            class="py-1 px-2 rounded-sm"
            to="/monitors"
            >Monitors</router-link
          >
          <router-link @click="navBar" class="py-1 px-2 rounded-sm" to="/chairs"
            >Gaming-chairs</router-link
          >
          <router-link
            @click="navBar"
            class="py-1 px-2 rounded-sm"
            to="/accessories"
            >Accessories</router-link
          >
        </div>
      </nav>
    </header>
    <router-view :data="this.mainData" @cart="addItemToCart($event)" />
    <div
      class="cart-section w-screen sm:w-[70vw] md:w-80 fixed right-0 top-0 bg-white z-20 h-screen p-3 transition-all translate-x-full flex flex-col justify-between"
    >
      <div
        class="cart-heaader flex justify-between text-lg items-center pb-2 border-b-2"
      >
        <font-awesome-icon icon="fa-cart-shopping" class="text-lg" />
        <h4>shopping cart</h4>
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="text-2xl text-red-600 cursor-pointer"
          @click="closeCart"
        />
      </div>

      <div class="cart-body overflow-auto">
        <div
          v-for="(element, index) in this.cart"
          :key="index"
          class="cart-element border pt-6 pb-2 px-1 mb-3 relative"
        >
          <div class="flex items-center gap-1 justify-between">
            <img :src="require(`${element.img}`)" alt="" class="max-w-[80px]" />
            <h4>{{ element.name }}</h4>
          </div>
          <font-awesome-icon
            icon=" fa-circle-xmark"
            class="text-xl text-gray-500 cursor-pointer absolute top-1 right-1"
            @click="removeItemFromCart(index)"
          />
          <span
            class="block w-[50%] py-2 px-3 border mx-auto font-bold text-red-600 text-center rounded-sm"
            >EGP {{ element.price }}</span
          >
        </div>
      </div>
      <div class="cart-footer">
        <div class="total flex justify-between my-1">
          <span class="font-bold text-lg">Total</span>
          <span class="font-bold text-lg text-red-600"
            >EGP {{ this.totalPrice }}</span
          >
        </div>
        <button class="w-full py-2 bg-red-600 text-white">
          Checkout <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
    <div
      class="overlay top-0 left-0 fixed h-screen w-screen bg-black opacity-50 z-10 hidden"
      @click="closeCart"
    ></div>
    <FooterComp></FooterComp>
  </main>
</template>
<script>
import FooterComp from "@/components/FooterComp.vue";
import data from "./data.json";
export default {
  components: {
    FooterComp,
  },
  data() {
    return {
      showNav: false,
      mainData: data,
      cart: [],
      totalPrice: 0,
    };
  },
  methods: {
    navBar() {
      document.querySelector(".nav").classList.toggle("open");
    },
    openCart() {
      document
        .querySelector(".cart-section")
        .classList.remove("translate-x-full");
      document.querySelector(".overlay").classList.remove("hidden");
    },
    closeCart() {
      document.querySelector(".cart-section").classList.add("translate-x-full");
      document.querySelector(".overlay").classList.add("hidden");
    },
    addItemToCart(item) {
      this.cart.push(item);
      this.openCart();
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.calcTotal();
    },
    removeItemFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.calcTotal();
    },
    calcTotal() {
      this.totalPrice = 0;
      this.cart.forEach((ele) => {
        this.totalPrice += ele.netPrice;
      });
    },
  },
  mounted() {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      this.cart = cartItems;
      this.calcTotal();
    }
  },
};
</script>
<style lang="scss">
// @mixin breakpoints($point) {
//   @if $point == mobile {
//     @media (max-width: 767px) {
//       @content;
//     }
//   } @else if $point == small {
//     @media (min-width: 768px) and (max-width: 991px) {
//       @content;
//     }
//   } @else if $point == medium {
//     @media (min-width: 992px) and (max-width: 1199px) {
//       @content;
//     }
//   } @else if $point == large {
//     @media (min-width: 1200px) {
//       @content;
//     }
//   }
// }

.nav {
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    gap: 10%;
    align-items: center;
    justify-content: center;
    transition: 0.7s;
    transform: translatey(-100%);
  }
}
.open {
  transform: translatey(0%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  color: #2c3e50;
  //   #search::after {
  //     content: " search";

  //   }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;

    color: #2c3e50;

    @media (max-width: 767px) {
      color: #fff;
    }
    &.router-link-exact-active {
      // color: #42b983;
      background-color: #333;
      color: #fff;
      @media (max-width: 767px) {
        color: indianred;
      }
    }
  }
}
</style>
