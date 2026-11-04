<template>
  <body>
  <AdminHeader/>
  <!-- <Admin_user/> -->
  <Admin_Asignaciones/>

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
import Admin_Asignaciones from "./Admin_Asignaciones.vue";
</script>

<style scoped>
 /*  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    width: 100vh;
  }
  
@media (max-width: 768px) {
  body {
    width: 70%;
  };
} */
  BODY {
    margin: 5%;
  }
</style>
