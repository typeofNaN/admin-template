<template>
  <div id="notification">
    <h4>是否可自动关闭</h4>
    <el-button @click="open1">可自动关闭</el-button>
    <el-button @click="open2">不会自动关闭</el-button>
    <h4>提示类型</h4>
    <el-button
      type="success"
      @click="open3"
    >成功</el-button>
    <el-button
      type="warning"
      @click="open4"
    >警告</el-button>
    <el-button
      type="info"
      @click="open5"
    >消息</el-button>
    <el-button
      type="danger"
      @click="open6"
    >错误</el-button>
  </div>
</template>

<script>
export default {
  name: 'notification',
  methods: {
    open1 () {
      const h = this.$createElement

      this.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal' }, '这是一条会自动关闭的消息')
      })
    },

    open2 () {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    },

    open3 () {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },

    open4 () {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      })
    },

    open5 () {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    },

    open6 () {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#notification {
  h4 {
    margin: 10px 0;
  }
}
</style>
