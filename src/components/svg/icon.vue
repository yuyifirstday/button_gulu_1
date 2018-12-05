<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconClass"></use>
    </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      default: ''
    },
    svgName: {
      type: String,
      required: true
    }
  },
  computed: {
    svgClass() {
      if (this.iconName) {
        return `#icon-${this.iconClass}`;
      }
      else {
        return '#icon';
      }
    },
    iconClass() {
      if (this.className) {
        return `icon${this.className}`;
      }
      else {
        return 'icon';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
