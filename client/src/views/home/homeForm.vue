<template>
  <div id="home">
    <el-tabs
      v-model="activeTabName"
      type="border-card"
      @tab-click="changeTab"
    >
      <el-tab-pane label="tab1" name="tab1">
        <home-form></home-form>
      </el-tab-pane>
      <el-tab-pane label="tab2" name="tab2">tab2</el-tab-pane>
      <el-tab-pane label="tab3" name="tab3">tab3</el-tab-pane>
      <el-tab-pane label="tab4" name="tab4">tab4</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomeForm from '@/components/home/homeForm'

export default {
  name: 'home',
  data: () => ({
    activeTabName: 'tab1'
  }),
  components: {
    HomeForm
  },
  mounted () {
    this.api.orderApi.getOrderList().then(res => {
      console.log(res)
    })
  },
  methods: {
    changeTab (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 1000px;
}
</style>

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
