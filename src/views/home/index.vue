<template>
  <div class="home">
    <information />
    <amenities />
    <testimonials />
    <footer-app />
  </div>
</template>

<script>
import Information from "@/components/home/Information";
import Amenities from "@/components/home/Amenities";
import FooterApp from "@/components/shared/FooterApp";
import Testimonials from "@/components/shared/Testimonials";

export default {
  name: "Home",

  components: {
    Information,
    Amenities,
    Testimonials,
    FooterApp,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
