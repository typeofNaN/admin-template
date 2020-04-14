<template>
  <div id="settingBar">
    <i
      @click="settingBar = true"
      class="el-icon-setting"
    />
    <el-drawer
      :visible.sync="settingBar"
      derection="rtl"
      size="200px"
      :modal="false"
      title="设置中心"
      close-on-press-escape
      destroy-on-close
    >
      <el-form
        :model="settingForm"
        ref="settingForm"
        label-width="100px"
      >
        <el-form-item label="固定头部">
          <el-switch
            v-model="settingForm.fixedHeader"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeFixedHeader"
          />
        </el-form-item>
        <el-form-item label="系统皮肤">
          <el-color-picker
            v-model="settingForm.themeColor"
            @change="changeThemeColor"
          />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    settingBar: false,
    settingForm: {
      fixedHeader: true,
      themeColor: '#454545'
    }
  }),
  methods: {
    changeFixedHeader (fixed) {
      this.$store.commit('changeFixedHeader', fixed)
      this.$message.success(`头部已${fixed ? '成功' : '取消'}固定！`)
    },

    changeThemeColor (color) {
      this.$store.commit('changeThemeColor', color)
      this.$message.success('主题色修改成功！')
    }
  }
}
</script>

<style>
/* 去除el-drawer title默认蓝色边框 */
.el-drawer__header > span {
  outline: 0;
}
</style>
