<template>
  <div id="answer">
    <div class="top">
      <div class="left animated rotateInDownLeft">
        <div class="logo animated fadeIn">
          <img :src="detail && detail.logo" alt="">
        </div>
        <p class="title animated fadeInDown" v-html="detail && detail.title"></p>
        <div class="desc animated fadeInUp">{{ detail && detail.desc }}</div>
      </div>
      <div class="center animated bounceInDown">
        <p class="size animated fadeInRight">方案描述</p>
        <div class="desc">
          <img class="animated fadeIn" :src="detail && detail.answer_pic" alt="">
        </div>
      </div>
      <div class="right animated rotateInDownRight">
        <p class="title size animated fadeInDown">效益提升分析</p>
        <div class="content">
          <div class="item" v-for="item in detail.benefitList" :key="item.title">
            <p class="title size animated fadeInDown">{{ item.title }}</p>
            <p class="text animated fadeInUp">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <img class="middle animated flipInY" src="@/assets/answer-m.png" alt="">
    <div class="bottom">
      <div class="left animated rotateInUpRight">
        <div class="phone-label animated fadeInUp">服务热线</div>
        <div class="phone animated fadeInUp">{{ detail && detail.phone }}</div>
        <div class="address animated fadeInUp"><i class="iconfont icon-ditu"></i>{{ detail && detail.address }}</div>
        <div class="email animated fadeInUp"><i class="iconfont icon-youxiang"></i>{{ detail && detail.email }}</div>
        <div class="copy animated fadeInUp">{{ detail && detail.copy }}</div>
        <!-- <div class="jc animated fadeInUp"><img src="@/assets/jc.png" alt="">{{ detail && detail.jc }}</div> -->
      </div>
      <div class="right">
        <p class="size animated fadeInRightBig">{{ detail && detail.company }}</p>
        <div class="content">
          <div class="item animated bounceInRight" v-for="item in detail.caseList" :key="item.title">
            <p class="title animated fadeInDown">{{ item.title }}</p>
            <div class="text animated fadeInUp" v-html="item.text"></div>
          </div>
        </div>
        <p class="supply animated fadeInLeftBig"><img src="@/assets/huawei.png" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
import detailList from '@/apis/company.js'
export default {
  name: 'answer',
  computed: {
    detail () {
      return detailList[this.$route.query.id]
    }
  }
}
</script>

