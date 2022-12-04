<template>
  <main>
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

        <div class="cart">
          <font-awesome-icon icon="fa-cart-shopping" class="mr-2 text-lg" />
          <strong class="text-red-500">EGP <span>0</span></strong>
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
          <router-link class="py-1 px-2 rounded-sm" to="/"> Home</router-link>
          <router-link class="py-1 px-2 rounded-sm" to="/laptops"
            >Laptops</router-link
          >
          <router-link class="py-1 px-2 rounded-sm" to="/monitors"
            >Monitors</router-link
          >
          <router-link class="py-1 px-2 rounded-sm" to="/chairs"
            >Gaming-chairs</router-link
          >
          <router-link class="py-1 px-2 rounded-sm" to="/accessories"
            >Accessories</router-link
          >
        </div>
      </nav>
    </header>
    <router-view :data="this.mainData" />
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
    };
  },
  methods: {
    navBar() {
      document.querySelector(".nav").classList.toggle("open");
    },
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
