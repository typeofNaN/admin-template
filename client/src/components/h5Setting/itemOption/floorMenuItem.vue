<template>
  <div>
    <template v-if="items && items.length">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="form-list-panel"
      >
        <el-form-item
          class="small"
          label="导航文案："
        >
          <el-input
            v-model="item.text"
            :maxlength="500"
            placeholder="跳转项文案"
          ></el-input>
        </el-form-item>
        <template v-if="item.click">
          <el-form-item
            class="small"
            label="跳转到："
          >
            <span style="word-break: break-all;">{{ item.click.href }}</span>
          </el-form-item>
        </template>
        <el-form-item
          class="small"
          label="点击配置："
        >
          <el-button
            icon="el-icon-edit"
            round
            @click="showClick(item, index)"
          >配置跳转</el-button>
        </el-form-item>
        <div class="list-item-opt">
          <a
            v-if="index !== 0"
            href="javascript:;"
            @click="upItem(index)"
          >
            <i class="el-icon-arrow-up"></i>
          </a>
          <a
            v-if="index !== items.length - 1"
            href="javascript:;"
            @click="downItem(index)"
          >
            <i class="el-icon-arrow-down"></i>
          </a>
          <a
            v-if="index > 0"
            href="javascript:;"
            @click="delItem(index)"
          >
            <i class="el-icon-delete"></i>
          </a>
        </div>
      </div>
    </template>
    <el-button
      icon="el-icon-plus"
      style="margin-top:15px;"
      round
      @click="addItem"
    >添加跳转项</el-button>
  </div>
</template>

<script>
import util from '@/utils/tools.js'
import compConfig from '@/config/comp.config.js'

export default {
  data () {
    return {
      defaultConf: util.copyObj(compConfig['floor-menu']),
      items: this.menus
    }
  },
  props: {
    menus: {
      type: Array,
      default: null
    }
  },
  watch: {
    menus: {
      handler (val) {
        this.items = val
      },
      deep: true
    }
  },
  methods: {
    showClick (banner, idx) {
      this.$evt.$emit('click:show', idx, ['page'])
    },
    upItem (idx) {
      const tmp = util.copyObj(this.items[idx])
      this.items.splice(idx, 1)
      this.items.splice(idx - 1, 0, tmp)
    },
    downItem (idx) {
      const tmp = util.copyObj(this.items[idx])
      this.items.splice(idx, 1)
      this.items.splice(idx + 1, 0, tmp)
    },
    delItem (idx) {
      this.items.splice(idx, 1)
    },
    addItem () {
      if (this.items.length < 18) {
        this.items.push(util.copyObj(this.defaultConf.action.config[0]))
      } else {
        this.$alert('最多添加18个导航项！')
      }
    }
  }
}
</script>
