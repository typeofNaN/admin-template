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
        @click="handleRouter(route)"
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
      'getThemeTextColor'
    ])
  },
  methods: {
    changeAslide () {
      this.$store.commit('changeSliderBar')
    },

    handleRouter (route) {
      const currentRoutePath = this.$route.path

      this.$emit('changeSlideRouter', route)
      if (currentRoutePath !== route.path) {
        this.$router.push(route.path)
      }
    },

    generateTitle
  }
}
</script>

<style scoped>
#headerBar {
  display: flex;
  color: #fff;
}

.change_aslide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.change_aslide_icon {
  font-size: 30px;
}

.top_routers {
  display: flex;
  width: calc(100% - 400px);
}

.top_router_item {
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}

.top_router_item i {
  margin-right: 4px;
}
</style>
