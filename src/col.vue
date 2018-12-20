<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluCol',
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
  },
  mounted() {
    // let { span, offset, ipad, narrowPc, pc, widePc } = this;
    console.log(this, 'span');
  },
  methods: {
    createCasses(obj, str = '') {
      if (!obj) return [];
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createCasses;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-')
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.g-col {
  // width: 100%;
  border: 1px solid red;
  background-color: #eee;
  $class-prefix: col-;
  $class-offset: offset-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
  @for $i from 1 through 24 {
    &.#{$class-offset}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}
</style>
