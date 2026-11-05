<script setup>
import { ref } from 'vue';

const success = ref('75%');
const danger = ref('25%');
</script>
<template>
  <div class="grid stats">
    <div class="TargetA grid" style="--bs-columns:2; --bs-rows: auto;">
      <h3 class="titulo" style="grid-column-start:1; grid-column-end:span2;">Estado General de Asignaciones</h3>
      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 40px;">
        <div class="progress-bar bg-success" style="width: 25%">Tareas completadas 25%</div>
      </div>
      <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100" style="height: 40px;">
        <div class="progress-bar bg-danger" style="width: 75%">Tareas pendientes 75%</div>
      </div>
    </div>

    <div class="TargetB"> <!-- style="--bs-columns:2; --bs-rows: auto;" -->
      <div class="encabezado d-flex justify-content-between">
        <h3 class="titulo align-self-center">Estado de Asignaciones por Área</h3> <!-- style="--bs-rows-end:2;"-->
        <div class="select fw-medium">
          <select name="area-select position-area">
            <option value="1" selected>Área 1</option>
            <option value="2">Área 2</option>
            <option value="3">Área 3</option>
          </select>
        </div>
      </div>
      <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100" style="height: 40px;">
        <div class="progress-bar bg-success" style="width: 75%;">Tareas completada 75%</div>
      </div>
      <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100" style="height: 40px; grid-row-start: 3;"><p>Tareas pendientes {{ danger }}</p> ``
        <div class="progress-bar bg-danger" style="width: v-bind(danger)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: grid;
  row-gap: 30px;
  color: #0C1132;

}

.TargetA,
.TargetB {
  width: 100%;
  background: white;
  padding: 30px 30px;
  border-radius: 25px;
}

.TargetA {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.TargetB {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.progress-bar {
  font-size: 14px;
}

h3 {
  display: inline-block;
  margin: 0px !important;
}

.progress {
  border-radius: 20px !important;
  position: relative;
  
}
p {
  position: absolute;
  z-index: 99;
  font-size: 14px;
  margin-bottom: 0px!important;
  top:10px;
  left:10px;
}
.progress-bar {
  color: #0C1132!important;
  position: relative;
}
.bg-success {
  --bs-success-rgb:75, 197, 146;
}
.bg-danger {
  --bs-danger-rgb:255, 101, 101;
}
select {
  appearance: none;

  @supports (appearance: base-select) {

    &,
    &::picker(select) {
      appearance: base-select;
    }
  }

  z-index: 10;
  /* max-width: 150px; */
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-block: 10px;
  padding-inline: 10px 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: #0C1132 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFF' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A") right 10px center / 20px no-repeat;

  @supports (appearance: base-select) {
    padding-inline: 10px;
    background-image: none;

    &::picker-icon {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFF' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A");
      transition: rotate 0.2s ease-out;
    }

    &:open::picker-icon {
      rotate: 180deg;
    }

    &::picker(select) {
      padding: 0;
      margin-top: 5px;
      border: none;
      background: #4f5477;
      border-radius: 10px !important;
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
      color: white;
      background: #323652;
      padding: 5px;
      /* border-top: 1px solid #333d81; */
      cursor: pointer;
      transition-property: color, background;
      transition-duration: 0.1s;
      transition-timing-function: ease-out;

      &:where(:hover, :focus, :active) {
        background: rgba(12, 17, 50, 0)
          /* rgba(51, 61, 129, 0.9) */
        ;
        color: white;
      }

      &:checked {
        background: #0C1132
          /* rgb(51, 61, 129) */
        ;
        color: white;
      }

      &::checkmark {
        display: none;
      }

      &:first-child {
        border: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .TargetA,
.TargetB {
  padding: 25px;
}
  .progress{
    height: 30px!important;
  }
  .progress-bar {
    font-size: 12px;
  }

  .titulo {
    font-size: 18px!important;
  }
  .encabezado{
    flex-direction: column!important;
    gap: 20px;
  }
  select {
    min-width: 100%!important;
  }
  p{
    top: 5px!important;
    font-size: 12px;
  }
}
</style>