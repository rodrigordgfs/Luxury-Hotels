<template>
  <div
    class="room_slide"
    :style="{
      height: height,
    }"
  >
    <div
      class="room_slide__image"
      :style="{
        backgroundImage: 'url(' + image + ')',
      }"
    />
    <div class="room_slide__buttons">
      <span
        :class="disableFirst ? 'button_disabled' : null"
        class="room_slide__buttons__previous"
        @click="previousTestimonials"
      >
        <img src="../../assets/icons/previous.svg" alt="Previous" />
      </span>
      <span
        :class="disableLast ? 'button_disabled' : null"
        class="room_slide__buttons__next"
        @click="nextTestimonials"
      >
        <img src="../../assets/icons/next.svg" alt="Next" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomSlide",

  props: {
    images: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
      default: window.innerWidth > 965 ? "250px" : "450px",
    },
  },

  data() {
    return {
      image: null,
    };
  },

  mounted() {
    this.image = this.images[0];
  },

  computed: {
    disableFirst() {
      return this.images.indexOf(this.image) === 0;
    },

    disableLast() {
      return this.images.indexOf(this.image) === this.images.length - 1;
    },
  },

  methods: {
    nextTestimonials() {
      if (this.images.indexOf(this.image) < this.images.length - 1) {
        this.image = this.images[this.images.indexOf(this.image) + 1];
      }
    },

    previousTestimonials() {
      if (this.images.indexOf(this.image) > 0) {
        this.image = this.images[this.images.indexOf(this.image) - 1];
      }
    },
  },
};
</script>

<style lang="scss">
.room_slide {
  width: 100%;
  position: relative;
  .room_slide__image {
    width: 100%;
    height: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .room_slide__buttons {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .room_slide__buttons__previous,
    .room_slide__buttons__next {
      background: #e0b973;
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
  background: #dac090 !important;
  cursor: not-allowed !important;
}
</style>
