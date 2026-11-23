<template>
    <button class="btn btn-dark d-flex" type="button">Inicio</button>
</template>

<style scoped>
    button {
        justify-content: center;
        text-align: center  ;
        height: auto;
        width: 200px;
        padding: 5px 10px;
        border-radius: 11px;
        font-size: 15px;
        background-color: #0C1132;
        border: 2px solid #333d81;
    }

    .btn.btn-dark:hover {
        background-color: #171f52;
    }
    @media (max-width: 768px) {
        /* button {
            height: 35px;
            width: 40px;
            font-size: 14px;
            border-radius: 10px;
        } */
    }
</style>

<script setup lang="ts">
</script>