<style lang="scss" scoped>
#answer {
  width: 100%;
  // min-height: 1020px;
  height: 100vh;
  background: url('~@/assets/answer-bg.png') no-repeat center;
  .top {
    display: flex;
    .left {
      width: 400px;
      height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      padding: 0 40px 0 20px;
      color: #fff;
      background: url('~@/assets/left.png') no-repeat center;
      background-size: 100% 100%;
      .logo {
        width: 150px;
        margin-top: 30px;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 0.5s;
        img {
          width: 100%;
          height: auto;
        }
      }
      .title {
        font-size: 28px;
        text-align: center;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 1s;
      }
      .desc {
        margin-top: 30px;
        font-size: 18px;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 0.5s;
      }
    }
    .center {
      width: 745px;
      height: 50vh;
      color: #fff;
      background: url('~@/assets/top-center.png') no-repeat center;
      background-size: 100% 100%;
      .size {
        text-align: left;
        margin: 20px 0 0 20px;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
      }
      .desc {
        width: 100%;
        height: auto;
        text-align: center;
        cursor: pointer;
        img {
          padding-top: 20px;
          width: 85%;
          -webkit-animation-delay: 1s;//延迟
          animation-delay: 1s;
        }
      }
    }
    .right {
      width: 764px;
      height: 44vh;
      color: #fff;
      background: url('~@/assets/top-right.png') no-repeat center;
      background-size: 110% 100%;
      & > p.title {
        position: relative;
        top: 20px;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 0.5s;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 10px 0;
        box-sizing: border-box;
        .item {
          width: 25%;
          margin-top: 20px;
          .title {
            font-size: 20px;
            -webkit-animation-delay: 0.5s;//延迟
            animation-delay: 0.5s;
          }
          .text {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85px;
            height: 85px;
            padding: 10px;
            margin: 0 auto;
            // line-height: 85px;
            text-align: center;
            background: url('~@/assets/half-circle.png') no-repeat center;
            background-size: 100% 100%;
            -webkit-animation-delay: 0.5s;//延迟
            animation-delay: 0.5s;
          }
        }
      }
    }
  }
  .middle {
    width: 100%;
    height: 5vh;
    position: relative;
    top: -20px;
    -webkit-animation-delay: 1s;//延迟
    animation-delay: 1s;
  }
  .bottom {
    display: flex;
    .left {
      width: 400px;
      height: 45vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 0 40px 0 20px;
      color: #fff;
      background: url('~@/assets/left.png') no-repeat center;
      background-size: 100% 100%;
      .phone-label {
        margin-top: 30px;
        font-size: 26px;
        color: #30AED4;
        -webkit-animation-delay: 1.5s;//延迟
        animation-delay: 1.5s;
      }
      .phone {
        font-size: 26px;
        color: #30AED4;
        -webkit-animation-delay: 1.25s;//延迟
        animation-delay: 1.25s;
      }
      .address, .email, .copy, .jc {
        color: #979797;
      }
      .address {
        margin-top: 30px;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
        .iconfont {
          padding-right: 5px;
        }
      }
      .email {
        margin-top: 10px;
        -webkit-animation-delay: 0.75s;//延迟
        animation-delay: 0.75s;
        .iconfont {
          font-size: 18px;
          padding-right: 5px;
        }
      }
      .copy {
        margin-top: 70px;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 0.5s;
      }
      .jc {
        margin-top: 50px;
        -webkit-animation-delay: 0.25s;//延迟
        animation-delay: 0.25s;
        img {
          width: 15px;
          height: auto;
          padding-right: 5px;
        }
      }
    }
    .right {
      width: 100%;
      .size {
        text-align: left;
        padding: 0 0 20px 20px;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
      }
      .content {
        display: flex;
        .item {
          width: 284px;
          height: 33vh;
          margin-left: 20px;
          box-sizing: border-box;
          padding: 20px;
          color: #fff;
          background: url('~@/assets/bottom-right.png');
          background-size: 100% 100%;
          .title {
            width: 70%;
            height: 60px;
            margin: 10px auto;
            text-align: center;
            font-size: 20px;
          }
          .text {
            box-sizing: border-box;
            font-size: 16px;
            padding: 0 15px;
          }
          &:nth-of-type(1) {
            -webkit-animation-delay: 1s;//延迟
            animation-delay: 1s;
            .title {
              -webkit-animation-delay: 1s;//延迟
              animation-delay: 1s;
            }
            .text {
              -webkit-animation-delay: 1s;//延迟
              animation-delay: 1s;
            }
          }
          &:nth-of-type(2) {
            -webkit-animation-delay: 0.75s;//延迟
            animation-delay: 0.75s;
            .title {
              -webkit-animation-delay: 0.75s;//延迟
              animation-delay: 0.75s;
            }
            .text {
              -webkit-animation-delay: 0.75s;//延迟
              animation-delay: 0.75s;
            }
          }
          &:nth-of-type(3) {
            -webkit-animation-delay: 0.5s;//延迟
            animation-delay: 0.5s;
            .title {
              -webkit-animation-delay: 0.5s;//延迟
              animation-delay: 0.5s;
            }
            .text {
              -webkit-animation-delay: 0.5s;//延迟
              animation-delay: 0.5s;
            }
          }
          &:nth-of-type(4) {
            -webkit-animation-delay: 0.25s;//延迟
            animation-delay: 0.25s;
            .title {
              -webkit-animation-delay: 0.25s;//延迟
              animation-delay: 0.25s;
            }
            .text {
              -webkit-animation-delay: 0.25s;//延迟
              animation-delay: 0.25s;
            }
          }
          &:nth-of-type(5) {
            -webkit-animation-delay: 0s;//延迟
            animation-delay: 0s;
            .title {
              -webkit-animation-delay: 0s;//延迟
              animation-delay: 0s;
            }
            .text {
              -webkit-animation-delay: 0s;//延迟
              animation-delay: 0s;
            }
          }
        }
      }
      .supply {
        display: flex;
        justify-content: flex-end;
        padding: 10px 20px 0 0;
        color: #979797;
        font-size: 12px;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
        img {
          width: 150px;
          height: auto;
          // width: 20px;
          // height: auto;
          // margin-right: 5px;
        }
      }
    }
  }
}
</style>
