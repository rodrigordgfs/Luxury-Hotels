<template>
  <div class="rooms_card">
    <room-slide :images="room.images" />
    <div class="rooms_card__title">
      <h2>{{ room.title }}</h2>
    </div>
    <div class="rooms_card__options">
      <div class="rooms_card__options__details">
        <div class="rooms_card__options__details_icon">
          <img src="../../assets/icons/plus.svg" alt="Plus Icon" />
        </div>
        <p class="rooms_card__options__details_text">View Room Details</p>
      </div>
      <div class="rooms_card__options__price">
        <p>${{ room.avgPrice }} Avr/night</p>
      </div>
    </div>
  </div>
</template>

<script>
import RoomSlide from "./RoomSlide.vue";

export default {
  name: "RoomsCard",

  components: {
    RoomSlide,
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.rooms_card {
  border: 1px solid #14274a;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  .rooms_card__title {
    display: flex;
    flex-direction: row;
    background: #14274a;
    justify-content: center;
    align-items: center;
    h2 {
      color: #ffffff;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 32px;
      text-transform: uppercase;
      padding: 20px 0;
    }
  }
  .rooms_card__options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 50px;
    gap: 10px;
    .rooms_card__options__details {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      .rooms_card__options__details_icon {
        background: #e0b973;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .rooms_card__options__details_text {
        color: #14274a;
        font-size: 18px;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
      }
    }
    .rooms_card__options__price {
      background: #e0b973;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      border-radius: 5px;
      p {
        color: #ffffff;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
