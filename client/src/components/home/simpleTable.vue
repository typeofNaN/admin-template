<template>
  <div id="simple_table">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        label="头像"
      >
        <template slot-scope="scope">
          <el-image
            :preview-src-list="[scope.row.avatar]"
            :src="scope.row.avatar"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="简介"
      ></el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="warning"
            circle
            size="mini"
            icon="el-icon-edit"
            @click="editItem(scope)"
          ></el-button>
          <el-button
            type="danger"
            circle
            size="mini"
            icon="el-icon-delete"
            @click="deleteItem(scope)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="addBtn"
      type="primary"
      @click="dialogVisible = true"
    >添加数据</el-button>
    <el-dialog
      title="添加数据"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        :model="form"
        ref="form"
      >
        <el-form-item prop="name" label="姓名">
          <el-input
            v-model="form.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="desc" label="描述">
          <el-input
            v-model="form.desc"
            placeholder="请输入描述"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="add"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import avatar from '@/assets/img/avatar.jpg'

export default {
  name: 'simpleTable',
  data: () => ({
    tableData: [
      {
        id: 1,
        name: '张三',
        avatar: avatar,
        desc: 'hello world'
      },
      {
        id: 2,
        name: '李四',
        avatar: avatar,
        desc: 'hello world'
      }
    ],
    dialogVisible: false,
    form: {
      name: '',
      desc: ''
    }
  }),
  methods: {
    add () {
      let obj = { ...this.form }

      obj.id = this.tableData.length + 1
      obj.avatar = avatar

      this.tableData.push(obj)

      this.$refs.form.resetFields()
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
#simple_table {
  .addBtn {
    margin-top: 10px;
  }
}
</style>
