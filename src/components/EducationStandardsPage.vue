<template>
  <div>
    <div class="ui segment head">
      <h1 class="ui medium header">Образовательные стандарты</h1>
    </div>
    <div class="ui segment body">
      <div>Федеральные государственные образовательные стандарты общего образования - с документами можно ознакомиться:</div>
      <div class="item">
        <i class="share icon"></i>
        <div class="content">
          <a href="https://минобрнауки.рф/документы/543" target="_blank" rel="noopener">
            на сайте Министерства образования и науки Российской Федерации
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EducationStandardsPage"
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
  .item {
    display: inline-flex;
  }
</style>
