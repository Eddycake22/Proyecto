<script setup>
import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <body>
        <teleport to="body"><Header/></teleport>
        
    
    <RouterView></RouterView>
    </body>
    
</template>
<style scoped>
/* body {
    display: flex;
     flex-direction: column;  
     align-items: center!important; 
} */
</style>