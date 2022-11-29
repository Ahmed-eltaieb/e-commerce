<template>
  <main>
    <header class="py-4 px-1 sm:px-2">
      <div
        class="container mx-auto flex gap-6 lg:gap-[20%] justify-between items-center"
      >
        <font-awesome-icon icon="fa-bars" class="sm:hidden text-xl" />
        <img src="./assets/logo.png" alt="logo" class="w-[150px]" />
        <input
          class="border-2 border-gray-500 p-2 rounded-lg grow hidden sm:inline-block text-center"
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
          class="container flex justify-around text-main border p-3 border-x-0"
        >
          <router-link class="py-1 px-2 rounded-sm" to="/">Home</router-link>
          <router-link class="py-1 px-2 rounded-sm" to="/">Builds</router-link>
          <router-link class="py-1 px-2 rounded-sm" to="/"
            >Monitors</router-link
          >
          <router-link class="py-1 px-2 rounded-sm" to="/"
            >Gaming-chairs</router-link
          >
          <router-link class="py-1 px-2 rounded-sm" to="/"
            >Accessories</router-link
          >
        </div>
      </nav>
    </header>

    <FooterComp></FooterComp>
  </main>
</template>
<script>
import FooterComp from "@/components/FooterComp.vue";
export default {
  components: {
    FooterComp,
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

    &.router-link-exact-active {
      // color: #42b983;
      background-color: #333;
      color: #fff;
    }
  }
}
</style>
