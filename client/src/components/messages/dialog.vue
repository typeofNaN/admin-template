<template>
  <div id="m_dialog">
    <el-button @click="dialogVisible = true">带查询分页弹窗</el-button>
    <el-dialog
      v-el-drag-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      class="commonDragDialog"
    >
      <div
        slot="title"
        class="dialog_title"
        :style="{ backgroundColor: getThemeHeaderBGColor }"
      >查询分页弹窗</div>
      <t-table></t-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TTable from './dialogTable'
import elDragDialog from '@/directive/el-drag-dialog'

export default {
  name: 'm_dialog',
  directives: { elDragDialog },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  components: {
    TTable
  }
}
</script>
