<template>
  <div class="select fw-medium">
    <select name="Order-task position-area">
      <option id="ordenar" value="#">Ordenar por</option>
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

  max-width: 150px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-block: 10px;
  padding-inline: 10px 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: rgba(239, 240, 248, 0.05)
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23FFF' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A") right 10px center / 20px no-repeat;
  box-shadow: inset 0 1px 1.5px #ccc,
  inset 0 -1px 1px #aaa;

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
      border: none;
      background: rgba(24, 34, 112, 0.9);
      color: #eff0f8;
      border-radius: 5px;
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
      padding: 5px;
      /* border-top: 1px solid #333d81; */
      cursor: pointer;
      transition-property: color, background;
      transition-duration: 0.1s;
      transition-timing-function: ease-out;

      &:where(:hover, :focus, :active) {
        background: rgba(12, 17, 50, 0.5)
          /* rgba(51, 61, 129, 0.9) */
        ;
        color: white;
      }

      &:checked {
        background: rgb(12, 17, 50, .9)
          /* rgb(51, 61, 129) */
        ;
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