<template>
  <div id="app">
    <left-menu></left-menu>
    <!--<router-view/>-->
    <button class="ui button">
      Follow
    </button>
  </div>
</template>

<script>
import LeftMenu from "@/components/menu/LeftMenu";
export default {
  name: 'App',
  components: {LeftMenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
