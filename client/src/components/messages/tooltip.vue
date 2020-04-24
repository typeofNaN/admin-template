<template>
  <div id="tooltip">
    <h4>文字提示主题</h4>
    <el-tooltip
      content="暗色主题提示"
      placement="right"
    >
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip
      content="亮色主题提示"
      placement="right"
      effect="light"
    >
      <el-button>Light</el-button>
    </el-tooltip>
    <h4>文字提示位置</h4>
    <el-tooltip
      effect="dark"
      content="Top Left 提示文字 提示文字 提示文字"
      placement="top-start"
    >
      <el-button>上左</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Top Center 提示文字 提示文字 提示文字"
      placement="top"
    >
      <el-button>上边</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Top Right 提示文字 提示文字 提示文字"
      placement="top-end"
    >
      <el-button>上右</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Left Top 提示文字 提示文字 提示文字"
      placement="left-start"
    >
      <el-button>左上</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Left Center 提示文字 提示文字 提示文字"
      placement="left"
    >
      <el-button>左边</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Left Bottom 提示文字 提示文字 提示文字"
      placement="left-end"
    >
      <el-button>左下</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Right Top 提示文字 提示文字 提示文字"
      placement="right-start"
    >
      <el-button>右上</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Right Center 提示文字 提示文字 提示文字"
      placement="right"
    >
      <el-button>右边</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Right Bottom 提示文字 提示文字 提示文字"
      placement="right-end"
    >
      <el-button>右下</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Bottom Left 提示文字 提示文字 提示文字"
      placement="bottom-start"
    >
      <el-button>下左</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Bottom Center 提示文字 提示文字 提示文字"
      placement="bottom"
    >
      <el-button>下边</el-button>
    </el-tooltip>
    <el-tooltip
      effect="dark"
      content="Bottom Right 提示文字 提示文字 提示文字"
      placement="bottom-end"
    >
      <el-button>下右</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'tooltip'
}
</script>

<style lang="scss" scoped>
#tooltip {
  h4 {
    margin: 10px 0;
  }
}
</style>
