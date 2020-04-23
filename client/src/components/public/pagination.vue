<template>
  <div id="pagination">
    <div class="page_msg">
      <p>
        总共
        <span>{{ count }}</span>
        条数据，当前显示第
        <span>{{ (current - 1) * currentPageSize + 1 }}</span>
        到第
        <span>{{ (current - 1) * currentPageSize + addLength }}</span>
        条数据
      </p>
    </div>
    <el-pagination
      background
      :page-sizes="[10, 30, 50, 100]"
      :page-size="10"
      layout="sizes, prev, pager, next, jumper"
      :total="count"
      :current-page.sync="current"
      @current-change="currentChange"
      @size-change="sizeChange"
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
    current: 1
  }),
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

  .page_msg {
    color: #606266;
    margin-bottom: 10px;

    span {
      margin: 0 2px;
      font-weight: 700;
    }
  }
}
</style>
