<template>
  <div class="flex" :class="classObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  data() {
    return {
      activeIndex: '1'
    }
  },
  props: {
    orient: {
      type: String,
      default: 'h'
    },
    justify: {
      type: String
    },
    align: {
      type: String
    },
    wrap: {
      type: String,
      default: 'nowrap'
    }
  },
  computed: {
    classObj() {
      let classObj = {}

      // orient
      if (this.orient === 'vertical') classObj['flex-vertical'] = true

      // wrap
      const wrapMode = this.wrap === 'wrap' ? 'flex-wrap' : 'flex-nowrap'
      classObj[wrapMode] = true

      // justify
      switch (this.justify) {
        case 'flex-start':
          classObj['justify-start'] = true
          break
        case 'flex-end':
          classObj['justify-end'] = true
          break
        case 'center':
          classObj['justify-center'] = true
          break
        case 'space-between':
          classObj['justify-space-between'] = true
          break
        case 'space-around':
          classObj['justify-space-around'] = true
          break
      }

      // align
      switch (this.align) {
        case 'flex-start':
          classObj['align-start'] = true
          break
        case 'flex-end':
          classObj['align-end'] = true
          break
        case 'center':
          classObj['align-center'] = true
          break
        case 'baseline':
          classObj['align-baseline'] = true
          break
        case 'stretch':
          classObj['align-stretch'] = true
          break
      }

      return classObj
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex {
  width: 100%;
  display: flex;
}
.flex-vertical {
    flex-direction: column;
}
.flex-wrap {
    flex-wrap: wrap;
}
.flex-nowrap {
    flex-wrap: nowrap;
}

/* justify */
.justify-start {
    justify-content: flex-start
}
.justify-end {
    justify-content: flex-end
}
.justify-center {
    justify-content: center
}
.justify-space-between {
    justify-content: space-between
}
.justify-space-around {
    justify-content: space-around
}

/* align */
.align-start {
    align-items: flex-start
}
.align-end {
    align-items: flex-end
}
.align-center {
    align-items: center
}
.align-baseline {
    align-items: baseline
}
.align-stretch {
    align-items: stretch
}
</style>
