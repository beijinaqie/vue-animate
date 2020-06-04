<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.title {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  img {
    width: 280px;
    height: 60px;
  }
  .size {
    position: absolute;
    top: 8px;
    font-size: 26px;
    cursor: text;
  }
}
.size {
  cursor: pointer;
  text-align: center;
  font-family: PingFangSC-Semibold;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  // color: rgba(255,255,255,1);
  // text-shadow:0px 10px 30px rgba(0, 0, 0, 0.94);
  // background-image: -webkit-linear-gradient(bottom, rgba(0,138,255,1), rgba(0,138,255,));
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(255, 255, 255, 1)), to(rgba(0,138,255,0.6)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes rotateEarth{
  0%{ -webkit-transform: rotate(0deg);}
  50%{ -webkit-transform: rotate(180deg);}
  100%{ -webkit-transform: rotate(360deg);}
}
@keyframes fadeInOut {
  0%{ opacity: 0.3;}
  25%{ opacity: 0.5; }
  50%{ opacity: 1;}
  75%{ opacity: 0.5; }
  100%{ opacity: 0.3;}
}
@keyframes shake {
  0%{
    transform: translateX(-10px);
  }
  10%{
    transform: translateX(-20px);
  }
  20%{
    transform: translateX(-10px);
  }
  30%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(10px);
  }
  60%{
    transform: translateX(20px);
  }
  70%{
    transform: translateX(10px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: url('http://dev.xiyiqq.com/ciiri3/static/img/home_bg.89ea0c9.png') no-repeat center;
  background-size: 100% 100%;
  // z-index: -1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
