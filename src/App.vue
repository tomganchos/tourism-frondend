<template>
  <div id="app">
    <div style="display: flex; max-width: 1200px; padding: 0 5px; margin: auto">
      <div>
        <div class="hidden-xs" style="margin: 5px 0">
          <left-menu></left-menu>
        </div>
        <div class="visible-sm" style="margin: 5px 0">
          <right-menu></right-menu>
        </div>
      </div>

      <div class="ui menu visible-xs" style="width: 100%; position: fixed; margin-left: -5px; margin-top: 1px; border-radius: 0 0 .28571429rem .28571429rem;">
        <a class="header item" style="display: inline-block">
          <i class="bars icon"></i>
        </a>
        <!--<router-link to="/" class="item">-->
          <!--<img src="http://turizmpskov.ru/image/logoTurizm/logoTurizm2.png" height="40px">-->
        <!--</router-link>-->
      </div>

      <div class="center-menu">
        <router-view/>
      </div>
      <div class="visible-md visible-lg" style="margin: 5px 0">
        <right-menu></right-menu>
      </div>
    </div>

  </div>
</template>

<script>
import LeftMenu from "@/components/menu/LeftMenu";
import RightMenu from "@/components/menu/RightMenu";
export default {
  name: 'App',
  components: {RightMenu, LeftMenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #edeef0;
}
.center-menu {
  /*background-color: #0E566C;*/
  width: 100%;
  margin: 5px;
}
@media screen and (max-width: 768px) {
  .center-menu {
    margin-top: 50px;
  }
}
.bars.icon {
  margin: 0 !important;
}
  /*.hidden-xs, .visible-lg {*/
    /*display: inline-block !important;*/
  /*}*/

</style>
