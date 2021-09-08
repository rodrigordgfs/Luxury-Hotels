<template>
  <div class="triangle">
    <footer class="container">
      <div class="footer">
        <div class="footer__info">
          <div class="footer__info__brand">
            <p>Luxury</p>
            <p>Hotels</p>
          </div>
          <div class="footer__info__address">
            <ul>
              <li>497 Evergreen Rd. Roseville, CA 95673</li>
              <li>+44 345 678 903</li>
              <li>luxury_hotels@gmail.com</li>
            </ul>
          </div>
        </div>
        <div class="footer__menu">
          <ul>
            <li>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div class="footer__social">
          <ul>
            <li>
              <a href="#">
                <div class="footer__social__icon">
                  <img src="../../assets/icons/facebook.svg" alt="Facebook" />
                </div>
                <p>Facebook</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="footer__social__icon">
                  <img src="../../assets/icons/twitter.svg" alt="Twitter" />
                </div>
                <p>Twitter</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="footer__social__icon">
                  <img src="../../assets/icons/instagram.svg" alt="Instagram" />
                </div>
                <p>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__newsletter">
          <p>Subscribe to our newsletter</p>
          <form>
            <input
              class="footer__newsletter__input"
              type="text"
              placeholder="Enter your email"
            />
            <input
              class="footer__newsletter__button"
              type="submit"
              value="Ok"
            />
          </form>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style lang="scss">
.triangle {
  margin-top: 50px;
  .container {
    background: #14274a;
    .footer {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 50px 10px;
      align-items: center;
      .footer__info {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        .footer__info__brand {
          font-family: "Cormorant Garamond", sans-serif;
          p {
            &:nth-child(1) {
              font-size: 24px;
              text-transform: uppercase;
            }
            &:nth-child(2) {
              font-size: 18px;
            }
          }
        }
        .footer__info__address {
          margin-top: 10px;
          ul {
            li {
              font-family: "Montserrat", sans-serif;
            }
          }
        }
      }
      .footer__menu {
        ul {
          li {
            display: flex;
            flex-direction: column;
            font-family: "Montserrat", sans-serif;
            gap: 15px;
            a {
              color: #ffffff;
              font-weight: 500;
            }
          }
        }
      }
      .footer__social {
        ul {
          display: flex;
          flex-direction: column;
          gap: 15px;
          li {
            a {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
              .footer__social__icon {
                display: flex;
                justify-content: center;
                width: 25px;
              }
              p {
                font-family: "Montserrat", sans-serif;
                color: #ffffff;
                font-weight: 500;
              }
            }
          }
        }
      }
      .footer__newsletter {
        display: flex;
        flex-direction: column;
        gap: 15px;
        p {
          font-family: "Montserrat", sans-serif;
          color: #ffffff;
          font-weight: 500;
        }
        form {
          font-family: "Montserrat", sans-serif;
          .footer__newsletter__input {
            background: #14274a;
            border: 3px solid #e0b973;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
            color: #ffffff;
            font-weight: 500;
            padding: 10px 20px;
            &::placeholder {
              color: #ffffff;
            }
          }
          .footer__newsletter__button {
            background: #e0b973;
            color: #14274a;
            text-transform: uppercase;
            padding: 13px 15px;
            border: none;
            font-weight: 500;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin: 0 auto;
    border-style: solid;
    border-width: 0 50px 50px 50px;
    border-color: transparent transparent #14274a transparent;
  }
}

@media only screen and (max-width: 965px) {
  .triangle {
    .container {
      .footer {
        flex-direction: column;
        .footer__info {
          .footer__info__brand {
            p {
              text-align: center;
            }
          }
          .footer__info__address {
            ul {
              li {
                text-align: center;
              }
            }
          }
        }
        .footer__menu {
          margin-top: 20px;
          ul {
            li {
              text-align: center;
              gap: 10px;
            }
          }
        }
        .footer__social {
          margin-top: 20px;
          ul {
            gap: 10px;
          }
        }
        .footer__newsletter {
          margin-top: 20px;
          gap: 10px;
          p {
            text-align: center;
          }
          form {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
