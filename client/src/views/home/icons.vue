<template>
  <div id="icons">
    <div
      v-if="skeleton"
      class="skeleton"
    >
      <div class="skeleton_top">
        <div class="top_box"></div>
        <div class="top_box"></div>
      </div>
      <el-row>
        <el-col
          v-for="i in ele_icons.length"
          :key="i"
          :span="2"
          class="skeleton_box"
        >
          <div class="skeleton_icon_box"></div>
          <div class="skeleton_text_box"></div>
        </el-col>
      </el-row>
    </div>
    <el-tabs
      v-else
      v-model="activeTabName"
      type="border-card"
    >
      <el-tab-pane
        label="element-ui icons"
        name="tab1"
      >
        <div class="ele_icon_box icon_box">
          <el-row>
            <el-col
              v-for="(icon, index) in ele_icons"
              :key="index"
              :span="2"
            >
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateElementIconCode(icon) }}
                </div>
                <div
                  class="icon_item"
                  @click="handleClipboard(generateElementIconCode(icon), $event)"
                >
                  <i :class="'el-icon-' + icon"></i>
                  <p>{{ icon }}</p>
                </div>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="svg icons"
        name="tab2"
      >
        <div class="svg_icon_box icon_box">
          <el-row>
            <el-col
              v-for="(icon, index) in svg_icons"
              :key="index"
              :span="2"
            >
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateSvgIconCode(icon) }}
                </div>
                <div
                  class="icon_item"
                  @click="handleClipboard(generateSvgIconCode(icon), $event)"
                >
                  <svg-icon
                    class-name="svg_item_icon"
                    :icon-class="icon"
                  />
                  <p>{{ icon }}</p>
                </div>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import eleIcon from '@/icons/eleIcon'
import svgIcon from '@/icons/svgIcon'
import clipboard from '@/utils/clipboard'

export default {
  name: 'icons',
  data () {
    return {
      skeleton: true,
      activeTabName: 'tab1',
      ele_icons: eleIcon,
      svg_icons: svgIcon
    }
  },
  mounted () {
    setTimeout(() => {
      this.skeleton = false
    }, 1000)
  },
  methods: {
    generateElementIconCode (symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    generateSvgIconCode (symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    handleClipboard (text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style lang="scss" scoped>
#icons {
  .skeleton {
    .skeleton_top {
      display: flex;
      height: 40px;

      .top_box {
        margin-right: 4px;
        width: 140px;
        background-color: #eee;
      }
    }

    .skeleton_box {
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .skeleton_icon_box {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #eee;
        margin-bottom: 10px;
      }

      .skeleton_text_box {
        width: 80px;
        height: 18px;
        background-color: #eee;
        border-radius: 2px;
      }
    }
  }

  .icon_item {
    margin: 30px 0;
    height: 60px;
    // border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      i,
      svg,
      p {
        color: #5cb6ff
      }
    }

    i,
    svg {
      margin-bottom: 10px;
      color: #606266;
      font-size: 32px;
    }

    p {
      color: #99a9bf;
      font-size: 13px;
    }
  }
}
</style>

<style lang="scss">
#icons {
  .el-tabs__header {
    background-color: #f2f4f5;

    .el-tabs__item {
      margin-right: 4px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: none;
      height: 40px;
      font-size: 13px;
      background-color: #e8edf0;
      color: #95a5a6;

      &:hover {
        color: #7b8a8b;
        background-color: #dee2e4;
      }

      &.is-active {
        background-color: #fff;
        color: #7b8a8b;

        &:hover {
          color: #7b8a8b;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
