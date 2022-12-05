<template>
  <div
    class="card flex flex-col gap-1 max-w-[250px] max-h-[600px] p-2 cursor-pointer hover:shadow-lg justify-between mt-2"
  >
    <h3 class="text-lg">
      {{ product.name }}
    </h3>
    <img :src="require(`${product.img}`)" alt="" class="max-h-[50%]" />
    <span class="text-red-700 text-lg font-bold">EGP {{ product.price }}</span>
    <button class="border font-bold text-red-700 mt-2" @click="addToCart()">
      Add to cart
      <font-awesome-icon icon=" fa-cart-arrow-down" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductComp",
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$emit("cart", this.product);
    },
  },
};
</script>
