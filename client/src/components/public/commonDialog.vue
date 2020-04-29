<template>
  <div id="comment_dialog">
    <el-button @click="openDialog">open</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import dialog from '@/utils/commonDialog'
import aa from './aa'

export default {
  name: 'comment_dialog',
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    openDialog () {
      dialog.open({
        title: '标题标题',
        size: 'small', // 可选项tiny/small/large/full, 对应el-dialog的size属性
        component: aa,
        data: {
          name: 'your name'
        },
        bgColor: this.getThemeHeaderBGColor,
        // beforeClose: (done) => {
        //   //点右上角关闭按钮后触发
        //   console.log('dialog is closing')
        //   done()
        // },
        close: () => {
          // 关闭后触发
          console.log('dialog is closed')
        },
        confirm: (result) => {
          // 显式$emit('confirm')时触发
          console.log('dialog is confirmed, and dialog result is ', result)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.el-dialog__wrapper {
  width: 100% !important;
  height: 0 !important;
  overflow: visible;
  .el-dialog {
    z-index: 2000 !important;
  }
}
</style>
