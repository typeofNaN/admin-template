export default function (element, config) {
  const { color = '#fdebeb' } = config || {}

  // 圆形类
  class Circle {
    constructor (x, y) {
      this.x = x
      this.y = y
      this.r = Math.random() * 14 + 1
      this._mx = Math.random() * 2 - 1
      this._my = Math.random() * 2 - 1
    }

    drawCircle (ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, 360)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    drawLine (ctx, _circle) {
      let dx = this.x - _circle.x
      let dy = this.y - _circle.y
      let d = Math.sqrt(dx * dx + dy * dy)

      if (d < 150) {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(_circle.x, _circle.y)
        ctx.closePath()
        ctx.strokeStyle = color
        ctx.stroke()
      }
    }

    move (w, h) {
      this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx)
      this._my = (this.y < h && this.y > 0) ? this._my : (-this._my)
      this.x += this._mx / 2
      this.y += this._my / 2
    }
  }

  window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

  let canvas = element

  let ctx = canvas.getContext('2d')
  let w = canvas.width = canvas.offsetWidth
  let h = canvas.height = canvas.offsetHeight
  let circles = []
  let currentCircle = new Circle(0, 0)

  let draw = () => {
    ctx.clearRect(0, 0, w, h)
    for (let i = 0; i < circles.length; i++) {
      circles[i].move(w, h)
      circles[i].drawCircle(ctx)

      for (let j = i + 1; j < circles.length; j++) {
        circles[i].drawLine(ctx, circles[j])
      }
    }

    if (currentCircle.x) {
      currentCircle.drawCircle(ctx)

      for (var k = 1; k < circles.length; k++) {
        currentCircle.drawLine(ctx, circles[k])
      }
    }

    requestAnimationFrame(draw)
  }

  let init = num => {
    for (var i = 0; i < num; i++) {
      circles.push(new Circle(Math.random() * w, Math.random() * h))
    }
    draw()
  }

  window.addEventListener('load', init(80))

  window.onmousemove = (e) => {
    e = e || window.event
    currentCircle.x = e.clientX
    currentCircle.y = e.clientY
  }

  window.onmouseout = () => {
    currentCircle.x = null
    currentCircle.y = null
  }
}
