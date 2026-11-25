<script setup lang="ts">
import { ref } from "vue";
import admin_tasktarget from '../components/admin_tasktarget.vue';
import Stats from '../components/Stats.vue';
import {reactive} from 'vue';

const vistaPrevia = ref<string | null>(null);

function mostrarVistaPrevia(event: Event) {
  const input = event.target;

  if (!(input instanceof HTMLInputElement)) return;

  const archivo = input.files?.[0];
  if (archivo) {
    vistaPrevia.value = URL.createObjectURL(archivo);
  }
};

const editar = ref (false);
const mostrarFormulario = ref(false);

function guardarform () {
  alert("¡Formulario enviado!");
  mostrarFormulario.value = false; 
  changestate();
};
function changestate () {
  editar.value = !editar.value;
};
function cancelprocess () {
  resetForm();
  if (editar.value) {
    changestate();
  } else {
    mostrarFormulario.value = false;
  };
};

const formdefault = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    rol: '#',
};
const user = reactive ({...formdefault});
function resetForm() {
  Object.assign(user, formdefault);
};
</script>

<template>
  <button
    class="btn btn-secondary"
    id="details-btn"
    type="button"
    @click="mostrarFormulario = true"
    style="grid-row:3; grid-column:2;"  
  >
    Detalles
  </button>

  <div
    v-if="mostrarFormulario"
    class="overlay"
    @click.self="mostrarFormulario = false, changestate()"
  >
    <div class="form-container modal-form" style="--bs-rows: 6">
      <section id="Detalles">
        <div class="form-hearder d-flex justify-items-between">
        <h3 class="mb-2">Detalles del usuario</h3>
      </div>

      <form class="row g-3" form @submit.prevent="guardarform">
        <div class="col-md-6">
          <label for="name" class="form-label">Nombre del Usuario</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            placeholder="Nombre del Usuario"
            :disabled="!editar"
          />
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Correo electrónico</label>
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            placeholder="Correo electrónico"
            :disabled="!editar"
          />
        </div>

        <div class="col-md-6">
          <label for="password" class="form-label">Contraseña</label>
          <input
            type="text"
            class="form-control"
            v-model="user.password"
            placeholder="Contraseña"
            :disabled="!editar"
          />
        </div>

        <div class="select col-md-6">
          <label class="form-label">Rol</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="user.rol"
            :disabled="!editar"
          >
            <option value="#">Seleccionar...</option>
            <option value="1">Técnico</option>
            <option value="2">Supervisor</option>
            <option value="3">Vista</option>
          </select>
        </div>
        <div class="col-12 d-flex justify-content-md-end justify-content-between">
          <button
            type="button"
            class="botones btn btn-light"
            id="submit-button"
            v-if="!editar"
            @click="changestate
            /* editar = !editar */"
          >
            Editar
          </button>
          <button
            type="submit"
            class="botones btn btn-light"
            id="submit-button"
            v-if="editar"
            @click="guardarform
            /* editar = !editar */"
          >
            Guardar
          </button>
          <button
            type="button"
            class="botones btn btn-dark"
            id="cancel-button"
            @click="cancelprocess"
          ><!-- @click="mostrarFormulario = false" -->
            Cancelar
          </button>
        </div>
      </form>
      </section>
      <section>
        <h3 class="my-4">Asignaciones</h3>
        <admin_tasktarget class="component" />
      </section>
      <section>
        <h3 class="my-4">Estadísticas</h3>
        <Stats class="component"/>
      </section>
    </div>
  </div>
</template>

<style scoped>
.component {
 width: 100%;;
}
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
}

#open-form {
  width: 20%;
  padding: 5px 10px;
  border-radius: 11px;
  font-size: 15px;
  border: none;
  box-shadow:
    inset 0 1px 1.5px #ccc,
    inset 0 -1px 1px #aaa;
  user-select: none;
  background: radial-gradient(
    at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(239, 240, 248, 0.1) 75%
  );
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
  width: 70%;
  margin: 0px 150px 0px 150px;
 color: white;
  background: rgba(217, 217, 217, 0.25);
  backdrop-filter: blur(10px);
  padding: 20px 35px;
  border-radius: 15px;
  /* position: relative;
  top: 20%; */
  overflow-x:clip!important;
  overflow-y: auto;
  scrollbar-width: none;
  max-height: 80vh;
}

input,
select,
textarea {
  background-color:#eff0f8;
}
.form-control[disabled], .form-select[disabled] {
  background-color: #dddfeb;
  color: rgba(33, 37, 41, 0.75);
}
#Detalles {
    color: white;
}
/* .Asignaciones {
    color: white!important;
} */
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
#image-label:hover,
#cancel-button:hover {
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

#cancel-button {
  background-color: #0c1132;
  margin-left: 14px;
}

i {
  font-size: 30px;
  font-weight:800px;
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
  color: #212529;
  cursor: pointer;
  background: #eff0f8
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%230c1132' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A")
    right 10px center / 20px no-repeat / color black;
  position: relative;
  z-index: 999;

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
      border: 1px solid #0c1132;
      background: #eff0f8;
      border-radius: 5px;
      color: #0c1132;
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
          background: rgba(12, 17, 50, 0.8);
          color: white;
        }

        &:checked {
          background: rgb(12, 17, 50);
          color: white;
        }

        &::checkmark {
          display: none !important;
        }

        &:first-child {
          border: 0;
        }
      }
    }
  }


@media (max-width: 768px) {
  .form-container {
    width: 90%;
    margin: 0px 40px 0px 40px;
    padding: 20px 35px;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr auto auto!important; */
  }

  #open-form {
    font-size: 14px;
    height: 45px;
    width: 120px;
  }
}
</style>
