<template>
    <form class="d-flex mt-3 mb-5" role="search">
          <input class="form-control shadow-sm bg-body-tertiary rounded" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
</template>

<style scoped>
    input {
        background-color: #EFF0F8;
        color: #0C1132;
        /*
        box-shadow:  inset 0px -2px 5px rgba(12, 17, 50, 0.09);
        
        border-radius: 13px!important;
        border: 2px solid rgba(12, 17, 50, 0.5);*/ 
    }
    button {
        margin-left: 10px;
        background-color: #0C1132;
        color: white;
        border: none;
    }
</style>