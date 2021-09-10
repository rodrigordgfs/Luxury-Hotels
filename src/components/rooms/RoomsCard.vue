<template>
  <div class="rooms_card">
    <room-slide :images="room.images" />
    <div class="rooms_card__title">
      <h2>{{ room.title }}</h2>
    </div>
    <div class="rooms_card__options">
      <div class="rooms_card__options__details" @click="openRoomDetails">
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
import RoomDetailModal from "./RoomDetailModal.vue";

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

  methods: {
    openRoomDetails() {
      this.$modal.open(RoomDetailModal, {
        props: {
          room: this.room,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.rooms_card {
  border: 1px solid $blueZodiac;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  .rooms_card__title {
    display: flex;
    flex-direction: row;
    background: $blueZodiac;
    justify-content: center;
    align-items: center;
    h2 {
      color: $white;
      font-family: $montserrat;
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
      gap: 10px;
      .rooms_card__options__details_icon {
        background: $harvestGold;
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
        color: $blueZodiac;
        font-size: 18px;
        text-transform: uppercase;
        font-family: $montserrat;
        font-weight: 700;
      }
    }
    .rooms_card__options__price {
      background: $harvestGold;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      border-radius: 5px;
      p {
        color: $white;
        font-family: $montserrat;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
