<template>
    <div class="historial d-flex flex-column align-items-start mt-5">
        <div class="encabezado">
        <h1>Historial de actividad</h1>
    </div>
    <div class="day-act">
        <p class="mb-3">Hoy</p>
        <div class="act-task grid shadow-sm mb-3" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <p class="mb-2" id="report-name">Nombre del reporte</p>
        <p id="status" style="grid-row:2">Equipo - Marca </p>
        <p class="d-flex align-items-center " id="Desc" style="grid-row:3;">Estado: Pendiente</p>
        <li>Ver más</li>
        <!-- <button class="btn btn-secondary" style="grid-row:3; grid-column:2;" type="button" id="details-btn">Detalles</button> -->
        </div>
    </div>
    <div class="day-act">
        <p class="mb-3">Ayer</p>
        <div class="act-task grid shadow-sm mb-3" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <p class="mb-2" id="report-name">Nombre del reporte</p>
        <p id="status" style="grid-row:2">Equipo - Marca </p>
        <p class="d-flex align-items-center " id="Desc" style="grid-row:3;">Estado: Pendiente</p>
        <li>Ver más</li>
        <!-- <button class="btn btn-secondary" style="grid-row:3; grid-column:2;" type="button" id="details-btn">Detalles</button> -->
        </div>
    </div>
    </div>
</template>

<style scoped>
.historial {
    position: relative;
    left: 15px;
}
.day-act {
    min-width: 90%;
    
}
.act-task {
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-auto-rows: min-content;
    background-color: rgba(239, 240, 248, 0.09); 
    border-radius: 15px;
    margin: 0px;
    padding: 15px;
    box-shadow:
    inset 0 1px 1.5px #ccc,
    inset 0 -1px 1px #aaa!important;
}
h1{
    font-size: 20px;
}
h3{
    font-size: 14px;
}
p, h4 {
    font-size: 15px;
    margin: 0px;
}

#complete-btn {
    background-color: #0C1132;
    border: none;
}

.btn.btn-primary:hover {
        background-color: #171f52!important;
    }
li {
    list-style: none;
    font-size: 12px;
    text-decoration:underline;
    color: #d9d9d9;
    cursor: pointer;
}

@media (max-width: 768px) {
    .act-task {
        max-width: 60%;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 2fr 1fr 1fr!important;
        grid-auto-rows: 150px;
    }

    h4 {
        font-size: 14px;
        grid-column: span 4;
    }
    p {
        font-size: 13px;
        grid-column: span 4;
    }
    .btn {
        font-size: 13px;
        grid-row-start:4!important;
        padding: 5px 5px;
    width: auto;
    height: 40px; 
    }
    #complete-btn {
        grid-column-start: 4!important;
    }
    #details-btn {
        grid-column-start: 2!important;
        position: relative;
        left: 10px;
    }
}
</style>