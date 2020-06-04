<template>
  <div :style="`height: ${clientHeight}px`">
    <div class="nav">
      <div class="left" v-for="item in list" :key="item.text">
        <div :class="['nav-img', 'animated', item.iconAnimate]">
          <img class="circle" src="@/assets/circle.png" alt="">
          <img class="earth" src="@/assets/earth.png" alt="">
        </div>
        <router-link tag="div" :class="['nav-link', 'size', 'animated', item.textAnimate]" to="/detail">
          <p v-html="item.text"></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          icon: '',
          text: '<span>海尔</span>',
          iconAnimate: 'fadeInLeftBig',
          textAnimate: 'fadeInDownBig'
        },
        {
          icon: '',
          text: '<span>东方国信</span>',
          iconAnimate: 'fadeInLeftBig',
          textAnimate: 'fadeInDownBig'
        },
        {
          icon: '',
          text: '<span>中国移动</span>',
          iconAnimate: 'fadeInRightBig',
          textAnimate: 'fadeInDownBig'
        },
        {
          icon: '',
          text: '<span>汽车制造</span>',
          iconAnimate: 'fadeInRightBig',
          textAnimate: 'fadeInDownBig'
        },
        {
          icon: '',
          text: '<span>中国电信</span>',
          iconAnimate: 'fadeInLeftBig',
          textAnimate: 'fadeInUpBig'
        },
        {
          icon: '',
          text: '<span>浪潮</span>',
          iconAnimate: 'fadeInLeftBig',
          textAnimate: 'fadeInUpBig'
        },
        {
          icon: '',
          text: '<span>华为</span></span>',
          iconAnimate: 'fadeInRightBig',
          textAnimate: 'fadeInUpBig'
        },
        {
          icon: '',
          text: '<span>食品制造</span>',
          iconAnimate: 'fadeInRightBig',
          textAnimate: 'fadeInUpBig'
        }
      ]
    }
  },
  computed: {
    clientHeight () {
      return document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-top: 150px;
  justify-content: space-around;
  .left, .right {
    width: 25%;
    margin-top: 20px;
  }
  .nav-img {
    display: flex;
    // width: 250px;
    justify-content: center;
    position: relative;
    .circle {
      width: 70%;
      height: auto;
      position: relative;
      z-index: 1;
    }
    .earth {
      width: 50%;
      height: auto;
      position: absolute;
      top: 0;
      animation: rotateEarth 10s linear infinite;
    }
  }
  .nav-link {
    margin-top: 60px;
    p {
      font-size: 24px;
    }
  }
}
</style>
