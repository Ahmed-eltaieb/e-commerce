<template>
  <div class="card flex flex-col gap-1 max-w-[250px] p-1 hover:border">
    <h3 class="text-lg">
      BenQ GW2780 27 inch IPS 1080P 60Hz 5ms With Built-in Speak
    </h3>
    <img :src="require(`${product.img}`)" alt="" />
    <span class="text-red-700 text-lg font-bold">EGP 6,110</span>
    <button class="border font-bold text-red-700 mt-2">
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
};
</script>
