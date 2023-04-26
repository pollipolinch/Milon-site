<template>
  <div>
    <main>
      <section class="choose">
        <el-row>
          <el-col :span="12">
            <h2 class="choose-title">{{ $t("choose.choose-title") }}</h2>
            <h2 class="choose-title-two">
              {{ $t("choose.choose-title-two") }}
            </h2>
          </el-col>
          <el-col :span="12">
            <img
              class="choose-img-girl"
              src="../assets/img/price_girl.png"
              alt=""
            />
          </el-col>
        </el-row>
      </section>
      <section class="prices">
        <div v-if="pricesContainer[0].vis" class="description-one">
          <svg
            @click="notVisiblePrice(0)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
          <h5 class="prices-container-title">
            {{ $t("prices.prices-title-one") }}
          </h5>
          <h6 class="prices-container-price">
            900 000
            <span class="prices-container-price-sum">{{
              $t("prices.prices")
            }}</span>
          </h6>
          <h6 class="description-title">
            {{ $t("prices.prices-descrip-one") }}
          </h6>
          <p class="description-text">
            {{ $t("prices.description-text-one-one") }}<br />
            {{ $t("prices.description-text-one-two") }}<br />
            {{ $t("prices.description-text-one-three") }}<br />
            {{ $t("prices.description-text-one-four") }}<br />
            {{ $t("prices.description-text-one-five") }}<br />
            {{ $t("prices.description-text-one-six") }}<br />
            {{ $t("prices.description-text-one-seven") }}<br />
            {{ $t("prices.description-text-one-eight") }}<br />
            {{ $t("prices.description-text-one-nine") }}<br />
            {{ $t("prices.description-text-one-ten") }}<br />
            {{ $t("prices.description-text-one-eleven") }}
          </p>
          <button class="prices-container-button">
            <a class="link" href="#diagnostics">{{
              $t("lozung-section.lozung-button")
            }}</a>
          </button>
        </div>
        <div v-if="pricesContainer[1].vis" class="description-three">
          <svg
            @click="notVisiblePrice(1)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
          <h5 class="prices-container-title">
            {{ $t("prices.prices-title-two") }}
          </h5>
          <h6 class="prices-container-price">
            2 100 000
            <span class="prices-container-price-sum">
              {{ $t("prices.prices") }}</span
            >
          </h6>
          <h6 class="description-title">
            {{ $t("prices.prices-descrip-two") }}
          </h6>
          <p class="description-text">
            {{ $t("prices.description-text-one-one") }}<br />
            {{ $t("prices.description-text-one-two") }}<br />
            {{ $t("prices.description-text-one-three") }}<br />
            {{ $t("prices.description-text-one-four") }}<br />
            {{ $t("prices.description-text-one-five") }}<br />
            {{ $t("prices.description-text-one-six") }}<br />
            {{ $t("prices.description-text-two-one") }}<br />
            {{ $t("prices.description-text-two-two") }}<br />
            {{ $t("prices.description-text-one-nine") }}<br />
            {{ $t("prices.description-text-two-three") }}<br />
            {{ $t("prices.description-text-one-ten") }}<br />
            {{ $t("prices.description-text-one-eleven") }}
          </p>
          <button class="prices-container-button">
            <a class="link" href="#diagnostics">{{
              $t("lozung-section.lozung-button")
            }}</a>
          </button>
        </div>
        <div v-if="pricesContainer[2].vis" class="description-six">
          <svg
            @click="notVisiblePrice(2)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
          <h5 class="prices-container-title">
            {{ $t("prices.prices-title-three") }}
          </h5>
          <h6 class="prices-container-price">
            3 900 000
            <span class="prices-container-price-sum">{{
              $t("prices.prices")
            }}</span>
          </h6>
          <h6 class="description-title">
            {{ $t("prices.prices-descrip-three") }}
          </h6>
          <p class="description-text">
            {{ $t("prices.description-text-one-one") }}<br />
            {{ $t("prices.description-text-one-two") }}<br />
            {{ $t("prices.description-text-one-three") }}<br />
            {{ $t("prices.description-text-one-four") }}<br />
            {{ $t("prices.description-text-one-five") }}<br />
            {{ $t("prices.description-text-one-six") }}<br />
            {{ $t("prices.description-text-three-one") }}<br />
            {{ $t("prices.description-text-three-two") }}<br />
            {{ $t("prices.description-text-three-three") }}<br />
            {{ $t("prices.description-text-one-ten") }}<br />
            {{ $t("prices.description-text-one-eleven") }}
          </p>
          <button class="prices-container-button">
            <a class="link" href="#diagnostics">{{
              $t("lozung-section.lozung-button")
            }}</a>
          </button>
        </div>
        <div v-if="pricesContainer[3].vis" class="description-special">
          <svg
            @click="notVisiblePrice(3)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
          <h5 class="prices-container-title">
            {{ $t("prices.prices-title-four") }}
          </h5>
          <h6 class="prices-container-price">
            600 000
            <span class="prices-container-price-sum">{{
              $t("prices.prices-two")
            }}</span>
          </h6>
          <h6 class="description-title">
            {{ $t("prices.prices-descrip-four") }}
          </h6>
          <p class="description-text">
            {{ $t("prices.description-text-one-one") }}<br />
            {{ $t("prices.description-text-one-two") }}<br />
            {{ $t("prices.description-text-one-three") }}<br />
            {{ $t("prices.description-text-one-four") }}<br />
            {{ $t("prices.description-text-one-five") }}<br />
            {{ $t("prices.description-text-one-six") }}<br />
            {{ $t("prices.description-text-one-seven") }}<br />
            {{ $t("prices.description-text-one-eight") }}<br />
            {{ $t("prices.description-text-four-one") }}<br />
            {{ $t("prices.description-text-one-ten") }}<br />
            {{ $t("prices.description-text-one-eleven") }}
          </p>
          <button class="prices-container-button">
            <a class="link" href="#diagnostics">{{
              $t("lozung-section.lozung-button")
            }}</a>
          </button>
        </div>
        <div v-if="pricesContainer[4].vis" class="description-promotion">
          <svg
            @click="notVisiblePrice(4)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
          <h4 class="description-promotion-title">
            {{ $t("prices.prices-title-five") }}
          </h4>
          <h6 class="description-title">
            {{ $t("prices.prices-descrip-five") }}
          </h6>
          <p class="description-text">
            {{ $t("prices.description-text-five-one") }}<br /><br />
            {{ $t("prices.description-text-five-two") }}<br /><br />
            {{ $t("prices.description-text-five-three") }}<br /><br />
            {{ $t("prices.description-text-five-four") }}<br /><br /><br />
            {{ $t("prices.description-text-five-five") }}<br /><br />
            {{ $t("prices.description-text-five-six") }}
          </p>
          <button class="prices-container-button">
            <a class="link" href="#diagnostics">{{
              $t("lozung-section.lozung-button")
            }}</a>
          </button>
        </div>
        <div class="prices-container">
          <div class="prices-background">
            <h5 class="prices-container-title">
              {{ $t("prices.prices-title-one") }}
            </h5>
            <h6 class="prices-container-price">
              900 000
              <span class="prices-container-price-sum">{{
                $t("prices.prices")
              }}</span>
            </h6>
            <p @click="visiblePrice(0)" class="prices-container-question">
              {{ $t("prices.question") }}
            </p>
            <button class="prices-container-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </div>
          <div class="prices-background">
            <h5 class="prices-container-title">
              {{ $t("prices.prices-title-two") }}
            </h5>
            <h6 class="prices-container-price">
              2 100 000
              <span class="prices-container-price-sum">{{
                $t("prices.prices")
              }}</span>
            </h6>
            <p @click="visiblePrice(1)" class="prices-container-question">
              {{ $t("prices.question") }}
            </p>
            <button class="prices-container-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </div>
          <div class="prices-background">
            <h5 class="prices-container-title">
              {{ $t("prices.prices-title-three") }}
            </h5>
            <h6 class="prices-container-price">
              3 900 000
              <span class="prices-container-price-sum">{{
                $t("prices.prices")
              }}</span>
            </h6>
            <p @click="visiblePrice(2)" class="prices-container-question">
              {{ $t("prices.question") }}
            </p>
            <button class="prices-container-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </div>
        </div>
        <div style="padding-bottom: 80px" class="prices-container">
          <div class="prices-background">
            <h5 class="prices-container-title">
              {{ $t("prices.prices-title-four") }}
            </h5>
            <h6 class="prices-container-price">
              600 000
              <span class="prices-container-price-sum">{{
                $t("prices.prices-two")
              }}</span>
            </h6>
            <p @click="visiblePrice(3)" class="prices-container-question">
              {{ $t("prices.question") }}
            </p>
            <button class="prices-container-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </div>
          <div class="prices-background">
            <h4 class="prices-container-promotion">
              {{ $t("prices.prices-title-five") }}
            </h4>
            <p @click="visiblePrice(4)" class="prices-container-question">
              {{ $t("prices.question") }}
            </p>
            <button class="prices-container-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </div>
        </div>
      </section>
      <section class="first-training">
        <img
          class="first-training-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <img
          class="first-training-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h3 class="sistem-title-training">{{ $t("first-training.title") }}</h3>
        <h5 class="first-training-description">
          {{ $t("first-training.description") }}
        </h5>
        <p class="first-training-text">
          <span class="first-training-text-bold">
            {{ $t("first-training.text-one") }}</span
          ><br />{{ $t("first-training.text-two") }}<br />{{
            $t("first-training.text-three")
          }}<br />
          {{ $t("first-training.text-four") }}<br />
          {{ $t("first-training.text-five") }}<br />
          {{ $t("first-training.text-six") }}<br />
          {{ $t("first-training.text-seven") }}<br />{{
            $t("first-training.text-eight")
          }}<br />
          {{ $t("first-training.text-nine") }}<br />
          {{ $t("first-training.text-ten") }}<br />
          {{ $t("first-training.text-eleven") }}<br />
          {{ $t("first-training.text-twelve") }}<br /><span
            class="first-training-text-bold"
          >
            {{ $t("first-training.text-bold-one") }}<br />
            {{ $t("first-training.text-bold-two") }}<br />
            {{ $t("first-training.text-bold-three") }}<br />
            {{ $t("first-training.text-bold-four") }}</span
          >
        </p>
        <button class="first-training-button">
          <a class="link" href="#diagnostics">{{
            $t("lozung-section.lozung-button")
          }}</a>
        </button>
      </section>
