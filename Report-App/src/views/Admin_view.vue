<template>
  <h3 class="titulo my-5">¿Que desea realizar?</h3>
  <Adminheader class="mb-5"/>
  <RouterView></RouterView>
</template>

<style>
.titulo{
  font-size: 40px;
  color: #EFF0F8;
  text-align: center;
}
@media (max-width:880px) {
  .titulo{
    font-size: 28!important;
  }
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import Adminheader from '../components/admin_header.vue'
</script>
