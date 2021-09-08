<template>
  <div class="facilities">
    <information cover="https://i.imgur.com/X6ISzbl.png" />
  </div>
</template>

<script>
import Information from "@/components/shared/Information";

export default {
  name: "Facilities",

  components: {
    Information,
  },
};
</script>

<style lang="scss">
.facilities {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
