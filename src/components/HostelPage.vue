<template>
  <div>
    <div class="ui segment head">
      <h1 class="ui medium header">Общежитие (Хостел "Турист")</h1>
    </div>
    <div class="ui segment body">
      <div class="logo">
        <img src="../assets/images/hostel/logo.jpg"/>
      </div>

      <div class="text-block">
        Занимаемся приемом и размещением организованных групп школьников,
        студентов, а также всех желающих.
      </div>
      <div class="text-block">
        <span>Расчитано на </span><h3>39 мест.</h3>
      </div>
      <div class="text-block">
        <h2>Варианты номеров: </h2>
        <div>
          <h3>2-х-местный номер – 1</h3>
        </div>
        <div>
          <h3>4-х-местные номера – 3</h3>
        </div>
        <div>
          <h3>5-местные номера – 5</h3>
        </div>
      </div>
      <div class="text-block">
        <div>
          Удобства на этаже, душевая комната.
          Предоставляется комплект белья, полотенце.
          К услугам гостей кухня с посудой и необходимой бытовой техникой
          (холодильник, электрический чайник, микроволновая печь, электрическая плита, утюг).
        </div>
        <div>
          В холле большой телевизор.
        </div>
        <div>
          Есть Wi-Fi.
        </div>
        <div>
          Рядом с общежитием продуктовый супермаркет «Пчелка», магазины «Магнит», «Пятерочка».
        </div>
      </div>
      <div class="text-block">
        <h2>Цены:</h2>
        <div>
          1 койко-место: для школьников и педагогов Псковской области - <h3>350 рублей</h3>.
        </div>
        <div>
          Для всех остальных категорий граждан - <h3>400 рублей</h3>.
        </div>
      </div>
      <h2>Фотографии общежития:</h2>
      <viewer :options="options" :images="images"
              @inited="inited"
              class="viewer" ref="viewer">
        <template slot-scope="scope">
          <img class="photo image--cover"
               v-for="src in scope.images"
               :src="src" :key="src" alt="hostel-photo">
        </template>
      </viewer>
    </div>
  </div>
</template>

<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from "v-viewer/src/component.vue"
  export default {
    components: {
      Viewer
    },
    name: "HostelPage",
    data() {
      return {
        images: ['https://pp.vk.me/c638631/v638631908/14fe3/W5kfcP4DP0Q.jpg',
          'http://turizmpskov.ru/image/host/host2.png',
          'http://turizmpskov.ru/image/host/host3.png',
          'https://pp.vk.me/c638631/v638631908/14fd9/oG-31fD2Tjg.jpg',
          'http://turizmpskov.ru/image/host/host4.png'],
        options: { "inline": false, "button": true, "navbar": true, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": true, "fullscreen": false, "keyboard": true, "url": "data-source" }
      }
    },
    methods: {
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
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
  .ui.segment.body div.logo {
    text-align: right;
  }
  .ui.segment.body div.logo img {
    height: 150px;
    width: auto;
    margin-right: 0;
  }
  img.photo {
    width: 33%;
    height: 150px;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }
  .image--cover {
    object-fit: cover;
  }
  @media screen and (max-width: 400px){
    img.photo {
      height: 75px;
      width: 50%;
    }
    .ui.segment.body div.logo img {
      height: 75px;
    }
  }
  h1 {
    color: #204d74;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    color: #204d74;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    color: #333;
    margin: 0;
    display: inline;
  }
  div.text-block {
    margin-bottom: 5px;
  }
</style>
