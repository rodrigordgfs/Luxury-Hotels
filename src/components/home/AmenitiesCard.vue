<template>
  <div class="amenitie_card">
    <div class="amenitie_card__info">
      <h2 class="amenitie_card__info__title">{{ amenitie.title }}</h2>
      <p class="amenitie_card__info__description">{{ amenitie.description }}</p>
      <div class="amenitie_card__info__action">
        <a href="#">
          <p>Explore</p>
        </a>
      </div>
    </div>
    <div
      class="amenitie_card__image"
      :style="{ backgroundImage: 'url(' + amenitie.image + ')' }"
    />
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "AmenitiesCard",

  props: {
    amenitie: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      const sr = ScrollReveal({
        origin: "left",
        distance: "50px",
        duration: 2000,
        reset: true,
      });
      sr.reveal(".amenitie_card__info__title", { delay: 200 });
      sr.reveal(".amenitie_card__info__description", { delay: 250 });
      sr.reveal(".amenitie_card__info__action", { delay: 200 });

      ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        reset: true,
      }).reveal(".amenitie_card__image", { delay: 250 });
    },
  },
};
</script>

<style lang="scss">
.amenitie_card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  margin: 10px;
  border-left: 2px solid #14274a;
  .amenitie_card__info {
    flex: 1;
    padding: 20px 20px;
    .amenitie_card__info__title {
      font-family: "Cormorant Garamond", sans-serif;
      font-weight: 700;
      color: #14274a;
      font-size: 42px;
    }
    .amenitie_card__info__description {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: #14274a;
      font-size: 18px;
      padding: 20px 0;
      line-height: 25px;
    }
    .amenitie_card__info__action {
      font-family: "Montserrat", sans-serif;
      background: #e0b973;
      padding: 10px 30px;
      width: 100px;
      text-align: center;
      border-radius: 10px;
      p {
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  .amenitie_card__image {
    flex: 1;
    width: 100%;
    height: inherit;
    background-size: cover;
    background-position: center;
  }
}

@media only screen and (max-width: 700px) {
  .amenitie_card {
    flex-direction: column;
    border: none;
    .amenitie_card__info {
      .amenitie_card__info__title {
        text-align: center;
      }
      .amenitie_card__info__description {
        text-align: center;
      }
      .amenitie_card__info__action {
        margin: 0 auto;
      }
    }
    .amenitie_card__image {
      flex: none;
      height: 300px;
    }
  }
}
</style>
