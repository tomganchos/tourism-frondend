<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui top attached tabular menu">
      <a class="item active" data-tab="first">Учредитель</a>
      <a class="item" data-tab="second">Руководитель</a>
    </div>
    <div class="ui bottom attached tab segment active" data-tab="first">
      <div class="text-block">
        <h2>Государственное управление образования Псковской области</h2>
      </div>
      <div class="text-block">
        <h3>Почтовый адрес: </h3><span>ул.Народная 53, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Фактический адрес: </h3><span>ул.Некрасова 25</span>
      </div>
      <div class="text-block">
        <h3>Телефон для справок: </h3><a href="tel:88112699945" data-rel="external">8 (8112) 69-99-45</a>
      </div>
      <div class="text-block">
        <h3>Факт: </h3><a href="tel:88112699945" data-rel="external">8 (8112) 69-99-45</a>, <a href="tel:88112699948" data-rel="external">8 (8112) 69-99-48</a>
      </div>
      <div class="text-block">
        <h3>E-mail: </h3><a href="mailto:guotlm@obladmin.pskov.ru">guotlm@obladmin.pskov.ru</a>
      </div>
      <div class="text-block">
        <h3>Начальник: </h3><span>Седунов Александр Всеволодович, <a href="tel:88112699943">8 (8112) 69-99-43</a></span>
      </div>
      <div class="text-block">
        <h3>Первый заместитель начальника: </h3><span>Барышников Геннадий Иванович, <a href="tel:88112752672">8 (8112) 75-26-72</a></span>
      </div>
      <div class="text-block">
        <h3>Начальник отдела контроля за исполнением законодательства в сфере образования: </h3><span>Парчинская Галина Валентиновна, <a href="tel:88112686667">8 (8112) 68-66-67</a></span>
      </div>
      <div class="text-block">
        <h3>Начальник отдела региональной политики: </h3><span>Яникова Нина Васильевна, <a href="tel:88112686671">8 (8112) 68-66-71</a></span>
      </div>
    </div>
    <div class="ui bottom attached tab segment" data-tab="second">
      <div class="text-block">
        <h2>Государственное бюджетное образовательное учреждение дополнительного образования Псковской области «Центр детского и юношеского туризма и экскурсий»</h2>
      </div>
      <div class="text-block">
        <h3>Почтовый адрес: </h3><span>ул.Народная 53, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Фактический адрес: </h3><span>ул.Некрасова 53, г.Псков, 180016</span>
      </div>
      <div class="text-block">
        <h3>Телефон для справок: </h3><a href="tel:88112576084" data-rel="external">8 (8112) 57-60-84</a>, <a href="tel:88112576253" data-rel="external">8 (8112) 57-62-53</a>
      </div>
      <div class="text-block">
        <h3>Факт: </h3><a href="tel:88112576084" data-rel="external">8 (8112) 57-60-84</a>
      </div>
      <div class="text-block">
        <h3>E-mail: </h3><a href="mailto:org608@pskovedu.ru">org608@pskovedu.ru</a>
      </div>
      <div class="text-block">
        <h3>Директор: </h3><span>Григорьев Владимир Михайлович, <a href="tel:88112576084">8 (8112) 57-60-84</a></span>
      </div>
      <div class="text-block">
        <div><h3>График работы:</h3></div>
        <div>Понедельник-четверг - 8:48-18:00</div>
        <div>Пятница - 8:48-17:00</div>
        <div>Перерыв на обед с 13:00 до 14:00</div>
        <div>Суббота, воскресенье - выходной</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "StructurePage",
      data() {
        return {
          header: 'Структура',
          docs: []
        }
      },
      mounted() {
        $('.menu .item')
          .tab()
        ;
      }
    }
</script>

<style scoped>
  h1 {
    color: #204d74 !important;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    color: #204d74 !important;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    color: #333;
    margin: 0;
    display: inline;
  }

  .ui.segment.head {
    margin-bottom: 5px;
  }
  .text-block {
    margin-bottom: 5px;
  }
  .ui.top.tabular.menu {
    margin-top: 0;
  }
</style>
