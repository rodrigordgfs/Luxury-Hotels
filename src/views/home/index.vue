<template>
  <div class="home">
    <information />
    <amenities />
    <footer-app />
  </div>
</template>

<script>
import Information from "@/components/home/Information";
import Amenities from "@/components/home/Amenities";
import FooterApp from "@/components/shared/FooterApp";

export default {
  name: "Home",

  components: {
    Information,
    Amenities,
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
