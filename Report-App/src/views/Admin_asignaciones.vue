<template>
    <div class="grid" style="--bs-columns: 4; --bs-row: 4">
       <AdminCreate_report /><AdminOrder_button/>
      <section class="" id="Tareas" style="grid-row: 3; grid-column: span 3">
        <AdminTask_target />
      </section>
    </div>
</template>

<script setup>
import AdminCreate_report from "../components/AdminCreate_report.vue";
import AdminTask_target from "../components/AdminTask_target.vue";
import AdminOrder_button from "../components/AdminOrder_button.vue";
</script>

<style scoped>
.grid {
    display: grid;
    width: 80%;
  grid-template-columns: 1fr auto auto;
  grid-auto-rows: min-content;
  margin: 0px;
  row-gap: 1rem;

}
@media (max-width: 768px) {
  .grid {
    max-width: 85%;
  }
  .btn, #details-btn {
    grid-row-start:4!important;
  }
}
</style>