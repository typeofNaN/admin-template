<template>
  <div id="home">
    <border-box>
      <el-card>
        <div slot="header">
          <span>编辑表单</span>
        </div>
        <home-form></home-form>
      </el-card>
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
