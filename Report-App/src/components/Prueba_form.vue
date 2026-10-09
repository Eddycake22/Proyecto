<script setup lang="ts">
//Hacer que se muestre la vista previa de la imagen seleccionada en el formulario de reporte
import { ref } from "vue";

const vistaPrevia = ref<string | null>(null);

function mostrarVistaPrevia(event: Event) {
  const input = event.target;

  if (!(input instanceof HTMLInputElement)) return;

  const archivo = input.files?.[0];
  if (archivo) {
    vistaPrevia.value = URL.createObjectURL(archivo);
  }
}

// 1. Creamos una variable reactiva que inicia en 'false' (formulario oculto)
const mostrarFormulario = ref(false);

// Función opcional para procesar el envío del formulario
const guardarform = () => {
  alert("¡Formulario enviado!");
  mostrarFormulario.value = false; // Cierra el formulario tras enviar
};
</script>

<template>
  <button
    class="btn btn-dark"
    id="open-form"
    type="button"
    @click="mostrarFormulario = true"
  >
    Crear Reporte
  </button>

  <div v-if="mostrarFormulario" class="form-container modal-form">
    <div class="form-hearder">
      <h3 class="mt-2">Hacer Reporte</h3>
    </div>

    <form class="row g-3" form @submit.prevent="guardarform">
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre de la asignación</label>
        <input
          type="text"
          class="form-control"
          id="Name"
          placeholder="Escribir el nombre de la asignación"
        />
      </div>

      <div class="col-md-6">
        <label for="Device" class="form-label">Equipo</label>
        <input
          type="text"
          class="form-control"
          id="Device"
          placeholder="Escribir el nombre del equipo"
        />
      </div>

      <div class="col-md-6">
        <label for="Brand" class="form-label">Marca</label>
        <input
          type="text"
          class="form-control"
          id="Brand"
          placeholder="Escribir el nombre de la marca"
        />
      </div>

      <div class="col-6">
        <label for="placa" class="form-label">Tipo de placa</label>
        <select
          class="form-select"
          aria-label="Default select example"
          id="placa"
        >
          <option selected>Seleccionar...</option>
          <option value="1">Xcaret</option>
          <option value="2">Xel-Há</option>
          <option value="3">Xplor</option>
        </select>
      </div>

      <div class="col-6">
        <label for="Active" class="form-label">Activo</label>
        <input
          type="text"
          class="form-control"
          id="Active"
          placeholder="Escribir el número de activo"
        />
      </div>

      <div class="col-md-12">
        <label for="input-coment" class="form-label">Comentarios</label>
        <textarea
          class="form-control"
          id="input-coment"
          aria-label="Coments"
          placeholder="Escribir comentarios..."
        ></textarea>
      </div>

      <div class="col-md-2 position relative" id="image-upload">
        <img v-if="vistaPrevia" :src="vistaPrevia" alt="Vista previa" />
        <label for="imagen-input" class="botones btn-image" id="imagen-label"
          >Subir Imagen</label
        >
        <input
          type="file"
          id="imagen-input"
          name="imagen"
          accept="image/*"
          style="display: none"
          @change="mostrarVistaPrevia"
        />
      </div>

      <button
        type="submit"
        class="botones btn btn-primary col-2 position-relative"
        id="submit-button"
      >
        Enviar
      </button>
      <button
        type="button"
        class="botones btn btn-secondary col-2 position-relative"
        id="cancel-button"
        @click="mostrarFormulario = false"
      >
        Cancelar
      </button>
    </form>
  </div>
</template>

<style scoped>
#open-form {
  width: auto!important;
  padding: 5px 10px;
  border-radius: 11px;
  font-size: 15px;
  background-color: #0c1132;
  border: 2px solid #333d81;
}

.btn.btn-dark:hover {
  background-color: #171f52;
}

.form-container {
  width: 80%;
  height: Auto;
  margin: 0px 150px 0px 150px;
  background-color: white;
  padding: 20px 35px;
  border-radius: 15px;
}

input,
select,
textarea {
  background-color: #eff0f8;
}

#image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;

  /*Diseño del botón*/
  background-color: #0c1132;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

#image-upload:hover,
#submit-button:hover {
  background-color: #171f52;
}
#submit-button, #cancel-button {
  left: 59.5%;
  top: 15px;
  width: 100px;
  height: 40px;
  border: none;
}
#submit-button {
  background-color: #0c1132;
  margin-right: 25px;
}

img {
  width: 150px;
  height: auto;
  object-fit: cover;
}

.botones {
  justify-content: bottom;
}
</style>
