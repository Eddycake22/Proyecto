<!-- <script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const navbarToggle = ref(null);
const navbarMenu = ref(null)

function activar() {
    navbarToggle.value.classList.toggle('active');
    navbarMenu.value.classList.toggle('active');
}
</script>

<template>
    <nav class="navbar">
        <div class="navbar-container">
            <button ref="navbarToggle" class="navbar-toggle" @click="activar">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="navbar-menu" ref="navbarMenu">
                <RouterLink><li><a href="">Administrar usuarios</a></li></RouterLink>
                <RouterLink><li><a href="">Asignaciones</a></li></RouterLink>
                
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    position: sticky;
    top: auto;
    background:  white;
    backdrop-filter: blur(1px);
    z-index: 999;
    border-radius: 25px;
    padding: 0px 20px;
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
}

.navbar-container .navbar-menu{
    display: flex;
    text-align: center;
    gap: 1.5rem;
    list-style: none;
}

.navbar-container .navbar-menu.active {
    display: flex;
}
ul {
    margin: 0px;
    padding:0px;
}
.navbar-container .navbar-menu li a {
    text-decoration: none;
    color: #0c1132;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 6px 20px;
    border-radius: 20px;
    transition: nowrap;
}

.navbar-container .navbar-menu li a:hover,
.navbar-container .navbar-menu li .active {
    border: none;
    COLOR: #EFF0F8;
    background: rgba(12, 17, 50, 0.4); 
    box-shadow: 
    inset 1px 1px 2px rgba(0, 0, 0, 0.2),
    1px 1px 4px rgba(0, 0, 0, 0.3),
    -1px -1px 4px rgba(255, 255, 255, 0.1);
}

.navbar-toggle {
    display: none;
    background: transparent;
    padding: 10px;
    border: none;
    cursor: pointer;
}

.navbar-toggle.active .bar:nth-child(2) {
    opacity: 0;
}

.navbar-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg)
}

.navbar-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: #fff;
    transition: all 0.3s ease-in-out;
}

@media (max-width:880px) {
    .navbar {
        backdrop-filter: none;
        align-self: flex-end;
        background: none;
    }

    .navbar-container .navbar-menu {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.7rem!important;
        position: absolute;
        height: 100vh;
        width: 250px;
        top: -15px;
        right: -35px;
        padding: 5rem 1.5rem;
        background: linear-gradient(
            to bottom, rgba(12, 17, 50, 0.7), rgba(0, 0, 0, 0.1)
        );
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        TEXT-decoration: none;
        text-align:  left;

    }

    .navbar-toggle {
        display: block;
        z-index: 999;
    }
    li a {
        color: #eff0f8!important;
    }
}
</style> -->





<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const navbarToggle = ref(null);
const navbarMenu = ref(null)
const nav_layer = ref(null)

function activar() {
    navbarToggle.value.classList.toggle('active');
    navbarMenu.value.classList.toggle('active');
    nav_layer.value.classList.toggle('act');
}
function desactivar() {
    navbarToggle.value.classList.remove('active');
    navbarMenu.value.classList.remove('active');
    nav_layer.value.classList.remove('act');
}
</script>

<template>
        <nav class="navbar">
            <div class="nav-layer" ref="nav_layer" @click.self="desactivar()">
                <div class="navbar-container">
            <!-- <a href="" class="navbar-logo">CCSnippets</a> -->
            <button ref="navbarToggle" class="navbar-toggle" @click="activar">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="navbar-menu" ref="navbarMenu">
                <RouterLink to="/Usuarios" exact-active-class="activ">Usuarios</RouterLink>
                <RouterLink to="/Asignaciones" exact-active-class="activ">Asignaciones</RouterLink>
            </ul>
        </div>
            </div>
    </nav>
</template>

<style scoped>
*{
    scrollbar-width: none!important;
    /* border: 1px solid red; */
    }
    .nav-layer {
        display: flex;
    justify-content: center;
    background-color: transparent;
}

/* :deep(a) {
  text-decoration: none;
}
 */
.navbar {
    display: flex;
    justify-content: center;
    justify-self: center;
    height: 50px;
    position: sticky;
    top: auto;
    background: radial-gradient(
     circle at 50% 50%,
    rgba(0, 0, 0, 0.1) 5%,
    rgba(239, 240, 248, 0.1) 75%
  ) ;
    /*box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
    << inset 0 1px 1.5px #ccc, inset 0 -1px 1px #aaa, >>
    */
    box-shadow: 
    inset 1px 1px 5px rgba(255, 255, 255, 0.2), 
    inset 1px 1px 5px rgba(0, 0, 0, 0.1),
    2px 2px 10px rgba(0, 0, 0, 0.4),
    -2px -2px 8px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
    z-index: 999;
    border-radius: 25px;
    padding: 0px 20px;
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 2rem; */
    max-width: 1600px;
}

/* .navbar-logo {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
 */
.navbar-container .navbar-menu {
    display: flex;
    text-align: center;
    gap: 1.5rem;
    list-style: none;
}
.navbar-container .navbar-menu.active {
    display: flex;
    
}
ul {
    margin: 0px;
    padding:0px;
}
.navbar-container .router-link-active, a{
    text-decoration: none;
    color: #EFF0F8;
    font-size: 1.3rem!important;
    font-weight: 500;
    padding: 3px 15px;
    border-radius: 20px;
    /* border: 2px solid transparent; */
    transition: nowrap;
}

/* .navbar-container .navbar-menu li a:hover, */
/* .navbar-container .navbar-menu li .active, */ .activ {
    background: radial-gradient(
    at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(239, 240, 248, 0.1) 75%
  );
    border: none;
    color: #fff;
     box-shadow: 
    inset 1px 1px 2px rgba(0, 0, 0, 0.1),
    1px 1px 4px rgba(0, 0, 0, 0.4),
    -1px -1px 4px rgba(255, 255, 255, 0.1),
     inset 0px .2px .2px #ccc, 
  inset 0px -.2px .2px #aaa;
    color: #fff;
}
.navbar-toggle {
    display: none;
    background: transparent;
    padding: 10px;
    border: none;
    cursor: pointer;
}
.navbar-toggle.active{
position:fixed;
        top: 20px;
        right: 75px;
}
.navbar-toggle.active .bar:nth-child(2) {
    opacity: 0;
}

.navbar-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg)
}

.navbar-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto!important;
    background: #fff;
    transition: all 0.3s ease-in-out;
}
@media (max-width:880px) {
    .act {
    /* align-items: flex-end; */
    display:block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 995;
    background-color: rgba(2, 10, 36, 0.6)!important;
    /* 
    
    display: flex;
    justify-content: center;
    align-items: center;
     */
} 
    .navbar {
        backdrop-filter: none;
        align-self: flex-end;
        justify-self: flex-end;
        padding: 0 30px 0 30px;
        /* position:fixed;
        top: 0; */
    }

    .navbar-container .navbar-menu {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        /* gap: 1.7rem!important; */
        position:absolute;
        height: 100vh;
        width: 270px;
        top: 0px;
        right: 0px;
        padding: 5rem 1.5rem;
        background: linear-gradient(
            to bottom, rgba(12, 17, 50, 0.7), rgba(0, 0, 0, 0.1)
        );
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        TEXT-decoration: none;
        text-align:  left;
        

    }

    .navbar-toggle {
        display: block;
        /* background-color: #EFF0F8!important; */
        z-index: 999;
    }
    li a {
        color: #eff0f8!important;
    }
    .bar {
        font-weight: 10px;
    }
}
</style>