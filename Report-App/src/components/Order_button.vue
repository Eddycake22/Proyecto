<template>
    <div class="select">
    <select name="Order-task" id="Order-task">
    <option selected value="#">Ordenar por</option>
    <option value="1">Completadas</option>
    <option value="2">Pendientes</option>
    <option value="3">Fecha</option>
    </select>
    </div>
</template>

<style scoped>
select {
  appearance: none;
  @supports (appearance: base-select) {
    &,
    &::picker(select) {
      appearance: base-select;
    }
  }
}

select {
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  align-items: center;
  color: white;
  padding-block: 10px;
  padding-inline: 10px 30px;
  border-radius: 10px;
  border: 2px solid #333d81;
  cursor: pointer;
  font-weight: 700;
  background:  #0C1132
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFF' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A")
    right 10px center / 20px no-repeat;
  @supports (appearance: base-select) {
    padding-inline: 10px;
    background-image: none;
    &::picker-icon {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFF' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A");
      transition: rotate 0.2s ease-out;
    }
    &:open::picker-icon {
      rotate: 180deg;
    }
    &::picker(select) {
      padding: 0;
      margin-top: 5px;
      border: 2px solid #0C1132;
      background: #EFF0F8;
      border-radius: 5px;
      font-weight: 400;

      opacity: 0;
      height: 0;
      overflow: clip;
      transition: height 0.5s ease-out, opacity 0.5s ease-out, overlay 0.5s,
        display 0.5s;

      transition-behavior: allow-discrete;
    }
    &:open::picker(select) {
      opacity: 1;
      height: auto;
      overflow: auto;
      @starting-style {
        opacity: 0;
        height: 0;
      }
    }
    option {
      padding: 10px;
      border-top: 1px solid #333d81;
      cursor: pointer;
      transition-property: color, background;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
      &:where(:hover, :focus, :active) {
        background: #333d81;
        color: white;
      }
      &:checked {
        background: #0C1132;
        color: white;
      }
      &::checkmark {
        display: none;
      }
      &:first-child {
        border: 0;
      }
    }
  }
}
</style>