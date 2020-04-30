<template>
  <div id="pagination">
    <div class="page_msg">
      <p>
        总共
        <span>{{ count }}</span>
        条，当前显示第
        <span>{{ (current - 1) * currentPageSize + 1 }}</span>
        到第
        <span>{{ (current - 1) * currentPageSize + addLength }}</span>
        条，每页显示
        <el-select
          size="mini"
          class="page_size"
          v-model="pageSize"
          @change="sizeChange"
        >
          <el-option label="10" :value="10"></el-option>
          <el-option label="30" :value="30"></el-option>
          <el-option label="50" :value="50"></el-option>
          <el-option label="100" :value="100"></el-option>
        </el-select>
        条
      </p>
    </div>
    <el-pagination
      background
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="count"
      :current-page.sync="current"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    count: {
      type: Number,
      default: 0
    },
    currentPageSize: {
      type: Number,
      default: 10
    },
    addLength: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    current: 1,
    pageSize: 10
  }),
  mounted () {
    this.pageSize = this.currentPageSize
  },
  methods: {
    currentChange (pageNum) {
      this.$emit('currentChange', pageNum)
    },

    sizeChange (size) {
      this.$emit('sizeChange', size)
    },

    resetCurrentPage (current) {
      this.current = current
    }
  }
}
</script>

<style lang="scss" scoped>
#pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10px;

  .page_size {
    width: 70px;
  }

  .page_msg {
    color: #606266;
    font-size: 13px;

    span {
      margin: 0 2px;
      font-weight: 700;
    }
  }
}
</style>
