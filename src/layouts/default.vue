<template>
  <div id="layout_default">
    <el-container>
      <el-aside
        class="slider_bar"
        :width="getSlideBar ? '200px' : '64px'"
        :style="{backgroundColor: getThemeColor}"
      >
        <slide-bar :aslide-routers="aslideRouters"></slide-bar>
      </el-aside>
      <el-container :style="{paddingTop: fixedHeader ? '90px' : '0', marginLeft: getSlideBar ? '200px' : '64px'}">
        <el-header
          :style="{backgroundColor: getThemeColor, width: fixedHeader ? (getSlideBar ? 'calc(100% - 200px)' : 'calc(100% - 64px)') : '100%', height: '90px'}"
          :class="fixedHeader ? 'fixedHeader' : 'noFixedheader'"
        >
          <header-bar
            :top-routers="topRouters"
            @changeSlideRouter="changeSlideRouter"
          />
          <tag-view></tag-view>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderBar from '@/components/headerBar/headerBar'
import SlideBar from '@/components/slideBar/slideBar'
import TagView from '@/components/tagView/tagView'

export default {
  name: 'default',
  data: () => ({
    aslideRouters: []
  }),
  components: {
    HeaderBar,
    SlideBar,
    TagView
  },
  computed: {
    ...mapGetters({
      getSlideBar: 'slideBar',
      getThemeColor: 'getThemeColor',
      fixedHeader: 'getFixedHeader'
    }),
    topRouters () {
      const allRouter = this.$router.options.routes
      const filterRouter = allRouter.filter(route => route.meta.showInHome)
      return filterRouter
    }
  },
  mounted () {
    const allRouter = this.$router.options.routes
    const currentRouter = this.$route
    const indexRouter = allRouter.find(item => item.meta.group === currentRouter.meta.group)
    this.changeSlideRouter(indexRouter)
  },
  methods: {
    changeSlideRouter (route) {
      this.aslideRouters = route.children
    }
  }
}
</script>

<style scoped>
.fixedHeader {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.noFixedheader {
  position: static;
}

.slider_bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
</style>

<style>
.el-header {
  padding: 0;
}
</style>
