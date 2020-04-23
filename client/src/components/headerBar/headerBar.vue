<template>
  <div id="headerBar">
    <div class="change_aslide">
      <i
        :class="(getSlideBar ? 'el-icon-s-fold' : 'el-icon-s-unfold')"
        class="change_aslide_icon"
        @click="changeAslide"
      />
    </div>
    <div
      v-if="getIsMobile"
      class="mobile_logo"
    >
      <el-image
        class="mobile_header_logo"
        :src="logoUrl"
      />
      <span>ZegoBird</span>
    </div>
    <div
      v-else
      id="top_routers"
      class="top_routers"
      ref="top_routers"
      :style="{ opacity: topRoutersOpacity }"
    >
      <div
        v-for="(route, index) in showTopRouters"
        :key="index"
        class="top_router_item"
        ref="route_item"
        @mouseenter="mouseEnter(true, index)"
        @mouseleave="mouseEnter(false, index)"
        @click="handleRouter(route, index)"
      >
        <svg-icon
          class-name="top_router_icon"
          :icon-class="route.meta.icon_white"
        />
        <span>{{ generateTitle(route.meta.title) }}</span>
      </div>
      <div
        v-if="hideTopRouters.length > 0"
        class="hide_top_routes"
      >
        <el-dropdown trigger="click" @command="handleHideTopRouter">
          <span class="el-dropdown-link">
            <svg-icon
              class-name="menu-icon"
              icon-class="menu-white"
            />
            <svg-icon
              class-name="dropdown-icon"
              icon-class="dropdown-white"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in hideTopRouters"
              :key="index"
              :command="item"
            >
              <svg-icon
                class-name="hide_router_icon"
                :icon-class="item.meta.icon_black"
              />
              {{ generateTitle(item.meta.title) }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <tool-bar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import elementResizeDetectorMaker from 'element-resize-detector'

import ToolBar from '@/components/toolBar/toolBar'
import { generateTitle } from '@/utils/i18n'
import logo from '@/assets/img/logo.png'

export default {
  name: 'HeaderBar',
  props: {
    topRouters: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    showTopRouters: [],
    hideTopRouters: [],
    topRoutersOpacity: 0,
    logoUrl: logo
  }),
  components: {
    ToolBar
  },
  computed: {
    ...mapGetters([
      'getSlideBar',
      'getIsMobile',
      'getThemeLogoBGColor',
      'getThemeHeaderBGColor',
      'getThemeTextColor'
    ]),
    currentRouterIndex () {
      const currentRouter = this.$route
      const currentRouterIndex = this.topRouters.findIndex(a =>
        a.meta.group === currentRouter.meta.group
      )

      return currentRouterIndex
    }
  },
  watch: {
    getThemeLogoBGColor (val) {
      this.$refs.route_item.forEach(item => {
        item.style.backgroundColor = this.getThemeHeaderBGColor
      })
      if (this.currentRouterIndex < this.showTopRouters.length) {
        this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = val
      }
    },
    $route (newRoute, oldRouter) {
      const newRouteIndex = this.showTopRouters.findIndex(item =>
        item.meta.group === newRoute.meta.group
      )
      const oldRouterIndex = this.showTopRouters.findIndex(item =>
        item.meta.group === oldRouter.meta.group
      )

      if (newRouteIndex >= 0 && newRouteIndex <= this.showTopRouters.length) {
        this.$refs.route_item[newRouteIndex].style.backgroundColor = this.getThemeLogoBGColor
      }

      if (oldRouterIndex >= 0 && oldRouterIndex <= this.showTopRouters.length) {
        this.$refs.route_item[oldRouterIndex].style.backgroundColor = this.getThemeHeaderBGColor
      }

      const parentRouter = this.topRouters.find(item => item.meta.group === newRoute.meta.group)

      this.$emit('changeSlideRouter', parentRouter)
    }
  },
  mounted () {
    if (!this.getIsMobile) {
      this.showTopRouters = this.topRouters
      const erd = elementResizeDetectorMaker()
      const allTopRoutersNum = this.topRouters.length

      erd.listenTo(document.getElementById('top_routers'), element => {
        const showNum = ~~(element.offsetWidth / (this.$i18n.locale === 'zh' ? 110 : 120))
        this.showTopRouters = this.topRouters.slice(0, showNum)
        this.hideTopRouters = this.topRouters.slice(showNum, allTopRoutersNum)
        if (this.currentRouterIndex < showNum) {
          // 异步处理
          setTimeout(() => {
            this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeLogoBGColor
          }, 0)
        }
      })

      setTimeout(() => {
        this.topRoutersOpacity = 1
      }, 400)
    }
  },
  methods: {
    changeAslide () {
      this.$store.commit('changeSliderBar')
    },

    handleRouter (route, index) {
      const currentRoute = this.$route
      if (currentRoute.meta.group !== route.meta.group) {
        if (this.currentRouterIndex <= this.showTopRouters.length) {
          this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeHeaderBGColor
          this.$refs.route_item[index].style.backgroundColor = this.getThemeLogoBGColor
        }
        this.$emit('changeSlideRouter', route)
        this.$router.push(route.path)
      }
    },

    handleHideTopRouter (route) {
      const currentRoute = this.$route

      if (currentRoute.meta.group !== route.meta.group) {
        if (this.currentRouterIndex < this.showTopRouters.length) {
          this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeHeaderBGColor
        }
        this.$emit('changeSlideRouter', route)
        this.$router.push(route.path)
      }
    },

    mouseEnter (enter, index) {
      if (index !== this.currentRouterIndex) {
        this.$refs.route_item[index].style.backgroundColor = enter
          ? this.getThemeLogoBGColor
          : this.getThemeHeaderBGColor
      }
    },

    generateTitle
  }
}
</script>

<style lang="scss" scoped>
#headerBar {
  display: flex;
  color: #fff;
  height: 50px;

  .change_aslide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 50px;
    border-right: 1px solid rgba(0, 0, 0, .05);
    cursor: pointer;

    .change_aslide_icon {
      font-size: 20px;
    }
  }

  .top_routers {
    display: flex;
    width: calc(100% - 330px);

    .top_router_item {
      display: flex;
      padding: 0 15px;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 13px;
      border-right: 1px solid rgba(0, 0, 0, .05);
      cursor: pointer;

      .top_router_icon {
        margin-right: 4px;
        width: 16px;
        height: 16px;
      }
    }

    .hide_top_routes {
      display: flex;
      margin-left: auto;
      justify-self: flex-end;
      justify-content: flex-end;
      align-items: center;
      padding-right: 10px;
      width: 50px;
      border-right: 1px solid rgba(0, 0, 0, .05);

      .el-dropdown-link {
        cursor: pointer;

        .menu-icon {
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }

        .dropdown-icon {
          width: 6px;
          height: 6px;
          vertical-align: middle;
        }
      }
    }
  }

  .mobile_logo {
    display: flex;
    align-items: center;
    width: calc(100% - 330px);
    font-size: 20px;
    font-weight: 500;

    .mobile_header_logo {
      width: 40px;
      height: 40px;
    }

    span {
      margin-left: 10px;
    }
  }
}
</style>
