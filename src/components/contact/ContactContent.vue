<template>
  <section class="contact_content">
    <div class="contact_information">
      <div class="contact_information_items">
        <ul>
          <li>497 Evergreen Rd. Roseville, CA 95673</li>
          <li>Phone: +44 345 678 903</li>
          <li>Email: luxury_hotels@gmail.com</li>
        </ul>
      </div>
      <div class="contact_information_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88084.12156747711!2d-103.41041149287116!3d20.649880382752375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c66f72a55919f48!2sSquare%20Small%20Luxury%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1631165298407!5m2!1spt-BR!2sbr"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <form class="contact_form">
      <div class="contact_form_name">
        <label for="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div class="contact_form_email">
        <label for="email">E-mail</label>
        <input type="email" name="email" />
      </div>
      <div class="contact_form_message">
        <label for="message">Message</label>
        <textarea rows="5" name="message"></textarea>
      </div>
      <div class="contact_form_button">
        <input type="submit" value="Submit" @click.prevent="sendEmail" />
      </div>
    </form>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "ContactContent",

  mounted() {
    this.scrollReveal();
  },

  methods: {
    sendEmail() {

    },

    scrollReveal() {
      let options = {
        distance: "50px",
        duration: 2000,
        reset: true,
      };

      ScrollReveal({
        ...options,
        origin: "left",
      }).reveal(".contact_information", { delay: 300 });

      ScrollReveal({
        ...options,
        origin: "left",
      }).reveal(".contact_form", { delay: 350 });
    },
  },
};
</script>

<style lang="scss">
.contact_content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto 50px;
  .contact_information {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 350px;
    width: 100%;
    &_items {
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          font-family: $montserrat;
          color: $blueZodiac;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    &_map {
      iframe {
        width: 100%;
        height: 300px;
      }
    }
  }
  .contact_form {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    .contact_form_name,
    .contact_form_email,
    .contact_form_message {
      display: flex;
      flex-direction: column;
      label {
        font-family: $montserrat;
        font-size: 14px;
        color: $blueZodiac;
        font-weight: 500;
        margin: 10px 0 5px;
      }
      input,
      textarea {
        font-family: $montserrat;
        font-weight: 500;
        border: 1px solid $blueZodiac;
        padding: 10px 15px;
      }
    }
    .contact_form_button {
      input {
        color: $white;
        font-family: $montserrat;
        font-weight: 700;
        border: none;
        background: $harvestGold;
        padding: 10px 20px;
        border-radius: 5px;
        margin-top: 15px;
        float: right;
        cursor: pointer;
      }
    }
  }
}

@media only screen and (max-width: 965px) {
  .contact_content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
