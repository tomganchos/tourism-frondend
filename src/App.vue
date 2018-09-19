<template>
  <div id="app">
    <div style="display: flex; max-width: 1200px; padding: 0 5px; margin: auto">
      <div class="hidden-xs" style="margin: 5px 0">
        <left-menu></left-menu>
      </div>
      <div style="background-color: #0E566C; width: 100%; margin: 5px">
        <router-view/>
      </div>
      <div class="visible-md visible-lg" style="margin: 5px 0">
        <left-menu></left-menu>
      </div>
    </div>

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
  color: #2c3e50;
}
  /*.hidden-xs, .visible-lg {*/
    /*display: inline-block !important;*/
  /*}*/

</style>
