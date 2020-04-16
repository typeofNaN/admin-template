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
      id="top_routers"
      class="top_routers"
      ref="top_routers"
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
        <i :class="route.icon"></i>
        <span>{{ generateTitle(route.meta.title) }}</span>
      </div>
      <div class="hide_top_routes">
        <el-dropdown trigger="click" @command="handleHideTopRouter">
          <span class="el-dropdown-link">
            <i class="el-icon-s-operation"></i>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in hideTopRouters"
              :key="index"
              :command="item"
            >
              <i :class="item.icon"></i>
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
    hideTopRouters: []
  }),
  components: {
    ToolBar
  },
  computed: {
    ...mapGetters([
      'getSlideBar',
      'getThemeLogoBGColor',
      'getThemeHeaderBGColor',
      'getThemeTextColor'
    ]),
    currentRouterIndex () {
      const currentRouter = this.$route
      const currentRouterIndex = this.topRouters.findIndex(a => a.meta.group === currentRouter.meta.group)

      return currentRouterIndex
    }
  },
  watch: {
    getThemeLogoBGColor (val) {
      this.$refs.route_item.forEach(item => {
        item.style.backgroundColor = this.getThemeHeaderBGColor
      })
      this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = val
    }
  },
  mounted () {
    this.showTopRouters = this.topRouters
    const erd = elementResizeDetectorMaker()
    const allTopRoutersNum = this.topRouters.length

    erd.listenTo(document.getElementById('top_routers'), element => {
      const showNum = ~~(element.offsetWidth / 103) - 1
      this.showTopRouters = this.topRouters.slice(0, showNum)
      this.hideTopRouters = this.topRouters.slice(showNum, allTopRoutersNum)
      if (this.currentRouterIndex < showNum) {
        // 异步处理
        setTimeout(() => {
          this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeLogoBGColor
        }, 0)
      }
    })
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
        this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeHeaderBGColor
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
      cursor: pointer;

      i {
        margin-right: 4px;
      }
    }

    .hide_top_routes {
      display: flex;
      margin-left: auto;
      justify-self: flex-end;
      justify-content: flex-end;
      align-items: center;

      .el-dropdown-link {
        cursor: pointer;

        .el-icon-s-operation {
          color: #fff;
          font-size: 18px;
        }

        .el-icon-arrow-down {
          margin-left: 0;
          color: #fff;
        }
      }
    }
  }
}
</style>
