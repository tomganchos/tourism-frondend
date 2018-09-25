<template>
    <div class="ui left vertical menu">
      <router-link to="/" class="item" style="text-align: -webkit-center">
        <img src="http://turizmpskov.ru/image/logoTurizm/logoTurizm2.png" height="150px">
      </router-link>
      <a class="item">
        <i class="low vision icon" style="float: none"></i><span> Версия для слабовидящих</span>
      </a>
      <a class="item">
        <i class="angle down"></i>
        <span>Сведения об образовательной организации</span>
      </a>
      <a class="item">
        <i class="angle down"></i>
        <span>Руководство. Педагогический состав. Сотрудники</span>
      </a>
      <a class="item">
        <i class="angle down"></i>
        <span>Отделы Центра</span>
      </a>
      <router-link to="touristroutes" class="item">
        <span>Туристские маршруты</span>
      </router-link>
      <router-link to="museumabouteducation" class="item">
        <span>Музей истории народного образования Псковской области</span>
      </router-link>
      <router-link to="tripactivity" class="item">
        <span>Экскурсионная деятельность</span>
      </router-link>
      <router-link to="innovation" class="item">
        <span>Инновационная площадка</span>
      </router-link>
      <router-link to="hostel" class="item">
        <span>Общежитие(Хостел)</span>
      </router-link>
      <router-link to="plans" class="item">
        <span>Планы работы Центра</span>
      </router-link>
      <router-link to="results" class="item">
        <span>Итоги мероприятий (приказы, справки)</span>
      </router-link>
      <router-link to="publications" class="item">
        <span>Публикации о нас</span>
      </router-link>
      <router-link to="gallery" class="item">
        <span>Фотогалерея</span>
      </router-link>
      <router-link to="meth-library" class="item">
        <span>Методическая библиотека</span>
      </router-link>
      <router-link to="anti-corruption" class="item">
        <span>Противодействие коррупции</span>
      </router-link>
      <router-link to="contacts" class="item">
        <span>Контакты</span>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "LeftMenu"
    }
</script>

<style scoped>
  .vertical.menu {
    width: 275px;
    /*margin: 5px;*/
  }
  .vertical.menu a.item {
    background-color: #337ab7;
    border-color: #2e6da4;
    color: #fff;
    text-align: -moz-center;
    text-align: -webkit-center;
    text-align: center;
    line-height: 1.3;
  }
  .vertical.menu a.item:hover {
    background-color: #286090;
    border-color: #204d74;
    color: #fff;
  }
  .vertical.menu a.item:focus {
    background-color: #204d74;
    border-color: #122b40;
    color: #fff;
  }
  .vertical.menu a.item:active {
    background-color: #204d74;
    border-color: #122b40;
    color: #fff;
  }
</style>
