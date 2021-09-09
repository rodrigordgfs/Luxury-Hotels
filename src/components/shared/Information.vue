<template>
  <section class="info" :style="{ backgroundImage: 'url(' + cover + ')' }">
    <div class="container">
      <div class="info__text">
        <p>Welcome to</p>
        <p>Luxury</p>
        <p>Hotels</p>
        <p>Book your stay and enjou Luxury</p>
        <p>redefined at the most affordable rates.</p>
      </div>
      <div class="info__book_now">
        <a @click="bookNow">
          <img src="../../assets/icons/book.svg" alt="Icon Book Now" />
          <p>Book Now</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "Information",

  props: {
    cover: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    bookNow() {
      this.$router.push({ name: "Rooms" });
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
      }).reveal(".info__text", { delay: 200 });

      ScrollReveal({
        ...options,
        origin: "bottom",
      }).reveal(".info__book_now", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.info {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .container {
    max-width: 1100px;
    padding: 0 10px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .info__text {
      p {
        color: #ffffff;
        &:nth-child(1) {
          font-family: "Montserrat", sans-serif;
          font-size: 2.625rem;
          text-transform: uppercase;
        }
        &:nth-child(2) {
          font-family: "Cormorant Garamond", sans-serif;
          font-size: 6.875rem;
          text-transform: uppercase;
          line-height: 80px;
        }
        &:nth-child(3) {
          font-family: "Cormorant Garamond", sans-serif;
          font-size: 3.75rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: -5px;
        }
        &:nth-child(4),
        &:nth-child(5) {
          font-family: "Montserrat", sans-serif;
          font-size: 1.875rem;
        }
      }
    }
    .info__book_now {
      margin-top: 30px;
      a {
        width: 150px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #e0b973;
        padding: 10px 20px;
        border-radius: 10px;
        gap: 10px;
        margin: 0 auto;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
        p {
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .info {
    .container {
      .info__text {
        p {
          text-align: center;
          &:nth-child(1) {
            font-size: 2rem;
          }
          &:nth-child(2) {
            font-size: 5rem;
          }
          &:nth-child(3) {
            font-size: 3.125rem;
          }
          &:nth-child(4),
          &:nth-child(5) {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
}
</style>