<Diagnostic id="diagnostics"></Diagnostic>
<Helper></Helper>
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
import Helper from "../components/Helper.vue"
useHead({
  titleTemplate: "Milon - цены",
  meta: [
    { name: "Абонемент", content: "количество тренировок" },
    { name: "Суперконсультация", content: "периодический анализ всех предыдущих тренировок с целью дальнейшего эффективного развития" },
    { name: "Тренировки", content: "Персонализированный график тренировок" },
    { name: "Биоимпендансный анализ тела", content: "разбор вашего тела по 10 показателям с тренером-консультантом" },
  ]
});
let pricesContainer = ref([
  { id: 0, vis: false },
  { id: 1, vis: false },
  { id: 2, vis: false },
  { id: 3, vis: false },
  { id: 4, vis: false },
]);
function visiblePrice(el) {
  for (let i = 0; i < pricesContainer.value.length; i++) {
    pricesContainer.value[i].vis = false;
  }
  pricesContainer.value[el].vis = true;
}
function notVisiblePrice(el) {
  pricesContainer.value[el].vis = false;
}
</script>
<style>
.sistem-title-training{
  text-transform: uppercase;
  color: black;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  width: 53%;
}

.choose-title {
  font-size: 50px;
  text-transform: uppercase;
  color: #5bbebd;
  margin-left: 35%;
  line-height: 60px;
}
.choose-title-two {
  font-size: 50px;
  text-transform: uppercase;
  color: #279893;
  margin-left: 35%;
  line-height: 60px;
}
.choose-img-girl {
  width: 25%;
  margin-left: 10%;
}
.prices {
  background: #eff1f2;
}
.prices-container {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.prices-background {
  width: 200px;
  height: 250px;
  background: #eff1f2;
  border-radius: 15px;
  border: 5px solid white;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  margin-left: 1%;
  margin-right: 1%;
}
.prices-container-title {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  width: 75%;
  margin: auto;
  margin-top: 20px;
}
.prices-container-price {
  width: 150px;
  margin: auto;
  padding-top: 20px;
  color: #2e928e;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.prices-container-price-sum {
  font-size: 14px;
  font-weight: 500;
}
.prices-container-question {
  margin-top: 20px;
  color: #2e928e;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
}
.prices-container-question:hover {
  cursor: pointer;
}
.prices-container-button {
  background: #f1ab1d;
  color: white;
  text-transform: uppercase;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  display: block;
  margin: auto;
  margin-top: 15px;
  transition: 0.5s;
}
.prices-container-button:hover {
  background: #f3c165;
}
.prices-container-promotion {
  text-transform: uppercase;
  color: #f1ab1d;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 15px;
}
.cross {
  width: 15px;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
.description-one {
  margin-left: 20%;
  margin-top: 30px;
  width: 450px;
  height: 580px;
  background: white;
  border-radius: 15px;
  z-index: 2;
  position: absolute;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.description-three {
  margin-top: 30px;
  margin-left: 40%;
  width: 450px;
  height: 580px;
  background: white;
  border-radius: 15px;
  z-index: 2;
  position: absolute;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.description-six {
  margin-top: 30px;
  margin-left: 60%;
  width: 450px;
  height: 550px;
  background: white;
  border-radius: 15px;
  z-index: 2;
  position: absolute;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.description-special {
  margin-top: 70px;
  margin-left: 25%;
  width: 380px;
  height: 640px;
  background: white;
  border-radius: 15px;
  z-index: 2;
  position: absolute;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.description-promotion {
  margin-top: 50px;
  margin-left: 50%;
  width: 350px;
  height: 660px;
  background: white;
  border-radius: 15px;
  z-index: 2;
  position: absolute;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.description-title {
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
}
.description-text {
  font-weight: 500;
  font-size: 11px;
  width: 90%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 10px;
}
.description-promotion-title {
  text-transform: uppercase;
  color: #f1ab1d;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding-top: 15px;
}
.first-training {
  position: relative;
}
.first-training-line {
  position: absolute;
  width: 20%;
  z-index: -1;
}
.first-training-rounds {
  position: absolute;
  width: 15%;
  z-index: -1;
  right: 0px;
}
.first-training-description {
  font-size: 20px;
  font-weight: 400;
  margin-left: 20%;
  padding-top: 30px;
  padding-bottom: 30px;
}
.first-training-text {
  width: 55%;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20%;
}
.first-training-text-bold {
  font-size: 14px;
  font-weight: 500;
}
.first-training-button {
  text-transform: uppercase;
  width: 250px;
  height: 50px;
  background: #6cbcbe;
  color: white;
  font-size: 20px;
  border-radius: 14px;
  margin-top: 40px;
  margin-left: 20%;
  margin-bottom: 130px;
  transition: 0.5s;
}
.first-training-button:hover {
  background: #9cd7d8;
}

@media screen and (max-width: 1200px) {
  .choose-img-girl {
    width: 40%;
  }
  .choose-title {
    font-size: 40px;
  }
  .choose-title-two {
    font-size: 40px;
  }
  .description-six {
    margin-left: 50%;
  }
}
@media screen and (max-width: 950px) {
  .description-one {
    margin-left: 10%;
  }
  .description-three {
    margin-left: 35%;
  }
  .description-special {
    margin-left: 15%;
  }
  .description-six {
    width: 420px;
  }
}
@media screen and (max-width: 850px) {
  .description-one {
    height: 530px;
  }
  .description-three {
    height: 540px;
  }
  .description-six {
    width: 400px;
    height: 510px;
  }
  .description-special {
    height: 590px;
  }
  .description-promotion {
    height: 590px;
    margin-top: 80px;
  }
  .prices-container-price {
    font-size: 17px;
  }
  .description-title {
    font-size: 12px;
    margin-top: 10px;
  }
  .description-text {
    font-size: 12px;
    line-height: 14px;
  }
  .choose-img-girl {
    width: 50%;
  }
  .choose-title {
    font-size: 35px;
    line-height: 40px;
  }
  .choose-title-two {
    font-size: 35px;
    line-height: 40px;
  }
  .first-training-text {
    font-size: 12px;
    line-height: 18px;
  }
  .first-training-text-bold{
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .description-text {
    font-size: 11px;
    line-height: 13px;
  }
  .description-one {
    width: 320px;
  }
  .description-three {
    width: 330px;
    margin-left: 34%;
  }
  .description-six {
    width: 320px;
    margin-left: 50%;
  }
  .description-special {
    width: 400px;
    height: 550px;
    margin-left: 8%;
  }
  .description-promotion {
    width: 350px;
    height: 550px;
    margin-left: 50%;
  }
  .mar {
    display: block;
    margin: auto;
    margin-top: 30px;
  }
  .prices-background {
    width: 190px;
  }
  .first-training-description {
    width: 70%;
    margin: auto;
  }
}
@media screen and (max-width: 606px) {
  .choose-title {
    font-size: 30px;
  }
  .choose-title-two {
    font-size: 30px;
  }
  .prices-container {
    padding-top: 0px;
  }
  .prices-background {
    margin-top: 30px;
  }
  .description-three {
    margin-left: 30%;
  }
  .description-six {
    margin-top: 210px;
    margin-left: 25%;
  }
  .description-special {
    margin-top: 330px;
  }
  .description-promotion {
    margin-top: 350px;
    margin-left: 26%;
  }
}
@media screen and (max-width: 500px) {
  .first-training-text {
    width: 70%;
    margin: auto;
  }
}
@media screen and (max-width: 480px) {
  .sistem-title-training{
    font-size: 20px;
  }
  .first-training-button{
    display: block;
    margin: auto;
    margin-top: 40px;
  }
  .description-three{
    margin-left: 15%;
  }
  .description-six{
   margin-left: 10%;
  }
  .description-promotion{
    margin-left: 10%;
  }
  .description-special{
    margin-left: 5%;
  }
}
@media screen and (max-width: 430px) {
  .description-promotion{
    width: 320px;
    height: 580px;
  }
  .description-special{
    width: 320px;
    height: 600px;
  }
}
@media screen and (max-width: 395px) {
  .prices-container-title{
    font-size: 14px;
  }
  .description-title{
    font-size: 11px;
  }
  .description-text{
    padding-top: 10px;
  }
  .description-one{
    width: 270px;
    height: 560px;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 20px;
  }
  .description-three{
    width: 270px;
    height: 580px;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 140px;
  }
  .description-six{
    width: 270px;
    height: 500px;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 450px;
  }
  .description-special{
    width: 270px;
    height: 600px;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 720px;
  }
  .description-promotion{
    width: 270px;
    height: 600px;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 900px;
  }
}
</style>