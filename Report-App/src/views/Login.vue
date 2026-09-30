<script setup>
</script>

<template>
    <html lang="es">
    <head>
    </head>
    <body class="text-light">
    <div class="Formulario">
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="handleLogin" class="formulario">
        <div class="form-group">
            <label for="username">Usuario o correo electrónico:</label>
            <input type="text" id="username" v-model="username" required placeholder="Escribir..." />
        </div>
        <div class="form-group">    
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required placeholder="Escribir contraseña..."/>
        </div>
        </form>
          <button type="button" class="btn btn-light">Iniciar Sesión</button>
          <p>¿No tienes cuenta? <a href="/register" @click="goToRegister">Regístrate aquí</a></p>
    </div>
    </body>
    </html>
</template>

<style scoped>
html{
    /*background-color: #0C1132;*/
}
body {  
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #0C1132!important;
}

div.Formulario {
    display: flex;
    width: 450px;
    padding:40px;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
}
h1 {
    text-align: center;
    margin-bottom: 20px;
}
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
input {
    padding: 8px;
    border: none;
    border-radius: 4px;
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


</style>