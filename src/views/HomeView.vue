<template>
  <div class="home">
    <section class="container">
      <div
        class="flex justify-around md:justify-between items-center border-0 border-b-2 text-[#252a31]"
      >
        <h3 class="text-xl font-bold py-3 border-0 border-b-2 border-red-500">
          Monitors
        </h3>
        <router-link to="/monitors"
          >see all
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </router-link>
      </div>
      <div class="flex flex-wrap justify-around p-2 pb-4 gap-10">
        <ProductComp
          v-for="(monitor, index) in this.monitorsToView"
          :key="index"
          :product="monitor"
        />
      </div>
    </section>
    <section class="container">
      <div
        class="flex justify-around md:justify-between items-center border-0 border-b-2 text-[#252a31]"
      >
        <h3 class="text-xl font-bold py-3 border-0 border-b-2 border-red-500">
          Laptops
        </h3>
        <router-link to="/laptops"
          >see all
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </router-link>
      </div>
      <div class="flex flex-wrap justify-around p-2 pb-4 gap-10">
        <ProductComp
          v-for="(laptop, index) in this.laptopsToView"
          :key="index"
          :product="laptop"
        />
      </div>
    </section>
    <section class="container">
      <div
        class="flex justify-around md:justify-between items-center border-0 border-b-2 text-[#252a31]"
      >
        <h3 class="text-xl font-bold py-3 border-0 border-b-2 border-red-500">
          Gaming-chairs
        </h3>
        <router-link to="/chairs"
          >see all
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </router-link>
      </div>
      <div class="flex flex-wrap justify-around p-2 pb-4 gap-10">
        <ProductComp
          v-for="(chair, index) in this.chairsToView"
          :key="index"
          :product="chair"
        />
      </div>
    </section>
    <section class="container">
      <div
        class="flex justify-around md:justify-between items-center border-0 border-b-2 text-[#252a31]"
      >
        <h3 class="text-xl font-bold py-3 border-0 border-b-2 border-red-500">
          Accessories
        </h3>
        <router-link to="/accessories"
          >see all
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </router-link>
      </div>
      <div class="flex flex-wrap justify-around p-2 pb-4 gap-10">
        <ProductComp
          v-for="(accessory, index) in this.accessoriesToView"
          :key="index"
          :product="accessory"
        />
      </div>
    </section>
  </div>
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
      monitorsToView: this.data.monitors.slice(0, 4),
      laptopsToView: this.data.laptops.slice(0, 4),
      chairsToView: this.data.chairs.slice(0, 4),
      accessoriesToView: this.data.accessories.slice(0, 4),
    };
  },
  props: {
    data: Object,
  },
  mounted() {},
};
</script>
