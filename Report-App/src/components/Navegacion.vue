<template>
    <div class="contenedor grid" style="--bs-columns: 4; --bs-row: 4">
        <i class="bi bi-arrow-left-short"></i>
        <h1 class="fw-semibold" id="titulo"> <!-- align-items-center -->
        Asignaciones
      </h1>
    </div>
</template>

<style scoped>
    .grid {
  min-width: 70%;
  grid-template-columns: auto 1fr auto;
  display: grid;
  grid-auto-rows: min-content!important;
  /* background-color: white */
  border-radius: 15px;
  row-gap: 2rem;
  column-gap: 1rem;
}
h1,
h3 {
  color: #eff0f8 !important;
  margin: 0px !important;
}
h1 {
  vertical-align: middle;
  text-align: center;
}
i {
    color: #eff0f8;
    font-size: 3rem;
}
</style>