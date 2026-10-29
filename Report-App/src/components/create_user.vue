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

import axios from 'axios';

const user = ref ({
  name:'',
  email: '',
  password:'',
  cpassword:'',
  rol:'#',
})
</script>

<template>
  <button class="btn btn-dark" id="open-form" type="button" @click="mostrarFormulario = true">
    Crear Usuario
  </button>

  <div v-if="mostrarFormulario" class="overlay" @click.self="mostrarFormulario = false">
    <div class="form-container modal-form" style="--bs-rows:6;">
      <div class="form-hearder">
        <h3 class="mb-2">Crear Usuario</h3>
      </div>

      <form class="row g-3" form @submit.prevent="guardarform">
        <div class="col-md-6">
          <label for="name" class="form-label">Nombre del usuario</label>
          <input type="text" class="form-control" v-model="user.name" placeholder="Escribir el nombre de usuario" />
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="text" class="form-control" v-model="user.email" placeholder="Escribir correo electrónico" />
        </div>

        <div class="col-md-6">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" v-model="user.password" placeholder="Escribir contraseña" />
        </div>

        <div class="col-md-6">
          <label for="cpassword" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" v-model="user.cpassword" placeholder="Confirmar contraseña" />
        </div>

        <div class="col-6">
          <label for="rol" name="rol-select position-area" class="form-label">Rol</label>
          <select class="form-select" aria-label="Seleccionar" v-model="user.rol" >
            <option value="#">Seleccionar...</option>
            <option value="1">Técnico</option>
            <option value="2">Supervisor</option>
            <option value="3">Visita</option>
          </select>
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
  background-color: rgba(2, 10, 36, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* Asegura que esté por encima de todo */
}

#open-form {
  width: 20%;
  padding: 5px 10px;
  border-radius: 11px;
  font-size: 15px;
  box-shadow: inset 0 1px 1.5px #ccc, 
  inset 0 -1px 1px #aaa;
  user-select: none;
    background: radial-gradient(
     at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(239, 240, 248, 0.1) 75%
  ) ;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
}

#open-form:hover {
  background: radial-gradient(
     at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(239, 240, 248, 0.3) 250%,
    rgba(239, 240, 248, 0.3) 50%
  );
  /* transform: scale(1.01); */
}

.form-container {
  display: grid;
  width: 80%;
  height: Auto;
  margin: 0px 150px 0px 150px;
  background: rgba(217, 217, 217, .15);
  padding: 20px 35px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  color: white!important;
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

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(33, 37, 41, 0.75)!important;
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
        background: rgba(117, 126, 145, 0.5)
          /* rgba(51, 61, 129, 0.9) */
        ;
        color: #0C1132;
      }

      &:checked {
        background: rgba(12, 17, 50, .5)
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
    padding: 20px 35px;
    /* grid-template-columns: 1fr auto auto!important; */
  }
  #open-form{
    font-size: 14px;
    height: 45px;
    width: 120px;
  }
  /* button {
    height: 35px;
    width: 40px;
    font-size: 14px;
    border-radius: 10px;
    margin-top: 5px;
  } */

}
</style>
