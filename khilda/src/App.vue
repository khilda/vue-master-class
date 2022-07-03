<template>
  <main id="app" class="wrap">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "@/assets/scss/base/_reset.scss";
@import "@/assets/scss/base/_base.scss";
</style>
