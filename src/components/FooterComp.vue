<template>
  <section class="text-footer mt-3">
    <div
      class="services flex flex-col sm:flex-row justify-around flex-wrap bg-lighted py-11 text-footer"
    >
      <div class="text-center text-lg mb-4">
        <font-awesome-icon
          icon="fa-truck-fast"
          class="p-5 bg-darked rounded-full text-2xl"
        />
        <h3 class="font-bold">All Over Egypt</h3>
        <p class="text-gray-500">fast Shipping Service</p>
      </div>
      <div class="text-center text-lg mb-4">
        <font-awesome-icon
          icon="fa-file-invoice-dollar"
          class="p-5 bg-darked rounded-full text-2xl"
        />
        <h3 class="font-bold">Valid and Legal Invoices</h3>
        <p class="text-gray-500">All Prices include 14% VAT</p>
      </div>
      <div class="text-center text-lg mb-4">
        <font-awesome-icon
          icon=" fa-wallet"
          class="p-5 bg-darked rounded-full text-2xl"
        />
        <h3 class="font-bold">Payment Option Variety</h3>
        <p class="text-gray-500">Credit Cards / ValU / COD</p>
      </div>
    </div>

    <div
      class="contact p-7 flex justify-around text-lg gap-2 flex-wrap bg-black text-white"
    >
      <div class="flex flex-col gap-2">
        <img src="../assets/darken-logo.png" alt="logo" class="w-[200px]" />
        <span class="text-lg">
          <font-awesome-icon icon="fa-phone" />
          01281564370
        </span>
        <span class="text-lg">
          <font-awesome-icon icon="fa-envelope" />
          eltaieb@store.com
        </span>
      </div>
      <div class="follow flex flex-col gap-2">
        <h3 class="font-bold capitalize">follow</h3>
        <div class="social flex gap-2">
          <font-awesome-icon
            icon="fa-solid fa-share-nodes"
            class="text-[#cf1a13] p-5 rounded-full bg-white"
          />
          <font-awesome-icon
            icon=" fa-thumbs-up"
            class="text-[#cf1a13] p-5 rounded-full bg-white"
          />
        </div>
        <h3 class="font-bold">Working Hours</h3>
        <p class="w-[calc(100%-30px)]">
          Eltaieb store operates everyday from 10 AM to 6 PM, excluding official
          holidays
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
