<template>
  <div class="header">
    <header>
      <div class="header__brand" @click="goToMain">
        <p>Luxury</p>
        <p>Hotels</p>
      </div>
      <nav id="header__menu">
        <button
          class="header__menu_btn-mobile"
          aria-label="Abrir menu"
          aria-haspop="true"
          aria-controls="menu"
          aria-expanded="false"
          @click="toogleMenu"
        >
          Menu
          <span class="header__menu_btn-mobile_hamburguer" />
        </button>
        <ul class="header__menu_items" role="menu" @click="toogleItemMenu">
          <li v-for="route in routes" :key="route.name">
            <router-link
              :class="currentRouteName === route.name ? 'menu__active' : ''"
              class="header__menu_items_link"
              :to="route.path"
            >
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",

  computed: {
    routes() {
      return this.$router.options.routes;
    },

    currentRouteName() {
      return this.$route.name;
    },
  },

  methods: {
    toogleMenu(event) {
      const menu = document.getElementById("header__menu");
      menu.classList.toggle("active");
      const active = menu.classList.contains("active");
      event.currentTarget.setAttribute("aria-expanded", active);
      if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
      }
    },

    toogleItemMenu() {
      const menu = document.getElementById("header__menu");
      menu.classList.toggle("active");
    },

    goToMain() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  header {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .header__brand {
      display: flex;
      flex-direction: column;
      background: $harvestGold;
      padding: 30px 40px;
      font-family: $garamond;
      color: $blueZodiac;
      font-weight: 700;
      align-items: center;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      cursor: pointer;
      p {
        &:nth-child(1) {
          font-size: 40px;
        }
        &:nth-child(2) {
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
      }
    }
    #header__menu {
      .header__menu_items {
        display: flex;
        gap: 60px;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          .header__menu_items_link {
            display: block;
            font-size: 16px;
            font-family: $montserrat;
            text-transform: uppercase;
            color: $white;
            transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
            &:hover {
              color: $cottonSeed;
            }
          }
        }
      }
    }
  }
}

.header__menu_btn-mobile {
  display: none;
}

.menu__active {
  font-weight: 700;
  &::after {
    content: "";
    width: inherit;
    height: 2px;
    /* margin: 5px 0; */
    background-color: $white;
    display: block;
    text-align: center;
  }
  &:hover::after {
    background-color: $cottonSeed;
  }
}

@media only screen and (max-width: 700px) {
  .header {
    header {
      #header__menu {
        button {
          color: $white;
          font-weight: bold;
          font-family: $montserrat;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 14px;
          .header__menu_btn-mobile_hamburguer {
            width: 20px;
            border-top: 2px solid;
            display: block;
            &::after,
            &::before {
              content: "";
              width: 20px;
              height: 2px;
              background: $white;
              display: block;
              margin-top: 5px;
              transition: 0.3s cubic-bezier(0.06, 0.29, 0.19, 1.4);
              position: relative;
            }
          }
        }
        .header__menu_items {
          display: block;
          position: absolute;
          width: 100%;
          height: 0;
          top: 130px;
          right: 0;
          background: $blueZodiac;
          z-index: 1000;
          transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
          visibility: hidden;
          overflow-y: hidden;
          li {
            display: block;
            .header__menu_items_link {
              color: $white;
              padding: 1rem;
              margin: 0 1rem;
              text-align: center;
              border-bottom: 2px solid rgba(255, 255, 255, 0.05);
            }
          }
        }
        .header__menu_btn-mobile {
          display: flex;
          padding: 0.5rem 0;
          font-size: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          gap: 0.5rem;
        }
      }
      #header__menu.active .header__menu_items {
        height: calc(100vh - 130px);
        visibility: visible;
        overflow-y: auto;
      }
      #header__menu.active .header__menu_btn-mobile_hamburguer {
        border-top-color: transparent;
      }
      #header__menu.active .header__menu_btn-mobile_hamburguer::before {
        transform: rotate(135deg);
      }
      #header__menu.active .header__menu_btn-mobile_hamburguer::after {
        transform: rotate(-135deg);
        top: -7px;
      }
    }
  }

  .menu__active {
    &::after {
      display: none;
    }
  }
}
</style>
