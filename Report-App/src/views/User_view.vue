<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header.vue';
</script>
<template>
    <Header class="mb-5"/>
        
    
    <RouterView></RouterView>
    
    
</template>
<style scoped>
/* body {
    display: flex;
     flex-direction: column;  
     align-items: center!important; 
} */
</style>