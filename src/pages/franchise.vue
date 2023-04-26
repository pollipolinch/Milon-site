<template>
  <div>
    <main>
      <section class="franshiza-about">
        <img
          class="franshiza-about-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <h3 class="franshiza-about-title">
          {{ $t("franshiza-about.title") }}
        </h3>
        <h2 class="franshiza-about-lozung">
          {{ $t("lozung-section.lozung-color-one") }} -
          <span class="franshiza-about-lozung-two">
            {{ $t("lozung-section.lozung-color-two") }} -
          </span>
          <span class="franshiza-about-lozung-three">
            {{ $t("lozung-section.lozung-color-three") }}</span
          >
        </h2>
        <img
          class="franshiza-about-img"
          src="../assets/img/photos2.png"
          alt=""
        />
      </section>
      <section class="what-franshiza">
        <img
          class="what-franshiza-line"
          src="../assets/img/left_grey_line.png"
          alt=""
        />
        <h3 class="franshiza-about-title">
          {{ $t("franshiza-about.title-about") }}
        </h3>
        <h3 class="franshiza-about-title-color">
          {{ $t("franshiza-about.title-about-two") }}
        </h3>
        <div class="franshiza-about-container">
          <div>
            <h5 class="franshiza-about-container-title-color">
              {{ $t("franshiza-about.time") }}
            </h5>
            <img
              class="franshiza-about-container-img"
              src="../assets/img/35min_pic.png"
              alt=""
            />
            <h5 class="franshiza-about-container-title-color">
              {{ $t("franshiza-about.where") }}
            </h5>
          </div>
          <div style="display: flex; align-items: center">
            <h5 class="franshiza-about-container-sign">=</h5>
          </div>
          <div style="padding-bottom: 40px">
            <h5 class="franshiza-about-container-title">
              {{ $t("franshiza-about.time-two") }}
            </h5>
            <img
              class="franshiza-about-container-img"
              src="../assets/img/2-3h_pic.png"
              alt=""
            />
            <h5 class="franshiza-about-container-title">
              {{ $t("franshiza-about.where-two") }}
            </h5>
          </div>
        </div>
      </section>
      <section class="main-secret">
        <img
          class="main-secret-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h3 class="franshiza-about-title-secret">
          {{ $t("main-secret.title") }}
        </h3>
        <h3 class="franshiza-about-title-color">
          {{ $t("main-secret.title-two") }}
        </h3>
        <p class="main-secret-text">
          {{ $t("main-secret.text") }}
        </p>
        <p class="main-secret-text-color">
          {{ $t("main-secret.title-three") }}
          <span class="main-secret-text-color-bold">
            {{ $t("lozung-section.lozung-color-one") }} -
            {{ $t("lozung-section.lozung-color-two") }} -
            {{ $t("lozung-section.lozung-color-three") }}</span
          >
        </p>
        <p class="main-secret-text-down">
          {{ $t("main-secret.text-two") }}
        </p>
      </section>
      <section class="vs">
        <h3 class="franshiza-about-title-secret">
          <span class="vs-title-color">{{ $t("main-secret.title-two") }} </span
          ><span class="vs-sign">vs</span>{{ $t("vs.title") }}
        </h3>
        <el-row>
          <el-col :span="12">
            <h5 class="vs-text">
              <span class="vs-text-color">{{ $t("vs.text") }}</span>
              {{ $t("vs.text-two") }}
            </h5>
          </el-col>
          <el-col :span="12">
            <h5 class="vs-text">
              <span class="vs-text-color"> {{ $t("vs.text-three") }}</span
              >{{ $t("vs.text-four") }}
            </h5></el-col
          >
        </el-row>
        <div class="cooperation-advantages-block-third">
          <h5 class="vs-block-title">{{ $t("vs.title-two") }}</h5>
          <p class="vs-block-text">
            {{ $t("vs.text-five") }}
          </p>
        </div>
      </section>
      <section class="club-inside">
        <h3 class="club-inside-title">{{ $t("club-inside.title") }}</h3>
        <h5 class="club-inside-title-down">
          {{ $t("club-inside.title-two") }}
        </h5>
        <el-row>
          <el-col :span="12">
            <div
              style="
                display: flex;
                justify-content: center;
                padding-top: 30px;
                padding-bottom: 30px;
              "
            >
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-one") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-one") }}</span
                >
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="display: flex; padding-top: 30px; padding-bottom: 30px">
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-two") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-two") }}</span
                >
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div
              style="
                display: flex;
                justify-content: center;
                padding-bottom: 30px;
              "
            >
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-three") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-three") }}</span
                >
              </p>
            </div></el-col
          >
          <el-col :span="12">
            <div style="display: flex; padding-bottom: 50px">
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-four") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-four") }}
                </span>
              </p>
            </div></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="12">
            <div
              style="
                display: flex;
                justify-content: center;
                padding-bottom: 70px;
              "
            >
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-five") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-five") }}</span
                >
              </p>
            </div></el-col
          >
          <el-col :span="12">
            <div style="display: flex; padding-bottom: 70px">
              <img
                class="club-inside-container-img"
                src="../assets/img/bullet7.png"
                alt=""
              />
              <p class="club-inside-container-text-bold">
                {{ $t("club-inside.container-title-six") }}
                <span class="club-inside-container-text">
                  {{ $t("club-inside.container-text-six") }}</span
                >
              </p>
            </div></el-col
          >
        </el-row>
      </section>
      <section class="picture-krug">
        <img
          v-if="locale.currentLocaleHandler.value == 'ru'"
          class="picture-krug-img"
          src="../assets/img/krug.png"
          alt=""
        />
        <img
          v-if="locale.currentLocaleHandler.value == 'uz'"
          class="picture-krug-img"
          src="../assets/img/krug_uz.png"
          alt=""
        />
      </section>
      <section class="rehabilitation">
        <img
          class="rehabilitation-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h4 class="rehabilitation-title-color">
          {{ $t("rehabilitation.title") }}
        </h4>
        <h6 class="rehabilitation-title">
          {{ $t("rehabilitation.title-two") }}
        </h6>
        <p class="rehabilitation-text">
          {{ $t("rehabilitation.text-one") }}
        </p>
        <p class="rehabilitation-text">
          {{ $t("rehabilitation.text-two") }}
        </p>
        <img
          class="rehabilitation-img"
          src="../assets/img/old_couple2.png"
          alt=""
        />
      </section>
      <section class="food">
        <img
          class="food-corner"
          src="../assets/img/green_left_corner.png"
          alt=""
        />
        <img
          class="food-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <h3 class="franshiza-about-title-secret">{{ $t("food.title") }}</h3>
        <p class="food-text-color">
          {{ $t("food.text-one") }}<br /><span class="food-text">
            {{ $t("food.text-two") }}
          </span>
        </p>
        <img class="food-img" src="../assets/img/salad.png" alt="" />
        <h3 class="franshiza-about-title-secret">
          {{ $t("food.title-two") }}
        </h3>
        <el-row>
          <el-col :span="12">
            <div style="padding-bottom: 80px">
              <div class="gym-title">{{ $t("food.table-title-one") }}</div>
              <div style="display: flex">
                <div class="gym-number-one">1</div>
                <div style="border-top: none" class="gym-item-one">
                  {{ $t("food.table-text-one") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-two">2</div>
                <div class="gym-item-two">
                  {{ $t("food.table-text-two") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-one">3</div>
                <div class="gym-item-one">
                  {{ $t("food.table-text-three") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-four">4</div>
                <div class="gym-item-four">
                  {{ $t("food.table-text-four") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-four">5</div>
                <div class="gym-item-four">
                  {{ $t("food.table-text-five") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-one">6</div>
                <div class="gym-item-one">
                  {{ $t("food.table-text-six") }}
                </div>
              </div>
              <div style="display: flex">
                <div class="gym-number-seven">7</div>
                <div class="gym-item-seven">
                  {{ $t("food.table-text-seven-one") }} <br />
                  {{ $t("food.table-text-seven-two") }}
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="padding-bottom: 80px">
              <div class="gym-title-classic">
                {{ $t("food.table-title-two") }}
              </div>
              <div style="border-top: none" class="gym-item-one">
                {{ $t("food.table-text-eight") }}
              </div>
              <div class="gym-item-two gym-color">
                {{ $t("food.table-text-nine") }}
              </div>
              <div class="gym-item-one gym-color">
                {{ $t("food.table-text-ten") }}
              </div>
              <div class="gym-item-four gym-color">
                {{ $t("food.table-text-eleven") }}
              </div>
              <div class="gym-item-four gym-color">
                {{ $t("food.table-text-twelve") }}
              </div>
              <div class="gym-item-one gym-color">
                {{ $t("food.table-text-thirteen") }}
              </div>
              <div class="gym-item-seven gym-color">
                {{ $t("food.table-text-fourteen") }}
              </div>
            </div></el-col
          >
        </el-row>
      </section>
      <section class="clubs-in-city">
        <h3 class="franshiza-about-title-secret">
          <span class="vs-title-color"> {{ $t("main-secret.title-two") }}</span>
          {{ $t("clubs-in-city.title") }}
        </h3>
        <div class="clubs-in-city-container">
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-1.png" alt="" />
            <h3 class="clubs-in-city-container-number">01</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-one") }}2022
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Oltintepa</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-2.png" alt="" />
            <h3 class="clubs-in-city-container-number">02</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-two") }}2022
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Bodomzor</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-3.png" alt="" />
            <h3 class="clubs-in-city-container-number">03</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-three") }}2022
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Chilonzor</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-4.png" alt="" />
            <h3 class="clubs-in-city-container-number">04</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-four") }}2022
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Rakat</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-5.png" alt="" />
            <h3 class="clubs-in-city-container-number">05</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-four") }}2022
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Qorasaroy</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-6.png" alt="" />
            <h3 class="clubs-in-city-container-number">06</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-six") }}2023
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Qorasuv</p>
          </div>
          <div class="clubs-in-city-container-mini">
            <img class="clubs-img" src="../assets/img/club-7.png" alt="" />
            <h3 class="clubs-in-city-container-number">07</h3>
            <h3 class="clubs-in-city-container-month">
              {{ $t("clubs-in-city.month-seven") }}2023
            </h3>
            <p class="clubs-in-city-container-adress">35'<br />Qoratosh</p>
          </div>
        </div>
      </section>
      <section class="pluses-gym">
        <img
          class="pluses-gym-rounds"
          src="../assets/img/right_round_elements.png"
          alt=""
        />
        <h3
          class="franshiza-about-title-secret"
          v-html="$t('pluses-gym.title')"
        ></h3>
        <div class="pluses-gym-container">
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-one")
              }}</span
              ><br />{{ $t("pluses-gym.plus-two") }}
            </div>
          </div>
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon2.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-three")
              }}</span
              ><br />{{ $t("pluses-gym.plus-four") }}
            </div>
          </div>
        </div>
        <div class="pluses-gym-container">
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon3.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-five")
              }}</span
              ><br />
            </div>
          </div>
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon4.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-six")
              }}</span
              ><br />{{ $t("pluses-gym.plus-seven") }}
            </div>
          </div>
        </div>
        <div class="pluses-gym-container pad">
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon5.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-eight")
              }}</span
              ><br />
            </div>
          </div>
          <div class="pluses-gym-back">
            <div class="pluses-gym-img">
              <img src="../assets/img/icon6.png" alt="" />
            </div>
            <div class="pluses-gym-text">
              <span class="pluses-gym-text-color">{{
                $t("pluses-gym.plus-nine")
              }}</span
              ><br />{{ $t("pluses-gym.plus-ten") }}
            </div>
          </div>
        </div>
      </section>
      <section class="eleven-steps">
        <div class="eleven-steps-container">
          <div class="eleven-steps-texts">
            <div class="eleven-steps-title">
              <div class="eleven-steps-title-number">11</div>
              <p class="eleven-steps-title-text">
                <span class="eleven-steps-title-text-color">{{
                  $t("eleven-steps.title")
                }}</span>
                {{ $t("eleven-steps.title-two") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">1</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-one") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">2</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-two") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">3</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-three") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">4</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-four") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">5</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-five") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">6</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-six") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">7</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-seven") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">8</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-eight") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">9</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-nine") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">10</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-ten") }}
              </p>
            </div>
            <div class="eleven-steps-container-lists">
              <div class="eleven-steps-container-lists-number">11</div>
              <p class="eleven-steps-container-lists-text">
                {{ $t("eleven-steps.step-eleven") }}
              </p>
            </div>
          </div>
          <div class="eleven-steps-img">
            <img src="../assets/img/girl_orange.png" alt="" />
          </div>
        </div>
      </section>
      <section class="our-support">
        <h3 class="franshiza-about-title-secret">
          {{ $t("our-support.title") }}
        </h3>
        <el-row>
          <el-col :span="12">
            <div class="our-support-container-left mar-top">
              {{ $t("our-support.support-one") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-two") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-three") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-four") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-five") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-six") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-seven") }}
            </div>
            <div class="our-support-container-left">
              {{ $t("our-support.support-eight") }}
            </div>
          </el-col>
          <el-col :span="12">
            <div class="our-support-container-right mar-top">
              {{ $t("our-support.support-nine") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-ten") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-eleven") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-twelve") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-thirteen") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-fourteen") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-fifteen") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-sixteen") }}
            </div>
            <div class="our-support-container-right">
              {{ $t("our-support.support-seventeen") }}
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="about-premises">
        <h3 class="about-premises-title">
          {{ $t("about-premises.title") }}
        </h3>
        <el-row>
          <el-col :span="12">
            <h5 class="about-premises-table-title">
              {{ $t("about-premises.table-title") }}
            </h5>
            <ul>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-one") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-two") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-three") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-four") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-five") }}
              </li>
            </ul>
            <h5 class="about-premises-table-title">
              {{ $t("about-premises.table-title-two") }}
            </h5>
            <ul>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-six") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-seven") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-eight") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-nine") }}
              </li>
              <li class="about-premises-table-li">
                {{ $t("about-premises.li-ten") }}
              </li>
              <li class="about-premises-table-li pad">
                {{ $t("about-premises.li-eleven") }}
              </li>
            </ul>
          </el-col>
          <el-col :span="12">
            <img
              class="about-premises-img"
              src="../assets/img/bck_element.png"
              alt=""
            />
            <div class="about-premise-ul">
              <h5 class="about-premises-table-title">
                {{ $t("about-premises.table-title-three") }}
              </h5>
              <ul>
                <li class="about-premises-table-lift-li">
                  {{ $t("about-premises.li-twelve") }}
                </li>
                <li class="about-premises-table-lift-li">
                  {{ $t("about-premises.li-thirteen") }}
                </li>
                <li class="about-premises-table-lift-li">
                  {{ $t("about-premises.li-fourteen") }}
                </li>
                <li class="about-premises-table-lift-li">
                  {{ $t("about-premises.li-fifteen") }}
                </li>
                <li class="about-premises-table-lift-li">
                  {{ $t("about-premises.li-sixteen") }}
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </section>
      <section class="teh-support">
        <h3 class="franshiza-about-title-secret">
          {{ $t("teh-support.title") }}
        </h3>
        <div class="teh-support-container">
          <div class="teh-support-container-mini">
            <h5 class="teh-support-container-title">
              {{ $t("teh-support.table-title") }}
            </h5>
            <ul>
              <li class="teh-support-li">{{ $t("teh-support.li-one") }}</li>
              <li class="teh-support-li">
                {{ $t("teh-support.li-two") }}
              </li>
              <li class="teh-support-li">
                {{ $t("teh-support.li-three") }}
              </li>
              <li class="teh-support-li">{{ $t("teh-support.li-four") }}</li>
              <li class="teh-support-li">
                {{ $t("teh-support.li-five") }}
              </li>
            </ul>
          </div>
          <div class="teh-support-img">
            <img src="../assets/img/project.png" alt="" />
          </div>
        </div>
      </section>
      <section class="our-help">
        <h3 class="franshiza-about-title-secret">
          {{ $t("our-help.title") }}
        </h3>
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <ul>
              <li class="our-help-li mar-top">{{ $t("our-help.li-one") }}</li>
              <li class="our-help-li">{{ $t("our-help.li-two") }}</li>
              <li class="our-help-li">{{ $t("our-help.li-three") }}</li>
              <li class="our-help-li">{{ $t("our-help.li-four") }}</li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <img class="our-help-img" src="../assets/img/photo5.png" alt=""
          /></el-col>
        </el-row>
        <img
          v-if="locale.currentLocaleHandler.value == 'ru'"
          class="marketing-support-img"
          src="../assets/img/marketing_krug.png"
          alt=""
        />
        <img
          v-if="locale.currentLocaleHandler.value == 'uz'"
          class="marketing-support-img"
          src="../assets/img/marketing_360_uz.png"
          alt=""
        />
        <div class="marketing-support-container">
          <img
            class="marketing-sup-bullet"
            src="../assets/img/bullet8.png"
            alt=""
          />
          <p class="marketing-sup-text">
            {{ $t("our-help.text") }}
          </p>
        </div>
      </section>
      <section class="crm-sistem">
        <h3 class="franshiza-about-title-secret">
          {{ $t("crm-sistem.title") }}<br />{{ $t("crm-sistem.title-two") }}
        </h3>
        <h5 class="crm-sistem-title-color">
          {{ $t("crm-sistem.title-three") }}
        </h5>
        <p class="crm-sistem-text">
          {{ $t("crm-sistem.text") }}
        </p>
        <p class="crm-sistem-text">
          {{ $t("crm-sistem.text-two") }}
        </p>
        <img class="crm-sistem-img" src="../assets/img/crm.png" alt="" />
      </section>
      <section class="finance">
        <img
          class="finance-corner"
          src="../assets/img/green_left_corner.png"
          alt=""
        />
        <img
          class="finance-triangles"
          src="../assets/img/right_green_triangles.png"
          alt=""
        />
        <h3 class="franshiza-about-title-secret">{{ $t("finance.title") }}</h3>
        <div class="finance-container">
          <h4 class="finance-container-title-color">10 000 EUR</h4>
          <p class="finance-container-text">{{ $t("finance.text-one") }}</p>
        </div>
        <div class="finance-container">
          <h4 class="finance-container-title-color">
            {{ $t("finance.number-one") }}
          </h4>
          <p class="finance-container-text">
            {{ $t("finance.text-two") }}<br /><span
              class="finance-container-text-span"
              >{{ $t("finance.text-three") }}</span
            >
          </p>
        </div>
        <div class="finance-container">
          <h4 class="finance-container-title-color">10%</h4>
          <p class="finance-container-text">{{ $t("finance.text-four") }}</p>
        </div>
        <div class="finance-container">
          <h4 class="finance-container-title-color">
            {{ $t("finance.number-two") }}
          </h4>
          <p class="finance-container-text">{{ $t("finance.text-five") }}</p>
        </div>
        <div class="finance-container">
          <h4 class="finance-container-title-color">
            {{ $t("finance.number-three") }}
          </h4>
          <p class="finance-container-text">
            {{ $t("finance.text-six") }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import { ElRow, ElCol, ElCollapse, ElCollapseItem } from "element-plus";
import { useLocaleStore } from "~/store/Locale/index";
const locale = useLocaleStore();
useHead({
  titleTemplate: "Франшиза клуба",
  meta: [
    {
      name: "система умных тренировок",
      content:
        "инновационный подход к организации тренировок и уникальное оборудование",
    },
    {
      name: "Milon Care",
      content:
        "это облако, хранящее данные всех участников, автоматически сохраняющая все нагрузки, результаты и прогресс",
    },
    {
      name: "Поддержка франчайзи",
      content: "Полное сопровождение процесса продаж",
    },
    {
      name: "Маркетинг",
      content: "охват широкой аудитории при помощи цифровых технологий",
    },
  ],
});
</script>
<style>
.franshiza-about {
  position: relative;
}
.franshiza-about-triangles {
  position: absolute;
  z-index: -1;
  width: 25%;
  right: 0px;
}
.franshiza-about-title {
  text-transform: uppercase;
  color: black;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
}
.franshiza-about-lozung {
  font-size: 40px;
  text-transform: uppercase;
  color: #5bbebd;
  text-align: center;
  line-height: 80px;
}
.franshiza-about-lozung-two {
  color: #3faaa8;
}
.franshiza-about-lozung-three {
  color: #279893;
}
.franshiza-about-img {
  padding-top: 40px;
  width: 60%;
  display: block;
  margin: auto;
  padding-bottom: 60px;
}
.franshiza-about-title-color {
  text-transform: uppercase;
  color: #2e928e;
  font-size: 28px;
  font-weight: 900;
  text-align: center;
}
.what-franshiza {
  position: relative;
}
.what-franshiza-line {
  position: absolute;
  width: 25%;
  left: 0px;
  z-index: -1;
}
.franshiza-about-container {
  display: flex;
  justify-content: center;
}
.franshiza-about-container-title-color {
  text-transform: uppercase;
  color: #2e928e;
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  padding-bottom: 10px;
}
.franshiza-about-container-title {
  text-transform: uppercase;
  color: black;
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  padding-bottom: 10px;
}
.franshiza-about-container-img {
  display: block;
  margin: auto;
  width: 65%;
}
.franshiza-about-container-sign {
  color: #2e928e;
  font-size: 80px;
  font-weight: 900;
}
.main-secret {
  background: #eff1f2;
  position: relative;
  z-index: -1;
}
.main-secret-rounds {
  position: absolute;
  width: 10%;
  z-index: 0;
  right: 0px;
}
.franshiza-about-title-secret {
  text-transform: uppercase;
  color: black;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  padding-top: 40px;
}
.main-secret-text {
  font-size: 18px;
  font-weight: 300;
  width: 50%;
  margin-left: 25%;
  padding-top: 30px;
  line-height: 24px;
}
.main-secret-text-color {
  color: #2e928e;
  font-size: 18px;
  font-weight: 300;
  padding-top: 30px;
  margin-left: 25%;
}
.main-secret-text-color-bold {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
.main-secret-text-down {
  font-size: 18px;
  font-weight: 300;
  width: 28%;
  margin-left: 25%;
  padding-top: 30px;
  line-height: 24px;
  padding-bottom: 70px;
}
.vs-title-color {
  color: #2e928e;
}
.vs-sign {
  font-size: 16px;
  font-weight: 800;
}
.vs-text {
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding-bottom: 70px;
  width: 55%;
  padding-top: 40px;
  margin: auto;
}
.vs-text-color {
  color: #2e928e;
  font-size: 18px;
  font-weight: 500;
}
.vs-block-title {
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 30px;
  padding-top: 40px;
  text-align: center;
  color: white;
  text-transform: uppercase;
}
.vs-block-text {
  font-size: 16px;
  font-weight: 300;
  width: 73%;
  margin: auto;
  color: white;
  line-height: 20px;
}
.club-inside {
  background: url(../assets/img/bck_green2.png);
}
.club-inside-title {
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  padding-top: 290px;
  color: white;
  font-weight: 600;
}
.club-inside-title-down {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: white;
}
.club-inside-container-img {
  width: 1.5%;
  display: inline;
  height: 65px;
  margin-top: 10px;
}
.club-inside-container-text-bold {
  width: 65%;
  line-height: 20px;
  display: inline;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
}
.club-inside-container-text {
  font-size: 16px;
  font-weight: 400;
}
.picture-krug-img {
  width: 80%;
  display: block;
  margin: 60px auto;
}
.rehabilitation {
  background: #eff1f2;
  position: relative;
}
.rehabilitation-rounds {
  position: absolute;
  transform: rotate(180deg);
  width: 10%;
  top: 180px;
}
.rehabilitation-title-color {
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  color: #2e928e;
  font-weight: 600;
  width: 40%;
  margin: auto;
  padding-top: 60px;
}
.rehabilitation-title {
  font-size: 18px;
  color: black;
  font-weight: 200;
  text-align: center;
}
.rehabilitation-text {
  font-size: 14px;
  color: black;
  font-weight: 300;
  width: 48%;
  margin: auto;
  padding-top: 30px;
}
.rehabilitation-img {
  width: 45%;
  display: block;
  margin: auto;
  padding-bottom: 50px;
  padding-top: 50px;
}
.food-text-color {
  font-size: 18px;
  color: #2e928e;
  font-weight: 500;
  width: 27%;
  margin-left: 25%;
  padding-top: 150px;
  padding-bottom: 100px;
  position: absolute;
}
.food-text {
  font-size: 16px;
  color: black;
  font-weight: 400;
  width: 23%;
}
.food {
  position: relative;
}
.food-corner {
  position: absolute;
  z-index: -1;
  top: 590px;
  width: 14%;
}
.food-triangles {
  position: absolute;
  z-index: -1;
  right: 0px;
  width: 20%;
  top: 600px;
}
.food-img {
  width: 40%;
  margin-left: 40%;
  margin-top: 40px;
  padding-bottom: 60px;
}
.gym-title {
  width: 60%;
  height: 50px;
  background: #2e928e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 38%;
  margin-top: 40px;
}
.gym-title-classic {
  width: 60%;
  height: 50px;
  background: #645f65;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
}
.gym-number-one {
  background: #645f65;
  width: 50px;
  height: 46px;
  color: white;
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  margin-left: 30.5%;
  margin-right: 4px;
  margin-top: 4px;
}
.gym-item-one {
  width: 60%;
  height: 50px;
  background: #eff1f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  border-top: 4px solid #2e928e;
}
.gym-number-two {
  background: #645f65;
  width: 50px;
  height: 61px;
  color: white;
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  margin-left: 30.5%;
  margin-right: 4px;
  margin-top: 4px;
}
.gym-item-two {
  width: 60%;
  height: 65px;
  background: #eff1f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  border-top: 4px solid #2e928e;
}
.gym-number-four {
  background: #645f65;
  width: 50px;
  height: 76px;
  color: white;
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  margin-left: 30.5%;
  margin-right: 4px;
  margin-top: 4px;
}
.gym-item-four {
  width: 60%;
  height: 80px;
  background: #eff1f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  border-top: 4px solid #2e928e;
}
.gym-number-seven {
  background: #645f65;
  width: 50px;
  height: 116px;
  color: white;
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  margin-left: 30.5%;
  margin-right: 4px;
  margin-top: 4px;
}
.gym-item-seven {
  width: 60%;
  height: 120px;
  background: #eff1f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  border-top: 4px solid #2e928e;
}
.gym-color {
  border-top: 4px solid #645f65;
}
.clubs-in-city {
  background: #eff1f2;
}

.clubs-in-city-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
}
.clubs-in-city-container-number {
  font-size: 60px;
  font-weight: 900;
  color: #2e928e;
  text-align: center;
}
.clubs-in-city-container-month {
  font-size: 20px;
  font-weight: 900;
  color: #2e928e;
  text-align: center;
}
.clubs-in-city-container-adress {
  font-size: 20px;
  font-weight: 900;
  color: black;
  text-align: center;
  text-transform: uppercase;
}
.clubs-in-city-container-mini {
  margin-top: 50px;
  margin-left: 3%;
  margin-right: 3%;
  padding-bottom: 70px;
}
.clubs-img{
  width: 170px;
}
.pluses-gym {
  position: relative;
}
.pluses-gym-rounds {
  position: absolute;
  z-index: -1;
  width: 10%;
  right: 0px;
  top: 20px;
}
.pluses-gym-back {
  width: 420px;
  height: 140px;
  background: #eff1f2;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
}
.pluses-gym-img {
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
}
.pluses-gym-text {
  color: black;
  font-size: 14px;
  font-weight: 400;
  padding-right: 5%;
}
.pluses-gym-text-color {
  color: #2e928e;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
}
.pluses-gym-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pad {
  padding-bottom: 80px;
}
.eleven-steps {
  background: #eff1f2;
}
.eleven-steps-container {
  display: flex;
  justify-content: center;
}
.eleven-steps-title {
  display: flex;
  padding-top: 40px;
  margin-left: 20%;
}
.eleven-steps-title-number {
  color: #e7a527;
  font-size: 100px;
  font-weight: 900;
}
.eleven-steps-title-text {
  color: black;
  width: 30%;
  margin-top: 40px;
  line-height: 15px;
}
.eleven-steps-title-text-color {
  color: #e7a527;
  font-size: 50px;
  font-weight: 900;
  line-height: 15px;
}
.eleven-steps-img {
  width: 25%;
  padding-top: 30px;
}
.eleven-steps-container-lists {
  display: flex;
  padding-bottom: 10px;
}
.eleven-steps-container-lists-number {
  background: #e7a527;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  font-weight: 900;
  margin-left: 20%;
}
.eleven-steps-container-lists-text {
  font-size: 16px;
  font-weight: 400;
  padding-left: 2%;
  display: flex;
  align-items: center;
  width: 50%;
  line-height: 18px;
}
.our-support-container-left {
  background: #2e928e;
  color: white;
  padding: 10px 35px;
  width: 70%;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 400;
  margin-left: 27%;
  margin-top: 7px;
}
.our-support-container-right {
  background: #2e928e;
  color: white;
  padding: 10px 35px;
  width: 70%;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 7px;
}
.mar-top {
  margin-top: 50px;
}
.about-premises {
  background: url(../assets/img/bck_green2.png);
  position: relative;
}
.about-premises-title {
  text-transform: uppercase;
  color: #e7a527;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  padding-top: 280px;
  padding-bottom: 20px;
}
.about-premises-table-title {
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20%;
  padding-bottom: 10px;
  padding-top: 10px;
}
.about-premises-table-li {
  color: white;
  font-size: 15px;
  font-weight: 400;
  margin-left: 20%;
  width: 70%;
  list-style-type: disc;
}
.about-premises-img {
  width: 60%;
  padding-top: 30px;
  padding-bottom: 90px;
}
.about-premises-table-lift-li {
  color: white;
  font-size: 15px;
  font-weight: 400;
  width: 70%;
}
.about-premise-ul {
  left: 54%;
  position: absolute;
  top: 110px;
}
.teh-support {
  background: url(../assets/img/bck_girl_builder.png);
}
.teh-support-container {
  display: flex;
}
.teh-support-container-mini {
  margin-left: 36%;
}
.teh-support-container-title {
  padding-top: 60px;
  color: #2e928e;
  text-transform: uppercase;
  padding-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
}
.teh-support-img {
  width: 25%;
}
.teh-support-li {
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
}
.our-help-li {
  color: #2e928e;
  list-style-type: disc;
  font-size: 22px;
  font-weight: 500;
  margin-left: 44%;
}
.our-help-img {
  width: 400px;
  margin-top: 30px;
  margin-left: 15%;
  padding-bottom: 60px;
}
.marketing-support-img {
  width: 70%;
  display: block;
  margin: auto;
}
.marketing-support-container {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 50px;
}
.marketing-sup-bullet {
  width: 10px;
}
.marketing-sup-text {
  text-align: center;
  width: 42%;
}
.crm-sistem {
  background: #eff1f2;
}
.crm-sistem-title-color {
  color: #2e928e;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
}
.crm-sistem-text {
  text-align: center;
  width: 61%;
  margin: auto;
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
}
.crm-sistem-img {
  display: block;
  margin: auto;
  margin-top: 40px;
  width: 70%;
  padding-bottom: 50px;
}
.finance {
  position: relative;
}
.finance-corner {
  position: absolute;
  width: 20%;
  z-index: -1;
}
.finance-triangles {
  position: absolute;
  width: 20%;
  z-index: -1;
  top: 100px;
  right: 0px;
}
.finance-container {
  width: 40%;
  height: 115px;
  background: #eff1f2;
  border-radius: 15px;
  margin: auto;
  margin-top: 30px;
}
.finance-container-title-color {
  color: #2e928e;
  font-size: 45px;
  text-align: center;
}
.finance-container-text {
  font-size: 20px;
  text-align: center;
  line-height: 18px;
}
.finance-container-text-span {
  font-size: 14px;
}
@media screen and (max-width: 1350px) {
  .about-premises-table-li {
    font-size: 13px;
  }
  .teh-support-container-title {
    padding-bottom: 30px;
  }
  .teh-support-li {
    font-size: 15px;
    line-height: 25px;
  }
  .gym-title {
    margin-left: 38.6%;
  }
}
@media screen and (max-width: 1200px) {
  .gym-title {
    margin-left: 39.6%;
  }
  .gym-item-one {
    font-size: 12px;
  }
  .gym-item-two {
    font-size: 12px;
  }
  .gym-item-four {
    font-size: 12px;
  }
  .gym-item-seven {
    font-size: 12px;
  }
  .teh-support {
    background: #eff1f2;
  }
  .teh-support-container-mini {
    margin-left: 0%;
  }
  .teh-support-container {
    justify-content: space-around;
  }
  .teh-support-li {
    font-size: 18px;
  }
  .teh-support-container-title {
    font-size: 32px;
  }
  .teh-support-img {
    margin-bottom: 20px;
  }
  .about-premises-table-lift-li {
    font-size: 12px;
  }
}
@media screen and (max-width: 1100px) {
  .gym-title {
    font-size: 18px;
  }
  .gym-title-classic {
    font-size: 18px;
  }
  .gym-number-seven {
    height: 136px;
  }
  .gym-item-seven {
    height: 140px;
  }
  .main-secret-text {
    width: 70%;
    margin: auto;
  }
  .main-secret-text-color {
    text-align: center;
    margin: auto;
  }
  .main-secret-text-down {
    width: 70%;
    margin: auto;
  }
  .club-inside-container-text-bold {
    font-size: 18px;
  }
  .club-inside-container-text {
    font-size: 14px;
  }
  .crm-sistem-text {
    font-size: 18px;
  }
  .about-premises-table-title {
    padding-bottom: 5px;
  }
  .about-premises-img {
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .vs-text {
    width: 70%;
  }
  .rehabilitation-text {
    width: 70%;
  }
  .gym-title {
    font-size: 15px;
    width: 60%;
    margin-left: 40%;
    justify-content: left;
    padding-left: 20px;
  }
  .gym-title-classic {
    font-size: 15px;
    width: 70%;
  }
  .gym-item-one {
    font-size: 11px;
    width: 70%;
  }
  .gym-item-two {
    font-size: 11px;
    width: 70%;
  }
  .gym-item-four {
    font-size: 11px;
    width: 70%;
  }
  .gym-item-seven {
    font-size: 11px;
    width: 70%;
  }
  .clubs-in-city-container-number {
    font-size: 50px;
  }
  .clubs-in-city-container-month {
    font-size: 16px;
  }
  .clubs-in-city-container-adress {
    font-size: 16px;
  }
  .pluses-gym-img {
    width: 40%;
  }
  .pluses-gym-text-color {
    font-size: 16px;
  }
  .pluses-gym-text {
    font-size: 12px;
  }
  .eleven-steps-container-lists-text {
    font-size: 13px;
  }
  .about-premises-table-li {
    font-size: 12px;
  }
  .teh-support-container-title {
    font-size: 28px;
  }
  .teh-support-li {
    font-size: 16px;
  }
  .our-help-li {
    font-size: 18px;
  }
  .our-help-img {
    width: 290px;
  }
  .crm-sistem-text {
    width: 70%;
    font-size: 16px;
  }
  .finance-container-title-color {
    font-size: 40px;
  }
  .food-text-color {
    font-size: 16px;
    width: 40%;
    margin-left: 15%;
  }
  .food-text {
    font-size: 14px;
  }
  .club-inside-container-text-bold {
    font-size: 16px;
  }
}
@media screen and (max-width: 900px) {
  .franshiza-about-lozung {
    font-size: 34px;
  }
  .club-inside-container-text {
    font-size: 12px;
  }
  .club-inside-container-text-bold {
    width: 75%;
  }
  .main-secret-text {
    font-size: 16px;
  }
  .main-secret-text-down {
    font-size: 16px;
  }
  .vs-text {
    font-size: 14px;
  }
  .clubs-in-city-container-number {
    font-size: 45px;
  }
  .clubs-in-city-container-adress {
    font-size: 14px;
  }
  .gym-title {
    margin-left: 41%;
    font-size: 14px;
  }
  .gym-title-classic {
    font-size: 14px;
  }
  .gym-item-one {
    line-height: 12px;
  }
  .gym-item-two {
    line-height: 12px;
  }
  .gym-item-four {
    line-height: 12px;
  }
  .gym-item-seven {
    line-height: 12px;
  }
  .about-premises-img {
    width: 80%;
  }
  .about-premises-table-li {
    line-height: 15px;
  }
  .crm-sistem-title-color {
    font-size: 17px;
  }
  .crm-sistem-text {
    font-size: 14px;
  }
  .finance-container-text {
    font-size: 16px;
  }
  .finance-container-text-span {
    font-size: 12px;
  }
  .marketing-sup-text {
    font-size: 14px;
  }
  .franshiza-about-title-secret {
    width: 70%;
    margin: auto;
  }
  .pluses-gym-back {
    width: 350px;
  }
}
@media screen and (max-width: 800px) {
  .gym-title {
    text-align: center;
    margin-left: 42%;
  }
  .franshiza-about-title {
    font-size: 20px;
  }
  .franshiza-about-lozung {
    font-size: 30px;
  }
  .rehabilitation-title-color {
    width: 50%;
  }
  .eleven-steps-container-lists {
    padding-bottom: 5px;
  }
  .eleven-steps-container-lists-text {
    line-height: 15px;
  }
  .eleven-steps-img {
    margin-right: 40px;
    padding-top: 100px;
  }
  .eleven-steps-container-lists-number {
    width: 23px;
    height: 23px;
    font-size: 18px;
  }
  .eleven-steps-title-number {
    font-size: 90px;
  }
  .eleven-steps-title-text-color {
    font-size: 40px;
  }
  .crm-sistem-text {
    font-size: 12px;
  }
  .finance-container-title-color {
    font-size: 35px;
  }
  .finance-container {
    width: 300px;
  }
  .food-img {
    margin-left: 50%;
  }
  .food-text-color {
    padding-top: 70px;
  }
  .about-premises-img {
    padding-top: 50px;
    width: 300px;
  }
}
@media screen and (max-width: 768px) {
  .our-help-img {
    margin: auto;
    margin-top: 20px;
  }
  .our-help-li {
    margin-left: 30%;
  }
  .gym-title {
    margin-left: 42%;
    padding-left: 5px;
  }
}
@media screen and (max-width: 700px) {
  .about-premises-table-lift-li {
    font-size: 10px;
  }
  .club-inside-container-text {
    line-height: 12px;
  }
  .club-inside-container-text-bold {
    line-height: 14px;
  }
  .franshiza-about-container-img {
    width: 55%;
  }
  .main-secret-text {
    line-height: 18px;
  }
  .main-secret-text-down {
    line-height: 18px;
  }
  .vs-text {
    line-height: 18px;
  }
  .gym-title {
    font-size: 13px;
    margin-left: 43%;
    padding-left: 0px;
  }
  .gym-item-one {
    font-size: 10px;
  }
  .gym-item-two {
    font-size: 10px;
  }
  .gym-item-four {
    font-size: 10px;
  }
  .gym-item-seven {
    font-size: 10px;
  }
  .clubs-in-city-container-number {
    font-size: 40px;
  }
  .clubs-in-city-container-month {
    font-size: 12px;
  }
  .clubs-in-city-container-adress {
    font-size: 10px;
  }
  .pluses-gym-container {
    flex-wrap: wrap;
    margin-top: 0px;
  }
  .pluses-gym-back {
    width: 400px;
    margin-top: 20px;
  }
  .our-support-container-left {
    font-size: 11px;
  }
  .our-support-container-right {
    font-size: 11px;
  }
  .about-premises-title {
    font-size: 20px;
  }
  .teh-support-container-title {
    font-size: 20px;
  }
  .franshiza-about-container-title-color {
    font-size: 18px;
  }
  .franshiza-about-container-title {
    font-size: 18px;
  }
  .franshiza-about-lozung {
    font-size: 28px;
  }
}
@media screen and (max-width: 650px) {
  .teh-support-li {
    font-size: 13px;
  }
  .food-text-color {
    width: 50%;
  }
  .franshiza-about-title-secret {
    font-size: 20px;
  }
  .rehabilitation-title {
    width: 70%;
    margin: auto;
  }
  .eleven-steps-img {
    width: 40%;
  }
  .franshiza-about-lozung {
    width: 80%;
    margin: auto;
    line-height: 50px;
  }
  .gym-title {
    justify-content: center;
    margin-left: 26%;
    width: 73%;
  }
  .about-premises-title {
    padding-top: 300px;
  }
  .about-premises-table-li {
    font-size: 10px;
    line-height: 12px;
  }
  .about-premises-table-lift-li {
    line-height: 12px;
  }
  .teh-support-container-title {
    padding-top: 30px;
  }
  .gym-title-classic {
    width: 80%;
  }
  .gym-item-one {
    width: 80%;
    line-height: 11px;
  }
  .gym-item-two {
    width: 80%;
    line-height: 11px;
  }
  .gym-item-four {
    width: 80%;
    line-height: 11px;
  }
  .gym-item-seven {
    width: 80%;
    line-height: 11px;
  }
  .gym-number-one {
    margin-left: 10%;
  }
  .gym-number-two {
    margin-left: 10%;
  }
  .gym-number-four {
    margin-left: 10%;
  }
  .gym-number-seven {
    margin-left: 10%;
  }
}
@media screen and (max-width: 550px) {
  .club-inside-container-text-bold {
    font-size: 12px;
  }
  .crm-sistem-title-color {
    width: 80%;
    margin: auto;
  }
  .crm-sistem-text {
    margin-top: 10px;
  }
  .about-premises-table-title {
    padding-top: 0px;
  }
  .clubs-in-city-container-number {
    font-size: 35px;
  }
  .clubs-in-city-container-month {
    font-size: 10px;
  }
  .clubs-in-city-container-adress {
    font-size: 8px;
  }
  .food-text-color {
    width: 50%;
    margin-left: 10%;
  }
  .rehabilitation-text {
    font-size: 11px;
    width: 80%;
  }
  .picture-krug-img {
    width: 100%;
  }
  .franshiza-about-title {
    width: 80%;
    margin: auto;
  }
  .our-support-container-left {
    width: 80%;
    margin-left: 10%;
    padding: 10px 20px;
  }
  .our-support-container-right {
    width: 80%;
    margin-left: 10%;
    padding: 10px 20px;
  }
  .franshiza-about-container-title {
    font-size: 14px;
  }
  .franshiza-about-container-title-color {
    font-size: 14px;
  }
  .main-secret-text-color {
    width: 70%;
  }
  .food-text-color {
    line-height: 14px;
  }
  .food-text {
    font-size: 12px;
  }
  .eleven-steps-img {
    width: 60%;
  }
  .eleven-steps-container-lists-text {
    font-size: 12px;
    width: 70%;
  }
  .vs-block-title {
    font-size: 18px;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .vs-block-text {
    font-size: 14px;
  }
  .about-premises-table-li {
    width: 85%;
  }
  .eleven-steps-title-text {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .about-premises {
    margin-top: 30px;
    background: #279893;
  }
  .about-premises-title {
    padding-top: 40px;
  }
  .club-inside {
    background: #279893;
  }
  .club-inside-title {
    padding-top: 40px;
  }
}
@media screen and (max-width: 480px) {
  .about-premises-img {
    display: none;
  }
}
@media screen and (max-width: 450px) {
  .marketing-support-container {
    align-items: center;
  }
  .marketing-sup-bullet {
    height: 70px;
  }
  .marketing-sup-text {
    width: 50%;
    font-size: 12px;
  }
  .gym-item-one {
    height: 65px;
  }
  .gym-number-one {
    height: 61px;
  }
  .gym-item-two {
    height: 80px;
  }
  .gym-number-two {
    height: 76px;
  }
  .gym-item-four {
    height: 100px;
  }
  .gym-number-four {
    height: 96px;
  }
  .gym-item-seven {
    height: 170px;
  }
  .gym-number-seven {
    height: 166px;
  }
  .pluses-gym-back {
    width: 320px;
  }
  .eleven-steps-img {
    padding-top: 180px;
  }

  .teh-support-img {
    width: 35%;
    margin-top: 30px;
  }
  .our-help-li {
    margin-left: 10%;
  }
  .marketing-support-img {
    width: 95%;
  }
  .crm-sistem-img {
    width: 95%;
  }
  .about-premises-table-title {
    font-size: 14px;
  }
  .about-premises-table-lift-li {
    margin-left: 20%;
  }
  .crm-sistem-text {
    width: 80%;
    text-align: justify;
  }
  .club-inside-container-img {
    width: 2%;
    height: 50px;
  }
  .vs-text {
    font-size: 12px;
    text-align: justify;
  }
  .vs-text-color {
    font-size: 14px;
  }
  .main-secret-text {
    font-size: 13px;
  }
  .main-secret-text-down {
    font-size: 13px;
  }
  .club-inside-container-text-bold {
    font-size: 11px;
  }
  .club-inside-container-text {
    font-size: 11px;
  }
  .rehabilitation-title-color {
    width: 100%;
  }
  .pad {
    padding-bottom: 10px;
  }
  .teh-support-li {
    margin-left: 2%;
  }
  .teh-support-container-title {
    margin-left: 2%;
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 400px) {
  .club-inside-container-text-bold {
    line-height: 10px;
    width: 85%;
  }
  .gym-title {
    margin-left: 30%;
  }
  .gym-item-one {
    height: 95px;
  }
  .gym-number-one {
    height: 91px;
  }
  .gym-item-two {
    height: 120px;
  }
  .gym-number-two {
    height: 116px;
  }
  .gym-item-four {
    height: 150px;
  }
  .gym-number-four {
    height: 146px;
  }
  .gym-item-seven {
    height: 240px;
  }
  .gym-number-seven {
    height: 236px;
  }
  .eleven-steps-img {
    padding-top: 380px;
  }
  .eleven-steps-title {
    padding-top: 0px;
  }
  .about-premises-table-title {
    font-size: 12px;
  }
  .food-text-color {
    padding-top: 40px;
  }
  .food-img {
    width: 50%;
    margin-top: 20px;
    margin-left: 40%;
  }
  .food-text {
    font-size: 11px;
  }
}
</style>
