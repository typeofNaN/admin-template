<template>
  <div id="tree">
    <div class="tree_box">
      <div
        class="tree_title"
        :style="{ backgroundColor: getThemeHeaderBGColor }"
      >栏目列表</div>
      <div class="tree_main">
        <el-checkbox
          class="expand_all"
          v-model="expandAll"
          @change="handleExpandAllChange"
        >展开全部</el-checkbox>
        <div class="tree_dom">
          <el-tree
            ref="tree"
            class="tree"
            :indent="0"
            :data="data"
            show-checkbox
            node-key="id"
            :props="defaultProps"
            :default-expand-all="expandAll"
            @check-change="checkChange"
          ></el-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'tree',
  data () {
    return {
      checkAll: false,
      expandAll: true,
      treeValueStr: '',
      data: [{
        id: 'all',
        label: '选中全部',
        children: [{
          id: '一级 1',
          label: '一级 1',
          children: [{
            id: 1,
            label: '1'
          }, {
            id: 2,
            label: '2'
          }, {
            id: 3,
            label: '3'
          }]
        }, {
          id: '一级 2',
          label: '一级 2',
          children: [{
            id: 4,
            label: '4'
          }, {
            id: 5,
            label: '5'
          }]
        }, {
          id: '一级 3',
          label: '一级 3',
          children: [{
            id: 6,
            label: '6'
          }, {
            id: 7,
            label: '7'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    // handleCheckAllChange (val) {
    //   if (this.checkAll) {
    //     this.$refs.tree.setCheckedNodes(this.data)
    //   } else {
    //     this.$refs.tree.setCheckedKeys([])
    //   }
    // },

    handleExpandAllChange (val) {
      this.expandAll = val
      let treeList = this.data[0].children
      for (var i = 0; i < treeList.length; i++) {
        this.$refs.tree.store.nodesMap[treeList[i].id].expanded = this.expandAll
      }
    },

    checkChange (a, b, c) {
      // let keys = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
      let keys = this.$refs.tree.getCheckedKeys()
      this.treeValueStr = keys.join(',')

      this.$emit('settreeValue', this.treeValueStr)
    }
  }
}
</script>

<style lang="scss">
#tree {
  .tree_box {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);

    .tree_title {
      padding: 10px;
      color: #fff;
      font-size: 14px;
    }

    .tree_main {
      position: relative;
      padding: 10px;

      .expand_all {
        position: absolute;
        top: 13px;
        right: 40px;
        z-index: 10;
      }

      .tree_dom /deep/ {
        .el-tree > .el-tree-node:after {
          border-top: none;
        }
        .el-tree-node {
          position: relative;
          padding-left: 16px;
        }
        // 节点有间隙，隐藏掉展开按钮就好了,如果觉得空隙没事可以删掉
        .el-tree-node__expand-icon.is-leaf{
          display: none;
        }
        .el-tree-node__children {
          padding-left: 16px;
        }

        .el-tree-node :last-child:before {
          height: 38px;
        }

        .el-tree > .el-tree-node:before {
          border-left: none;
        }

        .el-tree > .el-tree-node:after {
          border-top: none;
        }

        .el-tree-node:before {
          content: "";
          left: -4px;
          position: absolute;
          right: auto;
          border-width: 1px;
        }

        .el-tree-node:after {
          content: "";
          left: -4px;
          position: absolute;
          right: auto;
          border-width: 1px;
        }

        .el-tree-node:before {
          border-left: 1px dashed #909399;
          bottom: 0px;
          height: 100%;
          top: -26px;
          width: 1px;
        }

        .el-tree-node:after {
          border-top: 1px dashed #909399;
          height: 20px;
          top: 12px;
          width: 24px;
        }
      }
    }
  }
}
</style>
