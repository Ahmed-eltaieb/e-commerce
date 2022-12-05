<template>
  <main class="flex flex-wrap justify-around p-2 pb-4 gap-10">
    <ProductComp
      v-for="(chair, index) in this.chairs"
      :key="index"
      :product="chair"
      @cart="addToCart($event)"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import ProductComp from "@/components/ProductComp.vue";
export default {
  name: "ChairsView",
  components: {
    ProductComp,
  },
  data() {
    return {
      chairs: this.data.chairs,
    };
  },
  props: {
    data: Object,
  },
  mounted() {},
  methods: {
    addToCart(pro) {
      this.$emit("cart", pro);
    },
  },
};
</script>
