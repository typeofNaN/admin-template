<template>
  <div id="home">
    <el-tabs
      v-model="activeTabName"
      type="border-card"
      @tab-click="changeTab"
    >
      <el-tab-pane
        label="消息弹窗"
        name="tab1"
      >
        <message></message>
      </el-tab-pane>
      <el-tab-pane
        label="消息弹框"
        name="tab2"
      >
        <message-box></message-box>
      </el-tab-pane>
      <el-tab-pane
        label="通知"
        name="tab3"
      >
        <notification></notification>
      </el-tab-pane>
      <el-tab-pane
        label="文字提示"
        name="tab4"
      >
        <tooltip></tooltip>
      </el-tab-pane>
      <el-tab-pane
        label="弹出框"
        name="tab5"
      >
        <popover></popover>
      </el-tab-pane>
      <el-tab-pane
        label="气泡确认框"
        name="tab6"
      >
        <popconfirm></popconfirm>
      </el-tab-pane>
      <el-tab-pane
        label="提示信息"
        name="tab7"
      >
        <tips tip-type="success">
          <h4 slot="title">成功提示信息标题</h4>
          <p>提示信息内容</p>
        </tips>
        <tips tip-type="danger">
          <h4 slot="title">危险提示信息标题</h4>
          <p>提示信息内容</p>
        </tips>
        <tips tip-type="warning">
          <h4 slot="title">警告提示信息标题</h4>
          <p>提示信息内容</p>
        </tips>
        <tips>
          <h4 slot="title">提示信息标题</h4>
          <p>提示信息内容</p>
        </tips>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Message from '@/components/messages/message'
import MessageBox from '@/components/messages/messageBox'
import Notification from '@/components/messages/notification'
import Tooltip from '@/components/messages/tooltip'
import Popover from '@/components/messages/popover'
import Popconfirm from '@/components/messages/popconfirm'
import Tips from '@/components/public/tips'

export default {
  name: 'home',
  data: () => ({
    activeTabName: 'tab1'
  }),
  components: {
    Message,
    MessageBox,
    Notification,
    Tooltip,
    Popover,
    Popconfirm,
    Tips
  },
  methods: {
    changeTab (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
#home {
  .el-tabs__header {
    padding: 15px 15px 0 15px;
    background-color: #e8edf0;

    .el-tabs__item {
      margin-right: 4px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: none;
      height: 40px;
      font-size: 13px;
      background-color: #d8e0e6;
      color: #95a5a6;

      &:hover {
        color: #7b8a8b;
        background-color: #b8c7ce;
      }

      &.is-active {
        background-color: #fff;
        color: #7b8a8b;

        &:hover {
          color: #7b8a8b;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
