<template>
  <section class="testimonials">
    <h2 class="testimonials__title">Testimonials</h2>
    <figure class="testimonials__content">
      <blockquote class="testimonials__quote">
        <p>{{ testimonial.quote }}</p>
      </blockquote>
      <figcaption class="testimonials__author">
        <p>{{ testimonial.author }}</p>
      </figcaption>
    </figure>
    <div class="testimonials__buttons">
      <span
        :class="disableFirst ? 'button_disabled' : null"
        class="testimonials__button__previous"
        @click="previousTestimonials"
      >
        <img src="../../assets/icons/previous.svg" alt="Previous" />
      </span>
      <span
        :class="disableLast ? 'button_disabled' : null"
        class="testimonials__button__next"
        @click="nextTestimonials"
      >
        <img src="../../assets/icons/next.svg" alt="Next" />
      </span>
    </div>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "Testimonials",

  data() {
    return {
      testimonials: [
        {
          quote: "''Calm, Serene, Retro – What a way to relax and enjoy''",
          author: "Mrs. Diana. Baxter, UK",
        },
        {
          quote: "''A good place to rest''",
          author: " Mr. Diego. São Paulo, BR",
        },
        {
          quote: "''I recommend this place to everyone''",
          author: " Mr. Jake. New York, EUA",
        },
      ],

      testimonial: {},
    };
  },

  mounted() {
    this.scrollReveal();
    this.testimonial = this.testimonials[0];
  },

  computed: {
    disableFirst() {
      return this.testimonials.indexOf(this.testimonial) === 0;
    },

    disableLast() {
      return (
        this.testimonials.indexOf(this.testimonial) ===
        this.testimonials.length - 1
      );
    },
  },

  methods: {
    nextTestimonials() {
      if (
        this.testimonials.indexOf(this.testimonial) <
        this.testimonials.length - 1
      ) {
        this.testimonial = this.testimonials[
          this.testimonials.indexOf(this.testimonial) + 1
        ];
      }
    },

    previousTestimonials() {
      if (this.testimonials.indexOf(this.testimonial) > 0) {
        this.testimonial = this.testimonials[
          this.testimonials.indexOf(this.testimonial) - 1
        ];
      }
    },

    scrollReveal() {
      let options = {
        distance: "50px",
        duration: 2000,
        reset: true,
      };

      ScrollReveal({
        ...options,
        origin: "top",
      }).reveal(".testimonials__title", { delay: 200 });

      ScrollReveal({
        ...options,
        origin: "right",
      }).reveal(".testimonials__quote", { delay: 250 });

      ScrollReveal({
        ...options,
        origin: "left",
      }).reveal(".testimonials__author", { delay: 300 });

      ScrollReveal({
        ...options,
        origin: "bottom",
      }).reveal(".testimonials__buttons", { delay: 350 });
    },
  },
};
</script>

<style lang="scss">
.testimonials {
  padding: 50px 10px 0;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .testimonials__title {
    font-family: $garamond;
    color: $blueZodiac;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
  }
  .testimonials__content {
    display: flex;
    flex-direction: column;
    font-family: $montserrat;
    .testimonials__quote {
      text-align: center;
      p {
        font-weight: 500;
      }
    }
    .testimonials__author {
      margin-top: 10px;
      text-align: center;
    }
  }
  .testimonials__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    .testimonials__button__previous,
    .testimonials__button__next {
      background: $harvestGold;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.button_disabled {
  background: $brandy !important;
  cursor: not-allowed !important;
}
</style>
