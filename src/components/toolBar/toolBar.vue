<template>
  <div id="toolBar">
    <div class="tool_box home">
      <i class="el-icon-house"></i>
    </div>
    <div class="tool_box clear">
      <i class="el-icon-delete"></i>
    </div>
    <div class="tool_box full_screen">
      <screen-full></screen-full>
    </div>
    <el-popover
      placement="bottom"
      trigger="click"
      width="300"
    >
      <div class="user_box">
        <el-avatar
          class="user_box_icon"
          icon="el-icon-user-solid"
        ></el-avatar>
        <p>登录时间: {{ signinTime }}</p>
        <el-divider>zegobird</el-divider>
      </div>
      <div class="ctrl_btns">
        <el-button
          type="info"
          icon="el-icon-edit"
          size="small"
        >个人设置</el-button>
        <el-button
          type="warning"
          icon="el-icon-switch-button"
          size="small"
          @click="signout"
        >退出登录</el-button>
      </div>
      <div class="tool_box user_info" slot="reference">
        <el-avatar
          class="user_icon"
          icon="el-icon-user-solid"
        ></el-avatar>
        <span>{{ userName }}</span>
      </div>
    </el-popover>
    <div
      class="tool_box setting"
    >
      <setting-bar></setting-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenFull from '@/components/public/screenFull'
import SettingBar from '@/components/public/settingBar'

export default {
  components: {
    ScreenFull,
    SettingBar
  },
  computed: {
    ...mapGetters(['getCurrentUser']),

    userName () {
      return this.getCurrentUser.userName
    },

    signinTime () {
      return this.getCurrentUser.signinTime
    }
  },
  methods: {
    signout () {
      this.$confirm('将要退出系统，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('退出成功')
        this.$router.replace('/account/signin')
        setTimeout(() => {
          this.$store.dispatch('signout')
        }, 100)
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
#toolBar {
  display: flex;
  color: #fff;
  justify-content: flex-end;
  align-items: center;
  width: 360px;
}

.tool_box {
  padding: 10px;
  cursor: pointer;
}

.user_info {
  display: flex;
  align-items: center;
}

.user_icon {
  margin-right: 10px;
}

.user_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}

.user_box p {
  margin-top: 10px;
}

.ctrl_btns {
  display: flex;
  justify-content: space-between;
}
</style>
