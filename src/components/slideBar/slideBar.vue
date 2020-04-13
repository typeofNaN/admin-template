<template>
  <div id="slidebar">
    <div class="slide_header">
      {{ getSlideBar ? 'Admin' : 'Ad' }}
    </div>
    <el-menu
      :collapse="!getSlideBar"
      :collapse-transition="false"
      background-color="#454545"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="el-menu-vertical"
    >
      <template
        v-for="(route, index) in routers"
      >
        <el-submenu
          v-if="route.children"
          :key="index"
          :index="route.path"
        >
          <template slot="title">
            <i :class="route.icon"></i>
            <span slot="title">{{ route.name }}</span>
          </template>
          <template>
            <el-menu-item-group
              v-for="(routeChild, idx) in route.children"
              :key="idx"
            >
              <el-menu-item
                :index="routeChild.path"
                @click="toRoute(routeChild.path)"
              >
                <template #title>
                  <i :class="routeChild.icon"></i>
                  <span>{{ routeChild.name }}</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :key="index"
          :index="route.path"
          @click="toRoute(route.path)"
        >
          <i :class="route.icon"></i>
          <span>{{ route.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    aslideRouters: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    routers: []
  }),
  watch: {
    aslideRouters (val) {
      this.routers = val
    }
  },
  computed: {
    ...mapGetters({
      getSlideBar: 'slideBar'
    }),

    slideRouters () {
      return this.aslideRouters
    }
  },
  methods: {
    toRoute (path) {
      const currentRoutePath = this.$route.path

      if (currentRoutePath !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
#slidebar {
  height: 100vh;
  background-color: #454545;
}

#slidebar a {
  color: #fff;
  text-decoration: none;
  /* font-size: 16px; */
}

.slide_header {
  height: 60px;
  background-color: #454545;
  color: #fff;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--collapse .el-submenu__title span,
.el-menu--collapse .el-submenu__title a,
.el-menu--collapse .el-menu-item > a {
  display: none !important;
}

.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none !important;
}

.el-submenu__title > i,
.el-menu-item > i {
  margin-right: 10px;
}

.el-menu--vertical a {
  color: #fff;
  text-decoration: none;
}
</style>
