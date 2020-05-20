<template>
  <div class="app-option">
    <el-form
      ref="options-form"
      label-width="80px"
      size="mini"
    >
      <h2>【{{ option.title }}】</h2>
      <el-form-item
        class="small"
        label="组件编号："
      >
        <span>{{ option.domId }}</span>
      </el-form-item>
      <el-form-item
        class="small"
        label="组件名称："
      >
        <el-input
          v-model="option.domName"
          maxlength="30"
          placeholder="非必填，页内跳转配置使用"
        ></el-input>
      </el-form-item>
      <div v-if="option.base && option.base.length">
        <form-item
          v-for="(item, index) in option.base"
          :key="index"
          :item="item"
          :index="index"
        ></form-item>
      </div>
      <div v-if="option.style && option.style.length">
        <h3><i class="el-icon-setting"></i> 样式配置</h3>
        <form-item
          v-for="(item, index) in option.style"
          :key="index"
          :item="item"
          :index="index"
        ></form-item>
      </div>
      <div v-if="option.others && option.others.config.length">
        <h3><i class="el-icon-setting"></i> {{ option.others.title }}</h3>
        <form-item
          v-for="(item, index) in option.others.config"
          :key="index"
          :item="item"
          :index="index"
        ></form-item>
      </div>
      <template v-if="option.action">
        <h3><i class="el-icon-setting"></i> {{ option.action.title }}</h3>
        <template v-if="option.action.type === 'image-click'">
          <image-click
            :show.sync="imageClickShow"
            :img="option.style[1].val"
            :clicks="option.action.config"
          ></image-click>
          <el-button
            icon="el-icon-plus"
            :disabled="!option.style[1].val"
            round
            @click="imageClickShow = true"
          >点击区域配置</el-button>
        </template>
        <template v-if="option.action.type === 'form-submit'">
          <input-item :forms="option.action.config"></input-item>
        </template>
        <template v-if="option.action.type === 'page-paragraph-list'">
          <page-paragraph-item :paragraphs="option.action.config"></page-paragraph-item>
        </template>
        <template v-if="option.action.type === 'timeout-click'">
          <timeout-item
            :show.sync="timeoutClickShow"
            :end="option.style[0].val"
            :img="option.style[1].val"
            :times="option.action.config"
          ></timeout-item>
          <el-button
            icon="el-icon-plus"
            :disabled="!option.style[1].val"
            round
            @click="timeoutClickShow = true"
          >时间项配置</el-button>
        </template>
        <template v-if="option.action.type === 'page-faq-list'">
          <page-faq-item :paragraphs="option.action.config"></page-faq-item>
        </template>

        <template v-if="option.action.type === 'bottom-menu-click'">
          <bottom-menu-item :items="option.action.config"></bottom-menu-item>
        </template>
        <template v-if="option.action.type === 'grid-menu-click'">
          <grid-menu-item :grids="option.action.config"></grid-menu-item>
        </template>
        <template v-if="option.action.type === 'floor-menu-click'">
          <floor-menu-item :menus="option.action.config"></floor-menu-item>
        </template>

        <template v-if="option.action.type === 'layout-repeat-click'">
          <layout-repeat-item :grids="option.action.config"></layout-repeat-item>
        </template>
        <template v-if="option.action.type === 'layout-left-click'">
          <layout-left-item :grids="option.action.config"></layout-left-item>
        </template>
        <template v-if="option.action.type === 'layout-right-click'">
          <layout-right-item :grids="option.action.config"></layout-right-item>
        </template>

        <template v-if="option.action.type === 'coupon-click'">
          <coupon-item :coupons="option.action.config"></coupon-item>
        </template>

        <template v-if="option.action.type === 'swiper-click'">
          <banner-item :banners="option.action.config"></banner-item>
        </template>
        <template v-if="option.action.type === 'left-scroll-click'">
          <scroll-item :scrolls="option.action.config"></scroll-item>
        </template>

        <template v-if="option.action.type === 'horizontal-item-click'">
          <horizontal-item :items="option.action.config"></horizontal-item>
        </template>
        <template v-if="option.action.type === 'vertical-item-click'">
          <vertical-item :items="option.action.config"></vertical-item>
        </template>

        <template v-if="option.action.type === 'marquee-click'">
          <marquee-item :marquees="option.action.config"></marquee-item>
        </template>
      </template>
    </el-form>
  </div>
