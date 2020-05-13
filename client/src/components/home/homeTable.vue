<template>
  <div id="home_table">
    <el-table
      id="dataTable"
      :data="tableData"
      border
      stripe
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
        min-width="130"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-edit"
            @click="editItem(scope)"
          ></el-button>
          <el-button
            type="danger"
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
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

import formatter from '@/utils/formatterDate'

export default {
  name: 'homeTable',
  props: {
    tableData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      selection: [],
      loading: true
    }
  },
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
    },

    // 导出为excel表格
    exportExcel () {
      const tableDom = document.querySelector('#dataTable')
      var wb = XLSX.utils.table_to_book(tableDom)

      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })

      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          'sheetjs.xlsx'
        )
      } catch (e) {
        console.log(e, wbout)
      }

      return wbout
    }
  }
}
</script>

<style lang="scss">
#home_table {
  .el-loading-mask {
    z-index: 99;
  }
}
</style>
