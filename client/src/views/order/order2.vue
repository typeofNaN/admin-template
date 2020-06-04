<template>
  <div id="order2">
    <section ref="print">
      打印内容
      <span style="color: red">123</span>
      <el-button>45</el-button>
      <div class="no-print">不要打印我</div>
    </section>
    <el-button @click="print">print</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    print () {
      this.$print(this.$refs.print)
    }
  }
}
</script>
