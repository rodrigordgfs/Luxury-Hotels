<template>
  <div class="contact__header">
    <h2 class="contact__header_text">Contact-Us</h2>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "ContactHeader",

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
      }).reveal(".contact__header_text", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.contact__header {
  width: 100%;
  height: 300px;
  background: #14274a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .contact__header_text {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    padding-top: 40px;
  }
}
</style>
