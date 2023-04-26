<template>
  <div>
    <a href="#diagnostics">
        <button class="button-helper-1">{{ $t("lozung-section.lozung-button") }}</button>
    </a>
    <button class="button-helper-2">
      <a  href="tel:+998555001135">
        <img class="icon-button" src="../assets/img/telefon.png" alt="">
      </a>
    </button>
  </div>
</template>
<script>
</script>
<style>
.button-helper-1 {
  width: 160px;
  height: 50px;
  border-radius: 20px;
  background: #2c9a93;
  color: white;
  text-transform: uppercase;
  position: fixed;
  bottom: 20px;
  left: 20px;
  transition: 0.5s;
  font-size: 16px;
}
.button-helper-1:hover,
.button-helper-2:hover
 {
  background: rgba(44, 154, 147, 0.7);
}
.button-helper-2 {
  background: #2c9a93;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: 0.5s;
}
.icon-button{
    width: 35px;
    display: block;
    margin: auto;
}
</style>