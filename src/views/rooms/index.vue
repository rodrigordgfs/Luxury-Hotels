<template>
  <div class="rooms">
    <information :cover="cover" />
    <rooms-rates />
  </div>
</template>

<script>
import Information from "@/components/shared/Information";
import RoomsRates from "@/components/rooms/RoomsRates";

export default {
  name: "Rooms",

  components: {
    Information,
    RoomsRates,
  },

  data() {
    return {
      cover: "https://i.imgur.com/2RWg9G3.png",
    };
  },

  metaInfo: {
    title: "Luxury Hotels - Rooms",
    meta: [
      {
        name: "description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      {
        property: "og:title",
        content: "Luxury Hotels - Rooms",
      },
      { property: "og:site_name", content: "Luxury Hotels" },
      {
        property: "og:description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      { property: "og:type", content: "hotel" },
      { property: "og:url", content: window.location.href },
      { property: "og:image", content: "https://i.imgur.com/2RWg9G3.png" },
    ],
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
