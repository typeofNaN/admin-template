<template>
  <div id="message_box">
    <el-button
      type="primary"
      @click="click1"
    >消息提示</el-button>
    <el-button
      type="primary"
      @click="click11"
    >消息提示2</el-button>
    <el-button
      type="success"
      @click="click2"
    >确认消息</el-button>
    <el-button
      type="info"
      @click="click3"
    >提交内容</el-button>
    <custom-dialog
      ref="cd1"
      @submit="submit1"
    >
      <span slot="title">提示</span>
      此操作将永久删除该文件, 是否继续?
    </custom-dialog>
  </div>
</template>

<script>
import CustomDialog from '@/components/public/customDialog'

export default {
  name: 'messageBox',
  components: {
    CustomDialog
  },
  methods: {
    click1 () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },

    click2 () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    click3 () {
      const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: reg,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },

    click11 () {
      this.$refs.cd1.open()
    },

    submit1 () {
      this.$message.success('成功')
      this.$refs.cd1.close()
    }
  }
}
</script>
