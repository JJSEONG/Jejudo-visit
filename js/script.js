;(function () {
  'use strict'

  const bgwrap = document.querySelector('.bg-wrap')

  const prevbtn = bgwrap.querySelector('.left-button')
  const nextbtn = bgwrap.querySelector('.right-button')

  const bgslider = bgwrap.querySelectorAll('.bg-slider')

  const bgindex = Object.keys(bgslider)

  const totalbg = bgslider.length

  const initbg = bgslider[parseInt(bgindex[0])]

  initbg.classList.add('active')

  prevbtn.addEventListener('click', () => {
    alert('왼쪽이동')
  })

  nextbtn.addEventListener('click', () => {
    initbg.classList.remove('active')
  })
})()