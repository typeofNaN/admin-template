<template>
  <div id="home">
    首页
    <!-- <common-dialog></common-dialog> -->
  </div>
</template>

<script>
import CommonDialog from '@/components/public/commonDialog'

export default {
  name: 'homePage',
  components: {
    CommonDialog
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 1000px;
}
</style>
