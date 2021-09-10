<template>
  <section class="amenities">
    <h2 class="amenities__title">
      All our room types are including complementary breakfast
    </h2>
    <amenitie-card
      v-for="amenitie in amenities"
      :key="amenitie.title"
      :amenitie="amenitie"
    />
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";
import AmenitieCard from "./AmenitiesCard";

export default {
  name: "Amenities",

  components: {
    AmenitieCard,
  },

  data() {
    return {
      amenities: [
        {
          title: "Luxury redefined",
          description:
            "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
          image:
            "https://info.ehl.edu/hubfs/Imported_Blog_Media/Hotel-design.jpg",
        },
        {
          title: "Leave your worries in the sand",
          description:
            "We love life at the beach. Being closeto the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d2/a0/22/beach-hotel-sunset.jpg?w=900&h=-1&s=1",
        },
      ],
    };
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".amenities__title", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.amenities {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .amenities__title {
    color: $blueZodiac;
    font-family: $montserrat;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 40px 0;
    padding: 0 10px;
  }
}

@media only screen and (max-width: 700px) {
  .amenities {
    .amenities__title {
      margin-top: 70px;
    }
  }
}
</style>
