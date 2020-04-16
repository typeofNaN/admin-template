<template>
  <div id="headerBar">
    <div class="change_aslide">
      <i
        :class="(getSlideBar ? 'el-icon-s-fold' : 'el-icon-s-unfold')"
        class="change_aslide_icon"
        @click="changeAslide"
      />
    </div>
    <div class="top_routers">
      <div
        v-for="(route, index) in topRouters"
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
    </div>
    <tool-bar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeLogoBGColor
  },
  methods: {
    changeAslide () {
      this.$store.commit('changeSliderBar')
    },

    handleRouter (route, index) {
      const currentRoute = this.$route

      if (currentRoute.meta.group !== route.meta.group) {
        this.$refs.route_item[this.currentRouterIndex].style.backgroundColor = this.getThemeHeaderBGColor
        this.$refs.route_item[index].style.backgroundColor = this.getThemeLogoBGColor

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

  .change_aslide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;

    .change_aslide_icon {
      font-size: 30px;
    }
  }

  .top_routers {
    display: flex;
    width: calc(100% - 400px);

    .top_router_item {
      display: flex;
      padding: 0 10px;
      justify-content: center;
      align-items: center;
      height: 100%;
      cursor: pointer;

      i {
        margin-right: 4px;
      }
    }
  }
}
</style>
