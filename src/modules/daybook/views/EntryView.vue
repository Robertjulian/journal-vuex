<template>
  <div class="entry-titel d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash-alt"></i>
        Borrar
      </button>

      <button class="btn btn-primary mx-2">
        <i class="fa fa-upload"></i>
        Subir foto
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?" ></textarea>
  </div>
  <fab icon="fa-save"></fab>
  <img
    src="https://media.admagazine.com/photos/618a62e7c649ce85eef75442/1:1/w_2016,h_2016,c_limit/75892.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>