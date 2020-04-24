<template>
  <div id="notice" v-show="show">
    <div
      class="notice_title"
      :style="{ backgroundColor: getThemeHeaderBGColor }"
    >
      <i class="el-icon-message-solid msg_icon"></i>
      <slot name="title"></slot>
      <i class="el-icon-close close_icon" @click="close"></i>
    </div>
    <div class="notice_main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'notice',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
#notice {
  position: fixed;
  right: 50px;
  bottom: -500px;
  width: 360px;
  height: 260px;
  background-color: #fff;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .2);
  border-radius: 6px;
  z-index: 99;
  animation: notice-in .5s linear 1 alternate forwards;

  .notice_title {
    position: relative;
    padding-left: 10px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;

    .msg_icon {
      margin-right: 6px;
    }

    .close_icon {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }

  .notice_main {
    padding: 10px;
    color: #909399;
  }
}

@keyframes notice-in {
  0% {
    bottom: -500px;
  }
  100% {
    bottom: 20px;
  }
}
</style>
