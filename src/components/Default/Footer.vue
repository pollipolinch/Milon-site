<template>
    <footer class="footer">
        <div class="footer-icons">
          <div class="footer-icon"><a target="_blank" href="https://www.facebook.com/milonuz/"><img src="../../assets/img/fb_icon_footer.png" alt=""></a></div>
          <div class="footer-icon"><a target="_blank" href="https://t.me/milonuz2022"><img src="../../assets/img/telega_icon_white.png" alt=""></a></div>
          <div class="footer-icon"><a target="_blank" href="https://www.instagram.com/milon_uz/"><img src="../../assets/img/insta_icon_footer.png" alt=""></a></div>
        </div>
        <p class="footer-text">2023 - 35' Health Clubs</p>
 </footer>
</template>

<script setup>
import { ElRow, ElCol, ElCollapse, ElCollapseItem } from "element-plus";
</script>


<style>
.footer{
  background: url(../../assets/img/footer_bck.png);
  height: 400px;
}
.footer-icons{
  display: flex;
  align-items: center;
  padding-top: 100px;
  margin-left: 15%;
}
.footer-icon{
  display: flex;
  justify-content: center;
  width: 40px;
  margin-right: 20px;
}
.footer-text{
  color: white;
  margin-left: 15%;
  margin-top:20px ;
  font-size: 20px;
  font-weight: 700;
}
</style>