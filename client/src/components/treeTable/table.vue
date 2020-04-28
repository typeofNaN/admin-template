<template>
  <div id="table">
    <el-table
      id="dataTable"
      :data="tableData"
      border
      style="width: 100%"
      v-loading="loading"
      element-loading-background="rgba(255, 255, 255, 0.7)"
      @selection-change="handleSelect"
    >
       <el-table-column
        type="selection"
        width="40"
        fixed="left"
      ></el-table-column>
      <el-table-column
        prop="_id"
        label="ID"
        sortable
        show-overflow-tooltip
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="utc_created"
        label="创建时间"
        sortable
        show-overflow-tooltip
        :formatter="formatterDate"
        min-width="100"
      ></el-table-column>
      <el-table-column
        label="操作"
        min-width="100"
        fixed="right"
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
  </div>
</template>

<script>
import formatter from '@/utils/formatterDate'

export default {
  name: 'table',
  props: {
    tableData: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    selection: [],
    loading: true
  }),
  methods: {
    formatterDate (obj) {
      if (obj.utc_created) {
        let date = new Date(obj.utc_created)
        return formatter(date, 'yyyy-MM-dd HH:mm:ss')
      } else {
        return '--'
      }
    },

    openLoading () {
      this.loading = true
    },

    closeLoading () {
      this.loading = false
    },

    handleSelect (select) {
      this.selection = select
      this.$emit('selectChange', select)
    }
  }
}
</script>

<style lang="scss">
#table {
  .el-loading-mask {
    z-index: 99;
  }
}
</style>
