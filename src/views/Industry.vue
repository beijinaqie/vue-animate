<template>
  <div id="industry">
    <div v-if="show" class="title animated bounce">
      <img src="@/assets/title-bg.png" alt="">
      <p class="size">行业解决方案</p>
    </div>
    <swiper ref="mySwiper" style="height: 100%" :options="swiperOptions">
      <!-- v-for="(iconArr, index) in iconList.content" :key="index" -->
      <swiper-slide
        class="swiper-slide"
        v-for="(arr, index) in industryList"
        :key="index"
      >
        <div class="nav" v-if="swiperIndex === index">
          <div
            class="left"
            v-for="(item, jnex) in arr.content"
            :key="item.text"
          >
            <div :class="['nav-img', 'animated', item.iconAnimate]">
              <img class="circle" src="@/assets/ring.png" alt="">
              <img class="earth" src="http://dev.xiyiqq.com/ciiri3/static/img/ring_bg.f7a8ac9.png" alt="">
              <div class="content">
                <img class="logo" :src="item.icon" alt="">
              </div>
            </div>
            <div :class="['nav-link', 'size', 'animated', item.textAnimate]" to="/detail">
              <router-link :to="`/detail?type=industry&id=${jnex}`" tag="p" v-html="item.text"></router-link>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <div
      v-if="swiperIndex !== industryList.length - 1"
      @click="changeSwiperIndex(swiperIndex + 1)"
      class="down-icon"
    >
      <i class="iconfont icon-double_arrow_down"></i>
    </div>
  </div>
</template>

<script>
const industryList = [
  {
    content: [
      {
        icon: require('@/assets/1.png'),
        text: '<span>纺织服装行业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>注塑行业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>零部件制造行业</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>卫浴制造行业</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>通用设备制造</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>煤炭开采</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>通信设备</span>/<span>计算机及其他电子</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>食品制造</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInUpBig'
      }
    ]
  },
  {
    content: [
      {
        icon: require('@/assets/1.png'),
        text: '<span>煤炭开采和洗选业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>石油和天然气开采业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>黑色金属矿采选业</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>有色金属矿采选业</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>非金属矿采选业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>其他采矿业</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>农副食品加工业</span></span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        icon: require('@/assets/1.png'),
        text: '<span>汽车制造</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInUpBig'
      }
    ]
  }
]
export default {
  data () {
    const that = this
    return {
      swiperIndex: 0,
      show: true,
      industryList,
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
  },
  mounted () {
    console.log(document.documentElement.clientHeight)
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    clientHeight () {
      return document.documentElement.clientHeight
    }
  },
  watch: {
    swiperIndex (newVal) {
      this.show = false
      setTimeout(() => {
        this.show = true
      }, 0)
    }
  },
  methods: {
    // 获取菜单点击的swiper索引
    changeSwiperIndex (index) {
      console.log(index)
      this.swiper.slideTo(index, 1000, false)
    }
  }
}
</script>

<style lang="scss" scoped>
#industry {
  height: 100%;
  .title {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-top: 180px;
    justify-content: space-around;
    .left, .right {
      width: 25%;
      margin-top: 20px;
    }
    .nav-img {
      display: flex;
      justify-content: center;
      position: relative;
      .circle {
        width: 260px;
        height: auto;
        top: -20px;
        position: relative;
        z-index: 0;
        visibility: hidden;
      }
      .earth {
        width: 230px;
        height: auto;
        position: absolute;
        top: 0;
        animation: rotateEarth 10s linear infinite;
      }
      .content {
        position: absolute;
        top: 60px;
        text-align: center;
        .logo {
          width: 110px;
          height: auto;
        }
      }
    }
    .nav-link {
      // margin-top: 60px;
      p {
        font-size: 24px;
      }
    }
  }
  .down-icon {
    width: 100%;
    position: fixed;
    z-index: 100;
    bottom: 20px;
    display: flex;
    justify-content: center;
    animation: fadeInOut 3s linear infinite;
    .iconfont {
      font-size: 52px;
      color: #fff;
    }
  }
}
</style>
