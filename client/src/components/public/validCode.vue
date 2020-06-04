<template>
  <div
    id="ValidCode"
    :style="{ width, height }"
  >
    <div
      class="ValidCode disabled-select"
      :style="{ width, height }"
      @click="refreshCode"
    >
      <span
        v-for="(item, index) in codeList"
        :key="index"
        :style="getStyle(item)"
      >{{ item.code }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'validCode',
  props: {
    width: {
      type: String,
      default: '120px'
    },
    height: {
      type: String,
      default: '40px'
    },
    length: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      codeList: []
    }
  },
  mounted () {
    this.createdCode()
  },
  methods: {
    getValue () {
      return this.codeList.join('')
    },
    refreshCode () {
      this.createdCode()
    },
    createdCode () {
      let len = this.length
      let codeList = []
      let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      let charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `2${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      // 将当前数据派发出去
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    },
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>

<style lang="scss" scoped>
#ValidCode {
  display: inline-block;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .4);
  vertical-align: middle;

  .ValidCode{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span{
      display: inline-block;
    }
  }
}
</style>
