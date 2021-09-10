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
    <button-navigator
      class="room_slide__buttons"
      :disable-previous="disablePrevious"
      :disable-next="disableNext"
      :previous="previousSlide"
      :next="nextSlide"
    />
  </div>
</template>

<script>
import ButtonNavigator from "@/components/shared/ButtonNavigator";

export default {
  name: "RoomSlide",

  components: {
    ButtonNavigator,
  },

  props: {
    images: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
      default: window.innerWidth < 965 ? "250px" : "450px",
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
    disablePrevious() {
      return this.images.indexOf(this.image) === 0;
    },

    disableNext() {
      return this.images.indexOf(this.image) === this.images.length - 1;
    },
  },

  methods: {
    nextSlide() {
      if (this.images.indexOf(this.image) < this.images.length - 1) {
        this.image = this.images[this.images.indexOf(this.image) + 1];
      }
    },

    previousSlide() {
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
  }
}
</style>
