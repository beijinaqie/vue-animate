<template>
  <div id="swiper">
    <swiper ref="mySwiper" style="height: 100%" :options="swiperOptions">
      <swiper-slide>
        <div class="box">111</div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">222</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    const that = this
    return {
      swiperIndex: 0,
      swiperOptions: {
        // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，
        // 也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        // notNextTick: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'progressbar'
        },
        // 设置轮播切换效果 slide, cube, coverflow, flip, fade(有问题，慎用)
        effect: 'slide',
        // 循环
        loop: false,
        mousewheel: true,
        // 自动播放
        // autoplay: {
        //   delay: 1500,
        //   stopOnLastSlide: false,
        //   /* 触摸滑动后是否继续轮播 */
        //   disableOnInteraction: false
        // },
        // 滑动速度
        speed: 1000,
        on: {
          // 滑动之后回调函数
          slideChange: function () {
            console.log(this.activeIndex)
            /* activeIndex为滚动到当前的slide索引值 */
            that.swiperIndex = this.activeIndex
          }
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 小手掌抓取滑动
        grabCursor: true,
        // 滑动方向 horizontal(水平) vertical(竖直)
        direction: 'vertical'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#swiper {
  height: 100%;
  .box {
    height: 100%;
    color: #fff;
  }
}
</style>
