<template>
  <div id="layout_default">
    <el-container>
      <el-header class="header">
        <header-bar></header-bar>
      </el-header>
    </el-container>
    <el-container>
      <el-aside width="300px"></el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar/headerBar'

export default {
  name: 'default',
  components: {
    HeaderBar
  }
}
</script>

<style scoped>
</style>

<style>
.el-header {
  height: 80px;
  background-color: #454545;
}
</style>
