<template>
  <div id="home">
    <home-form></home-form>
    <!-- <common-dialog></common-dialog> -->
  </div>
</template>

<script>
import CommonDialog from '@/components/public/commonDialog'
import HomeForm from '@/components/home/homeForm'

export default {
  name: 'homePage',
  components: {
    CommonDialog,
    HomeForm
  }
}
</script>
