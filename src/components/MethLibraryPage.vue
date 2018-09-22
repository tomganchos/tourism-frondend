<template>
    <div>
      <div class="ui segment head">
        <div class="ui large header">Методическая библиотека</div>
      </div>
      <div class="ui segment body">
        <div class="ui relaxed divided list">
          <div class="item">
            <div class="item-icon">
              <i class="file alternate outline icon"></i>
            </div>
            <div class="content">
              <a class="header" href="https://drive.google.com/file/d/0B4Y-eduzf4rjaDdWWmRqMUVEZWM/view?usp=sharing" target="_blank" rel="noopener">Методические рекомендации по организации научно-исследовательской деятельности обучающихся</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MethLibraryPage"
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
