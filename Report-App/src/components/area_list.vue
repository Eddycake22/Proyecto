<template>
    <div class="grid" style="--bs-columns:2; row-gap:1.5rem;  column-gap:1.5rem;"> <!--  -->
        <div class="Target Area-info" style="grid-row:1span;">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        <div class="Target Area-info">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        <div class="Target Area-info">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        <div class="Target Area-info">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        <div class="Target Area-info">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        <div class="Target Area-info">
        <h3>Nombre del Área: {{ area_name }}</h3>
        <button class="btn btn-secondary" type="button" @click="mostrarFormulario = true"> Detalles</button>
        <!-- <text>Descripcion{{ descripcion }}</text> -->
        </div>
        
</div>
</template>

<style scoped>
    .grid {
        min-width: 60%;
        display:grid;
        grid-auto-rows: min-content;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    .Target {
        display: inline;
        background: linear-gradient(
            to right, #EFF0F8, #0C1132
        );
        padding: 15px 50px 15px 15px;
        border-radius: 25px;
        width: 100%;
        height: 200px;
        cursor: pointer;
        transition: scale 2s ease-out;
    }

    .Target:hover {
        transform: scale(1.5rem);
    }

    h3{
        font-size: 24px;
        color: #0C1132;
    }

    
@media (max-width: 768px) {
    .grid {
        min-width: 80%;
        grid-template-columns: 1fr;
        grid-auto-rows: 150px;
    }
    .Target {
        height: 150px;
    } 
}
</style>

<script setup>
    defineProps({
        name: String,
        descripcion: String
    });
</script>


