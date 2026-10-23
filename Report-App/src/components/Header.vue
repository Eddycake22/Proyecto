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
<template>
    <nav class="navbar">
        <div class="navbar-container"><a href="" class="navbar-logo">CCSnippets</a>
        <buttom class="navbar-toggle">
            <span-bar></span-bar>
            <span-bar></span-bar>
            <span-bar></span-bar>
        </buttom>
        <ul class="navbar-manu">
            <li><a href="">Áreas</a></li>
            <li><a href="">Asignaciones</a></li>
            <li><a href="">Estadísticas</a></li>
        </ul>
        </div>
    </nav>
</template>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%;
        position: sticky;
        top: 0;
        background: transparent;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
        backdrop-filter: blur(10px);
        z-index: 999;
    }
    .navbar-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
        padding: 0 2rem;
        max-width: 1600px;
    }
    .navbar-logo{
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
    .navbar-container .navbar-menu{
         display: flex;
         text-align: center;
         gap: 1.5rem;
    }
</style>