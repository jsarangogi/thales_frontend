<template>
  <div id="app">
    <EmployeeView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import EmployeeView from './components/EmployeeView.vue';

export default {
  name: 'App',
  components: {
    EmployeeView
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
