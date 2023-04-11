<template>
  <div>
    <main>
      <section class="our-clubs">
        <img
          class="our-clubs-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <h1 class="our-clubs-title">
          {{ $t("lozung-section.lozung-color-one") }}
          <span class="our-clubs-title-color-two"
            >- {{ $t("lozung-section.lozung-color-two") }} - </span
          ><span class="our-clubs-title-color-three">{{
            $t("lozung-section.lozung-color-three")
          }}</span>
        </h1>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="our-clubs-container-map">
              <iframe
                class="frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23969.891205923977!2d69.2955253053079!3d41.32547255166649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef520ad4a781b%3A0x924a7943f9b95340!2sMILON%20Oltintepa!5e0!3m2!1sru!2s!4v1677963339803!5m2!1sru!2s"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="address">
                <img class="address-img" src="../assets/img/geo.jpg" alt="" />
                <p class="address-text">
                  {{ $t("our-clubs.adress-one") }}
                </p>
              </div>
              <div class="address">
                <img class="address-img" src="../assets/img/phone.jpg" alt="" />
                <p>
                  <a class="address-text" href="tel:+998712037757"
                    >+998 71 203 77 57</a
                  >
                </p>
              </div>
              <p class="address-text">
                <span class="address-text-color">
                  {{ $t("our-clubs.orientir") }}
                </span>
                {{ $t("our-clubs.orientir-desc-one") }}
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="our-clubs-container-map">
              <iframe
                class="frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23964.361541516653!2d69.26404897910155!3d41.34050220000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef589581dfcf3%3A0x25d969977fd824ba!2sMILON%20Bodomzor!5e0!3m2!1sru!2s!4v1677967048096!5m2!1sru!2s"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="address">
                <img class="address-img" src="../assets/img/geo.jpg" alt="" />
                <p class="address-text">
                  {{ $t("our-clubs.adress-two") }}
                </p>
              </div>
              <div class="address">
                <img class="address-img" src="../assets/img/phone.jpg" alt="" />
                <p>
                  <a class="address-text" href="tel:+998909839000"
                    >+998 90 983 90 00</a
                  >
                </p>
              </div>
              <p class="address-text">
                <span class="address-text-color">
                  {{ $t("our-clubs.orientir") }}
                </span>
                {{ $t("our-clubs.orientir-desc-two") }}
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="our-clubs-container-map">
              <iframe
                class="frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.908085266921!2d69.20353582935037!3d41.289104843762374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bda83e41449%3A0x9320131881a1772!2sMILON%20CHILONZOR!5e0!3m2!1sru!2s!4v1677967285623!5m2!1sru!2s"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="address">
                <img class="address-img" src="../assets/img/geo.jpg" alt="" />
                <p class="address-text">
                  {{ $t("our-clubs.adress-three") }}
                </p>
              </div>
              <div class="address">
                <img class="address-img" src="../assets/img/phone.jpg" alt="" />
                <p>
                  <a class="address-text" href="tel:+998909839000"
                    >+998 90 983 90 00</a
                  >
                </p>
              </div>
              <p class="address-text">
                <span class="address-text-color">
                  {{ $t("our-clubs.orientir") }}
                </span>
                {{ $t("our-clubs.orientir-desc-three") }}
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="our-clubs-container-map">
              <iframe
                class="frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95938.45832670406!2d69.13491551282179!3d41.28543247899462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3dc6b10dfd%3A0x94667c6bba1e1235!2sMILON%20Qorasaroy!5e0!3m2!1sru!2s!4v1677968552750!5m2!1sru!2s"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="address">
                <img class="address-img" src="../assets/img/geo.jpg" alt="" />
                <p class="address-text">
                  {{ $t("our-clubs.adress-four") }}
                </p>
              </div>
              <div class="address">
                <img class="address-img" src="../assets/img/phone.jpg" alt="" />
                <p>
                  <a class="address-text" href="tel:+998909839000"
                    >+998 90 983 90 00</a
                  >
                </p>
              </div>
              <p class="address-text">
                <span class="address-text-color">
                  {{ $t("our-clubs.orientir") }}</span
                >
                {{ $t("our-clubs.orientir-desc-four") }}
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <div class="our-clubs-container-map">
              <iframe
                class="frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95938.45832670406!2d69.13491551282179!3d41.28543247899462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be980f162a7%3A0xcb33b74ba2ce6336!2sMILON%20RAKAT!5e0!3m2!1sru!2s!4v1677968860842!5m2!1sru!2s"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="address">
                <img class="address-img" src="../assets/img/geo.jpg" alt="" />
                <p class="address-text">
                  {{ $t("our-clubs.adress-five") }}
                </p>
              </div>
              <div class="address">
                <img class="address-img" src="../assets/img/phone.jpg" alt="" />
                <p>
                  <a class="address-text" href="tel:+998909839000"
                    >+998 90 983 90 00</a
                  >
                </p>
              </div>
              <p class="address-text">
                <span class="address-text-color">
                  {{ $t("our-clubs.orientir") }}</span
                >
                {{ $t("our-clubs.orientir-desc-five") }}
              </p>
            </div>
          </el-col>
        </el-row>
      </section>
