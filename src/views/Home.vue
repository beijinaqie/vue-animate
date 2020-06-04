<template>
  <div id="home">
    <div class="title animated bounce">
      <img src="@/assets/title-bg.png" alt="">
      <p class="size">解决方案商店</p>
    </div>
    <div class="nav">
      <div class="left">
        <div class="nav-img animated fadeInLeftBig">
          <img class="earth" src="http://dev.xiyiqq.com/ciiri3/static/img/ring_bg.f7a8ac9.png" alt="">
        </div>
        <router-link tag="div" class="nav-link size animated fadeInUpBig" to="/industry">
          行业解决方案
        </router-link>
      </div>
      <div class="right">
        <div class="nav-img animated fadeInRightBig">
          <img class="earth" src="http://dev.xiyiqq.com/ciiri3/static/img/ring_bg.f7a8ac9.png" alt="">
        </div>
        <router-link tag="div" class="nav-link size animated fadeInUpBig" to="/company">
          企业解决方案
        </router-link>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .size {
    font-size: 26px;
  }
  .nav {
    display: flex;
    padding-top: 250px;
    justify-content: space-around;
    .left, .right {
      padding: 0 60px;
    }
    .nav-img {
      width: 550px;
      display: flex;
      justify-content: center;
      position: relative;
      .circle {
        position: relative;
        top: 40px;
        z-index: 1;
      }
      .earth {
        width: 375px;
        height: auto;
        position: absolute;
        top: 0;
        animation: rotateEarth 10s linear infinite;
      }
    }
    .nav-link {
      position: relative;
      top: 160px;
    }
  }
}
</style>
