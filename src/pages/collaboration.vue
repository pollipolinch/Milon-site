<template>
  <div>
    <main>
      <section class="cooperation">
        <img
          class="cooperation-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <img
          class="cooperation-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <h2 class="news-milon">Milon</h2>
        <span class="news-milon-span"> {{ $t("cooperation.title") }}</span>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <h4 class="cooperation-title">
              {{ $t("cooperation.title-two") }}
            </h4>
            <p class="cooperation-title-next">
              {{ $t("cooperation.text-one") }}
            </p>
            <p class="cooperation-text">
              {{ $t("cooperation.text-two") }}<br />
              {{ $t("cooperation.text-three") }}<br />
              {{ $t("cooperation.text-four") }}<br /><br />
              {{ $t("cooperation.text-five") }}<br /><br />
              {{ $t("cooperation.text-six") }}<br /><br /><span
                class="cooperation-text-color"
              >
                {{ $t("cooperation.text-seven") }}</span
              >
            </p>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <img
              class="cooperation-couple-img"
              src="../assets/img/couple.png"
              alt=""
          /></el-col>
        </el-row>
        <img class="cooperation-photos" src="../assets/img/photos.png" alt="" />
      </section>
      <section class="cooperation-why">
        <img
          class="cooperation-why-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h3 class="cooperation-why-title">
          {{ $t("cooperation-why.title") }}
        </h3>
        <div class="cooperation-why-container">
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-two") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-one") }}
            </p>
          </div>
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-three") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-two") }}<br />
              {{ $t("cooperation-why.text-three") }}
            </p>
          </div>
        </div>
        <div class="cooperation-why-container">
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-four") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-four") }}<br /><br />
              {{ $t("cooperation-why.text-five") }}
            </p>
          </div>
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-five") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-six") }}
            </p>
          </div>
        </div>
        <div style="padding-bottom: 80px" class="cooperation-why-container">
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-six") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-seven") }}
            </p>
          </div>
          <div class="cooperation-why-background">
            <h4 class="cooperation-why-container-title">
              {{ $t("cooperation-why.title-seven") }}
            </h4>
            <p class="cooperation-why-container-text">
              {{ $t("cooperation-why.text-eight") }}
            </p>
          </div>
        </div>
      </section>
      <section class="cooperation-advantages">
        <h3 class="cooperation-why-title">
          {{ $t("cooperation-advantages.title") }}
        </h3>
        <div class="cooperation-advantages-block-first">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">1</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("cooperation-advantages.table-title-one") }}
              </h3>
              <p class="cooperation-advantages-text">
                {{ $t("cooperation-advantages.table-text-one-one")
                }}<br /><br />
                {{ $t("cooperation-advantages.table-text-one-two") }}
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="cooperation-advantages-block-second">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">2</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("cooperation-advantages.table-title-two") }}
              </h3>
              <p class="cooperation-advantages-text">
                {{ $t("cooperation-advantages.table-text-two-one")
                }}<br /><br />
                {{ $t("cooperation-advantages.table-text-two-two") }}
              </p></el-col
            >
          </el-row>
        </div>
        <div class="cooperation-advantages-block-third">
          <el-row>
            <el-col :span="4"><h4 class="what-can-block-number">3</h4></el-col>
            <el-col :span="20">
              <h3 class="what-can-block-title">
                {{ $t("cooperation-advantages.table-title-three") }}
              </h3>
              <p class="cooperation-advantages-text">
                {{ $t("cooperation-advantages.table-text-three-one")
                }}<br /><br />
                {{ $t("cooperation-advantages.table-text-three-two") }}
              </p></el-col
            >
          </el-row>
        </div>
      </section>
      <section class="advantages-table">
        <el-row>
          <el-col :span="12">
            <h4 class="advantages-table-title">
              {{ $t("advantages-table.table-title-one") }}
            </h4>
            <div style="border-right: 3px solid white; margin-bottom: 80px">
              <div class="advantages-table-container">
                <div class="advantages-table-container-mini">
                  <img
                    class="advantages-table-plus"
                    src="../assets/img/plus.png"
                    alt=""
                  />
                </div>
                <p class="advantages-table-discription">
                  {{ $t("advantages-table.plus-one") }}
                </p>
              </div>
              <div class="advantages-table-container">
                <div class="advantages-table-container-mini">
                  <img
                    class="advantages-table-plus"
                    src="../assets/img/plus.png"
                    alt=""
                  />
                </div>
                <p class="advantages-table-discription">
                  {{ $t("advantages-table.plus-two") }}
                </p>
              </div>
              <div class="advantages-table-container">
                <div class="advantages-table-container-mini">
                  <img
                    class="advantages-table-plus"
                    src="../assets/img/plus.png"
                    alt=""
                  />
                </div>
                <p class="advantages-table-discription">
                  {{ $t("advantages-table.plus-three") }}
                </p>
              </div>
              <div class="advantages-table-container">
                <div class="advantages-table-container-mini">
                  <img
                    class="advantages-table-plus"
                    src="../assets/img/plus.png"
                    alt=""
                  />
                </div>
                <p class="advantages-table-discription">
                  {{ $t("advantages-table.plus-four") }}
                </p>
              </div>
              <div class="advantages-table-container">
                <div class="advantages-table-container-mini">
                  <img
                    class="advantages-table-plus"
                    src="../assets/img/plus.png"
                    alt=""
                  />
                </div>
                <p class="advantages-table-discription">
                  {{ $t("advantages-table.plus-five") }}
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <h4 class="advantages-table-title">
              {{ $t("advantages-table.table-title-two") }}
            </h4>
            <div class="advantages-table-container-minus">
              <div class="advantages-table-container-mini">
                <img
                  class="advantages-table-minus"
                  src="../assets/img/minus.png"
                  alt=""
                />
              </div>
              <p class="advantages-table-discription">
                {{ $t("advantages-table.minus-one") }}
              </p>
            </div>
            <div class="advantages-table-container-minus">
              <div class="advantages-table-container-mini">
                <img
                  class="advantages-table-minus"
                  src="../assets/img/minus.png"
                  alt=""
                />
              </div>
              <p class="advantages-table-discription">
                {{ $t("advantages-table.minus-two") }}
              </p>
            </div>
            <div class="advantages-table-container-minus">
              <div class="advantages-table-container-mini">
                <img
                  class="advantages-table-minus"
                  src="../assets/img/minus.png"
                  alt=""
                />
              </div>
              <p class="advantages-table-discription">
                {{ $t("advantages-table.minus-three") }}
              </p>
            </div>
            <div class="advantages-table-container-minus">
              <div class="advantages-table-container-mini">
                <img
                  class="advantages-table-minus"
                  src="../assets/img/minus.png"
                  alt=""
                />
              </div>
              <p class="advantages-table-discription">
                {{ $t("advantages-table.minus-four") }}
              </p>
            </div>
            <div class="advantages-table-container-minus">
              <div class="advantages-table-container-mini">
                <img
                  class="advantages-table-minus"
                  src="../assets/img/minus.png"
                  alt=""
                />
              </div>
              <p class="advantages-table-discription">
                {{ $t("advantages-table.minus-five") }}
              </p>
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="training">
        <img v-if="locale.currentLocaleHandler.value=='ru'"
          class="training-img"
          src="../assets/img/milon_trenazhery.png"
          alt=""
        />
        <img v-if="locale.currentLocaleHandler.value=='uz'"
          class="training-img"
          src="../assets/img/milon_trenazhery_uz.png"
          alt=""
        />
      </section>
      <section class="buy-abonement">
        <img
          class="buy-abonement-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <p class="buy-abonement-text">
          {{ $t("buy-abonement.text") }}
        </p>
        <div class="buy-abonement-container">
          <div class="buy-abonement-container-back">
            <h3 class="buy-abonement-container-number-text">
              до<span class="buy-abonement-container-number">10</span><br />
              <span class="buy-abonement-container-title">
                {{ $t("buy-abonement.abonement-one") }}</span
              >
            </h3>
            <h5 class="buy-abonement-container-sale">
              {{ $t("buy-abonement.sale-one") }}
            </h5>
            <a href="#buy"> <button class="buy-abonement-container-button">
              {{ $t("buy-abonement.buy") }}
            </button></a>
          </div>
          <div class="buy-abonement-container-back">
            <h3 class="buy-abonement-container-number-text">
              <span class="buy-abonement-container-number">10+</span>
              <span class="buy-abonement-container-title">
                {{ $t("buy-abonement.abonement-one") }}</span
              >
            </h3>
            <h5 class="buy-abonement-container-sale">
              {{ $t("buy-abonement.sale-two") }}
            </h5>
            <a href="#buy"> <button class="buy-abonement-container-button">
              {{ $t("buy-abonement.buy") }}
            </button></a>
          </div>
          <div class="buy-abonement-container-back">
            <h3 class="buy-abonement-container-number-text">
              <span class="buy-abonement-container-number">20+</span><br />
              <span class="buy-abonement-container-title">{{
                $t("buy-abonement.abonement-one")
              }}</span>
            </h3>
            <h5 class="buy-abonement-container-sale">
              {{ $t("buy-abonement.sale-three") }}
            </h5>
            <a href="#buy"> <button class="buy-abonement-container-button">
              {{ $t("buy-abonement.buy") }}
            </button></a>
          </div>
          <div class="buy-abonement-container-back">
            <h3 class="buy-abonement-container-number-text">
              <span class="buy-abonement-container-number">50+</span><br />
              <span class="buy-abonement-container-title">{{
                $t("buy-abonement.abonement-one")
              }}</span>
            </h3>
            <h5 class="buy-abonement-container-sale">
              {{ $t("buy-abonement.sale-four") }}
            </h5>
            <a href="#buy"> <button class="buy-abonement-container-button">
              {{ $t("buy-abonement.buy") }}
            </button></a>
          </div>
          <div class="buy-abonement-container-back">
            <h3 class="buy-abonement-container-number-text">
              <span class="buy-abonement-container-number">100+</span><br />
              <span class="buy-abonement-container-title">{{
                $t("buy-abonement.abonement-one")
              }}</span>
            </h3>
            <h5 class="buy-abonement-container-sale">
              {{ $t("buy-abonement.sale-five") }}
            </h5>
            <a href="#buy"> <button class="buy-abonement-container-button">
              {{ $t("buy-abonement.buy") }}
            </button></a>
          </div>
        </div>
        <p class="buy-abonement-text-down">
          {{ $t("buy-abonement.text-two") }}
        </p>
      </section>
      <section class="choose-abonement" id="buy">
        <h3 class="cooperation-why-title">
          {{ $t("choose-abonement.title") }}
        </h3>
        <div class="choose-abonement-container">
          <div class="choose-abonement-container-one">
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-one") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-two") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-three") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-four") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-five") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-six") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-seven") }}<br /><span
                class="choose-abonement-container-one-title-span"
                >{{ $t("choose-abonement.table-title-eight") }}</span
              >
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-nine") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-ten") }}
            </h4>
            <h4 class="choose-abonement-container-one-title">
              {{ $t("choose-abonement.table-title-eleven") }}
            </h4>
          </div>
          <div class="choose-abonement-container-two">
            <h4 class="choose-abonement-container-title">
              {{ $t("choose-abonement.table-title-twelve") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-cross"
              src="../assets/img/bullet6.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-one") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-two") }}
            </h4>
            <h4 class="choose-abonement-container-title">
              900 000<br />{{ $t("prices.prices") }}
            </h4>
          </div>
          <div class="choose-abonement-container-two">
            <h4 class="choose-abonement-container-title">
              {{ $t("choose-abonement.table-title-thirteen") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-three") }}
            </h4>
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-one") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-four") }}
            </h4>
            <h4 class="choose-abonement-container-title">
              2 100 000<br />{{ $t("prices.prices") }}
            </h4>
          </div>
          <div class="choose-abonement-container-two">
            <h4 class="choose-abonement-container-title">
              {{ $t("choose-abonement.table-title-fourteen") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-five") }}
            </h4>
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-one") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet4.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-six") }}
            </h4>
            <h4 class="choose-abonement-container-title">
              3 900 000<br />{{ $t("prices.prices") }}
            </h4>
          </div>
          <div class="choose-abonement-container-two">
            <h4 class="choose-abonement-container-title">
              {{ $t("choose-abonement.table-title-fifteen")
              }}<span class="choose-abonement-container-title-color">{{
                $t("choose-abonement.table-title-sixteen")
              }}</span>
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-cross"
              src="../assets/img/bullet6.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text-color">
              {{ $t("choose-abonement.table-text-one") }}
            </h4>
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <img
              class="choose-abonement-container-check"
              src="../assets/img/bullet5.png"
              alt=""
            />
            <h4 class="choose-abonement-container-text">
              {{ $t("choose-abonement.table-text-two") }}
            </h4>
            <h4 class="choose-abonement-container-title">
              600 000<br />{{ $t("prices.prices") }}
            </h4>
          </div>
        </div>
        <h5 class="choose-abonement-question">
          {{ $t("choose-abonement.question") }}
        </h5>
        <p class="choose-abonement-question-text">
          {{ $t("choose-abonement.text") }}
          <a class="choose-abonement-question-number" href="tel:+998909839000"
                    >+998 90 983 90 00</a
          >
        </p>
      </section>
    </main>
  </div>
