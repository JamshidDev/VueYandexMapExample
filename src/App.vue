<script setup>
import YandexMap from "@/components/yandexMap.vue";
</script>

<template>
  <div class="yandex__map-container">
    <YandexMap/>
  </div>

</template>
<style lang="scss">
.yandex__map-container{
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
