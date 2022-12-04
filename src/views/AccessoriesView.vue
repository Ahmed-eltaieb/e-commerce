<template>
  <main class="container flex flex-wrap justify-around p-2 pb-4 gap-10">
    <ProductComp
      v-for="(accessory, index) in this.accessories"
      :key="index"
      :product="accessory"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductComp from "@/components/ProductComp.vue";
export default {
  name: "AccessoriesView",
  components: {
    ProductComp,
  },
  data() {
    return {
      accessories: this.data.accessories,
    };
  },
  props: {
    data: Object,
  },
  mounted() {},
};
</script>
