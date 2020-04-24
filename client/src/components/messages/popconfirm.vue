<template>
  <div id="popconfirm">
    <el-popconfirm
      confirmButtonText='好的'
      cancelButtonText='不用了'
      icon="el-icon-info"
      iconColor="red"
      title="这是一段内容确定删除吗？"
      @onConfirm="confirm"
      @onCancel="cancel"
    >
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  name: 'popconfirm',
  methods: {
    confirm () {
      this.$message.success('删除成功！')
    },

    cancel () {
      this.$message.info('你已取消删除！')
    }
  }
}
</script>
