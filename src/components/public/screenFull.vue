<template>
  <i :class="isFullscreen ? 'el-icon-aim' : 'el-icon-full-screen'" @click="screenFull" />
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data: () => ({
    isFullscreen: false
  }),
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    screenFull () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '您的浏览器不支持该功能',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },

    change () {
      this.isFullscreen = screenfull.isFullscreen
    },

    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },

    destroy () {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
