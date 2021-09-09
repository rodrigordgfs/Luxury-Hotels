<template>
  <div class="contact">
    <contact-header />
    <contact-text />
    <contact-content />
    <footer-app />
  </div>
</template>

<script>
import ContactHeader from "@/components/contact/ContactHeader";
import ContactText from "@/components/contact/ContactText";
import ContactContent from "@/components/contact/ContactContent";
import FooterApp from "@/components/shared/FooterApp";

export default {
  name: "Contact",

  components: {
    ContactHeader,
    ContactText,
    ContactContent,
    FooterApp,
  },
};
</script>

<style lang="scss">
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
