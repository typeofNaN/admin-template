<template>
  <div id="layout_default">
    <el-container>
      <el-aside
        class="slider_bar"
        :width="getIsMobile
          ? getSlideBar ? '230px' : '0px'
          : getSlideBar ? '230px' : '50px'"
        :style="{ backgroundColor: getThemeSlideBGColor }"
      >
        <slide-bar
        :first-routers="topRouters"
        :aslide-routers="aslideRouters"
      />
      </el-aside>
      <el-container
        :style="{
          paddingTop: getFixedHeader ? '94px' : '0',
          marginLeft: getIsMobile
            ? getSlideBar ? '230px' : '0px'
            : getSlideBar ? '230px' : '50px'
          }"
        >
        <el-header
          :style="{
            backgroundColor: getThemeHeaderBGColor,
            width: getFixedHeader
            ? getIsMobile
              ? getSlideBar ? 'calc(100% - 230px)' : 'calc(100% - 0px)'
              : getSlideBar ? 'calc(100% - 230px)' : 'calc(100% - 50px)'
            : '100%',
            height: '94px'
          }"
          :class="getFixedHeader ? 'fixedHeader' : 'noFixedheader'"
        >
          <header-bar
            :top-routers="topRouters"
            @changeSlideRouter="changeSlideRouter"
          />
          <tag-view/>
        </el-header>
        <el-main>
          <!-- <keep-alive :include="cachedViews"> -->
            <router-view :key="key" />
          <!-- </keep-alive> -->
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
  data () {
    return {
      aslideRouters: []
    }
  },
  components: {
    HeaderBar,
    SlideBar,
    TagView
  },
  computed: {
    ...mapGetters([
      'getSlideBar',
      'getIsMobile',
      'getThemeSlideBGColor',
      'getThemeHeaderBGColor',
      'getFixedHeader'
    ]),
    topRouters () {
      const allRouter = this.$router.options.routes
      return allRouter.filter(route => route.meta.showInHome)
    },
    cachedViews () {
      return this.$store.state.cachedViews
    },
    key () {
      return this.$route.path
    }
  },
  mounted () {
    const allRouter = this.$router.options.routes
    const indexRouter = allRouter.find(item => item.meta.group === this.$route.meta.group)
    this.changeSlideRouter(indexRouter)
  },
  methods: {
    changeSlideRouter (route) {
      this.aslideRouters = route.children
    }
  }
}
</script>

<style lang="scss" scoped>
#layout_default {
  .slider_bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }

  .fixedHeader {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1999;
  }

  .noFixedheader {
    position: static;
  }
}
</style>

<style lang="scss">
.el-header {
  padding: 0 !important;
}

.el-main {
  padding: 8px !important;
}

.el-aside {
  overflow: visible !important;
  z-index: 2000 !important;
}
</style>
