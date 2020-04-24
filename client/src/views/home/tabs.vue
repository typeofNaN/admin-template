<template>
  <div id="tabs">
    <h4>普通tabs</h4>
    <el-tabs v-model="activeTabs1">
      <el-tab-pane label="tab1" name="first">tab1</el-tab-pane>
      <el-tab-pane label="tab2" name="second">tab2</el-tab-pane>
      <el-tab-pane label="tab3" name="third">tab3</el-tab-pane>
      <el-tab-pane label="tab4" name="fourth">tab4</el-tab-pane>
    </el-tabs>
    <h4>选项卡样式tabs</h4>
    <el-tabs type="card" v-model="activeTabs2">
      <el-tab-pane label="tab1" name="first">tab1</el-tab-pane>
      <el-tab-pane label="tab2" name="second">tab2</el-tab-pane>
      <el-tab-pane label="tab3" name="third">tab3</el-tab-pane>
      <el-tab-pane label="tab4" name="fourth">tab4</el-tab-pane>
    </el-tabs>
    <h4>卡片化tabs</h4>
    <el-tabs type="border-card" v-model="activeTabs3">
      <el-tab-pane label="tab1">tab1</el-tab-pane>
      <el-tab-pane label="tab2">tab2</el-tab-pane>
      <el-tab-pane label="tab3">tab3</el-tab-pane>
      <el-tab-pane label="tab4">tab4</el-tab-pane>
    </el-tabs>
    <h4>tabs位置</h4>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="tab1">tab1</el-tab-pane>
      <el-tab-pane label="tab2">tab2</el-tab-pane>
      <el-tab-pane label="tab3">tab3</el-tab-pane>
      <el-tab-pane label="tab4">tab4</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data: () => ({
    activeTabs1: 'first',
    activeTabs2: 'first',
    activeTabs3: 'first',
    tabPosition: 'left'
  })
}
</script>

<style lang="scss" scoped>
#tabs {
  h4 {
    margin: 10px 0;
  }
}
</style>
