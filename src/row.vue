<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuguRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    justify: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center'].includes(value);
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    rowStyle () {
      let { gutter } = this;
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' };
    },
    rowClass() {
      let { aligin } = this;
      return [ aligin && `aligin-${justify}`];
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    })
  }
}
</script>
<style lang="scss" scoped>
.g-row {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border: 1px solid;
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
