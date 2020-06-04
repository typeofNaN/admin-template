<template>
  <div id="print">
    <div id="print_box">
      <home-form></home-form>
      <!-- <t-table></t-table> -->
    </div>
    <el-button v-print="print">print</el-button>
  </div>
</template>

<script>
import HomeForm from '@/components/home/homeForm'
import TTable from '@/views/home/homeForm'

export default {
  components: {
    HomeForm,
    TTable
  },
  computed: {
    print () {
      return {
        id: 'print_box',
        popTitle: '打印测试',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    }
  }
}
</script>
