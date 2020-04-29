<template>
  <div id="tree_table">
    <div class="tree">
      <tree @settreeValue="settreeValue"></tree>
    </div>
    <div class="table">
      <t-table ref="t_table"></t-table>
    </div>
  </div>
</template>

<script>
import Tree from '@/components/treeTable/tree'
import TTable from '@/views/home/homeForm'

export default {
  name: 'treeTable',
  data: () => ({
    tableData: []
  }),
  components: {
    Tree,
    TTable
  },
  methods: {
    settreeValue (val) {
      this.$refs.t_table.getTreeValue(val)
    }
  }
}
</script>

<style lang="scss" scoped>
#tree_table {
  display: flex;
  justify-content: space-between;

  .tree {
    width: 300px;
  }

  .table {
    width: calc(100% - 310px);
  }
}
</style>
