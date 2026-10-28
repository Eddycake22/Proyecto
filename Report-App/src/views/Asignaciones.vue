<template>
    <div class="grid" style="--bs-columns: 4; --bs-row: 4">
       <create_report/><Order_button/>
      <section class="" id="Tareas" style="grid-row: 3; grid-column: span 3">
        <Task_Target />
      </section>
    </div>
</template>

<style scoped>
.grid {
  width: 80vw;
  grid-template-columns: 1fr auto auto;
  display: grid;
  grid-auto-rows: min-content;
  /* background-color: white */
  margin: 0px;
  /* padding: 25px;
  column-gap: 1rem;
   */
  row-gap: 1rem;
  
}
h1,
h3 {
  color: #eff0f8 !important;
  margin: 0px !important;
}
h1 {
  vertical-align: middle;
  text-align: center;
}
.divisor {
  margin: /* 20px 0px 20px  */ 0px;
  width: 100%;
  color: #0c1132 !important;
}

@media (max-width: 768px) {
  .grid {
    min-width: 85%;
    row-gap: 1rem !important;
    column-gap: 0px !important;
    /*grid-template-columns: repeat(auto, minmax(250px, 1fr)); 
        grid-template-rows: repeat(auto);*/
  }
  .select {
    /* grid-area: 3 / span 4; 
    grid-column-start: 2;*/
  }
  #open-form {
    grid-row-start: 1;
    grid-column-start:1;
  }
  h1 {
    vertical-align: baseline;
  }
  #Tareas {
    grid-row-start: 4 !important;
    grid-column-start: 1 !important;
    grid-column-end: span 2 !important;
  }
}
</style>
<script setup>

import create_report from "../components/create_report.vue";
import Task_Target from "../components/Task_Target.vue";
import Order_button from "../components/Order_button.vue";
</script>