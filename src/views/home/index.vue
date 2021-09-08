<template>
  <div class="home">
    <information cover="https://i.imgur.com/jIJvKJz.png" />
    <amenities />
    <testimonials />
    <footer-app />
  </div>
</template>

<script>
import Information from "@/components/shared/Information";
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
