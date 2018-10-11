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
      <h2>Государственное управление образования Псковской области</h2>
      <h3>Почтовый адрес: </h3><span>ул.Народная 53, г.Псков, 180016</span>
      <h3>Фактический адрес: </h3><span>ул.Некрасова 25</span>
      <h3>Телефон для справок: </h3><span>8(8112)69-99-45</span>
      <h3>Факт: </h3><span>8(8112)69-99-45, 8(8112)69-99-48</span>
      <h3>E-mail: </h3><span>guotlm@obladmin.pskov.ru</span>
      <h3>Начальник: </h3><span>Седунов Александр Всеволодович, 8(8112)69-99-43</span>
      <h3>Первый заместитель начальника: </h3><span>Барышников Геннадий Иванович, 8(8112)75-26-72</span>
      <h3>Начальник отдела контроля за исполнением законодательства в сфере образования: </h3><span>Парчинская Галина Валентиновна, 8(8112)68-66-67</span>
      <h3>Начальник отдела региональной политики: </h3><span>Яникова Нина Васильевна, 8(8112)68-66-71</span>
    </div>
    <div class="ui bottom attached tab segment" data-tab="second">
      <h2>Государственное бюджетное образовательное учреждение дополнительного образования Псковской области «Центр детского и юношеского туризма и экскурсий»</h2>
      <h3>Почтовый адрес: </h3><span>ул.Некрасова 23, г.Псков, 180001</span>
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
  }
  h2 {
    color: 
  }

  .ui.segment.head {
    margin-bottom: 5px;
  }
</style>
