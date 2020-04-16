<template>
  <div id="slidebar">
    <div
      class="slide_header"
      :style="{ backgroundColor: getThemeLogoBGColor }"
    >
      <el-image
        class="slide_logo"
        :src="logoUrl"
      />
      <span v-show="getSlideBar">Zegobird</span>
    </div>
    <el-menu
      :collapse="!getSlideBar"
      :collapse-transition="false"
      :background-color="getThemeSlideBGColor"
      :text-color="getThemeTextColor"
      active-text-color="#ffd04b"
      class="el-menu-vertical"
    >
      <template v-for="(route, index) in routers">
        <el-submenu
          v-if="route.children"
          :key="index"
          :index="route.path"
        >
          <template slot="title">
            <i
              :class="route.icon"
              :style="{ color: getThemeTextColor }"
            />
            <span slot="title">{{ generateTitle(route.meta.title) }}</span>
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
                  <i
                    :class="routeChild.icon"
                    :style="{ color: getThemeTextColor }"
                  />
                  <span>{{ generateTitle(routeChild.meta.title) }}</span>
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
          <i
            :class="route.icon"
            :style="{ color: getThemeTextColor }"
          />
          <span>{{ generateTitle(route.meta.title) }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { generateTitle } from '@/utils/i18n'
import logo from '@/assets/img/logo.png'

export default {
  name: 'SliderBar',
  props: {
    aslideRouters: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    logoUrl: logo,
    routers: []
  }),
  watch: {
    aslideRouters (val) {
      this.routers = val
    }
  },
  computed: {
    ...mapGetters([
      'getSlideBar',
      'getThemeSlideBGColor',
      'getThemeLogoBGColor',
      'getThemeTextColor'
    ]),

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
    },

    generateTitle
  }
}
</script>

<style lang="scss" scoped>
#slidebar {
  height: 100vh;

  a {
    color: #fff;
    text-decoration: none;
  }

  .slide_header {
    display: flex;
    justify-content: center;;
    align-items: center;
    height: 50px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;

    .slide_logo {
      width: 40px;
      height: 40px;
    }

    span {
      margin-left: 10px;
    }
  }
}
</style>

<style lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 230px;
  min-height: calc(100vh - 60px);
  border-right: none;
}

.el-menu {
  border-right: none;
}

.el-menu--collapse {
  width: 50px;
  .el-submenu__title {
    .el-submenu__icon-arrow,
    span,
    a {
      display: none !important;
    }
  }

  .el-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 45px;

    > a {
      display: none !important;
    }
  }
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
