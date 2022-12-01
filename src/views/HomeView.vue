<template>
  <div class="home">
    <!-- <img id="img" alt="Vue logo" :src="require(`${this.pic.poster}`)" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- {{ this.pic }} -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  props: {
    data: String,
  },
  mounted() {},
};
</script>
