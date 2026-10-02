<template>
  <body>
    <Barra_Lateral />
    <div class="container">
    <Report_Button />
    <h1 class="fw-semibold">Reportes</h1>
      <section id="Pendientes">
        <h3>Pendientes</h3>
        <Task_Target />
        <hr class="mb-5">
        
      </section>
      <section id="Completadas">
        <h3>Completadas</h3>
        <Task_Target />    
        <hr class="mb-5">
      </section>
      <Report_form />
    </div>
  </body>
</template>

<style>

.container {
  width: 80%;
  height: 100vh;
  margin: 0px 300px 0px 300px;
}

h1, h3{
    color: #0C1132;
    margin: 20px 0px!important;
}

hr {
    border: 5px solid;
    color: #0C1132!important;
    
}
</style>

<script setup>
import Report_form from "../components/Report_form.vue";
import Barra_Lateral from "../components/Barra_Lateral.vue";
import Report_Button from "../components/Report_Button.vue";
import Task_Target from "../components/Task_Target.vue";
</script>
