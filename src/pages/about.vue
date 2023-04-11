<template>
  <div>
    <main>
      <section class="video">
        <img
          class="video-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <div class="player-container">
          <iframe class="video-player" src="https://www.youtube.com/embed/kRjH-kQ1sUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
      </section>
      <section class="features">
        <img
          class="features-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <h3 class="features-title">{{ $t("features.features-title") }}</h3>
        <p class="features-text">
          {{ $t("features.features-text-one") }}
          <br /><br />
          {{ $t("features.features-text-two") }}
          <br /><br />
          {{ $t("features.features-text-three") }}
        </p>
      </section>
      <section class="programs">
        <img
          class="programs-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h3 class="features-title">
          {{ $t("programs.programs-title") }}
        </h3>
        <div class="pad">
          <div class="programs-item">
            {{ $t("programs.programs-item-one") }}
          </div>
          <div class="programs-item">
            {{ $t("programs.programs-item-two") }}
          </div>
          <div class="programs-item">
            {{ $t("programs.programs-item-three") }}
          </div>
          <div class="programs-item">
            {{ $t("programs.programs-item-four") }}
          </div>
          <div class="programs-item">
            {{ $t("programs.programs-item-five") }}
          </div>
        </div>
      </section>
      <section class="what-can">
        <h3 class="features-title">{{ $t("what-can.what-can-title") }}</h3>
        <div class="what-can-block-first">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">1</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("what-can.what-can-block-title-one") }}
              </h3>
              <p class="what-can-block-text">
                {{ $t("what-can.what-can-block-text-one") }}
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="what-can-block-second">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">2</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("what-can.what-can-block-title-two") }}
              </h3>
              <p class="what-can-block-text">
                {{ $t("what-can.what-can-block-text-two") }}
              </p></el-col
            >
          </el-row>
        </div>
        <div class="what-can-block-third">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">3</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("what-can.what-can-block-title-three") }}
              </h3>
              <p class="what-can-block-text">
                {{ $t("what-can.what-can-block-text-three") }}
              </p></el-col
            >
          </el-row>
        </div>
      </section>
      <section class="safety">
        <h3 class="safety-title">{{ $t("safety.safety-title-one") }}</h3>
        <p class="safety-text">
          {{ $t("safety.safety-text-one") }}
        </p>
        <h3 class="safety-title-second">{{ $t("safety.safety-title-two") }}</h3>
        <p class="safety-text">
          {{ $t("safety.safety-text-two") }}
        </p>
      </section>
      <section class="our-trainers">
        <h3 class="our-trainers-title">
          {{ $t("our-trainers.our-trainers-title") }}
        </h3>
        <div class="our-trainers-container">
          <div class="our-trainers-container-background">
            <img
              class="our-trainers-container-img"
              src="https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI="
              alt=""
            />
            <h4 class="our-trainers-container-title">
              {{ $t("our-trainers.our-trainer-one") }}
            </h4>
            <p class="our-trainers-container-text">
              {{ $t("our-trainers.our-trainer-description-one") }}
            </p>
          </div>
          <div class="our-trainers-container-background">
            <img
              class="our-trainers-container-img"
              src="https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI="
              alt=""
            />
            <h4 class="our-trainers-container-title">
              {{ $t("our-trainers.our-trainer-two") }}
            </h4>
            <p class="our-trainers-container-text">
              {{ $t("our-trainers.our-trainer-description-two") }}
            </p>
          </div>
          <div class="our-trainers-container-background">
            <img
              class="our-trainers-container-img"
              src="https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI="
              alt=""
            />
            <h4 class="our-trainers-container-title">
              {{ $t("our-trainers.our-trainer-three") }}
            </h4>
            <p class="our-trainers-container-text">
              {{ $t("our-trainers.our-trainer-description-three") }}
            </p>
          </div>
          <div class="our-trainers-container-background">
            <img
              class="our-trainers-container-img"
              src="https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI="
              alt=""
            />
            <h4 class="our-trainers-container-title">
              {{ $t("our-trainers.our-trainer-four") }}
            </h4>
            <p class="our-trainers-container-text">
              {{ $t("our-trainers.our-trainer-description-four") }}
            </p>
          </div>
        </div>
      </section>
<Diagnostic id="diagnostics"></Diagnostic>
    </main>
    <footer></footer>
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
useHead({
  titleTemplate: "Milon - О нас ",
  meta: [
    { name: "О нас", content: "система тренировок" },
    { name: "Программа тренировок", content: "оздоровительный фитнес" },
    { name: "Система Milon", content: "определение индивидуальных нагрузок" },
    { name: "Smart-тренажеры", content: "безопасная траектория и скорость движения суставов" },
  ]
});

