<template>
  <div class="rooms">
    <information cover="https://i.imgur.com/2RWg9G3.png" />
  </div>
</template>

<script>
import Information from "@/components/shared/Information";

export default {
  name: "Rooms",

  components: {
    Information,
  },
};
</script>

<style lang="scss">
.rooms {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
