<template>
  <div id="home_ctrl">
    <div class="ctrl-left">
      <el-button
        type="info"
        icon="el-icon-refresh"
        size="small"
        @click="refresh"
      ></el-button>
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="small"
        @click="add"
      >添 加</el-button>
      <el-tooltip
        v-if="selectData.length === 0"
        effect="dark"
        content="请选择一条数据"
        placement="top"
      >
        <span>
          <el-button
            type="warning"
            icon="el-icon-edit"
            size="small"
            disabled
            @click="edit"
          >编 辑</el-button>
        </span>
      </el-tooltip>
      <el-button
        v-else
        type="warning"
        icon="el-icon-edit"
        size="small"
        @click="edit"
      >编 辑</el-button>
      <el-tooltip
        v-if="selectData.length === 0"
        effect="dark"
        content="请选择一条数据"
        placement="top"
      >
        <span>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            disabled
          >删 除</el-button>
        </span>
      </el-tooltip>
      <el-button
        v-else
        type="danger"
        icon="el-icon-delete"
        size="small"
      >删 除</el-button>
      <el-button
        type="info"
        icon="el-icon-setting"
        size="small"
      >更 多</el-button>
    </div>
    <div class="ctrl-right">
      <el-button
        icon="el-icon-s-order"
        size="small"
      ></el-button>
      <el-dropdown trigger="click">
        <el-button
          icon="el-icon-menu"
          size="small"
        >
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>ID</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
        <el-button
          icon="el-icon-s-promotion"
          size="small"
        >
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>JSON</el-dropdown-item>
          <el-dropdown-item>XML</el-dropdown-item>
          <el-dropdown-item>CSV</el-dropdown-item>
          <el-dropdown-item>TXT</el-dropdown-item>
          <el-dropdown-item>MS-Word</el-dropdown-item>
          <el-dropdown-item @click.native="exportExcel">MS-Excel</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button
        @click="showSearchForm"
        icon="el-icon-search"
        size="small"
      ></el-button>
    </div>
    <el-dialog
      class="custom_dialog"
      v-dialogDrag
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <div
        slot="title"
        class="dialog_title"
        :style="{ backgroundColor: getThemeHeaderBGColor }"
      >
        <span>{{ dialogTitle }}</span>
        <svg-icon
          class="big_small"
          :icon-class="isbigDialog ? 'defaultDialog' : 'bigDialog'"
          @click="isbigDialog = !isbigDialog"
        />
      </div>
      <el-form
        :model="dialogForm"
        ref="dialogForm"
        :inline="true"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item
              prop="a"
              label="字段A"
            >
              <el-input
                v-model="dialogForm.a"
                placeholder="字段A"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="b"
              label="字段B"
            >
              <el-input
                v-model="dialogForm.b"
                placeholder="字段B"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="c"
              label="字段C"
            >
              <el-input
                v-model="dialogForm.c"
                placeholder="字段C"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="d"
              label="字段D"
            >
              <el-input
                v-model="dialogForm.d"
                placeholder="字段D"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="e"
              label="字段E"
            >
              <el-input
                v-model="dialogForm.e"
                placeholder="字段E"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="f"
              label="字段F"
            >
              <el-input
                v-model="dialogForm.f"
                placeholder="字段F"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              prop="g"
              label="字段G"
            >
              <el-input
                v-model="dialogForm.g"
                placeholder="字段G"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          @click="dialogFormVisible = false"
          size="small"
        >取 消</el-button>
        <el-button
          type="primary"
          size="small"
          @click="submitForm('dialogForm')"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'homeCtrl',
  props: {
    selectData: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    dialogFormVisible: false,
    dialogTitle: '',
    dialogForm: {},
    isbigDialog: false
  }),
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    showSearchForm () {
      this.$emit('showSearchForm')
    },

    refresh () {
      this.$emit('refresh')
    },

    add () {
      this.dialogTitle = '添加'
      this.dialogFormVisible = true
    },

    edit () {
      if (this.selectData.length !== 1) {
        this.$message.warning('请选择一条数据操作！')
        return
      }

      this.dialogTitle = '编辑'
      this.dialogForm = {...this.selectData[0]}
      this.dialogFormVisible = true
    },

    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let postData = { ...this.dialogForm }

          const funcName = this.dialogTitle === '添加'
            ? 'addOrder'
            : 'editOrder'

          this.api.orderApi[funcName](postData)
            .then(res => {
              if (res.data.code === 0) {
                this.$message.success(`${this.dialogTitle}成功！`)
                this.$refs[formName].resetFields()
                this.dialogFormVisibla = false
                this.refresh()
              }
            })
        } else {
          this.$message.danger('所填信息有误，请重新填写！')
        }
      })
    },

    exportExcel () {
      this.$emit('exportExcel')
    }
  }
}
</script>

<style lang="scss" scoped>
#home_ctrl {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .ctrl-left,
  .ctrl-right {
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
#home_ctrl {
  .el-button {
    margin-left: 0;
  }

  .ctrl-right {
    .el-button {
      margin-left: -6px;
    }
  }
}
</style>
