import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

VueAwesomeSwiper.Swiper.prototype.loopFix = loopFix

function loopFix() {
  const swiper = this
  const activeIndex = swiper.activeIndex
  const slides = swiper.slides
  const loopedSlides = swiper.loopedSlides
  const allowSlidePrev = swiper.allowSlidePrev
  const allowSlideNext = swiper.allowSlideNext
  const snapGrid = swiper.snapGrid
  const rtl = swiper.rtlTranslate
  let newIndex
  swiper.allowSlidePrev = true
  swiper.allowSlideNext = true

  const snapTranslate = -snapGrid[activeIndex]
  const diff = snapTranslate - swiper.getTranslate()

  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex
    newIndex += loopedSlides
    const slideChanged = swiper.slideTo(newIndex, 0, false, true)
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides
    newIndex += loopedSlides
    const slideChanged$1 = swiper.slideTo(newIndex, 0, false, true)
    if (slideChanged$1 && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
    }
  }
  swiper.allowSlidePrev = allowSlidePrev
  swiper.allowSlideNext = allowSlideNext
}

Vue.use(VueAwesomeSwiper)
