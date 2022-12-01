<template>
  <main class="flex flex-wrap justify-around p-2 pb-4 gap-10">
    <ProductComp
      v-for="(monitor, index) in this.monitors"
      :key="index"
      :product="monitor"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductComp from "@/components/ProductComp.vue";
export default {
  name: "HomeView",
  components: {
    ProductComp,
  },
  data() {
    return {
      monitors: this.data.monitors,
    };
  },
  props: {
    data: Object,
  },
  mounted() {
    console.log(this.monitors);
  },
};
</script>
