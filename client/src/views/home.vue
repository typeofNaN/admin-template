<template>
  <div id="home">
    首页
  </div>
</template>

<script>
export default {
  mounted () {
    this.api.orderApi.getOrderList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 1000px;
}
</style>
