<template>
  <body>
    <Barra_Lateral />

    <div class="grid" style="--bs-columns:3; --bs-row:3; --bs-md-row:4; column-gap:1rem;">
    <!--<Search />-->
      
      <h1 class="d-flex align-items-center fw-semibold" id="titulo">Asignaciones</h1>
      <Order_button class="d-flex"/>
      <Report_Button class="d-flex justify-content-center align-items-center"/>
       <hr class="divisor" style="grid-row:2; grid-column:span 3;">
      <section class="" id="Tareas" style="grid-row:3; grid-column:span 3;">
        <Task_Target/>    
      </section> 
      <!-- <Report_form/>-->
    </div>
  </body>
</template>

<style>

.grid{
  min-width: 70%;
  grid-template-columns: 1fr auto auto;
  display: grid;
  grid-auto-rows: min-content;
  background-color: white;
  margin: 0px 250px;
  padding: 25px ;
  border-radius:15px ;
}
h1, h3{
    color: #0C1132;
    margin: 0px!important;
}
h1 {
  display: inline-block;
  vertical-align: middle;
}
.divisor {
  margin: 20px 0px 20px 0px;
  width: 100%;
  color: #0C1132!important;  
}


@media (max-width: 768px) {
    .mb-5{
      margin-bottom: 0px!important;
      border-radius: 5px;
    }
    select {
    grid-area: 2 / span 3;
    }
    h1{
      color: red!important;
    }
    /* grid-row-start: 2;
    grid-column-start: span 3;
    grid-row-end: auto;
    grid-column-end: auto; */
}
/*
#titulo {
  display: inline-block;
}
.Component {
  display: inline-block;
  position: absolute;
  top: 9%;
  right: 28%;
  vertical-align: center;
  vertical-align: middle!important;
}
  */
</style>

<script setup>
import Report_form from "../components/Report_form.vue";
import Barra_Lateral from "../components/Barra_Lateral.vue";
import Report_Button from "../components/Report_Button.vue";
import Task_Target from "../components/Task_Target.vue";
import Order_button from "../components/Order_button.vue"
import Report_details from "../components/Report_details.vue";
import Search from "../components/Search.vue";
</script>
