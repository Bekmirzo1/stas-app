<script setup lang="ts"></script>
<template>
  <div class="app">
    <h1 class="app__title title-big">ikakprosto.ru</h1>
    <NuxtPage class="page" />
  </div>
</template>
<style lang="scss">
@use "./shared/assets/scss/style.scss";
#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  // overflow-y: auto;
  // height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  // @supports (overflow: clip) {
  //   overflow: clip;
  // }
}
.app {
  // background-color: red;
  // padding: 20px;
  // padding: toRem(20) toRem(0) toRem(0) toRem(0);
  &__title {
    margin: toRem(16) toRem(0) toRem(58);
    text-align: center;
  }
}
.page{
  padding: toRem(0) toRem(0) toRem(60) toRem(0);
}
</style>
