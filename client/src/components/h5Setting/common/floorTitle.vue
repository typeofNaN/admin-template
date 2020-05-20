<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
  >
    <div
      class="line"
      :style="{ backgroundColor: getColor }"
    ></div>
    <div
      class="text-box"
      v-html="getText"
    ></div>
    <div
      class="line"
      :style="{ backgroundColor: getColor }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'FloorTitle',
  props: {
    component: {
      type: Object,
      default: null
    }
  },
  computed: {
    getStyle () {
      const ret = []
      this.component.style.forEach((item) => {
        const unit = item.unit || ''
        if (item.val) {
          if (Array.isArray(item.attr)) {
            item.attr.forEach((atr, i) => {
              ret.push(atr + ':' + item.val[i])
            })
          } else if (item.attr === 'background-image') {
            ret.push(item.attr + ':url(' + item.val + ')')
          } else {
            ret.push(item.attr + ':' + item.val + unit)
          }
        }
      })
      return ret.join(';')
    },
    getColor () {
      let color = '#606266'
      this.component.style.forEach((item) => {
        if (item.val) {
          if (item.attr === 'color') {
            color = item.val
          }
        }
      })

      return color
    },
    getText () {
      const arr = this.component.base[0].val.split('\n')
      if (arr.length) {
        return arr.join('<br/>')
      }
      return this.component.base[0].val
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  .line {
    width: 40px;
    height: 2px;
  }

  .text-box {
    padding: 0 10px;
  }
}
</style>
