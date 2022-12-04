<template>
  <main class="container flex flex-wrap justify-around p-2 pb-4 gap-10">
    <ProductComp
      v-for="(laptop, index) in this.laptops"
      :key="index"
      :product="laptop"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductComp from "@/components/ProductComp.vue";
export default {
  name: "LaptopsView",
  components: {
    ProductComp,
  },
  data() {
    return {
      laptops: this.data.laptops,
    };
  },
  props: {
    data: Object,
  },
  mounted() {},
};
</script>
