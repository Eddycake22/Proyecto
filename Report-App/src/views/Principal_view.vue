<template>
  <body>
  <AdminHeader/>
  <Admin_user/>

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
import Admin_user from "./Admin_user.vue";
</script>

<style scoped>
  body {
    margin: 5%;
  }
  @media (max-width: 768px) {
  body {
  margin: 0!important;
}
  }
</style>
