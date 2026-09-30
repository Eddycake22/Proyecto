<template>
    
    <header class="hola">
    </header>
<div class="container">
    <Target_historial/>
</div>
<Barra_Lateral/>
<div class="container">
<Report_Button/>
<section id="Pendientes">
    <Task_Target/>
    </section>
<section id="Completadas">
    </section>
</div>
    
</template> 

<style>
.hola{
    background-color: #0C1132;
}
</style>

<script setup>
import Target_historial from '../components/Target_historial.vue';
import Barra_Lateral from '../components/Barra_Lateral.vue';
import Report_Button from '../components/Report_Button.vue';
import Task_Target from '../components/Task_Target.vue';

</script>