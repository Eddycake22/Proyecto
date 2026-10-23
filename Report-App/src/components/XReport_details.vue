<template>
    <div class="report-details">
        <h3>Detalles de la asignación</h3>
        <p><strong>Nombre de la asignación:</strong> {{ name }}</p>
        <p><strong>Equipo:</strong> {{ device }}</p>
        <p><strong>Marca:</strong> {{ brand }}</p>
        <p><strong>Tipo de Placa:</strong> {{ boardType }}</p>
        <p><strong>Activo:</strong> {{ assetNumber }}</p>
        <p><strong>Comentarios:</strong> {{ comments }}</p>
        <img :src="imagePreview" :alt="imageAlt" v-if="imagePreview">
    </div>
</template>

<script setup lang="ts">
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

<style scoped>
    .report-details {
        padding: 20px;
        width: 80%;
        height: 60vh;
        margin: 0px 150px 0px 150px;
        background-color: white;
        padding: 20px 35px;
        border-radius: 15px;
    }

</style>
