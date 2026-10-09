<template>
  <body>
    <Barra_Lateral />

    <div class="grid" style="--bs-columns: 3; --bs-row: 3">
      <!--<Search />-->

      <h1 class="d-flex align-items-center fw-semibold" id="titulo">
        Asignaciones
      </h1>
      <Order_button class="d-flex" /> <Prueba_form/>
      <Report_Button class="d-flex justify-content-center align-items-center" />
      <hr class="divisor" style="grid-row: 2; grid-column: span 3" />
      <section class="" id="Tareas" style="grid-row: 3; grid-column: span 3">
        <Task_Target />
      </section>
      <hr class="divisor" style="grid-column: span 3" />
      <!-- <Report_form/>-->
      <section id="areas">
        <Areas_target />
      </section>
    </div>
  </body>
</template>

<style>
.grid {
  min-width: 70%;
  grid-template-columns: 1fr auto auto;
  display: grid;
  grid-auto-rows: min-content;
  /* background-color: white */
  margin: 0px 250px;
  padding: 25px;
  border-radius: 15px;
  row-gap: 2rem;
  column-gap: 1rem;
}
h1,
h3 {
  color: #0c1132;
  margin: 0px !important;
}
h1 {
  display: inline-block;
  vertical-align: middle;
}
.divisor {
  margin: /* 20px 0px 20px  */ 0px;
  width: 100%;
  color: #0c1132 !important;
}

@media (max-width: 768px) {
  .grid {
    min-width: 85%;
    margin: 0px 25px;
    row-gap: 1rem !important;
    column-gap: 0px !important;
    /*grid-template-columns: repeat(auto, minmax(250px, 1fr)); 
        grid-template-rows: repeat(auto);*/
  }
  #titulo {
    /* grid-column: span 1; */
  }
  .mb-5 {
    margin-bottom: 0px !important;
    border-radius: 5px;
  }
  .select {
    /* grid-area: 3 / span 4; */
    grid-row-start: 3;
  }
  h1 {
    vertical-align: baseline;
  }
  .divisor {
    width: 100%;
  }
  #Tareas {
    grid-row-start: 4 !important;
    grid-column-start: 1 !important;
    grid-column-end: span 2 !important;
  }
}
</style>

<script setup>
import Report_form from "../components/Report_form.vue";
import Barra_Lateral from "../components/Barra_Lateral.vue";
/* import Report_Button from "../components/Report_Button.vue"; */
import Prueba_form from "../components/Prueba_form.vue";
import Task_Target from "../components/Task_Target.vue";
import Order_button from "../components/Order_button.vue";
import Report_details from "../components/Report_details.vue";
import Areas_target from "../components/Areas_target.vue";
</script>