</template>
<script setup>
import { ElRow, ElCol, ElCollapse, ElCollapseItem } from "element-plus";
import { useLocaleStore } from "~/store/Locale/index";
useHead({
  titleTemplate: "Milon - сотрудничество",
  meta: [
    { name: "Milon Premium Health Clubs", content: "уникальная технология фитнеса 21 века" },
    { name: "методика тренировок", content: "помогает достичь самого лучшего результата" },
    { name: "тренажеры", content: "8 видов тренажеров: из них 6-силовые и 2-кардио тренажеры" },
    { name: "круг тренировок", content: "круг тренировки занимает 17,5 минут." },
  ]
});
const locale = useLocaleStore()
</script>
<style>
.cooperation {
  position: relative;
}
.cooperation-triangles {
  position: absolute;
  right: 0px;
  width: 16%;
  z-index: -1;
  top: 240px;
}
.cooperation-line {
  position: absolute;
  left: 0px;
  width: 30%;
  z-index: -1;
  top: 628px;
}
.cooperation-title {
  text-transform: uppercase;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20%;
  font-size: 22px;
  font-weight: 500;
  width: 95%;
  line-height: 30px;
}
.cooperation-title-next {
  margin-left: 20%;
  color: #2e928e;
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 20px;
}
.cooperation-text {
  margin-left: 20%;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}
