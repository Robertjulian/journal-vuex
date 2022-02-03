<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary m-1">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary m-1">
      Secondary
    </button>
    <button @click="goToDaybook" class="btn btn-success m-1">Success</button>
  </div>
</template>
<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
