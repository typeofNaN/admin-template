import Vue from 'vue'

function makeDialog (option) {
  var dom = document.createElement('div')
  document.getElementsByTagName('body')[0].appendChild(dom)
  let tpl = `
    <el-dialog 
      :close-on-click-modal="false"
      :custom-class="customClass"
      v-dialogDrag
      :visible.sync="show"
      :size="size"
      :before-close="handleClose"
      :modal="false"
      @close="close"
    >
      <div
        slot="title"
        class="dialog_title"
        :style="{ backgroundColor: '${option.bgColor}' }"
      >
        <span>{{ title }}</span>
        <i class="big_small el-icon-full-screen" />
      </div>
      <dialogContent
        @close="closeDialog"
        @confirm="confirmDialog"
        v-model="dialogData"
      ></dialogContent>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="small"
          @click="closeDialog"
        >取 消</el-button>
        <el-button
          type="primary"
          size="small"
          @click="confirmDialog"
        >确 定</el-button>
      </div>
    </el-dialog>
  `
  var vue = new Vue({
    el: dom,
    data () {
      return {
        title: option.title,
        size: option.size || 'small',
        show: true,
        dialogData: option.data
      }
    },
    template: tpl,
    computed: {
      customClass () {
        return `el-dialog--width-${option.size || 'auto'} custom_dialog`
      }
    },
    methods: {
      handleClose (done) {
        if (option.beforeClose) {
          option.beforeClose(done)
        } else {
          done()
        }
      },
      close () {
        if (option.close) {
          option.close()
        }
      },

      closeDialog () {
        this.show = false
        this.$el.remove()
      },
      confirmDialog (result) {
        this.show = false
        option.confirm && option.confirm(result)
        this.$el.remove()
      }
    },
    components: {
      dialogContent: option.component
    }
  })
  return vue
}

export default {
  open (options) {
    return makeDialog(options)
  }
}
