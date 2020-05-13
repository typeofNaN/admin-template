<template>
  <div
    :class="['comp-content', component.active ? 'active' : '']"
    :style="getStyle"
  >
    <div class="page-faq">
      <div
        v-for="(item, index) in component.action.config"
        :key="index"
        class="faq-item"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFaq',
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
          } else {
            ret.push(item.attr + ':' + item.val + unit)
          }
        }
      })
      return ret.join(';')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-faq {
  display: flex;
}
</style>
