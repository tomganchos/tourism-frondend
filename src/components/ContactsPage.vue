<template>
  <div>
    <div class="ui segment head">
      <div class="ui medium header">Контакты</div>
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



      <yandex-map
        :coords="[57.811781, 28.306505]"
        zoom="15"
        style="width: 600px; height: 400px;"
        :cluster-options="{
          1: {clusterDisableClickZoom: true}
         }"
        :behaviors="['drag']"
        :controls="['zoomControl', 'fullscreenControl']"
        :placemarks="placemarks"
        map-type="hybrid"
        @map-was-initialized="initHandler"
      >

        <ymap-marker
          marker-id="1"
          marker-type="placemark"
          :coords="[57.811781, 28.306505]"
          hint-content="Hint content 1"
          :balloon="{header: 'header', body: 'body', footer: 'footer'}"
          :icon="{color: 'blue', glyph: 'hotel'}"
          cluster-name="1"
        ></ymap-marker>

      </yandex-map>
    </div>
  </div>
</template>

<script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    export default {
      name: "PageContacts",
      components: { yandexMap, ymapMarker },
      data() {
          return {
            placemarks: [
              {
                coords: [54.8, 39.8],
                properties: {}, // define properties here
                options: {}, // define options here
                clusterName: "1",
                balloonTemplate: '<div>"Your custom template"</div>',
                callbacks: { click: function() {} }
              }
            ]
          }
      }
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
