<template>
  <div id="custom_dialog">
    <el-dialog
      :visible.sync="dialogVisible"
      width="420px"
    >
      <div
        slot="title"
        class="dialog_title"
        :style="{ backgroundColor: getThemeHeaderBGColor }"
      >
        <slot name="title"></slot>
      </div>
      <slot></slot>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          :style="{
            backgroundColor: getThemeHeaderBGColor,
            borderColor: getThemeHeaderBGColor
          }"
          @click="submit"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'custom_dialog',
  data: () => ({
    dialogVisible: false
  }),
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    open () {
      this.dialogVisible = true
    },
    close () {
      this.dialogVisible = false
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
