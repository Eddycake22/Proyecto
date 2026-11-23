<script setup>
import area_details from './area_details.vue';
import { ref } from 'vue';

defineProps({
  name: String,
  descripcion: String,
});

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
<template>
  <div class="grid" style="--bs-columns: 2; row-gap: 2rem; column-gap: 3rem">
    <!--  -->
    <div class="Target row m-0">
      <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
      <div class="col-md-3 col-12">
        <button
          class="btn btn-secondary"
          type="button"
          @click="mostrarFormulario = true"
        >
          Detalles
        </button>
        <teleport to="body">
        <area_details 
        :mostrar="mostrarFormulario" 
        :editar = "editar"  
        @changestate="changestate" @cancelprocess="cancelprocess" @guardarform="guardarform"/>
    
    </teleport>
      </div>
    </div>
    <div class="Target row m-0">
        <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
        <div class="col-md-3 col-12">
            <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        </div>
    </div>
    <div class="Target row m-0">
        <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
        <div class="col-md-3 col-12">
            <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        </div>
        </div>
        <div class="Target row m-0">
        <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
        <div class="col-md-3 col-12">
            <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        </div>
        </div>
        <div class="Target row m-0">
        <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
        <div class="col-md-3 col-12">
            <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        </div>
        </div>
        <div class="Target row m-0">
        <h3 class="col-9">Nombre del Área: {{ area_name }}</h3>
        <div class="col-md-3 col-12">
            <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        </div>
        </div>
  </div>
</template>

<style scoped>
.grid {
  width: 80vw;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.Target {
  background: linear-gradient(to right, #eff0f8, #0c1132);
  padding: 20px;
  border-radius: 25px;
  width: 100%;
  height: 200px;
  cursor: pointer;
  transition: scale 2s ease-out;
}

.Target:hover {
  transform: scale(1.5rem);
}

h3 {
  display: inline-block;
  font-size: 24px;
  color: #0c1132;
}
.btn {
  /* 
        width: auto;+
        position: relative;
        left: 55% ;
        top: 0 */

  border: none;
  background: radial-gradient(
    at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(239, 240, 248, 0.1) 75%
  );
  box-shadow:
    inset 0 1px 1.5px #ccc,
    inset 0 -1px 1px #aaa;
  height: min-content;
}

@media (max-width: 768px) {
  .grid {
    min-width: 85%;
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
  }
  .Target {
    padding: px;
    height: 150px;
  }
  div.col-md-3 {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  .btn {
    width: 200px;
  }
  .row {
    --bs-gutter-x: 0;
  }
}
</style>
