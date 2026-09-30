<template>
     <body class="text-light">
    <div class="formulario">    

        <h2>Registro</h2>

        <form class="container text-right" @submit.prevent="register">
            <!-- <div class="row justify-content-evenly"> --->
                <div class="row row-cols-2 g-3">
            <div class="form-group col">
                <label for="name">Nombre completo:</label>
                <input type="text" id="name" v-model="name" required placeholder="Escribir nombre completo..."/>
            </div>
            <div class="form-group col">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required placeholder="Escribir email..."/>
            </div>
            <!-- <div class="row "> -->
            <div class="form-group col">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required placeholder="Escribir contraseña..."/>
            </div>
            <div class="form-group col">
                <label for="confirm-password">Confirmar contraseña:</label>
                <input type="password" id="confirm-password" v-model="confirmPassword" required placeholder="Confirmar contraseña..."/>
            </div>
            <!-- </div> -->
                </div>
        <!--- </div> -->
          
        </form>
        <button class="btn btn-light" type="submit">Registrarse</button>
        <p class="mt-3">¿Ya tienes una cuenta? <router-link to="/login" class="text-light">Inicia sesión</router-link></p>
    </div> 
        </body>
</template>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #0C1132!important;
    font-family: 'league spartan', sans-serif;
}
.formulario {
    display: flex;
    width: 100% auto;
    padding:40px;   
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    align-items: center;
}
h2 {
    margin-bottom: 40px;
    text-align: center;
}

.form-group.col {
    display: flex;
    flex-direction: column;
}
input {
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-top: 8px;
    font-size: 14px;
    background-color: #EFF0F8;
}
button {
    margin-top:40px;
    width: 50%;
}
p {
    font-size: 18px;
}


</style>