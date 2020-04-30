<template>
  <div
    id="tags-view-container"
    class="tags-view-container"
  >
    <scroll-pane
      ref="scrollPane"
      class="tags-view-wrapper"
    >
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent.native="openMenu(tag,$event)"
      >
        <svg-icon
          class-name="tagview_icon"
          :icon-class="tag.icon"
        />
        {{ i18nForRouteTitle(tag.title) }}
        <span
          v-if="!isAffix(tag)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-pane>
    <ul
      v-show="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li
        v-if="!isAffix(selectedTag)"
        @click="closeSelectedTag(selectedTag)"
      >关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'

import ScrollPane from './scrollPane'
import { i18nForRouteTitle } from '@/utils/i18n'

export default {
  name: 'TagView',
  data: () => ({
    visible: false,
    top: 0,
    left: 0,
    selectedTag: {},
    affixTags: []
  }),
  components: {
    ScrollPane
  },
  computed: {
    ...mapGetters([
      'visitedViews',
      'getSlideBar',
      'getFixedHeader',
      'getThemeHeaderBGColor'
    ]),
    routes () {
      return this.$router.options.routes
    }
  },
  watch: {
    $route () {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.initTags()
    this.addTags()
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },

    isAffix (tag) {
      return tag.meta && tag.meta.affix
    },

    filterAffixTags (routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },

    initTags () {
      const affixTags = this.affixTags = this.filterAffixTags(this.routes)

      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch('addVisitedView', tag)
        }
      }
    },

    addTags () {
      const { name } = this.$route

      if (name) {
        this.$store.dispatch('addView', this.$route)
      }

      return false
    },
    moveToCurrentTag () {
      const tags = this.$refs.tag

      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },

    refreshSelectedTag (view) {
      this.$store.dispatch('delCachedView', view).then(() => {
        const { fullPath } = view
        this.$nextTick(() => {
          this.$router.replace({
            path: fullPath
          })
        })
      })
    },

    closeSelectedTag (view) {
      this.$store.dispatch('delView', view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view)
          }
        })
    },

    closeOthersTags () {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('delOthersViews', this.selectedTag)
        .then(() => {
          this.moveToCurrentTag()
        })
    },

    closeAllTags (view) {
      this.$store.dispatch('delAllViews')
        .then(({ visitedViews }) => {
          if (this.affixTags.some(tag => tag.path === view.path)) {
            return
          }
          this.toLastView(visitedViews, view)
        })
    },

    toLastView (visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]

      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        this.$router.push('/')
      }
    },

    openMenu (tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - menuMinWidth
      const offset = this.getFixedHeader ? 0 : this.getSlideBar ? 230 : 50
      const left = e.clientX - offsetLeft + 15 + offset

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },

    closeMenu () {
      this.visible = false
    },

    i18nForRouteTitle
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  padding: 5px 10px;
  height: 44px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      margin: 2px 5px 2px 0;
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      border: 1px solid #eee;
      color: #495060;
      background: #fff;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        border-color: #bdbebd;
      }

      .tagview_icon {
        width: 12px;
        height: 12px;
        margin-right: 2px;
        color: #495060;
      }

      &.active {
        border-color: #bdbebd;
        background-color: #f7f7f7;
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
.tags-view-wrapper {
  .tags-view-item {
    position: relative;

    &:hover {
      .el-icon-close {
        display: block;
      }
    }

    .el-icon-close {
      display: none;
      position: absolute;
      top: 7px;
      right: -2px;
      width: 20px;
      height: 20px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(1);
        display: inline-block;
        vertical-align: -3px;
      }
    }
  }
}
</style>
