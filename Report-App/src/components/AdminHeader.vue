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
                <li><a href="">Administrar usuarios</a></li>
                <li><a href="" class="active">Asignaciones</a></li>
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
    /* width: 100%; */
    position: sticky;
    top: auto;
    background:  white;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0); */
    box-shadow:/* 
    inset 0 1px 1.5px #ccc, 
  inset 0 -1px 1px #aaa, */
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
    color: #0C1132;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 6px 20px;
    border-radius: 20px;
    /* border: 2px solid transparent; */
    transition: nowrap;
}

.navbar-container .navbar-menu li a:hover,
.navbar-container .navbar-menu li .active {
    border: none;
    background: rgba(12, 17, 50, 0.1);
    /* background: rgba(239, 240, 248, .15); 
    box-shadow: 
    inset 1px 1px 2px rgba(0, 0, 0, 0.1),
    1px 1px 4px rgba(0, 0, 0, 0.4),
    -1px -1px 4px rgba(255, 255, 255, 0.1),
     inset 0px .2px .2px #ccc, 
  inset 0px -.2px .2px #aaa; */
    color: #0C1132;
    font-weight: 500;
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
        margin-right: 30px;
    }

    .navbar-container .navbar-menu {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.7rem!important;
        position: absolute;
        height: 100vh;
        width: 250px;
        top: -40px;
        right: -35px;
        padding: 5rem 1.5rem;
        background: linear-gradient(
            to bottom, rgba(12, 17, 50, 0.7), rgba(0, 0, 0, 0.1)
        );
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    }

    .navbar-toggle {
        display: block;
        z-index: 999;
    }
}
</style>