<template>
  <div class="container">
    <section class="benefits">
      <h2 class="benefits__title">Facilities</h2>
      <p class="benefits__description">
        We want your stay at our lush hotel to be truly unforgettable. That is
        why we give special attention to all of your needs so that we can ensure
        an experience quite uniquw. Luxury hotels offers the perfect setting
        with stunning views for leisure and our modern luxury resort facilities
        will help you enjoy the best of all.
      </p>
      <div class="benefits__list">
        <benefit-card
          v-for="benefit in benefits"
          :key="benefit.title"
          :benefit="benefit"
        />
      </div>
      <testimonials />
    </section>
    <footer-app />
  </div>
</template>

<script>
import BenefitCard from "./BenefitCard.vue";
import FooterApp from "@/components/shared/FooterApp";
import Testimonials from "@/components/shared/Testimonials";
import ScrollReveal from "scrollreveal";

export default {
  name: "Benefits",

  components: {
    BenefitCard,
    Testimonials,
    FooterApp,
  },

  data() {
    return {
      benefits: [
        {
          title: "The Gym",
          image: "https://i.imgur.com/UaGZayg.png",
        },
        {
          title: "Poolside Bar",
          image: "https://i.imgur.com/aQQc28F.png",
        },
        {
          title: "The SPA",
          image: "https://i.imgur.com/LhxnkWS.png",
        },
        {
          title: "Swimming Pool",
          image: "https://i.imgur.com/YZHHLrZ.png",
        },
        {
          title: "Restaurant",
          image: "https://i.imgur.com/vSwv5Vw.png",
        },
        {
          title: "Laundry",
          image: "https://i.imgur.com/gVvQnUV.png",
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
      }).reveal(".benefits__title", { delay: 200 });

      ScrollReveal({
        ...options,
        origin: "bottom",
      }).reveal(".benefits__description", { delay: 250 });
    },
  },
};
</script>

<style lang="scss">
.benefits {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .benefits__title {
    padding-top: 50px;
    font-family: $garamond;
    color: $blueZodiac;
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
  }
  .benefits__description {
    font-family: $montserrat;
    color: $blueZodiac;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding: 30px 0 50px;
  }
  .benefits__list {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
}
</style>
