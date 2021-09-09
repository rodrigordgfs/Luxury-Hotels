<template>
  <div class="container">
    <section class="rooms_rates">
      <h2 class="rooms_rates__title">Rooms and Rates</h2>
      <p class="rooms_rates__description">
        Each of our bright, light-flooded rooms come with everything you could
        possibly need for a comfortable stay. And yes, comfort isn’t our only
        objective, we also value good design, sleek contemporary furnishing
        complemented by the rich tones of nature’s palette as visible from our
        rooms’ sea-view windows and terraces.
      </p>
      <div class="rooms_rate_list">
        <rooms-card
          class="rooms_rate_list_card"
          v-for="room in rooms"
          :key="room.title"
          :room="room"
        />
      </div>
      <testimonials />
    </section>
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "@/components/shared/FooterApp";
import Testimonials from "@/components/shared/Testimonials";
import RoomsCard from "./RoomsCard";
import ScrollReveal from "scrollreveal";

export default {
  name: "RoomsRates",

  components: {
    FooterApp,
    Testimonials,
    RoomsCard,
  },

  data() {
    return {
      rooms: [
        {
          title: "Single Room",
          images: [
            "https://i.imgur.com/cxwrmO1.png",
            "https://i.imgur.com/bQQYKN9.png",
            "https://i.imgur.com/zRypebq.png",
            "https://i.imgur.com/VotGUvQ.png",
            "https://i.imgur.com/g9hStR7.png",
          ],
          avgPrice: 147,
        },
        {
          title: "Double Room",
          images: [
            "https://i.imgur.com/9H0SuIm.jpg",
            "https://i.imgur.com/xqnubQy.jpg",
            "https://i.imgur.com/1X0VQPD.jpg",
            "https://i.imgur.com/wxWQmS3.jpg",
            "https://i.imgur.com/EmSnK1Z.jpg",
          ],
          avgPrice: 155,
        },
        {
          title: "Twin Room",
          images: [
            "https://i.imgur.com/MuGZw3R.png",
            "https://i.imgur.com/7fsR2Jm.png",
            "https://i.imgur.com/CH5wVGB.png",
            "https://i.imgur.com/jEahFVO.png",
            "https://i.imgur.com/9l7vKs0.png",
          ],
          avgPrice: 186,
        },
      ],
    };
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      let options = {
        distance: "50px",
        duration: 2000,
        reset: true,
      };

      ScrollReveal({
        ...options,
        origin: "top",
      }).reveal(".rooms_rates__title", { delay: 200 });

      ScrollReveal({
        ...options,
        origin: "left",
      }).reveal(".rooms_rates__description", { delay: 250 });

      ScrollReveal({
        ...options,
        origin: "top",
      }).reveal(".rooms_rate_list_card", { delay: 300 });
    },
  },
};
</script>

<style lang="scss">
.rooms_rates {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .rooms_rates__title {
    padding-top: 50px;
    font-family: "Cormorant Garamond", sans-serif;
    color: #14274a;
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
  }
  .rooms_rates__description {
    font-family: "Montserrat", sans-serif;
    color: #14274a;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding: 30px 0 50px;
  }
  .rooms_rate_list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
