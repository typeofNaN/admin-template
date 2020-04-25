<template>
  <div
    id="tips"
    :style="{ borderLeft: '4px solid' + getBorderColor }"
  >
    <div class="tip_title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tips',
  props: {
    tipType: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    getBorderColor () {
      let color = ''

      switch (this.tipType) {
        case 'success':
          color = '#67c23a'
          break
        case 'warning':
          color = '#e6a23c'
          break
        case 'danger':
          color = '#f56c6c'
          break
        default:
          color = '#909399'
          break
      }

      return color
    }
  }
}
</script>

<style lang="scss" scoped>
#tips {
  padding: 10px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: #fff;

  h4 {
    margin-bottom: 6px;
    color: #303133;
  }

  p {
    font-size: 14px;
    color: #606266;
    line-height: 20px;
  }
}
</style>
