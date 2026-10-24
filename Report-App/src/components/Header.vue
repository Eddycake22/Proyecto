<!-- <template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link class="nav-item nav-link" to="areas">Áreas</router-link>
                </li>
                <li>

                    <router-link class="nav-item nav-link active" to="/">Asignaciones</router-link>
                </li>
                <li>
                    <router-link class="nav-item nav-link" to="estrategias">Estrategias</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;

}

nav {

    background: radial-gradient(at 50% 50%,
            rgba(0, 0, 0, 0.1) 25%,
            rgba(239, 240, 248, 0.1) 75%,
            rgba(239, 240, 248, 0.7) 150%);
    backdrop-filter: blur(1px);
    border: none;
    box-shadow:
        inset 1px 1px 5px rgba(255, 255, 255, 0.2),
        inset 1px 1px 5px rgba(0, 0, 0, 0.1),
        2px 2px 10px rgba(0, 0, 0, 0.4),
        -2px -2px 8px rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    padding: 10px;
}

ul {
    margin: 0px;
}

nav ul li {
    display: inline-block;
    list-style: none;
    margin: 0px 10px;
    padding: 0px 20px;
    cursor: pointer;
    position: relative;
    color: #D9D9D9;
    font-size: 18px;
    font-weight: 700px;
}

nav ul li:after {
    content: "";
    width: 0;
    height: 2px;
    background: white;
    position: absolute;
    left: 50%;
    bottom: 0;
    transition: all 0.3s ease;
    /* content: "";
    width: 0;
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s; */
}

nav ul li:hover::after {
    width: 100%;
    left: 0;
}
li:hover{
    color:white;
}
</style> -->
<script setup>
import { ref } from 'vue'
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
            <!-- <a href="" class="navbar-logo">CCSnippets</a> -->
            <button ref="navbarToggle" class="navbar-toggle" @click="activar">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="navbar-menu" ref="navbarMenu">
                <li><a href="">Áreas</a></li>
                <li><a href="" class="">Asignaciones</a></li>
                <li><a href="">Estadísticas</a></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    /* width: 100%; */
    position: sticky;
    top: 0;
    background: radial-gradient(
     circle at 50% 50%,
    rgba(0, 0, 0, 0.1) 5%,
    rgba(239, 240, 248, 0.1) 75%
  ) ;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
    backdrop-filter: blur(10px);
    z-index: 999;
    border-radius: 25px;
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* padding: 0 2rem; */
    max-width: 1600px;
}

.navbar-logo {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

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
.navbar-container .navbar-menu li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 3px 20px;
    border-radius: 20px;
    border: 2px solid transparent;
    transition: nowrap;
}

.navbar-container .navbar-menu li a:hover,
.navbar-container .navbar-menu li .active {
    color: #162530;
    background: rgba(188, 212, 229, 0.8);
    border: 2px solid #fff;
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
    }

    .navbar-container .navbar-menu {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.7rem!important;
        position: absolute;
        height: 100vh;
        width: 250px;
        top: 0;
        right: 0;
        padding: 5rem 1.5rem;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    }

    .navbar-toggle {
        display: block;
        z-index: 999;
    }
}

/* @media (max-width: 480px) {
    .navbar-container {
        padding: 0 1rem;
    }

    .navbar-logo {
        font-size: 1.7rem;
    }

    .navbar-container .navbar-menu {
        font-size: 1.2rem;
        padding: 3px 15px;
    }
} */
</style>