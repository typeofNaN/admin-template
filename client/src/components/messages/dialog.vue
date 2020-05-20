<template>
  <div id="m_dialog">
    <el-button @click="dialogVisible = true">带查询分页弹窗</el-button>
    <el-dialog
      v-dialogDrag
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

export default {
  name: 'm_dialog',
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
