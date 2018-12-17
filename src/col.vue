<template>
  <div class="g-col" >
     <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'guluCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    };
  }
}
</script>
<style lang='scss' scoped>
.g-col {
  $class-prefix: col-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
}
</style>
