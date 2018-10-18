<template>
  <div>
    <div class="ui segment head hidden-xs">
      <h1 class="ui medium header">{{header}}</h1>
    </div>

    <div class="ui top attached tabular menu">
      <a class="item active" data-tab="info">Информация</a>
      <a class="item" data-tab="results">Итоги мероприятий</a>
    </div>
    <div class="ui bottom attached tab segment active" data-tab="info">
      <h2 v-if="docs.length === 0">Документов нет</h2>
      <h2 v-else>Просмотр документов: </h2>
      <div v-if="docs.length !== 0" class="ui relaxed divided list">
        <div class="item" v-for="doc in docs.slice().reverse()" :key="doc.name">
          <div class="item-icon">
            <i class="file alternate outline icon"></i>
          </div>
          <div class="content">
            <a class="header" v-bind:href="doc.link" target="_blank" rel="noopener">{{doc.name}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui bottom attached tab segment" data-tab="results">
      (В РАЗРАБОТКЕ)
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  const host = 'http://localhost:3012';
  export default {
    name: "LocalHistorySectionPage",
    data() {
      return {
        header: 'Отдел краеведения',
        docs: []
      }
    },
    created() {
      this.getDocs();
    },
    mounted() {
      $('.menu .item')
        .tab()
      ;
    },
    methods: {
      getDocs() {
        axios.get(host + '/docs?category=local-history-section')
          .then(response => {
            this.docs = response.data.map((item) => {
              console.log(item);
              return {
                name: item.name,
                link: item.link,
                category: item.category
              }
            })
          });
        console.log(this.docs);
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
  .text-block {
    margin-bottom: 5px;
  }
  .ui.top.tabular.menu {
    margin-top: 0;
  }
  .ui.segment .item a {
    line-height: 1.3;
  }
  .ui.segment .item {
    display: flex;
  }
  .item-icon {
    display: flex;
    align-items: center;
  }
  .item-icon i {
    margin-right: 10px;
  }
  .item .content {
    display: flex;
  }
</style>
