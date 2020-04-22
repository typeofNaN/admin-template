<template>
  <div id="home">
    <el-tabs
      v-model="activeTabName"
      type="border-card"
      @tab-click="changeTab"
    >
      <el-tab-pane
        label="tab1"
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
        <div class="pagination">
          <el-pagination
            background
            :page-sizes="[10, 30, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count"
            :current-page.sync="current"
            @current-change="currentChange"
            @size-change="sizeChange"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="tab2"
        name="tab2"
      >
        <home-form></home-form>
      </el-tab-pane>
      <el-tab-pane
        label="tab3"
        name="tab3"
      >tab3</el-tab-pane>
      <el-tab-pane
        label="tab4"
        name="tab4"
      >tab4</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomeForm from '@/components/home/homeForm'
import HomeSearch from '@/components/home/homeSearch'
import HomeCtrl from '@/components/home/homeCtrl'
import HomeTable from '@/components/home/homeTable'

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
    HomeForm,
    HomeSearch,
    HomeCtrl,
    HomeTable
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (searchData) {
      let postData = { ...searchData }
      this.api.orderApi.getOrderList(postData)
        .then(data => {
          this.count = data.count
          this.tableData = data.list
        })
    },

    search (searchData) {
      let postData = { ...searchData }
      this.current = 1
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

<style lang="scss" scoped>
#home {
  .pagination {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }
}
</style>

<style lang="scss">
#home {
  .el-tabs__header {
    padding: 15px 15px 0 15px;
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
