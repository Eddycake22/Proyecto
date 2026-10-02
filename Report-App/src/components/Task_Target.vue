<template>
    <div class="act-task grid" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <h4 class="mt-1" id="report-name">Nombre del Reporte</h4>
        <p id="device" style="grid-row:2">Equipo - Marca Tipo de Mantenimiento</p>
        <p id="status" style="grid-row:2">Estado: </p>
        <button class="btn btn-secondary" style="grid-row:3; grid-column:2;" type="button" id="edit-btn">Detalles</button>
        <button class="btn btn-primary" style="grid-row:3; grid-column:3;" type="button" id="complete-btn">Completar</button>
    </div>
</template>

<style scoped>
.act-task {
    display: grid;
    width: 80%;
    grid-template-columns: 1fr auto auto;
    /*background-color: white;*/
    background-color: rgb(243, 196, 43);
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 20px;
}

p, h1 {
    display: inline;
}
p {
    font-size: 16px;
    margin: 0px;
}
/*
button {

    width: 100px;
    border: none;
    font-size: 14px;
    justify-content: right;
    margin-right: 10px;
}

*/
#complete-btn {
    background-color: #0C1132;
    border: none;
}
</style>