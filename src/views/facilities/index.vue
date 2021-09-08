<template>
  <div class="facilities">
    <information :cover="cover" />
    <benefits />
  </div>
</template>

<script>
import Information from "@/components/shared/Information";
import Benefits from "@/components/facilities/Benefits";

export default {
  name: "Facilities",

  components: {
    Information,
    Benefits,
  },

  data() {
    return {
      cover: "https://i.imgur.com/X6ISzbl.png",
    };
  },

  metaInfo: {
    title: "Luxury Hotels - Facilities",
    meta: [
      {
        name: "description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      {
        property: "og:title",
        content: "Luxury Hotels - Facilities",
      },
      { property: "og:site_name", content: "Luxury Hotels" },
      {
        property: "og:description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      { property: "og:type", content: "hotel" },
      { property: "og:url", content: window.location.href },
      { property: "og:image", content: "https://i.imgur.com/X6ISzbl.png" },
    ],
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
