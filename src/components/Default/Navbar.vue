<template>
  <header class="header" id="header">
    <nav class="navbar">
      <div class="container">
        <img
          class="corner"
          src="../../assets/img/green_left_corner.png"
          alt=""
        />
        <div class="nav">
          <div class="hamb_field" id="burger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <div class="nav-logo">
            <img src="../../assets/img/logo_head.png" alt="логотип" />
          </div>
          <div class="menu" id="menu">
            <ul class="menu-inner">
              <li v-for="(link, index) of links" :key="index">
                <NuxtLink
                  :to="link.path"
                  id="menu-link"
                  class="menu-link"
                  href=""
                  >{{ $t(link.title) }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="nav-icons">
            <div class="nav-icon">
              <a target="_blank" href="https://www.facebook.com/milonuz/"
                ><img src="../../assets/img/fb_icon.png" alt=""
              /></a>
            </div>
            <div class="nav-icon">
              <a target="_blank" href="https://t.me/milonuz2022"
                ><img src="../../assets/img/telegram_icon.png" alt=""
              /></a>
            </div>
            <div class="nav-icon">
              <a target="_blank" href="https://www.instagram.com/milon_uz/"
                ><img src="../../assets/img/insta_icon.png" alt=""
              /></a>
            </div>
           <button v-if="locale.currentLocaleHandler.value=='ru'" @click="changeLanguage('uz')" class="select-lang">{{ locale.currentLocaleHandler.label }}</button>
           <button v-if="locale.currentLocaleHandler.value=='uz'" @click="changeLanguage('ru')" class="select-lang">{{ locale.currentLocaleHandler.label }}</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup >
import { ElRow, ElCol, ElCollapse, ElCollapseItem } from "element-plus";
import { computed, ref, onMounted } from "vue";
import { useLinksStore } from "~~/src/store/Links/links";
import { useLocaleStore } from "~~/src/store/Locale/index";
let value = ref("");
let visibleNavBar = false;
const store = useLinksStore();
const locale = useLocaleStore()
const links = computed(() => {
  return store.links;
});
function changeLanguage(value){
  if(value=='uz'){
    locale.setLocale({ label: "🇷🇺", value: "uz" })
  }else{
    locale.setLocale({ label: "🇺🇿", value: "ru" })
  }

}
onMounted(() => {
  const navbarMenu = document.getElementById("menu");
  const navbarMenuLink = document.querySelectorAll("#menu-link");
  const burgerMenu = document.getElementById("burger");
  const headerMenu = document.getElementById("header");

  // Open Close Navbar Menu on Click Burger
  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navbarMenu.classList.toggle("active");
      navbarMenuLink.forEach((ell) => {
        ell.classList.toggle("active");
      });
    });
  }
  // Close Navbar Menu on Click Menu Links
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
      navbarMenu.classList.remove("active");
    });
  });
});
</script>

<style>
.select-lang{
 cursor: pointer;
}
.hamb_field {
  display: none;
}
.burger-line {
  background-color: var(--color-black-100);
  border: none;
  display: block;
  height: 2px;
  opacity: 1;
  outline: none;
  position: absolute;
  right: 0;
  transform: rotate(0);
  transition: 0.25s ease-in-out;
  width: 100%;
  z-index: 2;
}
.nav {
  display: flex;
  justify-content: space-around;
  background-repeat: no-repeat;
  width: 100%;
}
.container {
  margin: 0 auto;
}
.nav-logo {
  margin-top: 20px;
  margin-left: 20%;
}
.menu-inner {
  display: flex;
  margin-top: 40px;
}
.menu-link {
  color: black;
  font-size: 14px;
  margin-right: 20px;
  transition: 0.5s;
}
.menu-link:hover {
  color: #2e928e;
}
.nav-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-icon {
  display: flex;
  justify-content: center;
  margin-right: 20px;
  width: 20px;
}
.corner {
  width: 20%;
  position: absolute;
  z-index: -2;
}

@media screen and (max-width: 1281px) {
  .menu-link {
    font-size: 14px;
    margin-right: 15px;
  }
  .nav-logo {
    margin-left: 16%;
    width: 100px;
  }
}
@media screen and (max-width: 1136px) {
  .menu-link {
    font-size: 12px;
    margin-right: 10px;
  }
  .nav-logo {
    margin-left: 15%;
    width: 90px;
  }
}
@media screen and (max-width: 955px) {
  .menu-link {
    font-size: 11px;
    margin-right: 7px;
  }
}
@media screen and (max-width: 902px) {
  .menu-link {
    font-size: 10px;
  }
}
@media screen and (max-width: 835px) {
  .menu-link {
    font-size: 9px;
  }
  .nav-logo {
    margin-left: 15%;
    width: 70px;
}
}
@media screen and (max-width: 782px) {
  .hamb_field {
    margin-top: 20px;
    margin-left: -5%;
    display: block;
    z-index: 5;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 40px;
    height: 2px;
    margin: 6px auto;
    transition: all 0.3s ease-in-out;
    background-color: black;
  }
  .nav-logo {
    margin-left: -10%;
    width: 90px;
  }
  .menu {
    position: fixed;
    width: 100%;
    height: 400px;
    z-index: 3;
    top: -100%;
    flex-direction: column;
    background-color: #ffffff;
    transition: 0.5s;
  }
  .menu-inner {
    display: block;
    margin-top: 100px;
  }
  .menu-link {
    font-size: 20px;
    margin-top: 10px;
    display: block;
  }
  .menu-link.active {
    font-size: 20px;
    margin-top: 10px;
    display: block;
  }
  .menu-inner li {
    width: 100vw;
    text-align: center;
  }
  .menu-inner li:first-child {
    margin-top: 40px;
  }
  .menu-inner li:last-child {
    border-bottom: none;
  }

  .menu.active {
    top: -40px;
    transition: 0.5s;
  }

  .hamb_field.active .bar:nth-child(1) {
    opacity: 0;
  }

  .hamb_field.active .bar:nth-child(2) {
    transform: translateY(4px) rotate(45deg);
  }

  .hamb_field.active .bar:nth-child(3) {
    transform: translateY(-4px) rotate(-45deg);
  }

  .hamb_field.active .bar:nth-child(4) {
    opacity: 0;
  }
}
@media screen and (max-width: 550px) {
  .nav-logo {
    width: 70px;
  }
}
.select-lang{
  font-size: 25px;
}
</style>