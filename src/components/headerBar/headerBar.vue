<template>
  <div id="headerBar">
    <div class="change_aslide">
      <i
        :class="(getSlideBar ? 'el-icon-s-fold' : 'el-icon-s-unfold') + ' change_aslide_icon'"
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
        <span>{{ route.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    topRouters: {
      type: Array,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      getSlideBar: 'slideBar'
    })
  },
  methods: {
    signout () {
      this.$router.replace('/account/signin')
      this.$store.dispatch('signout')
    },

    changeAslide () {
      this.$store.commit('changeSliderBar')
    },

    handleRouter (route) {
      const currentRoutePath = this.$route.path

      this.$emit('changeSlideRouter', route)
      if (currentRoutePath !== route.path) {
        this.$router.push(route.path)
      }
    }
  }
}
</script>

<style scoped>
#headerBar {
  display: flex;
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
  color: #fff;
  font-size: 30px;
}

.top_routers {
  display: flex;
}

.top_router_item {
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  cursor: pointer;
}
</style>
