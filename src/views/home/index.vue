<template>
  <div class="home">
    <information :cover="cover" />
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

  data() {
    return {
      cover: "https://i.imgur.com/jIJvKJz.png",
    };
  },

  metaInfo: {
    title: "Luxury Hotels - Home",
    meta: [
      {
        name: "description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      {
        property: "og:title",
        content: "Luxury Hotels - Home",
      },
      { property: "og:site_name", content: "Luxury Hotels" },
      {
        property: "og:description",
        content:
          "Book your stay and enjoy Luxury redefined at the most affordable rates.",
      },
      { property: "og:type", content: "hotel" },
      { property: "og:url", content: window.location.href },
      { property: "og:image", content: "https://i.imgur.com/jIJvKJz.png" },
    ],
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
