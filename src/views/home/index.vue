<template>
  <div class="home">
    <information />
    <amenities />
  </div>
</template>

<script>
import Information from "@/components/home/Information";
import Amenities from "@/components/home/Amenities";

export default {
  name: "Home",

  components: {
    Information,
    Amenities,
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
