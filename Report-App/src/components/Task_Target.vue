<template>
    <div class="act-task grid shadow-sm" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <h4 class="mt-1" id="report-name">Nombre de la asignación</h4>
        <p id="status" style="grid-row:2">Estado: </p>
        <p class="d-flex align-items-center " id="Desc" style="grid-row:3;">Descripcion:</p>
        <button class="btn btn-secondary" style="grid-row:3; grid-column:2;" type="button" id="details-btn">Detalles</button>
        <button class="btn btn-primary" style="grid-row:3; grid-column:3;" type="button" id="complete-btn">Completar</button>
    </div>
</template>

<style scoped>
.act-task {
    display: grid;
    min-width: 100%;
    grid-template-columns: 1fr auto auto;
    grid-auto-rows: min-content;
    background-color: white;
    /* background-color: rgb(243, 196, 43); */
    border-radius: px;
    margin: 0px;
    padding: 20px;
}

p {
    font-size: 16px;
    margin: 0px;
}

#complete-btn {
    background-color: #0C1132;
    border: none;
}

.btn.btn-primary:hover {
        background-color: #171f52!important;
    }
.btn {
    border-radius: 10px;
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
        font-size: 14px;
        grid-row-start:4!important;
        padding: 5px 5px;
    width: 100px;
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