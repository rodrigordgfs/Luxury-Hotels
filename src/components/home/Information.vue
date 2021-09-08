<template>
  <section class="info">
    <div class="container">
      <div class="info__text">
        <p>Welcome to</p>
        <p>Luxury</p>
        <p>Hotels</p>
        <p>Book your stay and enjou Luxury</p>
        <p>redefined at the most affordable rates.</p>
      </div>
      <div class="info__book_now">
        <a href="#">
          <img src="../../assets/icons/book.svg" alt="Icon Book Now" />
          <p>Book Now</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style lang="scss">
.info {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/home.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
          font-size: 32px;
          text-transform: uppercase;
        }
        &:nth-child(2) {
          font-family: "Cormorant Garamond", sans-serif;
          font-size: 100px;
          text-transform: uppercase;
        }
        &:nth-child(3) {
          font-family: "Cormorant Garamond", sans-serif;
          font-size: 50px;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: -5px;
        }
        &:nth-child(4),
        &:nth-child(5) {
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
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
        }
      }
    }
  }
}
</style>
