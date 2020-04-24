<template>
  <div id="message">
    <el-row>
      <el-button type="success" @click="click1">成功消息</el-button>
      <el-button type="warning" @click="click2">警告消息</el-button>
      <el-button type="danger" @click="click3">危险消息</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'message',
  methods: {
    click1 () {
      this.$message.success('成功消息')
    },

    click2 () {
      this.$message.warning('警告消息')
    },

    click3 () {
      this.$message.error('危险消息')
    }
  }
}
</script>
