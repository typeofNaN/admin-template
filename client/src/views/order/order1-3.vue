<template>
  <!-- <div id="order1-3">
    order1-3
  </div> -->
  <div>
    <canvas class="canvasSign" id="canvasSign" @touchstart="touchStart($event)"
     @touchend="touchEnd($event)" @touchmove="touchMove($event)">您的浏览器不支持canvas</canvas>
    <div class="signDoBtn">
      <div class="op_btn" @click="proDraw">确定</div>
      <div class="op_btn" @click="clearDraw">清除</div>
      <div class="op_btn" @click="cancelDraw">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvasWidth: 0,
      strokeColor: 'black',
      LastLoc: {
        x: 0,
        y: 0
      },
      LastTime: 0,
      LastLineWidth: 5,
      canvasHeight: 0,
      isMouseDown: false,
      targetEle: null,
      context: null,
      maxLineWidth: 20,
      minLineWidth: 1,
      maxStrokeV: 10,
      minStrokeV: 0.1,
      touch: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    optimizedMove () {},
    cancelDraw () {
      this.$emit('getimg')
    },
    clearDraw () {
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.clearDrawDone()
    },
    proDraw () {
      let a = this.targetEle.toDataURL('image/png')
      this.$emit('getimg', a)
    },
    clearDrawDone () {
      this.context.save()
      this.context.restore()
    },
    begainStroke (point) {
      this.isMouseDown = true
      let p = this.getPointFun(this.touch.x, this.touch.y)
      this.LastLoc.x = p.x
      this.LastLoc.y = p.y
      this.LastTime = new Date().getTime()
    },
    tabMouseDown () {
      this.isMouseDown = false
    },
    moveStroke (point) {
      let curLoc = this.getPointFun(point.x, point.y)
      let curTime = new Date().getTime()

      this.context.beginPath()
      this.context.moveTo(this.LastLoc.x, this.LastLoc.y)
      this.context.lineTo(curLoc.x, curLoc.y)
      this.context.lineWidth = this.LastLineWidth
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.strokeStyle = this.strokeColor
      this.context.closePath()
      this.context.stroke()
      this.LastLoc.x = curLoc.x
      this.LastLoc.y = curLoc.y
      this.LastTime = curTime
    },
    setTouch (o) {
      this.touch.x = o.clientX
      this.touch.y = o.clientY
    },
    touchStart (e) {
      e.preventDefault()
      this.setTouch(e.touches[0])
      this.begainStroke()
    },
    touchMove (e) {
      e.preventDefault()
      if (this.isMouseDown) {
        this.setTouch(e.touches[0])
        this.optimizedMove({x: this.touch.x, y: this.touch.y})
      }
    },
    touchEnd (e) {
      e.preventDefault()
      this.tabMouseDown()
    },
    getPointFun (x, y) {
      let bbox = this.targetEle.getBoundingClientRect()
      let a = (Number(x) - Number(bbox.left)) + 0.5
      let b = (Number(y) - Number(bbox.top)) + 0.5
      return {x: a, y: b}
    }
  },
  created: function () {
    let _this = this
    this.$nextTick(function () {
      _this.canvasWidth = Math.min(700, window.innerWidth)
      _this.canvasHeight = _this.canvasWidth
      _this.targetEle = document.getElementById('canvasSign')
      _this.context = _this.targetEle.getContext('2d')
      _this.targetEle.width = _this.canvasWidth
      _this.targetEle.height = _this.canvasHeight

      let requestAnimationFrame = window.requestAnimationFrame
      _this.optimizedMove = requestAnimationFrame ? function (point) {
        requestAnimationFrame(function () {
          _this.moveStroke(point)
        })
      } : _this.moveStroke
    })
  }
}
</script>
<style lang="scss">
.canvasSign{
  display:block;
  margin:0 auto;
  width: 100%;
  background-color: #f4f4f4;
}
.signDoBtn{text-align:center;}
.signDoBtn div{
  display: inline-block;
  margin:10px 0 0 10px;
  border:1px solid #aaa;
  width:60px;
  height: 30px;
  line-height: 30px;
  font-size:16px;
  border-radius: 5px 5px;
  cursor:pointer;
  background:#fff;
  font-weight: normal;
  background-color: #f2f2f2;
}
</style>
