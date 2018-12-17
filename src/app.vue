<template>
  <div id="app">
    <div>
      <g-button disabled>
        禁用
      </g-button>
      <g-button icon="loading" position="right" loading>
          加载中
      </g-button>
      <g-button round="round">
        圆角按钮
      </g-button>
      <g-button plain="plain">
        hover按钮
      </g-button>
      <g-button>
        主按钮
      </g-button>      
    </div>
    <div>
      <g-input v-model="value" placeholder="请输入内容"  icon="close"></g-input>
      <p>{{ value }}</p>
      <!-- <g-input value="dfd" placeholder="请输入内容" icon="close" error="error"></g-input> -->
    </div>
    <g-row gutter="2" justify="start">
      <g-col>
        dfds
      </g-col>
      <g-col>
        sdfsd
      </g-col>
    </g-row>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
       value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
#app > div {
    margin-top: 4px;
}
</style>
