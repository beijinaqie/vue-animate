/*
 * Bubble Cursor.js
 * - 90's cursors collection
 */
/* eslint-disable */
(function bubblesCursor () {
  var n = window.innerWidth
  var e = window.innerHeight
  var d = {
    x: n / 2,
    y: n / 2
  }
  var l = []
  function f () {
    c()
    g()
  }
  function c () {
    document.addEventListener('mousemove', h)
    window.addEventListener('resize', j)
  }
  function j (o) {
    n = window.innerWidth
    e = window.innerHeight
  }
  function i (o) {
    if (o.touches.length > 0) {
      for (var p = 0; p < o.touches.length; p++) {
        a(o.touches[p].clientX, o.touches[p].clientY)
      }
    }
  }
  function h (o) {
    d.x = o.clientX
    d.y = o.clientY
    a(d.x, d.y)
  }
  function a (p, q) {
    var o = new k()
    o.init(p, q)
    l.push(o)
  }
  function m () {
    for (var o = 0; o < l.length; o++) {
      l[o].update()
    }
    for (var o = l.length - 1; o >= 0; o--) {
      if (l[o].lifeSpan < 0) {
        l[o].die()
        l.splice(o, 1)
      }
    }
  }
  function g () {
    requestAnimationFrame(g)
    m()
  }
  function k () {
    this.lifeSpan = 250
    this.initialStyles = {
      position: 'absolute',
      display: 'block',
      pointerEvents: 'none',
      'z-index': '10000000',
      width: '5px',
      height: '5px',
      background: '#e6f1f7',
      'box-shadow': '-1px 0px #6badd3, 0px -1px #6badd3, 1px 0px #3a92c5, 0px 1px #3a92c5',
      'border-radius': '1px',
      'will-change': 'transform'
    }
    this.init = function (o, p) {
      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
        y: (-0.4 + (Math.random() * -1))
      }
      this.position = {
        x: o - 10,
        y: p - 10
      }
      this.element = document.createElement('span')
      b(this.element, this.initialStyles)
      this.update()
      document.body.appendChild(this.element)
    }

    this.update = function () {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75
      this.velocity.y -= Math.random() / 600
      this.lifeSpan--
      this.element.style.transform = 'translate3d(' + this.position.x + 'px,' + this.position.y + 'px,0) scale(' + (0.2 + (250 - this.lifeSpan) / 250) + ')'
    }

    this.die = function () {
      this.element.parentNode.removeChild(this.element)
    }
  }
  function b (q, p) {
    for (var o in p) {
      q.style[o] = p[o]
    }
  }
  f()
}
)()
