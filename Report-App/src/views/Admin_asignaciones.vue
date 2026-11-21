<template>
    <div class="grid" style="--bs-columns: 4; --bs-row: 4;">
       <admin_createreport /><admi_orderbutton/>
      <section class="" id="Tareas" style="grid-row: 3; grid-column: span 3; column-gap:3rem;">
        <admin_tasktarget />
      </section>
    </div>
</template>

<script setup>
import admin_createreport from "../components/admin_createreport.vue";
import admin_tasktarget from "../components/Admin_tasktarget.vue";
import admi_orderbutton from "../components/admin_orderbutton.vue";
</script>

<style scoped>
.grid {
    display: grid;
  width: 80vw;
  grid-template-columns: 1fr auto auto;
  grid-auto-rows: min-content;
  margin: 0px;
  row-gap: 1rem;
}
@media (max-width: 768px) {
  .grid {
    min-width: 85%;
  }
  .btn, #details-btn {
    grid-row-start:4!important;
  }
}
</style>