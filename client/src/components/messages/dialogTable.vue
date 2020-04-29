<template>
  <div id="dialog_table">
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
        prop="a"
        label="字段A"
        sortable
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="b"
        label="字段B"
        sortable
        show-overflow-tooltip
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="c"
        label="字段C"
        sortable
        show-overflow-tooltip
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="d"
        label="字段D"
        sortable
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="e"
        label="字段E"
        sortable
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="f"
        label="字段F"
        sortable
        min-width="100"
      ></el-table-column>
      <el-table-column
        prop="g"
        label="字段G"
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
        label="是否删除"
        min-width="100"
      >
        <template slot-scope="scope">
          {{ scope.is_deleted ? '是': '否' }}
        </template>
      </el-table-column>
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
    <pagination
      ref="pagination"
      :count="count"
      :currentPageSize="currentPageSize"
      :addLength="tableData.length"
      @currentChange="currentChange"
      @sizeChange="sizeChange"
    ></pagination>
  </div>
</template>

<script>
import formatter from '@/utils/formatterDate'
import Pagination from '@/components/public/pagination'

export default {
  name: 'dialogTable',
  data: () => ({
    tableData: [],
    selection: [],
    loading: true,
    count: 0,
    currentPageSize: 1
  }),
  mounted () {
    this.getData()
  },
  components: {
    Pagination
  },
  methods: {
    getData (searchData) {
      this.openLoading()
      let postData = { ...searchData }
      this.api.orderApi.getOrderList(postData)
        .then(data => {
          setTimeout(() => {
            this.count = data.count
            this.tableData = data.list
            this.closeLoading()
          }, 1000)
        })
    },

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
      // this.$emit('selectChange', select)
    },

    currentChange () {},

    sizeChange () {}
  }
}
</script>

<style lang="scss">
#dialog_table {
  .el-loading-mask {
    z-index: 99;
  }
}
</style>
