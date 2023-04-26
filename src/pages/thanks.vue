<template>
<div>
  <main>
    <section>
      <div class="thanks">
        <p class="thanks__text">  Спасибо, что выбрали нас!
          <br>
          <br>
        Наши менеджеры свяжутся с вами в ближайшее время для подтверждения записи. А пока можете узнать о нас еще подробнее в социальных сетях:
      </p>
      </div>

    </section>
  </main>
</div>
</template>

<script>
export default {
  name: "thanks"
};
</script>

<style lang="scss" scoped>
.thanks{
  padding: 150px;
  @media (max-width: 700px) {
    padding: 10px;
  }
  &__text{
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    @media (max-width: 700px) {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>