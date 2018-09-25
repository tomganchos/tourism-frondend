<template>
  <div>
    <div class="ui segment head">
      <div class="ui medium header">Противодействие коррупции</div>
    </div>
    <div class="ui segment body">
      <div>
        <strong>Телефон доверия по противодействию коррупции: </strong><a class="tel" href="tel:88001006011">8-800-100-60-11</a>
      </div>
      <div class="ui relaxed divided list">
        <div class="item" v-for="doc in docs" :key="doc.name">
          <div class="item-icon">
            <i class="file alternate outline icon"></i>
          </div>
          <div class="content">
            <a class="header" v-bind:href="doc.link" target="_blank" rel="noopener">{{doc.name}}</a>
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
    name: "AntiCorruption",
    data() {
      return {
        header: 'Противодействие коррупции',
        docs: []
      }
    },
    created() {
      this.getDocs();
    },
    methods: {
      getDocs() {
        axios.get(host + '/docs?category=anti-corruption')
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
  .ui.segment.body {
    margin-top: 0;
  }

  a.tel {
    display: inline-block;
    width: 104px;
  }

  .ui.segment.body .item a {
    line-height: 1.3;
  }
  .ui.segment.body .item {
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
