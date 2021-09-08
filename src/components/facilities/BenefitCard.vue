<template>
  <div class="benefit-card">
    <div
      class="benefit-card__image"
      :style="{ backgroundImage: 'url(' + benefit.image + ')' }"
    />
    <div class="benefit-card__content">
      <h2>{{ benefit.title }}</h2>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "BenefitCard",

  props: {
    benefit: {
      type: Object,
      required: true,
    },
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
      }).reveal(".benefit-card", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.benefit-card {
  width: 100%;
  height: 500px;
  position: relative;
  .benefit-card__image {
    width: 100%;
    height: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .benefit-card__content {
    position: absolute;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 350px;
    h2 {
      padding: 10px 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 36px;
      color: #14274a;
    }
  }
}
</style>
