<template>
  <div class="container">
    <section class="rooms_rates">
      <h2 class="rooms_rates__title">Rooms and Rates</h2>
      <p class="rooms_rates__description">
        Each of our bright, light-flooded rooms come with everything you could
        possibly need for a comfortable stay. And yes, comfort isn’t our only
        objective, we also value good design, sleek contemporary furnishing
        complemented by the rich tones of nature’s palette as visible from our
        rooms’ sea-view windows and terraces.
      </p>
      <div class="rooms_rate_list">
        <rooms-card
          class="rooms_rate_list_card"
          v-for="room in rooms"
          :key="room.title"
          :room="room"
        />
      </div>
      <testimonials />
    </section>
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "@/components/shared/FooterApp";
import Testimonials from "@/components/shared/Testimonials";
import RoomsCard from "./RoomsCard";
import ScrollReveal from "scrollreveal";

export default {
  name: "RoomsRates",

  components: {
    FooterApp,
    Testimonials,
    RoomsCard,
  },

  data() {
    return {
      rooms: [
        {
          title: "Single Room",
          images: [
            "https://i.imgur.com/cxwrmO1.png",
            "https://i.imgur.com/bQQYKN9.png",
            "https://i.imgur.com/zRypebq.png",
            "https://i.imgur.com/VotGUvQ.png",
            "https://i.imgur.com/g9hStR7.png",
          ],
          avgPrice: 147,
          description:
            "The Luxury Hotels, on Imbassaí Beach, is a resort that offers luxury rooms with a balcony and modern amenities. The property features free WiFi, free parking and activities such as golf and tennis. Suites at The Luxury Hotels Imbassai Resort & Spa have a king-size bed and minibar.<br /><br /> They also include a flat-screen satellite TV and an iPod docking station. They also feature air conditioning and a seating area. Bathrooms have a spa bath.<br /><br /> The Luxury Hotels Imbassai, a 5-star all-inclusive hotel, has 5 swimming pools. You can also play volleyball on the beach or use the basketball court. Water sports such as polo, canoeing and windsurfing are available.<br /><br /> Activities for babies, children and teenagers are carried out in the hotel's mini clubs. The gym offers aerobics and spinning classes. The spa offers massage treatments, facials and body treatments.<br /><br /> You can enjoy nightly shows and 5 dining options. Three of them serve Brazilian, Indian and Japanese dishes à la carte. Meals can also be enjoyed at the 2 buffet-style restaurants.<br /><br /> The complex has 10 bars, which provide a variety of national and imported drinks. All meals and drinks, alcoholic or not, are included in the rates.",
          amenities: [
            "2 Pool",
            "Free Parking",
            "Spa / Wellness Center",
            "Family Rooms",
            "Free Wifi",
            "Transfer (airport)",
            "Room Service",
            "Pub",
            "Sea Shore",
            "Private Beach",
            "Garden",
            "Barbecue Grill",
            "Terrace",
          ],
        },
        {
          title: "Double Room",
          images: [
            "https://i.imgur.com/9H0SuIm.jpg",
            "https://i.imgur.com/xqnubQy.jpg",
            "https://i.imgur.com/1X0VQPD.jpg",
            "https://i.imgur.com/wxWQmS3.jpg",
            "https://i.imgur.com/EmSnK1Z.jpg",
          ],
          avgPrice: 155,
          description:
            "The Luxury Hotels, on Imbassaí Beach, is a resort that offers luxury rooms with a balcony and modern amenities. The property features free WiFi, free parking and activities such as golf and tennis. Suites at The Luxury Hotels Imbassai Resort & Spa have a king-size bed and minibar.<br /><br /> They also include a flat-screen satellite TV and an iPod docking station. They also feature air conditioning and a seating area. Bathrooms have a spa bath.<br /><br /> The Luxury Hotels Imbassai, a 5-star all-inclusive hotel, has 5 swimming pools. You can also play volleyball on the beach or use the basketball court. Water sports such as polo, canoeing and windsurfing are available.<br /><br /> Activities for babies, children and teenagers are carried out in the hotel's mini clubs. The gym offers aerobics and spinning classes. The spa offers massage treatments, facials and body treatments.<br /><br /> You can enjoy nightly shows and 5 dining options. Three of them serve Brazilian, Indian and Japanese dishes à la carte. Meals can also be enjoyed at the 2 buffet-style restaurants.<br /><br /> The complex has 10 bars, which provide a variety of national and imported drinks. All meals and drinks, alcoholic or not, are included in the rates.",
          amenities: [
            "2 Pool",
            "Free Parking",
            "Spa / Wellness Center",
            "Family Rooms",
            "Free Wifi",
            "Transfer (airport)",
            "Room Service",
            "Pub",
            "Sea Shore",
            "Private Beach",
            "Garden",
            "Barbecue Grill",
            "Terrace",
          ],
        },
        {
          title: "Twin Room",
          images: [
            "https://i.imgur.com/MuGZw3R.png",
            "https://i.imgur.com/7fsR2Jm.png",
            "https://i.imgur.com/CH5wVGB.png",
            "https://i.imgur.com/jEahFVO.png",
            "https://i.imgur.com/9l7vKs0.png",
          ],
          avgPrice: 186,
          description:
            "The Luxury Hotels, on Imbassaí Beach, is a resort that offers luxury rooms with a balcony and modern amenities. The property features free WiFi, free parking and activities such as golf and tennis. Suites at The Luxury Hotels Imbassai Resort & Spa have a king-size bed and minibar.<br /><br /> They also include a flat-screen satellite TV and an iPod docking station. They also feature air conditioning and a seating area. Bathrooms have a spa bath.<br /><br /> The Luxury Hotels Imbassai, a 5-star all-inclusive hotel, has 5 swimming pools. You can also play volleyball on the beach or use the basketball court. Water sports such as polo, canoeing and windsurfing are available.<br /><br /> Activities for babies, children and teenagers are carried out in the hotel's mini clubs. The gym offers aerobics and spinning classes. The spa offers massage treatments, facials and body treatments.<br /><br /> You can enjoy nightly shows and 5 dining options. Three of them serve Brazilian, Indian and Japanese dishes à la carte. Meals can also be enjoyed at the 2 buffet-style restaurants.<br /><br /> The complex has 10 bars, which provide a variety of national and imported drinks. All meals and drinks, alcoholic or not, are included in the rates.",
          amenities: [
            "2 Pool",
            "Free Parking",
            "Spa / Wellness Center",
            "Family Rooms",
            "Free Wifi",
            "Transfer (airport)",
            "Room Service",
            "Pub",
            "Sea Shore",
            "Private Beach",
            "Garden",
            "Barbecue Grill",
            "Terrace",
          ],
        },
      ],
    };
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      let options = {
        distance: "50px",
        duration: 2000,
        reset: true,
      };

      ScrollReveal({
        ...options,
        origin: "top",
      }).reveal(".rooms_rates__title", { delay: 200 });

      ScrollReveal({
        ...options,
        origin: "left",
      }).reveal(".rooms_rates__description", { delay: 250 });

      ScrollReveal({
        ...options,
        origin: "top",
      }).reveal(".rooms_rate_list_card", { delay: 300 });
    },
  },
};
</script>

<style lang="scss">
.rooms_rates {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .rooms_rates__title {
    padding-top: 50px;
    font-family: "Cormorant Garamond", sans-serif;
    color: #14274a;
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
  }
  .rooms_rates__description {
    font-family: "Montserrat", sans-serif;
    color: #14274a;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding: 30px 0 50px;
  }
  .rooms_rate_list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
