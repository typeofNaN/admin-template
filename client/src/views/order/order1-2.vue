<template>
  <!-- <div id="order1-2">
    order1-2
  </div> -->
  <div id="login">
    <el-form
      class="loginFrom"
      :model="logindata"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item class="login-item">
        <h1 class="login-title">login</h1>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input
          class="login-inputorbuttom"
          prefix-icon="el-icon-user"
          placeholder="登录名"
          v-model="logindata.userName"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="login-inputorbuttom"
          prefix-icon="el-icon-lock"
          placeholder="密码"
          v-model="logindata.password"
        ></el-input>
      </el-form-item>
      <!--<el-form-item prop="verificationCode">
        <el-input
          class="login-inputorbuttom"
          v-model="logindata.verificationCode"
        ></el-input>
      </el-form-item>-->
      <el-form-item class="login-item">
        <el-button
          class="login-inputorbuttom login-bottom"
          type="primary"
          v-popover:popover
          @click="visible = !visible"
        >登 录</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 验证码弹窗 -->
    <el-popover
      popper-class="slidingPictures"
      ref="popover"
      trigger="manual"
      v-model="visible"
    >
      <div class="sliding-pictures">
        <div class="vimg">
          <canvas id="sliderBlock"></canvas>
          <canvas id="codeImg"></canvas>
        </div>
        <div class="slider">
          <div class="track" :class="{ pintuTrue: puzzle }">
            {{ tips }}
          </div>
          <div class="button el-icon-s-grid" @mousedown.prevent="drag"></div>
        </div>
        <div class="operation">
          <span
            title="关闭验证码"
            @click="visible = false"
            class="el-icon-circle-close"
          ></span>
          <span
            title="刷新验证码"
            @click="canvasInit"
            class="el-icon-refresh-left"
          ></span>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      tips: '拖动左边滑块完成上方拼图',
      logindata: {
        userName: '',
        password: '',
        verificationCode: ''
      },
      rules: {},
      visible: false,
      // 滑块x轴数据
      slider: {
        mx: 0,
        bx: 0
      },
      // 拼图是否正确
      puzzle: false
    }
  },
  watch: {
    visible (e) {
      if (e === true) {
        this.canvasInit()
        this.puzzle = false
      }
    }
  },
  methods: {
    // 拼图验证码初始化
    canvasInit () {
      // 生成指定区间的随机数
      const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      // x: 254, y: 109
      let mx = random(127, 244)
      // let bx = random(10, 128)
      let bx = 20
      let y = random(10, 99)
      this.slider = { mx, bx }
      this.draw(mx, bx, y)
    },
    // 鼠标按下
    drag (e) {
      console.log('鼠标按下', e)
      // dom元素
      let dom = e.target
      // 滑块dom
      let slider = document.querySelector('#sliderBlock')
      const downCoordinate = { x: e.x, y: e.y }
      // 正确的滑块数据
      let checkx = Number(this.slider.mx) - Number(this.slider.bx)
      // x轴数据
      let x = 0
      const move = moveEV => {
        x = moveEV.x - downCoordinate.x
        // y = moveEV.y - downCoordinate.y
        if (x >= 251 || x <= 0) {
          return false
        }
        dom.style.left = x + 'px'
        // dom.style.top = y + 'px'
        slider.style.left = x + 'px'
      }
      const up = () => {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        dom.style.left = ''
        console.log(x, checkx)
        let max = checkx - 5
        let min = checkx - 10
        // 允许正负误差1
        if ((max >= x && x >= min) || x === checkx) {
          console.log('滑动解锁成功')
          this.puzzle = true
          this.tips = '验证成功'
          setTimeout(() => {
            this.visible = false
          }, 500)
        } else {
          console.log('拼图位置不正确')
          this.tips = '验证失败，请重试'
          this.puzzle = false
          this.canvasInit()
        }
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    draw (mx = 200, bx = 20, y = 50) {
      let mainDom = document.querySelector('#codeImg')
      let bg = mainDom.getContext('2d')
      let width = mainDom.width
      let height = mainDom.height
      let blockDom = document.querySelector('#sliderBlock')
      let block = blockDom.getContext('2d')
      // 重新赋值，让canvas进行重新绘制
      blockDom.height = height
      mainDom.height = height
      let imgsrc = require('@/assets/img/account_bg.jpg')
      let img = document.createElement('img')
      img.style.objectFit = 'scale-down'
      img.src = imgsrc
      img.onload = function () {
        bg.drawImage(img, 0, 0, width, height)
        block.drawImage(img, 0, 0, width, height)
      }
      let mainxy = { x: mx, y: y, r: 9 }
      let blockxy = { x: bx, y: y, r: 9 }
      this.drawBlock(bg, mainxy, 'fill')
      this.drawBlock(block, blockxy, 'clip')
    },
    // 绘制拼图
    drawBlock (ctx, xy = { x: 254, y: 109, r: 9 }, type) {
      let x = xy.x
      let y = xy.y
      let r = xy.r
      let w = 40
      let PI = Math.PI
      // 绘制
      ctx.beginPath()
      // left
      ctx.moveTo(x, y)
      // top
      ctx.arc(x + (w + 5) / 2, y, r, -PI, 0, true)
      ctx.lineTo(x + w + 5, y)
      // right
      ctx.arc(x + w + 5, y + w / 2, r, 1.5 * PI, 0.5 * PI, false)
      ctx.lineTo(x + w + 5, y + w)
      // bottom
      ctx.arc(x + (w + 5) / 2, y + w, r, 0, PI, false)
      ctx.lineTo(x, y + w)
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true)
      ctx.lineTo(x, y)
      // 修饰，没有会看不出效果
      ctx.lineWidth = 1
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.stroke()
      ctx[type]()
      ctx.globalCompositeOperation = 'xor'
    }
  }
}
</script>

