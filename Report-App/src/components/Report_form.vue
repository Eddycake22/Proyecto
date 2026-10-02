<template>
    <div class="form-container ">
        <div class="form-hearder">
            <h3 class="mt-2">Hacer Reporte</h3>
        </div> 

    <form class="row g-3">
  <div class="col-md-6">
    <label for="Device" class="form-label">Equipo</label>
    <input type="text" class="form-control" id="Device" placeholder="Escribir el nombre del equipo">
  </div>

  <div class="col-md-6">
    <label for="Brand" class="form-label">Marca</label>
    <input type="text" class="form-control" id="Brand" placeholder="Escribir el nombre de la marca">
  </div>

  <div class="col-6">
    <label for="placa" class="form-label">Tipo de placa</label>
    <select class="form-select" aria-label="Default select example" id="placa">
  <option selected>Seleccionar...</option>
  <option value="1">Xcaret</option>
  <option value="2">Xel-Há</option>
  <option value="3">Xplor</option>
</select>
  </div>

  <div class="col-6">
    <label for="Active" class="form-label">Activo</label>
    <input type="text" class="form-control" id="Active" placeholder="Escribir el número de activo">
  </div>

  <div class="col-md-12">
    <label for="input-coment" class="form-label">Comentarios</label>
  <textarea class="form-control" id="input-coment" aria-label="Coments" placeholder="Escribir comentarios..."></textarea>
  </div>

  
  <div class="col-md-2" id="image-upload">
    <label for="imagen-input" class="btn-image">Subir Imagen</label>
    <input type="file" id="imagen-input" name="imagen" accept="image/*" style="display: none;">
  </div>

    <button type="submit" class="btn btn-primary col-2 position-relative" id="submit-button">Enviar</button>
    <button type="button" class="btn btn-secondary col-2 position-relative" id="cancel-button">Cancelar</button>


</form>
    </div>
</template>

<style scoped>
/*
    
    .form-hearder {
        text-align: center;
    }
*/
.form-container {
        width: 80%;
        height: 43vh;
        margin: 0px 150px 0px 150px;
        background-color: white;
        padding: 20px 35px;
        border-radius: 15px;
    }

    input, select, textarea {
        background-color: #EFF0F8;
    }
  #image-upload {
    position: relative;
    top: 15px;
  }
  .btn-image {
    background-color: #0C1132;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
  }
  .btn-image:hover, #submit-button:hover{
    background-color: #171f52;
  }
  button {
    left: 55.5%;
    top: 15px;
    width: 100px;
    height: 40px;
    border:none;
  }
  #submit-button {
    background-color: #0C1132;
    margin-right: 25px;
  }
</style>
