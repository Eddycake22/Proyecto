<template>
    <div class="act-task grid" style="--bs-rows:3; --bs-columns:3; column-gap:1rem;">
        <h4 class="mt-1" id="report-name">Nombre de la asignación</h4>
        <p id="status" style="grid-row:2">Estado: </p>
        <p class="d-flex align-items-center " id="Desc" style="grid-row:3;">Descripcion:</p>
        <button class="btn btn-secondary" style="grid-row:3; grid-column:2;" type="button" id="edit-btn">Detalles</button>
        <button class="btn btn-primary" style="grid-row:3; grid-column:3;" type="button" id="complete-btn">Completar</button>
    </div>
</template>

<style scoped>
.act-task {
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr auto auto;
    /*background-color: white;*/
    background-color: rgb(243, 196, 43);
    border-radius: 15px;
    margin: 0px;
    padding: 20px;
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

.btn.btn-primary:hover {
        background-color: #171f52!important;
    }


@media (max-width: 768px) {
    .act-task {
        max-width: 60%;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(4, auto)!important;
        grid-auto-rows: 150px;
    }

    h4 {
        font-size: 14px;
        grid-column: span 3;
    }
    p {
        font-size: 13px;
    }
    .btn {
        grid-column: span 1.5;
        grid-row:4;
    }
}
</style>