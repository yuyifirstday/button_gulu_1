<template>
    <div class="g-input">
      <input
      :class="{error}"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)" />
      <!-- <div class="icon" v-if="value" @click="iconClick">
        <i :class="'iconfont i-' + icon" ></i>  
      </div> -->
    </div>
</template>
<script>
export default {
  name: 'guluInput',
  props: ['placeholder', 'disabled', 'icon', 'value', 'error'],
  data() {
    return {
    }
  },
  computed: {
    // inputListeners: function () {
    //   var vm = this
    //   // `Object.assign` 将所有的对象合并为一个新对象
    //   return Object.assign({},
    //     // 我们从父级添加所有的监听器
    //     this.$listeners,
    //     // 然后我们添加自定义监听器，
    //     // 或覆写一些监听器的行为
    //     {
    //       // 这里确保组件配合 `v-model` 的工作
    //       input: function (event) {
    //         console.log(event)
    //         event.target.value = ""
    //         vm.$emit('input', event.target.value)
    //       }
    //     }
    //   )
    // }
  },
  methods: {
    iconClick() {
      console.log(this.input, 'input')
      // Object.defineProperty('input', 'key', {
      //   value: ''
      // })
    }
  },
  watch: {
    // value(val) {
    //   if (val) {
        
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: raba(0, 0, 0, 0.5);
$red: #F1453D;
$disabled-bg: #f5f7fa;
.g-input {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  position: relative;
  .icon {
    animation: identifier 1s infinite linear;
    transform-origin: center;
    position: absolute;
    right: 6px;
    .iconfont {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: #bbb;
    }        
  }
  input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
  }
  input[disabled]::placeholder {
    color: #bcbec2;
  }
  input[type="text"]:disabled {
    cursor: not-allowed;
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
  }
  .error {
    border: 1px solid $red;
  }
}

</style>
