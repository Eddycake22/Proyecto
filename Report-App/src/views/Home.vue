<template>
  <body>
    <Barra_Lateral />
    <div class="grid" id="cuerpo" style="--bs-columns:3; --bs-rows: 3">
    <!--<Search />-->
    <h1 class="fw-semibold g-col-4" id="titulo">Asignaciones</h1>
    <Report_Button />
    <Order_button/>
      <section id="Tareas">
         <hr class="mb-5">
        <Task_Target />    
      </section>
      <Report_form/>
    </div>
  </body>
</template>

<style>

#cuerpo{
  display: grid;
  width: 850px;
  background-color: white;
  margin: 0px 300px;
}
/* 
div.select {
  display: inline-block!important;
} */
h1, h3{
    color: #0C1132;
    margin: 20px 0px!important;
}
#titulo {
  display: inline-block!important;
}

hr {
    border: 5px solid;
    color: #0C1132!important;  
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
.btn.btn-dark {
  display: inline-block;
  vertical-align: baseline;
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
