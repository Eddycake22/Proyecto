<script setup lang="ts">
import task_target from "./task_target.vue";
import orderbutton from "./orderbutton.vue"
import { ref, reactive } from "vue";
const vistaPrevia = ref<string | null>(null);

function mostrarVistaPrevia(event: Event) {
  const input = event.target;

  if (!(input instanceof HTMLInputElement)) return;

  const archivo = input.files?.[0];
  if (archivo) {
    vistaPrevia.value = URL.createObjectURL(archivo);
  }
};

const props = defineProps({
  mostrar: Boolean,
  editar : Boolean,
  mostrarbtn: Boolean,
});

const emit = defineEmits([
  'changestate',
  'cancelprocess',
  'guardarform'
]);

interface Reportform {
    name: string,
    descrpcion: string,
    brand: string,
    active: number | null,
    board: string,
    comment: string
};

const inicialform:Reportform={
  name: '',
  descrpcion:'',
  brand:'',
  active:null,
  board:'#',
  comment: ''
};

const formdefault = reactive({...inicialform});

function resetForm() {
  Object.assign(formdefault, inicialform);
};

</script>
<template>
  <div
    v-if="mostrar"
    class="overlay"
    @click.self="$emit('cancelprocess')"
  >
    <div class="container" style="--bs-rows: 6">
      <div class="container-header justify-content-between">
        <h3 class="m-0 d-inline align-bottom" id="ano">Detalles del Área</h3>
        <i class="bi bi-x" @click="$emit('cancelprocess')"></i>
      </div>
      <div class="container-body mt-1">
        <p>Descripcion del área</p>
      </div>
      <section class="d-flex flex-column gap-3">
        <h5 class="m-0">Asignaciones dentro del área</h5>
        <orderbutton/>
        <task_target class="text-dark" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100vh;
  background-color: rgba(2, 10, 36, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden!important; 
}
.container-header{
  display:flex;
  flex-direction: row;
  align-items: bottom;
}
#ano{
  display: inline-block;
  vertical-align: middle!important;
  height: min-content;
}
h3, button, label, p, h5 {
  color: #eff0f8;
}
i{
  color: #eff0f8;
  font-size: 28px!important;
  vertical-align:0!important;
}
.bi::before{
  font-weight: bolder!important;
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

.container {
  display: grid;
  width: 80%;
  height: Auto;
  
  margin: 0px 150px 0px 150px;
  background: rgba(217, 217, 217, 0.25);
  backdrop-filter: blur(10px);
  padding: 20px 35px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
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

#image-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0px 7px; */
  background-color: #0c1132;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  max-height: 200px;
}
#image-label:hover,
#cancel-button:hover {
  background-color: #171f52;
}
img {
  width: 80%;
  height: 150px;
  object-fit: cover;
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

@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0px 40px 0px 40px;
    padding: 20px 35px;
    /* grid-template-columns: 1fr auto auto!important; */
  }

  #open-form {
    font-size: 14px;
    height: 45px;
    width: 120px;
  }

  #details-btn {
    grid-row: 4!important;
  }
}

@media (max-width: 1199.98px) {
  .container {
    margin: 0px 40px 0px 40px;
  }
  .btn-image {
    height:40px;
  }
}
</style>
