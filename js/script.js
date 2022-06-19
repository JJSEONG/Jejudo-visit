;(function () {
  'use strict'

  const bgwrap = document.querySelector('.bg-wrap')

  const prevbtn = bgwrap.querySelector('.left-button')
  const nextbtn = bgwrap.querySelector('.right-button')

  const bgslider = bgwrap.querySelectorAll('.bg-slider')

  const bgindex = Object.keys(bgslider)

  const totalbg = bgslider.length - 1
  const initbg = 0

  let index = 0;

  let prevbg = bgslider[bgindex[totalbg - index]]
  let currentbg = bgslider[bgindex[index]]
  let nextbg = bgslider[bgindex[index + 1]]

  console.log(prevbg)
  console.log(currentbg)
  console.log(nextbg)

  // currentbg.classList.add('active')

  prevbtn.addEventListener('click', () => {
    if (index > initbg) {
      index--
      let prevbg = bgslider[bgindex[index - 1]]
      let currentbg = bgslider[bgindex[index]]
    
      currentbg.classList.add('active')

      console.log(index)
    }
  })

  nextbtn.addEventListener('click', () => {
    if (index < totalbg) {
      index++
      let prevbg = bgslider[bgindex[index - 1]]
      let currentbg = bgslider[bgindex[index]]
      let nextbg = bgslider[bgindex[index + 1]]
      
      prevbg.classList.add('prev')
      currentbg.classList.add('active')
      nextbg.classList.add('next')

      prevbg.classList.remove('active')
      nextbg.classList.remove('active')

      console.log(index)
    }
  })
})()