<template>
  <div id="tags">
    <h4>标签状态</h4>
    <el-row>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </el-row>
    <h4>标签可关闭</h4>
    <el-row>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
      </el-tag>
    </el-row>
    <h4>主题</h4>
    <el-row class="tag-group">
      <span class="tag-group__title">Dark</span>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </el-tag>
    </el-row>
    <el-row class="tag-group">
      <span class="tag-group__title">Plain</span>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
      >
        {{ item.label }}
      </el-tag>
    </el-row>
    <h4>可动态编辑</h4>
    <el-row>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button
        v-else
        class="button-new-tag"
        size="small"
        @click="showInput"
      >+ New Tag</el-button>
    </el-row>
    <h4>选择生成标签</h4>
    <el-select
      v-model="value1"
      multiple
      placeholder="请选择"
    >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: 'tags',
  data: () => ({
    tags: [
      { name: '标签一', type: '' },
      { name: '标签二', type: 'success' },
      { name: '标签三', type: 'info' },
      { name: '标签四', type: 'warning' },
      { name: '标签五', type: 'danger' }
    ],
    items: [
      { type: '', label: '标签一' },
      { type: 'success', label: '标签二' },
      { type: 'info', label: '标签三' },
      { type: 'danger', label: '标签四' },
      { type: 'warning', label: '标签五' }
    ],
    dynamicTags: ['标签一', '标签二', '标签三'],
    inputVisible: false,
    inputValue: '',
    value1: '',
    options: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }]
  }),
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#tags {
  h4, .tag-group {
    margin: 10px 0;
  }
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

<style lang="scss">
#tags {
  .el-select {
    width: 100%;
  }
}
</style>
