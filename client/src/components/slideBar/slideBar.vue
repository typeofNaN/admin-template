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
      :active-text-color="getThemeSlideBGColor === '#f9fafc' ? '#606266' : '#fff'"
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
                ? getThemeSlideBGColor === '#f9fafc'
                  ? 'rgb(244, 244, 245)'
                  :'rgb(27, 36, 40)'
                : '',
              padding: getSlideBar
                ? route.isActive
                  ? '0 16px'
                  : '0 20px'
                : '0 14px',
              color: route.isActive
                ? getThemeSlideBGColor === '#f9fafc'
                  ? '#000000'
                  : '#ffffff'
                : getThemeSlideBGColor === '#f9fafc'
                  ? '#777777'
                  : '#b8c7ce'
            }"
          >
            <svg-icon
              v-if="getThemeSlideBGColor === '#f9fafc'"
              class-name="slide_icon"
              :icon-class="route.meta.icon_black"
            />
            <svg-icon
              v-else
              class-name="slide_icon"
              :icon-class="route.meta.icon_white"
            />
            <span slot="title">{{ generateTitle(route.meta.title) }}</span>
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
                  backgroundColor: getThemeSlideBGColor === '#f9fafc'
                    ? '#f4f4f5'
                    : '#2c3b41'
                }"
              >
                <template #title>
                  <div
                    class="submenu_item"
                    :style="{
                      backgroundColor: getThemeSlideBGColor === '#f9fafc'
                        ? '#f4f4f5'
                        : '#2c3b41',
                      margin: getSlideBar ? '0 -45px' : '0 -20px',
                      padding: getSlideBar ? '0 45px' : '0 20px',
                      color: routeChild.isActive
                        ? getThemeSlideBGColor === '#f9fafc'
                          ? '#000000'
                          : '#ffffff'
                        : getThemeSlideBGColor === '#f9fafc'
                          ? '#777777'
                          : '#b8c7ce'
                    }"
                  >
                    <svg-icon
                      v-if="getThemeSlideBGColor === '#f9fafc'"
                      class-name="slide_icon"
                      :icon-class="routeChild.meta.icon_black"
                    />
                    <svg-icon
                      v-else
                      class-name="slide_icon"
                      :icon-class="routeChild.meta.icon_white"
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
                ? getThemeSlideBGColor === '#f9fafc'
                  ? 'rgb(244, 244, 245) !important'
                  :'rgb(27, 36, 40) !important'
                : '',
              margin: getSlideBar ? '0 -20px' : '0 -14px',
              padding: getSlideBar
                ? route.isActive
                  ? '0 16px'
                  : '0 20px'
                : '0 14px',
              color: route.isActive
                ? getThemeSlideBGColor === '#f9fafc'
                  ? '#000000'
                  : '#ffffff'
                : getThemeSlideBGColor === '#f9fafc'
                  ? '#777777'
                  : '#b8c7ce'
            }"
          >
            <svg-icon
              v-if="getThemeSlideBGColor === '#f9fafc'"
              class-name="slide_icon"
              :icon-class="route.meta.icon_black"
            />
            <svg-icon
              v-else
              class-name="slide_icon"
              :icon-class="route.meta.icon_white"
            />
            <span>{{ generateTitle(route.meta.title) }}</span>
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
      }, 1)
    }
  },
  mounted () {
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
    }, 0)
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

  .slide_icon {
    width: 14px;
    height: 14px;
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

  .el-submenu {
    .el-menu-item {
      &:hover {
        border-left-width: 0px !important;
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