.cooperation-text-color {
  color: #2e928e;
}
.cooperation-couple-img {
  width: 500px;
  margin-left: 15%;
  margin-top: 40px;
}
.cooperation-photos {
  padding-top: 70px;
  padding-bottom: 70px;
  width: 70%;
  display: block;
  margin: auto;
}
.cooperation-why {
  background: #f3f3f4;
  position: relative;
}
.cooperation-why-rounds {
  position: absolute;
  width: 10%;
  right: 0px;
  top: 80px;
  z-index: 0;
}
.cooperation-why-title {
  text-transform: uppercase;
  color: black;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
}
.cooperation-why-container {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  flex-wrap: wrap;
}
.cooperation-why-background {
  width: 420px;
  height: 160px;
  background: white;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 15px;
  z-index: 1;
}
.cooperation-why-container-title {
  color: #1f837a;
  font-size: 15px;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 30px;
}
.cooperation-why-container-text {
  font-size: 14px;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 30px;
  width: 360px;
  line-height: 18px;
}
.cooperation-advantages-text {
  font-size: 14px;
  font-weight: 500;
  color: white;
  width: 86%;
  margin-top: 15px;
  margin-left: 3%;
  line-height: 18px;
}
.cooperation-advantages-block-first {
  width: 50%;
  height: 200px;
  border-radius: 15px;
  background: #6ebcbd;
  margin: auto;
  margin-bottom: 30px;
}
.cooperation-advantages-block-second {
  width: 50%;
  height: 250px;
  border-radius: 15px;
  background: #41aba8;
  margin: auto;
  margin-bottom: 30px;
}
.cooperation-advantages-block-third {
  width: 50%;
  height: 250px;
  border-radius: 15px;
  background: #2c9a93;
  margin: auto;
  margin-bottom: 30px;
}
.advantages-table {
  background: url(../assets/img/bck_green2.png);
}
.advantages-table-title {
  padding-top: 300px;
  color: white;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
}
.advantages-table-container {
  display: flex;
  margin-left: 10%;
  margin-top: 20px;
}
.advantages-table-container-minus {
  display: flex;
  margin-left: 5%;
  margin-top: 25px;
}
.advantages-table-container-mini {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.advantages-table-discription {
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  width: 90%;
}
.training-img {
  width: 70%;
  display: block;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.buy-abonement {
  background: #f3f3f4;
  position: relative;
}
.buy-abonement-rounds {
  transform: rotate(180deg);
  position: absolute;
  width: 10%;
  top: 100px;
  z-index: 0;
}
.buy-abonement-text {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  padding-top: 80px;
  width: 55%;
  margin: auto;
  padding-bottom: 80px;
}
.buy-abonement-text-down {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  padding-top: 80px;
  width: 55%;
  margin: auto;
  padding-bottom: 140px;
}
.buy-abonement-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.buy-abonement-container-back {
  width: 190px;
  height: 250px;
  background: white;
  margin-top: 20px;
  border-radius: 15px;
  margin-left: 1%;
  margin-right: 1%;
  z-index: 1;
}
.buy-abonement-container-number-text {
  width: 80%;
  color: #979599;
  font-size: 38px;
  font-weight: 900;
  margin: 0 auto;
  line-height: 30px;
  padding-top: 50px;
}
.buy-abonement-container-number {
  font-size: 70px;
  font-weight: 900;
}
.buy-abonement-container-title {
  font-size: 20px;
  font-weight: 500;
  width: 80%;
  margin-left: 5%;
  display: block;
  color: black;
}
.buy-abonement-container-sale {
  color: #f1ab1d;
  width: 90%;
  margin: auto;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  padding-top: 10px;
}
.buy-abonement-container-button {
  width: 50%;
  height: 20px;
  background: #979599;
  color: white;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 800;
  margin: 0 auto;
  display: block;
  margin-top: 25px;
  transition: 0.5s;
}
.buy-abonement-container-button:hover {
  background: #f1ab1d;
}
.choose-abonement-container {
  display: flex;
  justify-content: center;
}
.choose-abonement-container-one {
  width: 13%;
  padding-top: 65px;
  padding-bottom: 50px;
}
.choose-abonement-container-two {
  width: 14%;
  border-left: 1px solid #979599;
}
.choose-abonement-container-one-title {
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  margin-right: 4%;
  width: 80%;
  height: 59px;
  line-height: 15px;
}
.choose-abonement-container-one-title-span {
  font-size: 12px;
}
.choose-abonement-container-title {
  height: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  width: 70%;
  margin: auto;
  padding-bottom: 10px;
}
.choose-abonement-container-text {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  width: 70%;
  color: #2e928e;
  margin: auto;
  padding-top: 14px;
  padding-bottom: 10px;
  height: 58px;
}
.choose-abonement-container-text-color {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  width: 70%;
  height: 58px;
  margin: auto;
  color: #e9a526;
  padding-top: 14px;
  padding-bottom: 10px;
}
.choose-abonement-container-check {
  width: 50px;
  height: 58px;
  display: block;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.choose-abonement-container-cross {
  width: 35px;
  height: 58px;
  display: block;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 3px;
}
.choose-abonement-question {
  padding-top: 90px;
  margin-left: 15%;
  font-size: 18px;
  font-weight: 600;
}
.choose-abonement-question-text {
  padding-top: 20px;
  margin-left: 15%;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 30%;
}
.choose-abonement-question-number {
  font-size: 16px;
  font-weight: 600;
  color: #2e928e;
  padding-bottom: 20px;
}

@media screen and (max-width: 1200px) {
  .cooperation-title {
    font-size: 20px;
  }
  .cooperation-title-next {
    font-size: 13px;
  }
  .cooperation-text {
    font-size: 12px;
  }
  .cooperation-couple-img {
    width: 400px;
  }
  .cooperation-advantages-block-first {
    width: 600px;
  }
  .cooperation-advantages-block-second {
    width: 600px;
  }
  .cooperation-advantages-block-third {
    width: 600px;
  }

  .cooperation-advantages-text {
    margin-left: 5%;
  }
  .advantages-table-discription {
    line-height: 16px;
    width: 80%;
  }
  .choose-abonement-container-one-title {
    font-size: 12px;
    line-height: 12px;
    height: 49px;
  }
  .choose-abonement-container-title {
    font-size: 12px;
  }
  .choose-abonement-container-check {
    width: 40px;
    height: 48px;
  }
  .choose-abonement-container-cross {
    width: 25px;
    height: 48px;
  }
  .choose-abonement-container-text {
    height: 48px;
  }
}
@media screen and (max-width: 992px) {
  .cooperation-title{
    width: 70%;
  }
  .cooperation-text{
    width: 65%;
  }
  .cooperation-couple-img{
    margin: auto;
    margin-top: 10px;
  }
  .cooperation-why-background{
    width: 350px;
  }
  .cooperation-why-container-title{
    font-size: 13px;
    width: 85%;
  }
  .cooperation-why-container-text{
    font-size: 13px;
    width: 80%;
  }
  .buy-abonement-container-back{
    width: 170px;
  }
  .buy-abonement-container-number-text{
    font-size: 20px;
  }
  .buy-abonement-container-sale{
    font-size: 20px;
  }
}
@media screen and (max-width: 780px) {
  .choose-abonement-container {
  justify-content: space-around;
}
  .choose-abonement-container-text{
    font-size: 10px;
  }
  .choose-abonement-container-title{
    font-size: 10px;
  }
  .choose-abonement-container-one-title{
    font-size: 10px;
    height: 42px;
  }
  .choose-abonement-container-one-title-span{
    font-size: 10px;
  }
  .choose-abonement-container-check{
    width: 30px;
    height: 40px;
  }
  .choose-abonement-container-text-color{
    font-size: 10px;
 height: 48px;
  }
  .choose-abonement-container-cross{
    width: 20px;
    height: 40px;
  margin-bottom: 10px;
  }
}
@media screen and (max-width: 729px) {
  .cooperation-why-background{
    width: 80%;
    margin-top: 15px;
  }
  .cooperation-why-container-title{
    margin: auto;
    margin-top: 15px;
    text-align: center;
    font-size: 18px;
  }
  .cooperation-why-container-text{
    font-size: 14px;
    margin: auto;
    margin-top: 15px;
    text-align: justify;
  }
  .cooperation-why-container{
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .buy-abonement-text-down{
    width:  80%;
    padding-bottom: 50px;
  }
  .advantages-table-title{
    padding-top: 330px;
    font-size: 20px;
  }
  .cooperation-why-title{
    width: 80%;
    margin: auto;
  }
  .cooperation-advantages-block-first{
    width: 500px;
  }
  .cooperation-advantages-block-second{
    width: 500px;
  }
  .cooperation-advantages-block-third{
    width: 500px;
  }
  .cooperation-title-next{
    width: 70%;
  }
  .training-img{
    width: 500px;
  }
 
}
@media screen and (max-width: 680px) {
  .advantages-table{
    background: #3c8f8b;
  }
  .advantages-table-title{
    padding-top: 40px;
  }
}

@media screen and (max-width: 630px) {
  .choose-abonement-container-one-title{
    font-size: 8px;
  }
  .choose-abonement-container-one-title-span{
    font-size: 8px;
  }
  .choose-abonement-question-text{
    width: 50%;
  }
  .advantages-table-discription{
    width: 70%;
  }
  .advantages-table-title{
    font-size: 16px;
  }
}
@media screen and (max-width: 530px) {
  .cooperation-couple-img{
    width: 200px;
  }
  .cooperation-title{
    font-size: 16px;
    margin: auto;
    width: 80%;
    text-align: center;
  }
  .cooperation-title-next{
    font-size: 12px;
    margin: auto;
    text-align: center;
  }
  .cooperation-text{
    margin: auto;
    font-size: 10px;
    width: 80%;
  }
  .cooperation-why-container-text{
    font-size: 12px;
  }
  .cooperation-advantages-block-first{
    width: 400px;
  }
  .cooperation-advantages-block-second{
    width: 400px;
  }
  .cooperation-advantages-block-third{
    width: 400px;
  }
  .cooperation-advantages-text{
    font-size: 12px;
    margin-left: 7%;
  }
  .advantages-table-discription{
    font-size: 12px;
  }
}
@media screen and (max-width: 500px) {
  .cooperation-photos{
    width: 100%;
  }
  .cooperation-why-background{
    height: 200px;
  }
}
@media screen and (max-width: 450px) {
  .choose-abonement-question-text{
    width: 70%;
  }
  .choose-abonement-container-cross{
    height: 43px;
  }
  .choose-abonement-container-one{
    width: 20%;
  }
  .choose-abonement-container-two{
    width: 20%;
  }
  .choose-abonement-container-text-color{
    width: 100%;
    font-size: 9px;
  }
  .choose-abonement-container-text{
    width: 100%;
    font-size: 9px;
  }
  .choose-abonement-container-title{
    font-size: 9px;
  }
  .buy-abonement-text{
    font-size: 14px;
  }
  .advantages-table-container-mini{
    margin-right: 3px;
  }
  .advantages-table-container{
    margin-top: 10px;
  }
  .advantages-table-plus{
    width: 30px;
  }
  .cooperation-advantages-block-first{
    width: 330px;
  }
  .cooperation-advantages-block-second{
    width: 330px;
    height: 300px;
  }
  .cooperation-advantages-block-third{
    width: 330px;
    height: 300px;
  }
}
@media screen and (max-width: 390px) {
  .cooperation-why-background{
    height: 230px;
  }
  .cooperation-advantages-block-first{
    width: 250px;
    height: 280px;
  }
  .cooperation-advantages-block-second{
    width: 250px;
    height: 340px;
  }
  .cooperation-advantages-block-third{
    width: 250px;
    height: 380px;
  }
  .advantages-table-container{
    margin-left: 1%;
  }
  .advantages-table-discription{
    width: 100%;
  }

}

</style>