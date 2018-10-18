<template>
    <div>
      <div class="ui segment head hidden-xs">
        <h1 class="ui medium header">{{header}}</h1>
      </div>

      <div class="ui top attached tabular menu">
        <a class="item"
           v-bind:class="{active: year === yearList[yearList.length - 1]}"
           v-for="year in yearList.slice().reverse()"
           :key="year" v-bind:data-tab="year">{{year}}</a>
      </div>

      <div class="ui bottom attached tab segment"
           v-bind:class="{active: year === yearList[yearList.length - 1]}"
           v-for="year in yearList.slice().reverse()"
           :key="year" v-bind:data-tab="year">

        <h2 v-if="">Просмотр документов:</h2>

        <div class="ui relaxed divided list">
          <div class="item" v-for="doc in docs" :key="doc.name">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" v-bind:href="doc.doc" target="_blank" rel="noopener">{{doc.name}}</a>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import axios from 'axios';
  const host = 'http://localhost:3012';

  export default {
    name: "PlansPage",
    data() {
      return {
        header: 'Планы работы Центра',
        docs: [],
        yearList: []
      }
    },
    created() {
      console.log('CREATED');
      this.getDocs();
    },
    computed() {
      console.log('COMPUTED');
      $('.menu .item').tab();
    },
    methods: {
      getDocs() {
        axios.get(host + '/plans')
          .then(response => {
            this.docs = response.data.map((item) => {
              return {
                name: item.name,
                date: item.date,
                month: item.month,
                doc: item.doc,
              }
            });
            console.log(this.docs);
            this.getYearList(this.docs);
            // this.setJQueryTabs();
          });

      },
      getYearList(docs) {
        let yearList = [];
        docs.forEach(doc => {
          if (yearList === [] || doc.date.substring(0, 4) !== yearList[yearList.length - 1]) {
            yearList.push(doc.date.substring(0, 4));
          }
        });
        this.yearList = yearList;
      },
      setJQueryTabs(){
        console.log('SETJQUERYTABS');
        $('.menu .item').tab();
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
  .ui.segment {
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
</style>
