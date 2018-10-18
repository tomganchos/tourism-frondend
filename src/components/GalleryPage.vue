<template>
  <div>
    <div class="ui segment head">
      <div class="ui medium header">{{header}}</div>
    </div>
    <div class="ui segment body">
      <div style="text-align: center;">
        (В РАЗРАБОТКЕ)
      </div>
      <!--<pre>-->
        <!--{{data}}-->
      <!--</pre>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const host = 'https://www.instagram.com/tsentrturizmapskov/?__a=1';
  export default {
    name: "GalleryPage",
    data() {
      return {
        header: 'Фотогалерея',
        data: {},
        images: []
      }
    },
    created() {
      this.getImages()
    },
    methods: {
      getImages() {
        axios.get(host).then(response => {
          this.data = response.data
        })
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