<style>
.slidingPictures {
  padding: 0;
  width: 300px;
  border-radius: 2px;
}
</style>

<style lang="scss" scoped>
.slidingPictures {
  padding: 0;
  width: 300px;
  border-radius: 2px;
}
</style>

<style scoped lang="scss">
#login {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .loginFrom {
    width: 300px;
    /deep/.el-form-item__error {
      padding-left: 10px;
    }
    .login-item {
      display: flex;
      justify-content: center;
      align-items: center;
      .memo,
      .joint-logon {
        color: #f9f9f9;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        height: 20px;
      }
      .joint-logon {
        margin-top: 3px;
        justify-content: flex-start;
        align-items: center;
        height: 25px;
        .login-tips {
          margin-right: 7px;
        }
        .logon-icon {
          width: 25px;
          height: 25px;
          margin-right: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          &:hover {
            background: rgba(28, 136, 188, 0.5);
          }
          > img {
            width: 85%;
            height: 85%;
          }
        }
      }
    }
    .login-title {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .login-bottom {
      margin-top: 15px;
    }
    .login-bottom:hover {
      background: rgba(28, 136, 188, 0.5);
    }
    .login-bottom:active {
      background: rgba(228, 199, 200, 0.5);
    }
    /deep/.login-inputorbuttom {
      height: 40px;
      width: 300px;
      background: rgba(57, 108, 158, 0.5);
      border-radius: 20px;
      border: #396c9e 1px solid;
      font-size: 14px;
      color: #ffffff;
      .el-input--small,
      .el-input__inner {
        line-height: 43px;
        border: none;
        color: #ffffff;
        font-size: 14px;
        height: 40px;
        border-radius: 20px;
        background: transparent;
        text-align: center;
      }
      .el-input__icon {
        line-height: 40px;
        font-size: 16px;
      }
    }
  }
}
.blog {
  font-size: 14px;
  width: 100%;
  text-align: center;
  display: inline-block;
  color: #ffffff;
  &:hover {
    color: #ff4758;
  }
}
/*该样式最终是以弹窗插入*/
.sliding-pictures {
  width: 100%;
  .vimg {
    width: 100%;
    height: 170px;
    #codeImg,
    #sliderBlock {
      width: inherit;
      height: inherit;
    }

    #sliderBlock {
      position: absolute;
      z-index: 4000;
    }
  }
  .slider {
    width: 100%;
    height: 65px;
    border-bottom: #c7c9d0 1px solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .track {
      margin-left: 7px;
      width: 286px;
      height: 38px;
      background: rgba(28, 136, 188, 0.5);
      border-radius: 25px;
      font-size: 14px;
      line-height: 38px;
      padding-right: 15px;
      padding-left: 70px;
    }
    .pintuTrue {
      background: #67c23a;
      color: #ffffff;
    }
    .button {
      position: absolute;
      width: 50px;
      height: 50px;
      line-height: 48px;
      background: #ffffff;
      box-shadow: #b9bdc8 0 0 3px;
      border-radius: 50%;
      left: 7px;
      text-align: center;
      font-size: 28px;
      color: #3e5d8b;
      &:hover {
        color: #2181bd;
      }
    }
  }
  .operation {
    width: 100%;
    height: 40px;
    > span {
      color: #9fa3ac;
      display: inline-block;
      width: 40px;
      font-size: 25px;
      line-height: 40px;
      text-align: center;
      &:hover {
        background: #e2e8f5;
      }
    }
  }
}
</style>
