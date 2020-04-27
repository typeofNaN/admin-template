<template>
  <div id="home">
    <div class="tips">
      <tips>
        <h4 slot="title">分页查询</h4>
        <p>输入分页查询搜索条件，表格数据可分页，可调整当前页面数据</p>
      </tips>
    </div>
    <el-tabs
      v-model="activeTabName"
      type="border-card"
      @tab-click="changeTab"
    >
      <el-tab-pane
        label="分页查询"
        name="tab1"
      >
        <home-search
          ref="home_search"
          :searchForm="searchData"
          @search="search"
        ></home-search>
        <home-ctrl
          :selectData.sync="selectData"
          @showSearchForm="showSearchForm"
          @refresh="refresh"
          @exportExcel="exportExcel"
        ></home-ctrl>
        <home-table
          ref="home_table"
          :tableData="tableData"
          @selectChange="selectChange"
        ></home-table>
        <pagination
          ref="pagination"
          :count="count"
          :currentPageSize="currentPageSize"
          :addLength="tableData.length"
          @currentChange="currentChange"
          @sizeChange="sizeChange"
        ></pagination>
      </el-tab-pane>
      <el-tab-pane
        label="表单"
        name="tab2"
      >
        <home-form></home-form>
      </el-tab-pane>
      <el-tab-pane
        label="表单验证"
        name="tab3"
      >
        <form-validate></form-validate>
      </el-tab-pane>
      <el-tab-pane
        label="简单表格"
        name="tab4"
      >
        <simple-table></simple-table>
      </el-tab-pane>
      <el-tab-pane
        label="复制文本"
        name="tab5"
      >
        <copy-text></copy-text>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomeSearch from '@/components/home/homeSearch'
import HomeCtrl from '@/components/home/homeCtrl'
import HomeTable from '@/components/home/homeTable'
import Pagination from '@/components/public/pagination'
import HomeForm from '@/components/home/homeForm'
import FormValidate from '@/components/home/formValidate'
import SimpleTable from '@/components/home/simpleTable'
import CopyText from '@/components/public/copyText'
import Tips from '@/components/public/tips'

export default {
  name: 'home',
  data: () => ({
    activeTabName: 'tab1',
    searchData: {
      _id: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      time: '',
      is_deleted: '',
      page: 1,
      pageSize: 10
    },
    tableData: [],
    selectData: [],
    count: 0,
    current: 1,
    currentPageSize: 10
  }),
  components: {
    HomeSearch,
    HomeCtrl,
    HomeTable,
    Pagination,
    HomeForm,
    FormValidate,
    SimpleTable,
    CopyText,
    Tips
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (searchData) {
      this.$refs.home_table.openLoading()
      let postData = { ...searchData }
      this.api.orderApi.getOrderList(postData)
        .then(data => {
          setTimeout(() => {
            this.count = data.count
            this.tableData = data.list
            this.$refs.home_table.closeLoading()
          }, 1000)
        })
    },

    search (searchData) {
      let postData = { ...searchData }
      this.current = 1
      this.$refs.pagination.resetCurrentPage(this.current)
      postData.page = this.current
      postData.pageSize = this.currentPageSize
      this.getData(postData)
    },

    refresh () {
      let postData = { ...this.searchData }
      postData.page = this.current
      postData.pageSize = this.currentPageSize
      this.getData(postData)
    },

    exportExcel () {
      this.$refs.home_table.exportExcel()
    },

    showSearchForm () {
      this.$refs.home_search.showSearchForm()
    },

    selectChange (select) {
      this.selectData = select
    },

    currentChange (pageNum) {
      let postData = { ...this.searchData }
      this.current = pageNum
      postData.page = this.current
      postData.pageSize = this.currentPageSize
      this.getData(postData)
    },

    sizeChange (size) {
      let postData = { ...this.searchData }
      this.currentPageSize = size
      postData.pageSize = this.currentPageSize
      this.getData(postData)
    },

    changeTab (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
#home {
  .tips {
    padding: 10px;
    background-color: #e8edf0;
  }

  .el-tabs__header {
    padding: 0 15px;
    background-color: #e8edf0;

    .el-tabs__item {
      margin-right: 4px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: none;
      height: 40px;
      font-size: 13px;
      background-color: #d8e0e6;
      color: #95a5a6;

      &:hover {
        color: #7b8a8b;
        background-color: #b8c7ce;
      }

      &.is-active {
        background-color: #fff;
        color: #7b8a8b;

        &:hover {
          color: #7b8a8b;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
