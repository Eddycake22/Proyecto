<script setup>
import Barra_Lateral from "../components/Barra_Lateral.vue";
import Inicio from "../components/Inicio.vue";
import user_target from "../components/user_target.vue";
import Order_button from "../components/Order_button.vue";
</script>


<template>
    <Barra_Lateral class="mb-3" />
    <Inicio class="ano d-flex mt-4"/>
    <div class="grid" style="--bs-columns: 3;">
      
      <h1 class="d-flex align-items-center fw-semibold" id="titulo" style="--bs-row: 2; --bs-column: span 3;">
        Técnicos
      </h1>
      <!-- <Order_button class="d-flex" />  -->

      <section class="" id="Tareas" style="grid-row: 2; grid-column: span 3">
        <user_target />
      </section>
    </div>
</template>

<style scoped>
.ano{
  justify-self: center;
  --bs-row: 1; 
  --bs-column: span 3!important;
}

.grid {
  min-width: 70vw;
  grid-template-columns: 1fr auto auto;
  display: grid;
  grid-auto-rows: min-content;
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
  }
  .mb-5 {
    margin-bottom: 0px !important;
    border-radius: 5px;
  }
  .select {
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