<template>
  <section id="diagnostics" class="diagnostics">
    <img
      class="diagnostics-grey"
      src="../assets/img/right_grey_line.png"
      alt=""
    />
    <img
      class="diagnostics-green"
      src="../assets/img/left_green_triangles.png"
      alt=""
    />
    <h3 class="sistem-title">{{ $t("diagnostics.diagnostics-title") }}</h3>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <img class="diagnostics-img" src="../assets/img/girl2.png" alt="" />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="diagnostics-form">
          <el-input
            v-model="name"
            class="diagnostics-input"
            :placeholder="$t('diagnostics.diagnostics-name')"
          />
          <el-input
            v-model="phone"
            class="diagnostics-input"
            :placeholder="$t('diagnostics.diagnostics-phone')"
          />
          <el-input
            v-model="age"
            class="diagnostics-input"
            :placeholder="$t('diagnostics.diagnostics-age')"
          />
          <el-date-picker
            v-model="day"
            class="diagnostics-input"
            type="date"
            :placeholder="$t('diagnostics.diagnostics-date')"
          />
          <el-time-select
            v-model="time"
            class="diagnostics-input"
            start="08:30"
            step="00:15"
            end="18:30"
            :placeholder="$t('diagnostics.diagnostics-time')"
          />
          <button @click="submit()" class="lozung-button mar">
            {{ $t("lozung-section.lozung-button") }}
          </button>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script setup>
import {
  ElRow,
  ElCol,
  ElTimeSelect,
  ElDatePicker,
  ElInput,
  ElNotification,
} from "element-plus";
import { useFeedbacksStore } from "../store/Feedbacks";
import { ref} from "vue";
const store = useFeedbacksStore();
let name = ref("");
let phone = ref("");
let age = ref("");
let day = ref("");
let time = ref("");
function submit() {
  if (this.name && this.phone && this.age && this.day && this.time) {
    const data = {
      phone: phone.value,
      name: name.value,
      age: age.value,
      date: day.value.toLocaleDateString(),
      time: time.value,
    };
    store.postFeedback(data);
    ElNotification({
        title:"Спасибо за регистрацию!",
        message:"Наши операторы с Вами свяжутся для подтверждения регистрации и ответов на вопросы. С уважением, MILON Health Club",
        type:'success',
      })
  }else{
    ElNotification({
        title: 'Необходимо заполнить все данные!',
        message:'',
        type:'error',
      })
  }
  phone.value= '',
  name.value='',
  age.value='',
  day.value='',
  time.value=''
}
</script>
<style>
.diagnostics {
  position: relative;
}
.diagnostics-grey {
  position: absolute;
  width: 30%;
  right: 0px;
  z-index: -1;
}
.diagnostics-green {
  position: absolute;
  width: 15%;
  top: 180px;
  left: 0px;
  z-index: -1;
}
.diagnostics-img {
  margin-left: 20%;
  margin-top: 140px;
  width: 70%;
  padding-bottom: 100px;
}
.diagnostics-form {
  margin-top: 140px;
}
.diagnostics-input {
  display: block;
  width: 60%;
  height: 50px;
  background: #fafcfb;
  border: none;
  border-radius: 15px;
  color: #869696;
  margin-top: 20px;
  font-size: 22px;
  padding: 10px;
  font-size: 18px;
}
.el-date-editor.el-input {
  width: 60%;
}
.el-input__wrapper {
  background-color: #fafcfb;
  box-shadow: none;
}
.el-input__inner {
  color: #869696 !important;
}
.el-input__prefix {
  display: none;
}
.el-select.is-focus .el-input.is-focus .el-input__wrapper.is-focus {
  box-shadow: none;
}
@media screen and (max-width: 768px) {
  .diagnostics-img {
    margin: auto;
    width: 40%;
    margin-top: 40px;
    padding-bottom: 30px;
  }
  .diagnostics-form {
    margin: auto;
    margin-top: 40px;
  }
  .diagnostics-input {
    margin-left: 20%;
  }
}
@media screen and (max-width: 500px) {
  .diagnostics-img {
    padding-bottom: 20px;
  }
}
</style>