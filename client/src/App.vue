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

    if (this.isMobile()) {
      this.$store.commit('closeSlideBar')
    } else {
      this.$store.commit('openSlideBar')
    }
  },
  methods: {
    isMobile () {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < 992
    },

    setDevice () {
      const isPhone = this.isMobile()

      this.$store.commit('setDevice', isPhone ? 'mobile' : 'desktop')
    }
  }
}
</script>
