<template>
    <div class="act-task shadow-sm" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <h4 class="mt-1" id="report-name">Nombre de la asignación</h4>
        <p id="status" style="grid-row:2">Estado: </p>
        <p class="d-flex align-items-center " id="Desc" style="grid-row:3;">Descripcion:</p>
         <button
    class="btn btn-secondary"
    id="details-btn"
    type="button"
    @click="mostrarFormulario = true"
    style="grid-row:3; grid-column:2;"  
    >
    Detalles
    </button>
    <button class="btn btn-primary" style="grid-row:3; grid-column:3;" type="button" id="complete-btn">Completar</button>
    </div>
    <teleport to="body">
        <report_details 
        :mostrar="mostrarFormulario" 
        :editar = "editar"  
        @changestate="changestate" @cancelprocess="cancelprocess" @guardarform="guardarform"/>
    
    </teleport>
</template>

<style scoped>
#detaiils-btn{
    grid-column-start: 2;
}
.act-task {
    display: grid;
    width: auto!important;
    grid-template-columns: 1fr auto auto;
    grid-auto-rows: min-content;
    background-color: white;
    border-radius: 25px;
    margin: 0px;
    padding: 20px;
}
p {
    font-size: 16px;
    margin: 0px;
}
#complete-btn {
    background-color: #0C1132;
    border: none;
}

.btn.btn-primary:hover {
        background-color: #171f52!important;
    }
.btn {
    border-radius: 10px;
}

@media (max-width: 768px) {
    .act-task {
        width: auto!important;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 2fr 1fr 1fr!important;
        grid-auto-rows: 150px;
    }

    h4 {
        font-size: 18px;
        grid-column: span 4;
    }
    p {
        font-size: 13px;
        grid-column: span 4;
    }
    .btn {
        font-size: 14px;
        grid-row-start:4!important;
        padding: 5px 5px;
    width: 100px;
    height: 40px; 
    }
    #complete-btn {
        grid-column-start: 4!important;
    }
    #details-btn {
        grid-column-start: 2!important;
        position: relative;
        left: 10px;
    }
}
</style>
<script setup>
import report_details from './Report_details.vue'
import { ref } from 'vue';

const mostrarFormulario = ref(false);
const editar = ref (false);

function cancelprocess () {
  if (editar.value) {
    changestate();
  } else {
    mostrarFormulario.value = false;
  };
};

const guardarform = () => {
  alert("¡Formulario enviado!");
  mostrarFormulario.value = false; // Cierra el formulario tras enviar
  changestate();
};

function changestate () {
  editar.value = !editar.value;
};
</script>