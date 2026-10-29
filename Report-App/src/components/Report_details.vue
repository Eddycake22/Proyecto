<script setup lang="ts">
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

 defineProps({
        name: String,
        device: String,
        brand: String,
        boardType: String,
        assetNumber: String,
        comments: String,
        imagePreview: String,
        imageAlt: String
    });
</script>

<template>
  <button class="btn btn-dark" id="open-form" type="button" @click="mostrarFormulario = true">
    Crear Reporte
  </button>

  <div v-if="mostrarFormulario" class="overlay" @click.self="mostrarFormulario = false">
    <div class="form-container modal-form" style="--bs-rows:6;">
      <div class="form-hearder">
        <h3 class="mb-2">{{ name }}</h3>
      </div>

      <form class="row g-3" form @submit.prevent="guardarform">
        <div class="col-md-6">
          <label for="Device" class="form-label">Equipo</label>
          <p class="form-control" id="Device">{{ device }}</p>
        </div>

        <div class="col-md-6">
          <label for="Brand" class="form-label">Marca</label>
          <p class="form-control" id="Brand">{{ brand }}</p>
        </div>

        <div class="col-6">
          <label for="board" class="form-label">Tipo de placa</label>
          <p class="form-control" id="board">{{ boardType }}</p>
        </div>

        <div class="col-6">
          <label for="Active" class="form-label">Activo</label>
          <p class="form-control" id="Active">{{ assetNumber}}</p>
        </div>

        <div class="col-md-12">
          <label for="coment" class="form-label">Comentarios</label>
            <text class="form-control" id="coment">{{comments }}</text>
        </div>

        <div class="col-12 col-md-6">
          <div class="overflow-hidden" id="image-upload"> <!-- id="image-upload" -->

            <label for="imagen-input" class="botones btn-image" id="image-label">
              <img v-if="vistaPrevia" class="mb-2" :src="vistaPrevia" alt="Vista previa" />
              Subir Imagen
            </label> <!-- id="imagen-label" -->
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end">
          <button type="submit" class="botones btn btn-primary" id="submit-button">
            Guardar
          </button>

          <button type="button" class="botones btn btn-secondary" id="cancel-button" @click="mostrarFormulario = false">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* Asegura que esté por encima de todo */
}

#open-form {
  width: auto !important;
  padding: 5px 10px;
  border-radius: 11px;
  font-size: 15px;
  background-color: #0c1132;
  border: 2px solid #333d81;
}

.btn.btn-dark:hover {
  background-color: #171f52!important;
}

.form-container {
  display: grid;
  width: 80%;
  height: Auto;
  margin: 0px 150px 0px 150px;
  background-color: white;
  padding: 20px 35px;
  border-radius: 15px;
  /* grid-template-columns: 1fr auto auto!important; */
}

input,
select,
textarea {
  background-color: #eff0f8;
}

#image-label {
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin: 0px 7px; */
  background-color: #0c1132;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

}

/* 
#image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c1132;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
   
} */
#image-label:hover,
#submit-button:hover {
  background-color: #171f52;
}

#submit-button,
#cancel-button {
  /* left: 59.5%;
  top: 15px; */
  width: 100px;
  height: 40px;
  border: none;
}

#submit-button {
  background-color: #0c1132;
  margin-right: 14px;

}

img {
  width: 150px;
  height: auto;
  object-fit: cover;
}

select {
  appearance: none;

  @supports (appearance: base-select) {

    &,
    &::picker(select) {
      appearance: base-select;
    }
  }
}

select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(33, 37, 41, 0.75);
  /* padding-block: 10px;
  padding-inline: 10px 30px;
  border-radius: 10px; */
  cursor: pointer;
  background: #EFF0F8 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%230c1132' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A") right 10px center / 20px no-repeat / color black;

  @supports (appearance: base-select) {
    padding-inline: 10px;
    background-image: none;
    &::picker-icon {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%230c1132' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A");
      transition: rotate 0.2s ease-out;
    }

    &:open::picker-icon {
      rotate: 180deg;
    }

    &::picker(select) {
      padding: 0;
      margin-top: 5px;
      border: 1px solid #0C1132;
      background: #EFF0F8;
      border-radius: 5px;
      color: #0C1132;
      /* Animacion de las opciones
      opacity: 0;
      height: 0;
      overflow: clip;
      transition: height 0.5s ease-out, opacity 0.5s ease-out, overlay 0.5s,
        display 0.5s;
      transition-behavior: allow-discrete;*/
    }

    &:open::picker(select) {
      opacity: 1;
      height: auto;
      overflow: auto;

      @starting-style {
        opacity: 0;
        height: 0;
      }
    }


    option {
      padding: 5px;
      padding-left: 10px;
      cursor: pointer;
      transition-property: color, background;
      transition-duration: 0.1s;
      transition-timing-function: ease-out;

      &:where(:hover, :focus, :active) {
        background: rgba(12, 17, 50, 0.8)
          /* rgba(51, 61, 129, 0.9) */
        ;
        color: white;
      }

      &:checked {
        background: rgb(12, 17, 50)
          /* rgb(51, 61, 129) */
        ;
        color: white;
      }
      &::checkmark {
        display: none!important;
      }

      &:first-child {
        border: 0;
      }
    }
  }
}

/* .botones {
  justify-content: bottom;
} */

@media (max-width: 768px) {
  .form-container {
    width: 90%;
    margin: 0px 40px 0px 40px;
    background-color: white;
    padding: 20px 35px;
    /* grid-template-columns: 1fr auto auto!important; */
  }

  button {
    height: 35px;
    width: 40px;
    font-size: 14px;
    border-radius: 10px;
    margin-top: 5px;
  }

}
</style>
