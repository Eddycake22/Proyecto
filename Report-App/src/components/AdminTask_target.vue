<template>
    <div class="act-task shadow-sm" style="--bs-rows:4; --bs-columns:3; column-gap:1rem;">
        <h4 class="mt-1" id="report-name">Nombre de la asignación</h4>
        <div class="d-flex gap-3" style="grid-row:2; grid-column:1">
        <p id="user-name">Técnico: </p>
        <p id="status">Estado: </p>
        </div>
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
    <teleport to="body">
        <Report_details 
        :mostrar="mostrarFormulario" 
        :editar = "editar"  
        @changestate="changestate" @cancelprocess="cancelprocess" @guardarform="guardarform"/>
    
    </teleport>
    </div>
</template>

<style scoped>
.act-task {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr auto auto;
    grid-auto-rows: min-content;
    background-color: white;
    border-radius: 25px;
    margin: 0px;
    padding: 20px;
    color: #0C1132;
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
        font-size: 14px;
        grid-column: span 4;
    }
    p {
        font-size: 13px;
        /* grid-column: span 4; */
    }
    .btn, #details-btn {
        grid-row-start:4!important;
    }
}
</style>
<script setup>
import Report_details from './Report_details.vue';
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