<template>
    <nav class="ui left vertical menu">
      <router-link to="/" class="item" style="text-align: -webkit-center">
        <img src="http://turizmpskov.ru/image/logoTurizm/logoTurizm2.png" height="150px">
      </router-link>
      <a class="item">
        <i class="low vision icon" style="float: none"></i><span> Версия для слабовидящих</span>
      </a>
      <div class="ui accordion">
        <a class="title item">
          <i class="dropdown icon"></i>
          <span>Сведения об образовательной организации</span>
        </a>
        <div class="content">
          <p>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Документы Центра</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Структура</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Материально-техническое обеспечение и оснащённость образовательного процесса</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Финансово-хозяйственная деятельность</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Отчёт о результатах самообследования</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Платные образовательные услуги</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Нормативная база</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Основные сведения</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Предприсания органов, осуществляющих Государственный контроль (надзор) в сфере образования</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Образовательная деятельность</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Образовательные стандарты</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Стипендии и иные виды материальной поддержки</span>
            </router-link>
            <router-link to="/documents-of-center" class="sub-item">
              <span>Вакантные места для приёма (перевода)</span>
            </router-link>
          </p>
        </div>
        <a class="title item">
          <i class="dropdown icon"></i>
          <span>Руководство. Педагогический состав. Сотрудники</span>
        </a>
        <div class="content">
          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
        </div>
        <a class="title item">
          <i class="dropdown icon"></i>
          <span>Отделы Центра</span>
        </a>
        <div class="content">
          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
        </div>
      </div>
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
    </nav>
</template>

<script>
    export default {
        name: "LeftMenu",

      mounted() {
        $('.ui.accordion')
          .accordion()
        ;
      }
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
  .vertical.menu a.item:hover, .vertical.menu a.item:focus {
    background-color: #286090;
    border-color: #204d74;
    color: #fff;
  }
  .vertical.menu a.item:active {
    background-color: #204d74;
    border-color: #122b40;
    color: #fff;
  }

  .vertical.menu a.sub-item {
    display: flex;
    padding: 3px 10px;
    justify-content: center;
  }
  .vertical.menu a.sub-item:hover, .vertical.menu a.sub-item:focus {
    background-color: #edeef0;
    text-decoration: none;
  }
  .vertical.menu a.sub-item:active {
    background-color: #d2d4d9;
    text-decoration: none;
  }
  .vertical.menu a.sub-item span {
    text-align: center;
  }
  .vertical.menu div.content {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
</style>
