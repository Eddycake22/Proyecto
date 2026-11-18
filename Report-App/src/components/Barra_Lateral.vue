<script setup>
import Historial from "./historial.vue";
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top" style="background-color: #0C1132!important;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
        aria-controls="offcanvas" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel"></h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="User-info d-flex flex-column align-items-center">
            <div class="circle">
              <img src="" alt="">
            </div>
            <h4 class="text-white pt-4">Paquito Peréz</h4>
            <h6 class="text-secondary">Técnico</h6>
          </div>
        <Historial />
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#offcanvas {
  background-color: #0C1132 !important;
}
.offcanvas-body{
  overflow-y: auto;
  scrollbar-width: thin!important;
  max-height: 100vh;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url('../assets/Fotoperfil.jpg');
  background-position: center;  
}
</style>