</template>

<script>
import formItem from './formItem.vue'

import imageClick from '@/components/h5Setting/itemOption/imageClick.vue'
import inputItem from '@/components/h5Setting/itemOption/inputItem.vue'
import pageParagraphItem from '@/components/h5Setting/itemOption/pageParagraphItem.vue'
import timeoutItem from '@/components/h5Setting/itemOption/timeoutItem.vue'
import pageFaqItem from '@/components/h5Setting/itemOption/pageFaqItem.vue'

import bottomMenuItem from '@/components/h5Setting/itemOption/bottomMenuItem.vue'
import gridMenuItem from '@/components/h5Setting/itemOption/gridMenuItem.vue'
import floorMenuItem from '@/components/h5Setting/itemOption/floorMenuItem.vue'

import layoutRepeatItem from '@/components/h5Setting/itemOption/layoutRepeatItem.vue'
import layoutLeftItem from '@/components/h5Setting/itemOption/layoutLeftItem.vue'
import layoutRightItem from '@/components/h5Setting/itemOption/layoutRightItem.vue'

import couponItem from '@/components/h5Setting/itemOption/couponItem.vue'

import bannerItem from '@/components/h5Setting/itemOption/bannerItem.vue'
import scrollItem from '@/components/h5Setting/itemOption/scrollItem.vue'

import horizontalItem from '@/components/h5Setting/itemOption/horizontalItem.vue'
import verticalItem from '@/components/h5Setting/itemOption/verticalItem.vue'

import marqueeItem from '@/components/h5Setting/itemOption/marqueeItem.vue'

export default {
  name: 'AppOption',
  data () {
    return {
      imageClickShow: false,
      timeoutClickShow: false
    }
  },
  components: {
    formItem,
    imageClick,
    inputItem,
    pageParagraphItem,
    timeoutItem,
    pageFaqItem,
    bottomMenuItem,
    gridMenuItem,
    floorMenuItem,
    layoutRepeatItem,
    layoutLeftItem,
    layoutRightItem,
    couponItem,
    bannerItem,
    scrollItem,
    horizontalItem,
    verticalItem,
    marqueeItem
  },
  props: {
    option: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.app-option {
  width: 360px;
  padding: 0 10px 0 5px;
  overflow: auto;

  h2 {
    margin: 13px 0;
    font-size: 14px;
  }

  .el-form {
    padding-bottom: 30px;

    > h3 {
      margin-bottom: 10px;
      background-color: #f2f3f4;
      padding: 5px 10px;
      font-size: 14px;
    }

    .el-form-item.small {
      margin-bottom: 5px;

      .font-set {
        display: inline-block;
        width: 28px;
        height: 28px;
        text-align: center;
        cursor: pointer;
        &.checked {
          color: #fff;
          background-color: #333;
        }
      }

      .el-date-editor.el-input {
        width: 186px;
        .el-input__inner {
          padding-left: 30px !important;
        }
      }

      .el-input__inner {
        padding: 0 10px;
      }

      .el-textarea__inner {
        padding: 5px 10px;
      }

      .el-form-item__label {
        padding-right: 0;
        font-size: 13px;
      }
    }

    .form-list-panel {
      margin-top: 15px;
      border: 1px solid #e8e8e8;
      padding: 10px 10px 5px 5px;

      &:first-child {
        margin-top: 0;
      }

      .list-item-opt {
        text-align: right;

        > a {
          margin-left: 10px;
          color: #2aa7ff;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
