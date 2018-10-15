<template>
  <div>
    <div class="ui segment head">
      <div class="ui medium header">Общежитие (Хостел "Турист")</div>
    </div>
    <div class="ui segment body">
      <div class="logo">
        <img src="../assets/images/hostel/logo.jpg"/>
      </div>
      <div style="text-align: center;">
        (В РАЗРАБОТКЕ)
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HostelPage"
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
    width: 50%;
  }
</style>
