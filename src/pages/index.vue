<template>
  <div>
    <main>
      <section class="lozung-section">
        <img
          class="lozung-section-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <el-row>
          <el-col :span="12">
            <h2 class="lozung-color-one">
              {{ $t("lozung-section.lozung-color-one") }}
            </h2>
            <h2 class="lozung-color-two">
              {{ $t("lozung-section.lozung-color-two") }}
            </h2>
            <h2 class="lozung-color-three">
              {{ $t("lozung-section.lozung-color-three") }}
            </h2>
            <p class="lozung-paragraph">
              {{ $t("lozung-section.lozung-paragraph") }}
            </p>
            <p class="lozung-paragraph">
              {{ $t("lozung-section.lozung-paragraph-two") }}
            </p>
            <button class="lozung-button">
              <a class="link" href="#diagnostics">{{
                $t("lozung-section.lozung-button")
              }}</a>
            </button>
          </el-col>
          <el-col :span="12">
            <img class="lozung-girl" src="../assets/img/girl.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="why-we">
        <img
          class="why-we-grey-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img class="why-we-photo" src="../assets/img/photo1.png" alt="" />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <h2 class="why-we-title">{{ $t("why-we.why-we-title") }}</h2>
            <ul>
              <li>
                <div class="why-we-li">
                  <img
                    class="why-we-bullet"
                    src="../assets/img/gree_bullet.png"
                    alt=""
                  />
                  <p class="why-we-item">
                    {{ $t("why-we.why-we-item-one") }}
                  </p>
                </div>
              </li>
              <li>
                <div class="why-we-li">
                  <img
                    class="why-we-bullet"
                    src="../assets/img/gree_bullet.png"
                    alt=""
                  />
                  <p class="why-we-item">
                    {{ $t("why-we.why-we-item-two") }}
                  </p>
                </div>
              </li>
              <li>
                <div class="why-we-li">
                  <img
                    class="why-we-bullet"
                    src="../assets/img/gree_bullet.png"
                    alt=""
                  />
                  <p class="why-we-item">
                    {{ $t("why-we.why-we-item-three") }}
                  </p>
                </div>
              </li>
            </ul>
          </el-col>
        </el-row>
      </section>
      <section class="difference">
        <h2 class="difference-title">
          {{ $t("difference.difference-title") }}
        </h2>
          <iframe class="difference-video" src="https://www.youtube.com/embed/HRr5ntFQ0lQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
      <section class="sistem">
        <img
          class="sistem-round"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h2 class="sistem-title">{{ $t("sistem.sistem-title") }}</h2>
        <el-row>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container">
              <img
                class="sistem-container-img"
                src="../assets/img/prog1.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-one-one") }}<br />
                {{ $t("sistem.sistem-container-title-one-two") }}
              </h5>
              <button
                @click="visibleContainer(0)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[0].vis"
              class="sistem-container-active active-one"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog1.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-one-one") }}<br />{{
                  $t("sistem.sistem-container-title-one-two")
                }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-one") }}
              </p>
              <img
                @click="notVisibleContainer(0)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container">
              <img
                class="sistem-container-img"
                src="../assets/img/prog2.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-two-one") }}<br />
                {{ $t("sistem.sistem-container-title-two-two") }}
              </h5>
              <button
                @click="visibleContainer(1)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[1].vis"
              class="sistem-container-active active-two"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog2.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-two-one") }}<br />
                {{ $t("sistem.sistem-container-title-two-two") }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-two") }}
              </p>
              <img
                @click="notVisibleContainer(1)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container">
              <img
                class="sistem-container-img"
                src="../assets/img/prog3.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-three-one") }}<br />
                {{ $t("sistem.sistem-container-title-three-two") }}
              </h5>
              <button
                @click="visibleContainer(2)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[2].vis"
              class="sistem-container-active active-three"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog3.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-three-one") }}<br />
                {{ $t("sistem.sistem-container-title-three-two") }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-three") }}
              </p>
              <img
                @click="notVisibleContainer(2)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container">
              <img
                class="sistem-container-img"
                src="../assets/img/prog4.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-four-one") }}<br />
                {{ $t("sistem.sistem-container-title-four-two") }}
              </h5>
              <button
                @click="visibleContainer(3)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[3].vis"
              class="sistem-container-active active-four"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog4.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-four-one") }}<br />
                {{ $t("sistem.sistem-container-title-four-two") }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-four") }}
              </p>
              <img
                @click="notVisibleContainer(3)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container">
              <img
                class="sistem-container-img"
                src="../assets/img/prog5.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-five-one") }}
                <br />
                {{ $t("sistem.sistem-container-title-five-two") }}
              </h5>
              <button
                @click="visibleContainer(4)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[4].vis"
              class="sistem-container-active active-five"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog5.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-five-one") }}
                <br />
                {{ $t("sistem.sistem-container-title-five-two") }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-five") }}
              </p>
              <img
                @click="notVisibleContainer(4)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="sistem-container padding">
              <img
                class="sistem-container-img"
                src="../assets/img/prog6.png"
                alt=""
              />
              <h5 class="sistem-container-title">
                {{ $t("sistem.sistem-container-title-six-one") }}<br />{{
                  $t("sistem.sistem-container-title-six-two")
                }}
              </h5>
              <button
                @click="visibleContainer(5)"
                class="sistem-container-button"
              >
                {{ $t("sistem.sistem-button") }}
              </button>
            </div>
            <div
              v-if="sistemContainer[5].vis"
              class="sistem-container-active active-six"
            >
              <img
                class="sistem-container-img-active"
                src="../assets/img/prog6.png"
                alt=""
              />
              <h5 class="sistem-container-title-active">
                {{ $t("sistem.sistem-container-title-six-one") }}<br />{{
                  $t("sistem.sistem-container-title-six-two")
                }}
              </h5>
              <p class="sistem-container-text-active">
                {{ $t("sistem.sistem-container-text-active-six") }}
              </p>
              <img
                @click="notVisibleContainer(5)"
                class="sistem-container-button-active"
                src="../assets/img/button-active.png"
                alt=""
              />
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="guarantee">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="guarantee-img"
              src="../assets/img/sport_couple.png"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <p class="guarantee-text">
              {{ $t("guarantee.guarantee-text-one") }}
              <br /><br />
              {{ $t("guarantee.guarantee-text-two") }}
            </p>
          </el-col>
        </el-row>
      </section>
      <section class="map">
        <h3 class="map-title">{{ $t("map.map-title") }}</h3>
        <img class="map-demo" src="../assets/img/map_demo.png" alt="" />
      </section>
   <Diagnostic id="diagnostics"></Diagnostic>
      <section class="questions">
        <img
          class="questions-round"
          src="../assets/img/right_round_element.png"
          alt=""
        />
        <h3 class="sistem-title">{{ $t("questions.questions-title") }}</h3>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <ElCollapse class="questions-accordion" accordion>
              <el-collapse-item
                class="questions-accordion-title"
                :title="$t('questions.question-one')"
              >
                <div>
                  {{ $t("questions.answer-one") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-two')">
                <div>
                  {{ $t("questions.answer-two") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-three')">
                <div>
                  {{ $t("questions.answer-three") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-four')">
                <div>
                  {{ $t("questions.answer-four") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-five')">
                <div>
                  {{ $t("questions.answer-five") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-six')">
                <div>
                  {{ $t("questions.answer-six") }}
                </div>
              </el-collapse-item>
            </ElCollapse>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <ElCollapse class="questions-accordion" accordion>
              <el-collapse-item :title="$t('questions.question-seven')">
                <div>
                  {{ $t("questions.answer-seven") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-eight')">
                <div>
                  {{ $t("questions.answer-eight") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-nine')">
                <div>
                  {{ $t("questions.answer-nine") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-ten')">
                <div>
                  {{ $t("questions.answer-ten") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-eleven')">
                <div>
                  {{ $t("questions.answer-eleven") }}
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('questions.question-twelve')">
                <div>
                  {{ $t("questions.answer-twelve-one") }}<br /><br />
                  {{ $t("questions.answer-twelve-two") }}
                </div>
              </el-collapse-item>
            </ElCollapse>
          </el-col>
        </el-row>
      </section>
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
  titleTemplate: "Milon - Тренажерный зал",
  meta: [
    { name: "Тренировки", content: "Инновационная система тренировок" },
    { name: "Тренажеры", content: "Индивидуальная настройка тренажеров" },
    { name: "Упражнения", content: "Круговая программа упражнений" },
    { name: "Занятия", content: "Уникальная система умных занятий" },
  ],
});
let sistemContainer = ref([
  { id: 0, vis: false },
  { id: 1, vis: false },
  { id: 2, vis: false },
  { id: 3, vis: false },
  { id: 4, vis: false },
  { id: 5, vis: false },
]);
function visibleContainer(ell) {
  for (let i = 0; i < this.sistemContainer.length; i++) {
    this.sistemContainer[i].vis = false;
  }
  this.sistemContainer[ell].vis = true;
}
function notVisibleContainer(ell) {
  this.sistemContainer[ell].vis = false;
}
</script>
<style>
.padding {
  padding-bottom: 200px;
}
.el-collapse-item__header {
  font-size: 12px;
}
.lozung-section {
  position: relative;
}
.lozung-section-triangles {
  position: absolute;
  width: 20%;
  right: 0px;
  top: 200px;
}
.lozung-color-one {
  font-size: 70px;
  text-transform: uppercase;
  color: #5bbebd;
  margin-left: 30%;
  line-height: 80px;
}
.lozung-color-two {
  font-size: 70px;
  text-transform: uppercase;
  color: #3faaa8;
  margin-left: 30%;
  line-height: 80px;
}
.lozung-color-three {
  font-size: 70px;
  text-transform: uppercase;
  color: #279893;
  margin-left: 30%;
  line-height: 80px;
}
.lozung-girl {
  margin-top: 50px;
  margin-left: 50px;
}
.lozung-paragraph {
  margin-left: 30%;
  margin-top: 20px;
  width: 60%;
  font-size: 14px;
}
.lozung-button {
  text-transform: uppercase;
  width: 250px;
  height: 50px;
  background: #f1ab1d;
  color: white;
  font-size: 20px;
  border-radius: 14px;
  margin-top: 40px;
  margin-left: 40%;
  transition: 0.5s;
}
.lozung-button:hover {
  background: #f3c165;
}
.link {
  color: white;
}

.why-we {
  position: relative;
}
.why-we-grey-line {
  position: absolute;
  width: 40%;
  top: 50px;
}
.why-we-li {
  display: flex;
  margin-top: 30px;
  align-items: center;
}
.why-we-bullet {
  width: 10px;
  height: 10px;
  display: block;
}
.why-we-photo {
  margin-left: 25%;
  margin-top: 150px;
  width: 70%;
  padding-bottom: 100px;
}
.why-we-title {
  margin-top: 150px;
  text-transform: uppercase;
}
.why-we-item {
  font-size: 14px;
  width: 75%;
  margin-left: 10px;
}
.difference {
  background: url(../assets/img/bck_green.png);
  height: 800px;
  width: 100%;
}
.difference-title {
  text-transform: uppercase;
  color: white;
  text-align: center;
  padding-top: 80px;
  font-size: 28px;
  font-weight: 400;
}
.difference-video{
  width: 60%;
  height: 470px;
  border: 25px solid #f5f4f4;
  border-radius: 15px;
  cursor: pointer;
  display: block;
  margin: auto;
  margin-top: 80px;
}
.sistem {
  background: #f5f4f4;
  position: relative;
}
.sistem-round {
  position: absolute;
  right: 0px;
  width: 13%;
}
.sistem-title {
  text-transform: uppercase;
  color: black;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  width: 53%;
}
.sistem-container {
  margin-top: 50px;
}
.sistem-container-img {
  width: 170px;
  display: block;
  margin: auto;
}
.sistem-container-title {
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
}
.sistem-container-button {
  background: #f4a60f;
  width: 160px;
  height: 50px;
  color: white;
  border-radius: 12px;
  display: block;
  margin: auto;
  margin-top: 15px;
  text-transform: uppercase;
  transition: 0.5s;
}
.sistem-container-button:hover {
  background: #f3c165;
}
.sistem-container-active {
  position: absolute;
  width: 340px;
  height: 470px;
  background: white;
  padding: 15px;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.sistem-container-img-active {
  width: 170px;
  display: block;
  margin: auto;
  border-radius: 100px;
  border: 7px solid #f4a60f;
}
.sistem-container-title-active {
  margin-top: 15px;
  color: #f4a60f;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
}
.sistem-container-text-active {
  font-size: 14px;
  padding-top: 10px;
  height: 150px;
}
.sistem-container-button-active {
  width: 20%;
  display: block;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
}
.active-one {
  top: 30px;
  left: 7%;
}
.active-two {
  top: 30px;
  left: 40%;
}
.active-three {
  top: 30px;
  right: 7%;
}
.active-four {
  top: 350px;
  left: 7%;
}
.active-five {
  top: 350px;
  left: 40%;
}
.active-six {
  top: 350px;
  right: 7%;
}
.guarantee {
  background: url(../assets/img/bck_green2.png);
  background-color: #f5f4f4;
}
.guarantee-img {
  width: 80%;
  margin-left: 30%;
  margin-top: 90px;
}
.guarantee-text {
  color: white;
  font-size: 22px;
  margin-top: 280px;
  text-align: right;
  width: 60%;
  margin-left: 80px;
}
.map-title {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  padding-top: 100px;
}
.map-demo {
  width: 80%;
  padding-top: 100px;
  display: block;
  margin: auto;
  padding-bottom: 100px;
}

.mar {
  margin-left: 10%;
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
  width: 60%;
  margin-top: 80px;
  display: block;
  margin: auto;
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
  font-size: 16px;
}
.el-collapse-item__content {
  font-size: 14px;
}
.el-collapse-item__header.is-active {
  font-weight: 700;
  color: #2e9994;
}
@media screen and (min-width: 1556px) {
  .lozung-color-one {
    margin-left: 35%;
  }
  .lozung-color-two {
    margin-left: 35%;
  }
  .lozung-color-three {
    margin-left: 35%;
  }
  .why-we-item {
    width: 50%;
  }
  .difference-video {
    width: 35%;
    margin-top: 20px;
  }
  .guarantee-img {
    width: 50%;
  }
  .guarantee-text {
    margin-top: 340px;
  }
}
@media screen and (max-width: 1200px) {
  .active-two {
    left: 37%;
  }
  .active-three {
    right: 5%;
  }
  .active-five {
    left: 37%;
  }
  .active-six {
    right: 5%;
  }
  .el-collapse-item__header {
    font-size: 14px;
    width: 350px;
  }
  .el-collapse-item__content {
    font-size: 13px;
  }

}
@media screen and (max-width: 1000px) {
  .difference-video {
    width: 60%;
   height: 400px;
   margin-top: 40px;
  }
  .lozung-color-one {
    font-size: 60px;
  }
  .lozung-color-two {
    font-size: 60px;
  }
  .lozung-color-three {
    font-size: 60px;
  }
  .guarantee-text {
    font-size: 12px;
  }
  .why-we-item {
    font-size: 12px;
  }
  .el-collapse-item__header {
    font-size: 12px;
  }
  .el-collapse-item__content {
    font-size: 11px;
  }
  .difference {
    height: 650px;
  }
}
@media screen and (max-width: 991px) {
  .active-two {
    left: 59%;
  }
  .active-three {
    top: 360px;
    right: 60%;
  }
  .active-four {
    left: 59%;
  }
  .active-five {
    top: 670px;
    left: 10%;
  }
  .active-six {
    top: 670px;
    left: 59%;
  }
}
@media screen and (max-width: 800px) {
  .sistem-container-active {
    width: 300px;
  }
  .sistem-container-text-active {
    font-size: 13px;
  }
  .active-two {
    left: 55%;
  }
  .active-three {
    right: 47%;
  }
  .active-four {
    left: 55%;
  }
  .active-six {
    left: 55%;
  }
  .why-we-item {
    font-size: 10px;
    width: 80%;
  }
  .lozung-color-one {
    font-size: 50px;
  }
  .lozung-color-two {
    font-size: 50px;
  }
  .lozung-color-three {
    font-size: 50px;
  }
  .guarantee-text {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 768px) {
  .guarantee-img {
    width: 40%;
    margin: auto;
    margin-bottom: 40px;
  }
  .guarantee-text {
    font-size: 14px;
    text-align: center;
    width: 90%;
    display: block;
    margin: auto;
    margin-bottom: 30px;
  }

  .why-we-item {
    font-size: 14px;
    width: 100%;
  }
  .mar {
    display: block;
    margin: auto;
    margin-top: 30px;
  }
  .why-we-photo {
    margin: auto;
    margin-top: 150px;
    width: 50%;
  }
  .why-we-title {
    margin-top: 10px;
    text-transform: uppercase;
    text-align: center;
  }
  .why-we-li {
    width: 70%;
    margin: auto;
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;
    align-items: center;
  }
}
@media screen and (max-width: 650px) {
  .active-two {
    left: 46%;
  }
  .active-three {
    right: 44%;
  }
  .active-four {
    left: 46%;
  }
  .active-five {
    left: 6%;
  }
  .active-six{
    left: 46%;
  }
  .sistem-container-img-active {
    width: 130px;
  }
  .sistem-container-title-active {
    margin-top: 8px;
    font-size: 12px;
  }
  .sistem-container-active {
    width: 270px;
    height: 430px;
  }
  .sistem-container-text-active {
    font-size: 12px;
  }
  .sistem-container-button-active {
    margin-top: 40px;
  }
  .lozung-color-one {
    font-size: 40px;
  }
  .lozung-color-two {
    font-size: 40px;
  }
  .lozung-color-three {
    font-size: 40px;
  }
  .guarantee-text {
    margin-top: 100px;
  }
  .why-we-photo {
    padding-bottom: 10px;
  }
  .guarantee-img {
    margin-bottom: 0px;
  }
}
@media screen and (max-width: 500px) {
  .difference-video {
    width: 70%;
   height: 300px;
   margin-top: 40px;
  }
  .sistem-container-active {
    width: 250px;
    height: 430px;
  }
  .active-five {
    top: 680px;
    left: 8%;
  }
  .lozung-color-one {
    font-size: 30px;
    line-height: 40px;
  }
  .lozung-color-two {
    font-size: 30px;
    line-height: 40px;
  }
  .lozung-color-three {
    font-size: 30px;
    line-height: 40px;
  }
  .difference {
    height: 550px;
  }
  .guarantee-img {
    margin-top: 30px;
  }
}
</style>

