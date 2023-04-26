<template>
  <div>
    <main>
      <section class="news">
        <img
          class="news-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <h2 class="news-milon">Milon</h2>
        <span class="news-milon-span"> {{ $t("news.title") }}</span>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <h3 class="news-title">
              {{ $t("news.title-two") }}<br />{{ $t("news.title-three") }}
            </h3>
            <p class="news-text">
              {{ $t("news.text") }}
              <br /><br />{{ $t("news.text-two") }}<br /><br />
              {{ $t("news.text-three") }}<br /><br />
              {{ $t("news.text-four") }}<br /><br />📞
              <a class="address-text" href="tel:+998712037757"
                >+998 71 203 77 57</a
              ><br /><br />{{ $t("news.address-one") }}<br />{{
                $t("news.address-two")
              }}<br /><br /><span class="news-text-color">{{
                $t("news.address-three")
              }}</span>
            </p>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img class="news-img" src="../assets/img/news.png" alt="" />
          </el-col>
        </el-row>
      </section>
      <section class="form-registration">
        <img
          class="form-registration-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <div class="form-registration-container">
          <div v-if="visibleModalTimes" class="modal-window">
            <p
              v-html="$t('diagnostics.diagnostics-modal')"
              class="modal-window-text"
            ></p>
          </div>
          <h4 class="form-registration-title">{{ $t("news.form") }}</h4>
          <input
            class="registration-input"
            v-model="name"
            :placeholder="$t('diagnostics.diagnostics-name')"
            type="text"
            name=""
            id=""
          />
          <input
            v-model="phone"
            class="registration-input"
            :placeholder="$t('diagnostics.diagnostics-phone')"
            type="text"
            name=""
            v-mask="'####-##'"
            id=""
          />
          <input
            v-model="message"
            class="registration-input-text"
            :placeholder="$t('diagnostics.diagnostics-sms')"
            type="text"
            name=""
            id=""
          />
          <div class="buttons">
            <button
              @click="chooseDate('2022-11-27')"
              :class="
                timeButton1
                  ? 'registration-button-active'
                  : 'registration-button'
              "
            >
              27 {{ $t("news.month") }}
            </button>
            <button
              @click="chooseDate('2022-11-28')"
              :class="
                timeButton2
                  ? 'registration-button-active'
                  : 'registration-button'
              "
            >
              28 {{ $t("news.month") }}
            </button>
          </div>
          <div class="timeSlotContainer">
            <div
              @click="chooseTime(index, slot.ts)"
              :class="slot.open ? 'timeSlotButton' : 'timeSlotButton-active'"
              v-if="timeslots"
              v-for="(slot, index) of timeslots"
              :key="index"
            >
              {{ slot.timeSlot }}
            </div>
          </div>
          <button
            @click="sendDate()"
            style="display: block; margin: auto; margin-top: 30px"
            class="lozung-button"
          >
            {{ $t("lozung-section.lozung-button") }}
          </button>
        </div>
      </section>
      <section class="couple">
        <el-row>
          <el-col :span="12">
            <p class="couple-text">
              {{ $t("couple.text-one") }}
              <span class="couple-text-special">
                {{ $t("couple.text-two") }}</span
              >
              {{ $t("couple.text-three") }}
            </p></el-col
          >
          <el-col :span="12">
            <img class="couple-img" src="../assets/img/old_couple.png" alt=""
          /></el-col>
        </el-row>
      </section>
      <section class="news-about">
        <img
          class="news-about-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <h3 class="news-about-titles">{{ $t("news-about.title-one") }}</h3>
            <p class="news-about-title">
              {{ $t("lozung-section.lozung-color-one") }}.
              {{ $t("lozung-section.lozung-color-two") }}.
              {{ $t("lozung-section.lozung-color-three") }}.
            </p>
            <p class="news-about-text">
              {{ $t("news-about.text-one") }}
            </p>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img class="news-about-img" src="../assets/img/photo2.png" alt=""
          /></el-col>
        </el-row>
        <h3 class="news-title-two">
          {{ $t("news-about.title-two") }}
        </h3>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="news-about-img-two"
              src="../assets/img/photo3.png"
              alt=""
            />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <p class="news-about-text-two">
              {{ $t("news-about.text-two") }}
            </p>
          </el-col>
        </el-row>
        <h3 class="news-title-two">
          {{ $t("news-about.title-three") }}
        </h3>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <p class="news-about-text-three">
              {{ $t("news-about.text-three") }}
            </p>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img
              class="news-about-img-three"
              src="../assets/img/photo4.png"
              alt=""
            />
          </el-col>
        </el-row>
      </section>
      <section class="challenge">
        <h4 class="challenge-title">
          {{ $t("challenge.title") }}
        </h4>
        <p class="challenge-text">
          {{ $t("challenge.text-one") }} <br /><br />
          <span class="challenge-text-bond">
            {{ $t("challenge.text-two") }}</span
          ><br />
          {{ $t("challenge.text-three") }}
        </p>
      </section>
      <section class="news-video">
        <h3 class="sistem-title-video">
          {{ $t("challenge.title-video") }}
        </h3>
        <div class="news-container">
          <iframe
            class="news-video-container"
            src="https://www.youtube.com/embed/tkXN2nx_5AE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            class="news-video-container"
            src="https://www.youtube.com/embed/PepA2HDEhkQ"
            title="Что такое Milon?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
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
  ElNotification
} from "element-plus";
import { useTimeSlotsStore } from "../store/TimeSlots";
import Diagnostic from "../components/Diagnostic.vue"
import Helper from "../components/Helper.vue"
import { ref, onMounted, getCurrentInstance } from "vue";
useHead({
  titleTemplate: "Milon - новости",
  meta: [
    {
      name: "тариф Special",
      content: "для населения старше 50 лет, докторов и педагогов",
    },
    {
      name: "методика MILON",
      content:
        "Уникальные, высокоэффективные тренировки в сети клубов здоровья для всех возрастов",
    },
    {
      name: "Для кого тренировки",
      content: "подходят всем категориям населения",
    },
    {
      name: "Биоимпендансный анализ тела",
      content: "разбор вашего тела по 10 показателям с тренером-консультантом",
    },
  ],
});
const store_times = useTimeSlotsStore();
let name = ref("");
let phone = ref("");
let ts = ref("");
let message = ref("");
let timeButton1 = ref(false);
let timeButton2 = ref(false);
let timeslots = computed(() => {
  return store_times.timeslots;
});
function chooseDate(value) {
  store_times.fetchDate(value);
  if (value == "2022-11-27") {
    this.timeButton1 = true;
    this.timeButton2 = false;
  } else {
    this.timeButton2 = true;
    this.timeButton1 = false;
  }
}
function chooseTime(index, ts) {
  for (let i = 0; i < this.timeslots.length; i++) {
    this.timeslots[i].open = true;
  }
  this.timeslots[index].open = false;
  this.ts = ts;
}
function sendDate() {
  if(this.name && this.phone && this.ts){
    const data = {
    name: name.value,
    phone: phone.value,
    note: message.value,
    timeslots: ts.value,
  };
  store_times.postTimeSlot(data);
  ElNotification({
        title:'Спасибо за регистрацию!',
        message:'Наши операторы с Вами свяжутся для подтверждения регистрации и ответов на вопросы. С уважением, MILON Health Club',
        type:'success',
      })
  }else{
    ElNotification({
        title:'Необходимо заполнить все данные!',
        message:'',
        type:'error',
      })
  }
}
onMounted(() => {
  store_times.fetchDate();
});
</script>
<style>
.news-title-two{
  text-transform: uppercase;
  color: black;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  width: 53%;
  margin-left: 15%;
}
.news {
  position: relative;
}
.news-triangles {
  position: absolute;
  width: 20%;
  right: 0px;
  z-index: -1;
}
.news-milon {
  font-size: 60px;
  font-weight: 900;
  text-transform: uppercase;
  color: #bedcda;
  margin-left: 17%;
}
.news-milon-span {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: black;
  top: 30px;
  left: 27.7%;
  position: absolute;
}

