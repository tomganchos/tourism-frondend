<template>
  <div>
    <div class="ui segment head">
      <div class="ui large header">Контакты</div>
    </div>
    <div class="ui segment body">
      <div class="text">Адрес:  <b>г.Псков, ул.Народная, 53</b></div>
      <div class="text">Индекс:  <b>180016</b></div>
      <div class="text">Приёмная директора:  <b>+7 (8112) 57-60-84</b></div>
      <div class="text">Заместитель директора:  <b>+7 (8112) 57-62-53</b></div>
      <div class="text">Бухгалтерия:  <b>+7 (8112) 57-62-53</b></div>
      <div class="text">Общежитие:  <b>+7 (8112) 57-62-54</b></div>
      <div class="text">Электронная почта: <b>org608@pskovedu.ru</b></div>
      <div class="ui medium header text">Расположение на карте:</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PageContacts"
    }
</script>

<style scoped>
  .ui.segment.head {
    margin-bottom: 5px;
  }
  .ui.segment .header {
    color: #204d74;
  }
  .ui.segment.body {
    margin-top: 0;
  }
</style>
