<template>
  <div id="layout_default">
    <el-container>
      <el-aside :width="getSlideBar ? '200px' : '64px'">
        <slide-bar :aslide-routers="aslideRouters"></slide-bar>
      </el-aside>
      <el-container>
        <el-header>
          <header-bar
            :top-routers="topRouters"
            @changeSlideRouter="changeSlideRouter"
          />
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

export default {
  name: 'default',
  data: () => ({
    aslideRouters: []
  }),
  components: {
    HeaderBar,
    SlideBar
  },
  computed: {
    ...mapGetters({
      getSlideBar: 'slideBar'
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
</style>

<style>
.el-header {
  padding: 0;
  height: 80px;
  background-color: #454545;
}
</style>