<Diagnostic id="diagnostics"></Diagnostic>
    </main>
  </div>
</template>
<script setup>
import {
  ElRow,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElTimeSelect,
  ElDatePicker,
  ElInput,
} from "element-plus";
import { ref } from "vue";
import Diagnostic from "../components/Diagnostic.vue"
useHead({
  titleTemplate: "Клубы Milon",
  meta: [
    { name: "Диагностика", content: "записаться на диагностику" },
    { name: "Milon Oltintepa", content: "Ориентир: Корзинка и кафе Бехруз" },
    { name: "Milon Bodomzor", content: "Ориентир: супермаркет Азия (боковая сторона парковки), Юнусабадский РОВД" },
    { name: "Milon RAKAT", content: "Ракат Махалля,Текстильный университет" },
  ]
});
</script>
<style>
.our-clubs-title {
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  color: #5bbebd;
}
.our-clubs-title-color-two {
  color: #3faaa8;
}
.our-clubs-title-color-three {
  color: #279893;
}
.our-clubs-container {
  display: flex;
}
.frame {
  width: 300px;
  height: 200px;
}
.address {
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
}
.address-img {
  width: 40px;
}
.address-text {
  color: black;
  font-size: 14px;
  width: 80%;
}
.address-text-color {
  color: #2e928e;
}
.our-clubs-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.our-clubs-container-map {
  width: 310px;
  height: 450px;
  border: 5px solid #eff1f2;
  padding-top: 10px;
  border-radius: 15px;
  margin: auto;
  padding: 15px;
  margin-top: 40px;
  background: white;
}
.our-clubs-container-map .frame {
  width:270px!important;
}
.our-clubs-triangles {
  position: absolute;
  z-index: -1;
  right: 0;
  width: 20%;
}
.questions {
  position: relative;
}
.questions-round {
  position: absolute;
  right: 0px;
  width: 10%;
}
.questions-accordion {
  width: 45%;
  margin-top: 80px;
}
.el-collapse-item__header {
  border: none;
}
.el-collapse {
  border: none;
  --el-collapse-border-color: none;
}
.el-collapse-item__header {
  font-weight: 700;
}
.el-collapse-item__header.is-active {
  font-weight: 700;
  color: #2e9994;
}
@media screen and (max-width: 1200px) {
  .our-clubs-title {
    font-size: 40px;
  }
}
@media screen and (max-width: 768px) {
  .mar {
    display: block;
    margin: auto;
    margin-top: 30px;
  }
  .our-clubs-container-map {
    width: 480px;
    height: 400px;
  }
  .frame {
    width: 470px;
  }
}
@media screen and (max-width: 600px) {
  .our-clubs-container-map {
    width: 400px;
    height: 430px;
  }
  .frame {
    width: 390px;
  }
}


</style>