</script>
<style>
.video {
  position: relative;
}
.video-triangles {
  position: absolute;
  width: 23%;
  right: 0px;
  z-index: -1;
}
.video-player{
  width:100%;
  height:350px;
}
.player-container{
  width: 50%;
  height: 400px;
  display: block;
  margin: auto;
  border: 25px solid #dbdedf;
  border-radius: 15px;
  margin-top: 80px;
  cursor: pointer;
  -webkit-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 12px 26px 3px rgba(34, 60, 80, 0.2);
}
.features {
  position: relative;
}
.features-line {
  position: absolute;
  width: 28%;
  top: 80px;
  z-index: -1;
}
.features-title {
  width: 80%;
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  padding-top: 90px;
  padding-bottom: 90px;
  z-index: 2;
  margin: auto;
}
.features-text {
  text-align: left;
  width: 61%;
  font-size: 18px;
  margin: auto;
  padding-bottom: 100px;
}
.programs {
  background: #f3f3f4;
  position: relative;
}
.programs-rounds {
  position: absolute;
  width: 13%;
  right: 0px;
  z-index: 0;
}
.programs-item {
  background: #6ebcbd;
  width: 32%;
  height: 110px;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  font-size: 22px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
}
.what-can-block-first {
  width: 50%;
  height: 200px;
  border-radius: 15px;
  background: #6ebcbd;
  margin: auto;
  margin-bottom: 30px;
}
.what-can-block-second {
  width: 50%;
  height: 200px;
  border-radius: 15px;
  background: #41aba8;
  margin: auto;
  margin-bottom: 30px;
}
.what-can-block-third {
  width: 50%;
  height: 280px;
  border-radius: 15px;
  background: #2c9a93;
  margin: auto;
  margin-bottom: 30px;
}
.what-can-block-number {
  height: 200px;
  font-size: 180px;
  font-weight: 900;
  color: rgb(255, 255, 255, 0.4);
  margin-top: -35px;
  margin-left: 30%;
}
.what-can-block-title {
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  font-weight: 600;
  width: 80%;
  margin-top: 15px;
  margin-left: 3%;
}
.what-can-block-text {
  font-size: 16px;
  font-weight: 500;
  color: white;
  width: 86%;
  margin-top: 15px;
  margin-left: 3%;
  line-height: 18px;
}
.safety {
  background: url(../assets/img/bck_green2.png);
}
.safety-title {
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  padding-top: 290px;
  padding-bottom: 30px;
  color: white;
}
.safety-title-second {
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  padding-bottom: 30px;
  color: white;
}
.safety-text {
  color: white;
  font-size: 16px;
  width: 60%;
  margin-left: 20%;
  padding-bottom: 90px;
}
.our-trainers-title {
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.our-trainers-container {
  display: flex;
  justify-content: center;
}
.our-trainers-container-background {
  width: 15%;
  height: 500px;
  background: #f7f4f4;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.our-trainers-container-img {
  padding-top: 10px;
  width: 90%;
  margin: auto;
}
.our-trainers-container-title {
  text-transform: uppercase;
  font-weight: 300;
  color: #3b8f8b;
  text-align: center;
  margin-top: 15px;
  font-size: 18px;
}
.our-trainers-container-text {
  font-size: 10px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
}

@media screen and (min-width: 1730px) {
  .our-trainers-container-background{
    height: 700px;
  }
  .our-trainers-container-title{
    font-size: 20px;
  }
  .our-trainers-container-text{
    font-size: 16px;
  }

}
@media screen and (max-width: 1200px) {
  .what-can-block-title {
    font-size: 16px;
    margin-left: 5%;
  }
  .what-can-block-text {
    font-size: 12px;
    margin-left: 5%;
  }
  .what-can-block-number {
    margin-left: 0%;
  }
}
@media screen and (max-width: 1050px) {
  .what-can-block-first {
    width: 520px;
  }
  .what-can-block-second {
    width: 520px;
  }
  .what-can-block-third {
    width: 520px;
    margin-bottom: 0px;
  }
  .our-trainers-container-background {
    height: 400px;
  }
  .features-text {
    font-size: 14px;
  }
  .programs-item {
    width: 350px;
  }
}
@media screen and (max-width: 900px) {
  .features-title {
    padding-bottom: 40px;
  }
  .safety-title {
    font-size: 22px;
  }
  .safety-title-second {
    font-size: 22px;
  }
  .safety-text {
    font-size: 14px;
    padding-bottom: 50px;
  }
  .our-trainers-container-title {
    font-size: 15px;
  }
  .our-trainers-container-text {
    font-size: 9px;
  }
}
@media screen and (max-width: 850px) {
  .prices-container-promotion{
    padding-top: 70px;
  }
}

@media screen and (max-width: 768px) {
  .mar {
    display: block;
    margin: auto;
    margin-top: 30px;
  }
  .our-trainers-container-background {
    width: 120px;
  }
}
@media screen and (max-width: 600px) {
  .what-can-block-first {
    width: 450px;
  }
  .what-can-block-second {
    width: 450px;
  }
  .what-can-block-third {
    width: 450px;
  }
  .what-can-block-title {
    font-size: 15px;
  }
 
  .video-img {
    width: 370px;
  }
  .features-text {
    font-size: 12px;
  }
  .safety-title {
    padding-top: 330px;
  }
  .features-title {
    font-size: 22px;
    padding-top: 50px;
  }
}
@media screen and (max-width: 500px) {
  .our-trainers-container-background {
    width: 110px;
  }
  .our-trainers-container-title {
    font-size: 13px;
  }
  .our-trainers-container-text {
    font-size: 8px;
  }
  .features-text {
    padding-bottom: 50px;
    width: 80%;
  }
  .safety-text {
    font-size: 12px;
    width: 80%;
    margin: auto;
  }
}

</style>