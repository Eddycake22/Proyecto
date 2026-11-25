<script setup>
import { RouterLink} from 'vue-router';
import {ref} from "vue";

const user = ref ({
    name: "",
    password:""
});
</script>

<template>
    <div class="Background">
        <div class="Formulario text-light">
        <h1 class="m-0">Iniciar Sesión</h1>
        <form @submit.prevent="handleLogin" class="formulario">
        <div class="form-group mt-3">
            <label for="username">Usuario o correo electrónico:</label>
            <input type="text" id="username" v-model="user.name" required placeholder="Escribir..." />
        </div>
        <div class="form-group my-2">    
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="user.password" required placeholder="Escribir contraseña..."/>
        </div>
        </form>
        <RouterLink class="btn btn-light my-3" to="/inicio">Iniciar Sesión</RouterLink>  
          <!-- <p>¿No tienes cuenta? <a href="/register" @click="goToRegister">Regístrate aquí</a></p> -->
    </div>
    </div>
</template>

<style scoped>
.Background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
   background-image: url('../assets/Images\Background.jpg');  
    background-repeat: no-repeat;       
    background-position: center;        
    background-size: cover;             
    background-attachment: fixed;
}
div.Formulario {
    display: flex;
    width: 450px;
    padding:40px;
    flex-direction: column;
    justify-content: center;
    border: none;
    border-radius: 10px;
    /* background: rgba(12, 17, 50, 0.1); */
    background: rgba(217, 217, 217, 0.08);
    box-shadow:
    inset 1px 1px 5px rgba(255, 255, 255, 0.2), 
    inset 1px 1px 5px rgba(0, 0, 0, 0.1),
    inset 0 1px 1.5px #ccc,
    inset 0 -1px 1px #aaa;;
    backdrop-filter: blur(1px);
}
h1 {
    text-align: center;
    margin: 0px;
}
.form-group {
    display: flex;
    flex-direction: column;
}
input {
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin-top: 8px;
    font-size: 14px;
}
::placeholder {
    font-size: 14px;
}
p {
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
}

label {
    font-size: 16px;
}
.btn.btn-light {
    font-family: 'Roboto', sans-serif!important;
    border-radius: 10px;
    color: #0C1132!important;
    font-size:16px ;
    /* width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center; */
}
</style>