.news-title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  width: 70%;
  margin-left: 20.5%;
  padding-bottom: 20px;
}
.news-text {
  font-size: 14px;
  font-weight: 400;
  width: 70%;
  margin-left: 20.5%;
}
.news-text-color {
  color: #2e928e;
}
.news-img {
  width: 40%;
  margin-left: 10%;
  margin-top: 40px;
}
.form-registration {
  position: relative;
}
.form-registration-line {
  position: absolute;
  width: 32%;
  z-index: -1;
  top: 40px;
}
.registration-input {
  display: block;
  width: 25%;
  height: 50px;
  background: #d6d8d6;
  border: none;
  border-radius: 15px;
  color: black;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
}
.registration-input-text {
  display: block;
  width: 25%;
  height: 80px;
  background: #d6d8d6;
  border: none;
  border-radius: 15px;
  color: black;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.form-registration-title {
  text-transform: uppercase;
  color: black;
  padding-top: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.form-registration {
  padding-bottom: 40px;
}
.couple {
  background: #419793;
}
.couple-text {
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-align: center;
  width: 55%;
  margin-left: 50%;
  padding-top: 140px;
}
.couple-img {
  padding-top: 80px;
  width: 60%;
}
.news-about {
  position: relative;
}
.news-about-rounds {
  position: absolute;
  z-index: -1;
  right: 0px;
  top: 200px;
  width: 13%;
}
.news-about-titles {
  text-transform: uppercase;
  color: black;
  padding-top: 50px;
  margin-left: 30%;
  font-size: 24px;
  font-weight: 800;
}
.news-about-title {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  margin-left: 40%;
  padding-top: 40px;
}
.news-about-text {
  font-size: 14px;
  font-weight: 300;
  margin-left: 40%;
  width: 53%;
  padding-top: 20px;
}
.news-about-img {
  width: 50%;
  margin-top: 60px;
}
.news-about-img-two {
  width: 50%;
  margin-top: 40px;
  margin-left: 40%;
}
.news-about-text-two {
  font-size: 14px;
  font-weight: 300;
  width: 57%;
  padding-top: 20px;
}
.news-about-text-three {
  font-size: 14px;
  font-weight: 300;
  margin-left: 40%;
  width: 53%;
  padding-top: 40px;
}
.news-about-img-three {
  width: 50%;
  margin-top: 20px;
}
.challenge {
  background: url(../assets/img/bck_green2.png);
}
.challenge-title {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;
  padding-top: 350px;
}
.challenge-text {
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding-top: 60px;
  padding-bottom: 100px;
  width: 50%;
  margin: auto;
}
.challenge-text-bond {
  font-weight: 600;
}
.modal-window {
  position: fixed;
  top: 20%;
  margin-left: 35%;
  border-radius: 15px;
  z-index: 3;
  width: 30%;
  height: 200px;
  background: rgb(220, 223, 224);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-window-text {
  font-size: 16px;
  width: 80%;
}
.buttons {
  display: flex;
  justify-content: center;
}
.sistem-title-video{
  text-transform: uppercase;
    color: black;
    padding-top: 50px;
    margin: auto;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    width: 53%;
}
.registration-button {
  width: 100px;
  height: 50px;
  border-radius: 14px;
  font-size: 16px;
  background: #dbdedf;
  margin-left: 5px;
  margin-right: 5px;
}
.registration-button-active {
  width: 100px;
  height: 50px;
  border-radius: 14px;
  font-size: 16px;
  background: #dbdedf;
  margin-left: 5px;
  margin-right: 5px;
  border: 2px solid #419793;
}
.timeSlotContainer {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 30%;
  flex-wrap: wrap;
  margin-top: 10px;
}
.timeSlotButton {
  width: 85px;
  height: 60px;
  border-radius: 14px;
  font-size: 16px;
  background: #dbdedf;
  margin: 7px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
}
.timeSlotButton-active {
  width: 85px;
  height: 60px;
  border-radius: 14px;
  font-size: 16px;
  background: #dbdedf;
  margin: 7px;
  padding: 5px 10px;
  text-align: center;
  border: 2px solid #419793;
  cursor: pointer;
}
.news-container {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
}
.news-video-container {
  width: 300px;
  height: 500px;
  border: 25px solid #dbdedf;
  border-radius: 15px;
  margin-top: 80px;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  margin-left: 2%;
  margin-right: 2%;
}

@media screen and (min-width: 1800px) {
  .news-title {
    margin-left: 30%;
  }
  .news-text {
    margin-left: 30%;
  }
  .couple-text {
    font-size: 30px;
  }
  .news-about-title {
    font-size: 20px;
  }
  .news-about-text {
    font-size: 18px;
    line-height: 30px;
    width: 30%;
  }
  .news-about-text-two {
    font-size: 18px;
    line-height: 30px;
    width: 40%;
  }
  .news-about-text-three {
    font-size: 18px;
    line-height: 30px;
    width: 40%;
  }
}
@media screen and (max-width: 1200px) {
  .couple-text {
    margin-left: 30%;
    padding-top: 60px;
  }
}
@media screen and (max-width: 1000px) {
  .timeSlotContainer {
    width: 60%;
  }
  .news-title {
    font-size: 18px;
  }
  .news-text {
    font-size: 12px;
    width: 80%;
  }
  .news-img {
    width: 280px;
  }
  .couple-text {
    font-size: 18px;
    padding-top: 40px;
  }
  .challenge-title {
    width: 80%;
    margin: auto;
  }
}
@media screen and (max-width: 768px) {

  .mar {
    display: block;
    margin: auto;
    margin-top: 30px;
  }
  .news-title {
    font-size: 14px;
    margin: auto;
    text-align: center;
  }
  .news-text {
    line-height: 15px;
    text-align: center;
    width: 70%;
    margin: auto;
  }
  .registration-input {
    width: 270px;
  }
  .registration-input-text {
    width: 270px;
  }
  .news-about-title {
    margin: auto;
    text-align: center;
  }
  .news-about-text {
    width: 70%;
    margin-left: 20%;
  }
  .news-about-text-two {
    width: 80%;
    font-size: 13px;
    margin-left: 10%;
  }
  .news-about-text-three {
    width: 80%;
    margin-left: 10%;
  }
  .news-about-img {
    width: 250px;
    margin: auto;
    margin-top: 30px;
  }

  .news-about-img-two {
    width: 250px;
    margin-top: 30px;
    margin-left: 40%;
  }
  .news-about-img-three {
    width: 250px;
    margin-left: 40%;
  }
  .challenge-text {
    width: 70%;
  }
  .news-img {
    width: 230px;
    margin: auto;
    margin-top: 40px;
  }
  .couple-text {
    font-size: 15px;
    width: 80%;
    margin-left: 20%;
  }
  .news-video-container {
    width: 250px;
    height: 400px;
    margin-left: 4%;
    margin-right: 4%;
  }
  .news-about-titles {
    text-align: center;
    margin: auto;
  }
}
@media screen and (max-width: 767px) {
  .news-about-text{
    margin: auto;
    text-align: justify;
  }
  .news-title-two{
    margin: auto;
  }
  .news-about-img-two{
    margin: auto;
    margin-top: 30px;
  }
  .news-about-text-two{
    margin: auto;
    text-align: justify;
  }
  .news-about-text-three{
    margin: auto;
    text-align: justify;
  }
  .news-about-img-three{
    margin: auto;
    margin-top: 30px;
  }
}
@media screen and (max-width: 650px) {
  .challenge-text {
    font-size: 13px;
  }
  .challenge-title {
    font-size: 18px;
  }
  .news-video-container {
    width: 210px;
    height: 300px;
    border: 15px solid #dbdedf;
    margin-left: 4%;
    margin-right: 4%;
  }
}
@media screen and (max-width: 500px) {
  .news-about-titles{
    font-size: 20px;
  }
  .news-title-two{
    font-size: 20px;
  }
  .news-container {
    padding-bottom: 40px;
  }
  .news-video-container {
    width: 400px;
    height: 300px;
    border: 15px solid #dbdedf;
    margin-left: 4%;
    margin-right: 4%;
  }
  .news-title {
    font-size: 13px;
  }
  .news-text {
    font-size: 11px;
  }
  .couple-img {
    width: 80%;
  }
  .sistem-title {
    width: 70%;
  }
  .challenge-text {
    padding-top: 30px;
  }
  .challenge-title {
    font-size: 14px;
    line-height: 16px;
  }
  .challenge-text {
    font-size: 12px;
    width: 80%;
    line-height: 15px;
  }
  .sistem-title-video{
    font-size: 18px;
  }
}
</style>