<template>
  <div class="room_detail_modal">
    <div class="room_slide_modal">
      <room-slide :images="room.images" height="300px" />
      <div class="room_slide_close" @click="closeModal">
        <img src="../../assets/icons/close.svg" alt="Close" />
      </div>
    </div>
    <div class="room_slide_head">
      <div class="room_slide_head_title">
        <h2>{{ room.title }}</h2>
      </div>
      <div class="room_slide_head_price">
        <p>${{ room.avgPrice }}</p>
      </div>
    </div>
    <div class="room_slide_description">
      <p v-html="room.description"></p>
    </div>
    <div class="room_slide_facilities_title">
      <h2>Main amenities</h2>
    </div>
    <div class="room_slide_facilities_list">
      <ul>
        <li v-for="amenitie in room.amenities" :key="amenitie">
          {{ amenitie }}
        </li>
      </ul>
    </div>
    <div class="room_slide_facilities_book_now">
      <a href="#">
        <img src="../../assets/icons/book.svg" alt="Icon Book Now" />
        <p>Book Now</p>
      </a>
    </div>
  </div>
</template>

<script>
import RoomSlide from "./RoomSlide.vue";

export default {
  name: "RoomDetailModal",

  components: {
    RoomSlide,
  },

  props: {
    room: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.$modal.close();
  },

  methods: {
    closeModal() {
      this.$modal.close();
    },

    _modalFlexPosition(w) {
      if (w > 800) {
        this.$el.style.width = "500px";
        this.$el.style.borderRadius = "5px";
        return {
          type: "column",
          top: "50px",
          bottom: "50px",
        };
      } else {
        this.$el.style.width = "100%";
        this.$el.style.height = "auto";
        this.$el.style.borderRadius = "0";
        return {
          type: "viewport",
        };
      }
    },
  },
};
</script>

<style lang="scss">
.room_detail_modal {
  transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  background-color: #fff;
  overflow: auto;
  box-shadow: 0 8px 100px -4px rgb(0, 0, 0);
  .room_slide_modal {
    .room_slide_close {
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #a08044;
      border-radius: 50%;
      transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
      &:hover {
        background: #e0b973;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .room_slide_head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .room_slide_head_title {
      h2 {
        font-family: "Montserrat", sans-serif;
        color: #14274a;
        font-size: 1.75rem;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
    .room_slide_head_price {
      p {
        font-family: "Montserrat", sans-serif;
        color: #ffffff;
        background: #e0b973;
        border-radius: 5px;
        padding: 5px 10px;
        font-weight: 500;
      }
    }
  }
  .room_slide_description {
    padding: 0 20px 20px;
    p {
      font-family: "Montserrat", sans-serif;
      line-height: 20px;
    }
  }
  .room_slide_facilities_title {
    padding: 20px 20px 20px;
    h2 {
      font-family: "Montserrat", sans-serif;
      color: #14274a;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
    }
  }
  .room_slide_facilities_list {
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-weight: 500;
      }
    }
  }
  .room_slide_facilities_book_now {
    margin: 50px 0 100px;
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
</style>
