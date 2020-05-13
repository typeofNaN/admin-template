<template>
  <div id="copy_text">
    <h4>复制固定文本</h4>
    <el-button @click="copy1">复制固定文本</el-button>
    <h4>复制输入文本</h4>
    <el-input
      v-model="value"
      placeholder="请输入"
      style="margin-bottom: 10px"
    ></el-input>
    <el-button @click="copy2">复制输入文本</el-button>
    <h4>试验场</h4>
    <el-input
      type="textarea"
      v-model="value1"
      placeholder="请粘贴"
      rows="4"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'copyText',
  data () {
    return {
      value: '',
      value1: ''
    }
  },
  methods: {
    copy1 () {
      const str = '这是一条固定文本'
      this.copyText(str)
    },

    copy2 () {
      const str = this.value
      this.copyText(str)
    },

    copyText (copyStr) {
      let input = document.createElement('input')
      input.value = copyStr
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      input.remove()

      this.$message.success('复制成功！')
    }
  }
}
</script>

<style lang="scss" scoped>
#copy_text {
  h4 {
    margin: 10px 0;
  }
}
</style>
