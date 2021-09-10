<template>
  <section class="contact_text">
    <h2 class="contact_text__title">We are here for you</h2>
    <p class="contact_text__description">
      At Luxury Hotels, we take our customers seriously. Do you have any
      enquiries, compaints or requests, please forward it to our support desk
      and we will get back to you as soon as possible.
    </p>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "ContactText",

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".contact_text", { delay: 250 });
    },
  },
};
</script>

<style lang="scss">
.contact_text {
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .contact_text__title {
    font-family: $garamond;
    font-weight: 700;
    font-size: 32px;
    color: $blueZodiac;
    text-transform: uppercase;
  }
  .contact_text__description {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: $blueZodiac;
  }
}

@media only screen and (max-width: 965px) {
  .contact_text {
    .contact_text__title,
    .contact_text__description {
      text-align: center;
    }
  }
}
</style>
