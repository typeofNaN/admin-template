<template>
  <div id="slidebar">
    <div
      v-if="!getIsMobile"
      class="slide_header"
      :style="{ backgroundColor: getThemeLogoBGColor }"
    >
      <el-image
        class="slide_logo"
        :src="logoUrl"
      />
      <span v-show="getSlideBar">Zegobird</span>
    </div>
    <div
      v-else
      class="first_routers"
    >
      <el-row>
        <el-col
          :span="12"
          v-for="(router, index) in firstRouters"
          :key="index"
        >
          <div
            class="first_router_box"
            :style="{ backgroundColor: getIsThemeLight  ? '#222d32' : '#ffffff' }"
            @click="handleRouter(router)"
          >
            <svg-icon
              class-name="first_router_icon"
              :icon-class="router.meta[getIsThemeLight ? 'icon_white' : 'icon_black']"
            />
            <p :style="{ color: getIsThemeLight ? '#ffffff' : '#606266' }">{{ generateTitle(router.meta.title) }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-menu
      :collapse="!getSlideBar"
      :collapse-transition="false"
      :background-color="getThemeSlideBGColor"
      :text-color="getThemeTextColor"
      :active-text-color="getIsThemeLight ? '#606266' : '#fff'"
      class="el-menu-vertical"
    >
      <template v-for="(route, index) in routers">
        <el-submenu
          v-if="route.children"
          :key="index"
          :index="route.path"
          :class="route.isActive ? 'act top1' : 'top1'"
        >
          <div
            class="submenu_title"
            slot="title"
            :style="{
              borderLeft: route.isActive
                ? '4px solid ' + getThemeLogoBGColor
                : '0px solid ' + getThemeLogoBGColor,
              backgroundColor: route.isActive
                ? getIsThemeLight
                  ? 'rgb(244, 244, 245)'
                  :'rgb(27, 36, 40)'
                : '',
              padding: getSlideBar
                ? route.isActive ? '0 16px' : '0 20px'
                : '0 14px',
              color: route.isActive
                ? getIsThemeLight ? '#000000' : '#ffffff'
                : getIsThemeLight ? '#777777' : '#b8c7ce'
            }"
          >
            <svg-icon
              class-name="slide_icon"
              :icon-class="route.meta[getIsThemeLight ? 'icon_black' : 'icon_white']"
            />
            <el-badge
              v-if="route.meta.isNew"
              value="new"
              class="item_new"
            >
              <span slot="title">{{ generateTitle(route.meta.title) }}</span>
            </el-badge>
            <span v-else slot="title">{{ generateTitle(route.meta.title) }}</span>
          </div>
          <template>
            <el-menu-item-group
              v-for="(routeChild, idx) in route.children"
              :key="idx"
            >
              <el-menu-item
                :index="routeChild.path"
                @click="toRoute(routeChild.path)"
                :style="{
                  borderLeft: '0px solid ' + getThemeLogoBGColor,
                  backgroundColor: getIsThemeLight ? '#f4f4f5' : '#2c3b41'
                }"
              >
                <template #title>
                  <div
                    class="submenu_item"
                    :style="{
                      backgroundColor: getIsThemeLight ? '#f4f4f5' : '#2c3b41',
                      margin: getSlideBar ? '0 -45px' : '0 -20px',
                      padding: getSlideBar ? '0 45px' : '0 20px',
                      color: routeChild.isActive
                        ? getIsThemeLight ? '#000000' : '#ffffff'
                        : getIsThemeLight ? '#777777' : '#b8c7ce'
                    }"
                  >
                    <svg-icon
                      class-name="slide_icon"
                      :icon-class="routeChild.meta[getIsThemeLight ? 'icon_black' : 'icon_white']"
                    />
                    <span>{{ generateTitle(routeChild.meta.title) }}</span>
                  </div>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :key="index"
          :index="route.path"
          :class="route.isActive ? 'act top1' : 'top1'"
          @click="toRoute(route.path)"
          :style="{
            borderLeft: route.isActive
              ? '4px solid ' + getThemeLogoBGColor
              : '0px solid ' + getThemeLogoBGColor
          }"
        >
          <div
            class="menu_item"
            :style="{
              backgroundColor: route.isActive
                ? getIsThemeLight
                  ? 'rgb(244, 244, 245) !important'
                  :'rgb(27, 36, 40) !important'
                : '',
              margin: getSlideBar ? '0 -20px' : '0 -14px',
              padding: getSlideBar
                ? route.isActive ? '0 16px' : '0 20px'
                : '0 14px',
              color: route.isActive
                ? getIsThemeLight ? '#000000' : '#ffffff'
                : getIsThemeLight ? '#777777' : '#b8c7ce'
            }"
          >
            <svg-icon
              class-name="slide_icon"
              :icon-class="route.meta[getIsThemeLight ? 'icon_black' : 'icon_white']"
            />
            <el-badge
              v-if="route.meta.isNew"
              value="new"
              class="item_new"
            >
              <span>{{ generateTitle(route.meta.title) }}</span>
            </el-badge>
            <span v-else>{{ generateTitle(route.meta.title) }}</span>
          </div>
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
    firstRouters: {
      type: Array,
      default: null
    },
    aslideRouters: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    logoUrl: logo,
    routers: [],
    darkTheme: true
  }),
  watch: {
    aslideRouters (val) {
      this.routers = val
    },

    $route (val) {
      this.handSlideRoutes(1)
    }
  },
  mounted () {
    this.handSlideRoutes(0)
  },
  computed: {
    ...mapGetters([
      'getSlideBar',
      'getIsMobile',
      'getIsThemeLight',
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

    handleRouter (route) {
      this.$emit('changeSlideRouter', route)
      this.$router.push(route.path)
    },

    handSlideRoutes (timer) {
      setTimeout(() => {
        const currentRoute = this.$route
        const handleRouters = this.aslideRouters.map(item => {
          if (item.children && item.children.length > 0) {
            if (item.name === currentRoute.name) {
              item.isActive = true
            } else {
              item.isActive = false
            }
            item.children = item.children.map(i => {
              if (i.name === currentRoute.name) {
                item.isActive = true
              }
              if (i.path === currentRoute.path) {
                i.isActive = true
              } else {
                i.isActive = false
              }

              return i
            })
          } else {
            if (item.name === currentRoute.name) {
              item.isActive = true
            } else {
              item.isActive = false
            }
          }

          return item
        })

        this.routers = handleRouters
      }, timer)
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

  .first_routers {
    .first_router_box {
      margin: 4px;
      padding: 4px;
      border-radius: 4px;

      .first_router_icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  .slide_icon {
    width: 14px;
    height: 14px;
  }
}
</style>

<style lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 230px;
  // min-height: calc(100vh - 60px);
  border-right: none;
}

.el-menu {
  border-right: none;

  .el-submenu {
    .el-menu-item {
      &:hover {
        border-left-width: 0px !important;
      }
    }

    .item_new {
      span {
        display: inline-block;
        width: 150px;
      }

      .el-badge__content.is-fixed {
        top: 50%;
        line-height: 14px;
      }
    }
  }

  .el-submenu__title {
    padding: 0;
    padding-left: 0 !important;
    height: 42px;
    line-height: 42px;

    .submenu_title {
      padding-left: 20px;
      width: 100%;
      height: 100%;
    }
  }

  .el-menu-item {
    height: 42px;
    line-height: 42px;

    &.top1 {
      &:hover {
        border-left-width: 4px !important;
        padding-left: 16px !important;
      }
    }

    &.act {
      &:hover {
        .menu_item {
          margin-left: -16px !important;
        }
      }
    }

    .item_new {
      span {
        display: inline-block;
        width: 150px;
      }

      .el-badge__content.is-fixed {
        top: 50%;
        line-height: 14px;
      }
    }
  }

  .el-menu-item-group__title {
    padding: 0px;
  }
}

.el-menu--collapse {
  width: 50px;

  .el-submenu {
    .act {
      .svg-icon {
        margin-left: -3px !important;
      }
    }

    .svg-icon {
      margin-left: 2px !important;
    }
  }

  .el-submenu__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 45px;
    padding: 0 !important;

    .submenu_title {
      padding-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

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
    padding: 0;
    padding-left: 0 !important;

    > a {
      display: none !important;
    }

    .slide_icon {
      width: 14px;
      height: 14px;
    }

    &.top1 {
      .svg-icon {
        margin-left: 4px;
      }
      &:hover {
        border-left-width: 4px !important;
        padding-left: 0px !important;

        .svg-icon {
          margin-left: 0px;
        }
      }
    }

    &.act {
      .svg-icon {
        margin-left: 2px !important;
      }
      &:hover {
        .menu_item {
          margin-left: -16px !important;
        }

        .svg-icon {
          margin-left: 3px !important;
        }
      }
    }
  }

  .menu_item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
