<template>
  <div class="home">
    <img id="img" alt="Vue logo" :src="require(`${this.pic.poster}`)" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- {{ this.pic }} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import monitors from "./monitors.json";
// import monitors from "../assets/sections/monitors/monitors.json";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      pic: monitors,
    };
  },
  mounted() {
    //  this.pic = monitors.poster;
    // window.img.src = require(`${monitors.poster}`);

    console.log(this.pic);
  },
};
</script>
