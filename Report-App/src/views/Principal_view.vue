<template>
  <body>
  <AdminHeader/>
  <!-- <Admin_user/> -->
  <Asignaciones/>

  <Stats/>
  </body>
</template>

<style>
</style>

<script setup>
/*import Areas_target from "../components/Areas_target.vue";
  <area_list/>
  import area_list from '../components/area_list.vue';
import Stats from '../components/Stats.vue';*/
import AdminHeader from "../components/AdminHeader.vue";
import Admin_user from "../views/Admin_user.vue";
import Asignaciones from "./Asignaciones.vue";
</script>

<style scoped>
  body {
    margin-top: 5%;
  }
</style>
