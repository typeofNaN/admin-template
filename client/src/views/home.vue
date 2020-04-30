<template>
  <div id="home">
    <border-box>
      <div class="main">
        <home-form></home-form>
      </div>
      <!-- <common-dialog></common-dialog> -->
    </border-box>
  </div>
</template>

<script>
import CommonDialog from '@/components/public/commonDialog'
import HomeForm from '@/components/home/homeForm'
import BorderBox from '@/components/public/borderBox'

export default {
  name: 'homePage',
  components: {
    CommonDialog,
    HomeForm,
    BorderBox
  }
}
</script>

<style lang="scss" scoped>
#home {
  .main {
    padding: 10px;
  }
}
</style>
