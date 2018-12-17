<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'guguRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    justify: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center'].includes(value)
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    },
    rowClass() {
      let { aligin } = this;
      return [ aligin && `aligin-${justify}`]
    }
  }
}
</script>
<style lang="scss" scoped>
.g-row {
  display: flex;
  flex-wrap: wrap;
}
.align-start {
  justify-content: flex-start;
}
.align-end {
  justify-content: flex-end;
}
.align-center {
  justify-content: center;
}
</style>
