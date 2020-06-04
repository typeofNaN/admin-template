<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'

export default {
  name: 'App',
  mounted () {
    const erd = elementResizeDetectorMaker()

    erd.listenTo(document.getElementById('app'), element => {
      this.setDevice()
    })

    this.isMobile() ? this.$store.commit('closeSlideBar') : this.$store.commit('openSlideBar')
  },
  methods: {
    isMobile () {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < 992
    },

    setDevice () {
      this.$store.commit('setDevice', this.isMobile() ? 'mobile' : 'desktop')
    }
  }
}
</script>
