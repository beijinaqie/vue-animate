<template>
  <div id="company">
    <div v-if="show" class="title animated  bounce">
      <img src="@/assets/title-bg.png" alt="">
      <p class="size">企业解决方案</p>
    </div>
    <swiper ref="mySwiper" style="height: 100%" :options="swiperOptions">
      <!-- v-for="(iconArr, index) in iconList.content" :key="index" -->
      <swiper-slide
        class="swiper-slide"
        v-for="(arr, index) in companyList"
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
              <div :class="['content', item.className]">
                <img class="logo" :src="item.icon" alt="">
              </div>
            </div>
            <div :class="['nav-link', 'size', 'animated', item.textAnimate]" to="/detail">
              <router-link :to="`/answer?type=company&id=${jnex}`" tag="p" v-html="item.text"></router-link>
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
    v-if="swiperIndex !== companyList.length - 1"
      @click="changeSwiperIndex(swiperIndex + 1)"
      class="down-icon"
    >
      <i class="iconfont icon-double_arrow_down"></i>
    </div>
  </div>
</template>

<script>
const companyList = [
  {
    content: [
      {
        className: 'pingyi',
        icon: require('@/assets/pingyi.png'),
        text: '<span>上海品依信息科技</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        className: 'jienasi',
        icon: require('@/assets/jienasi.png'),
        text: '<span>杰纳斯智能智造系统</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        className: 'lift',
        icon: require('@/assets/lift.png'),
        text: '<span>厦门建发信息技术</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        className: 'answer-qianxin',
        icon: require('@/assets/answer-qianxin.jpg'),
        text: '<span>深圳前海信息</span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInDownBig'
      },
      {
        className: 'lehou',
        icon: require('@/assets/lehou.png'),
        text: '<span>乐石i2025智慧制造</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        className: 'zhusuyun',
        icon: require('@/assets/zhusuyun.png'),
        text: '<span>广州中和互联网技术</span>',
        iconAnimate: 'fadeInLeftBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        className: 'zhiyin',
        icon: require('@/assets/zhiyin.png'),
        text: '<span>上海智引信息科技</span></span>',
        iconAnimate: 'fadeInRightBig',
        textAnimate: 'fadeInUpBig'
      },
      {
        className: 'china-mobile',
        icon: require('@/assets/china-mobile.png'),
        text: '<span>中国移动</span>',
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
      companyList,
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
#company {
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
    padding-top: 10%;
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
        z-index: 1;
        visibility: hidden;
        // animation: shake 10s linear infinite;
      }
      .earth {
        width: 230px;
        height: auto;
        position: absolute;
        top: 0;
        animation: rotateEarth 10s linear infinite;
      }
      .content {

      }
      .pingyi {
        position: absolute;
        top: 30%;
        .logo {
          width: 70px;
          height: auto;
        }
      }
      .jienasi {
        position: absolute;
        top: 40%;
        .logo {
          width: 80px;
          height: auto;
        }
      }
      .lift {
        position: absolute;
        top: 30%;
        .logo {
          width: 50px;
          height: auto;
        }
      }
      .answer-qianxin {
        position: absolute;
        top: 40%;
        .logo {
          width: 90px;
          height: auto;
        }
      }
      .lehou {
        position: absolute;
        top: 38%;
        .logo {
          width: 90px;
          height: auto;
        }
      }
      .zhusuyun {
        position: absolute;
        top: 30%;
        .logo {
          width: 60px;
          height: auto;
        }
      }
      .zhiyin {
        position: absolute;
        top: 35%;
        .logo {
          width: 60px;
          height: auto;
        }
      }
      .china-mobile {
        position: absolute;
        top: 30%;
        .logo {
          width: 70px;
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
