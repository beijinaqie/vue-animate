<template>
  <div id="detail">
    <div class="title-wrap animated rubberBand">
      <div class="in-title">{{ detail && detail.en }}</div>
      <div class="out-title">{{ detail && detail.cn }}</div>
    </div>
    <div class="content-wrap">
      <div :class="`content animated ${item.animated}`" v-for="(item, index) in detail.content" :key="index">
        <div class="top">
          <img class="img animated fadeIn" :src="item.bg" alt="">
          <!-- <div class="search-modal">
            <div class="search-wrap">
              <i class="iconfont icon-search"></i>
              <router-link tag="span" :to="`/answer?id=${$route.query.id}`" class="text">了解详情</router-link>
            </div>
          </div> -->
        </div>
        <div class="middle">
          <div class="title animated fadeInDown">{{ item.title }}</div>
          <div class="rich-text animated fadeInUp" v-html="item.text"></div>
        </div>
        <div class="bottom animated fadeInUp">
          <span class="more">MORE >></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailList from '@/apis/industry.js'
export default {
  name: 'detail',
  data () {
    return {

    }
  },
  computed: {
    inTitle () {
      return this.$route.query.type === 'industry' ? 'Industry Solutions' : 'Company Solutions'
    },
    outTitle () {
      return this.$route.query.type === 'industry' ? '行业解决方案' : '企业解决方案'
    },
    detail () {
      return detailList[this.$route.query.id]
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  width: 100%;
  height: 100%;
  background: #fff url('~@/assets/detail-bg.png') no-repeat center;
  background-size: 100% 100%;
  .title-wrap {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    position: relative;
    .in-title {
      font-size: 36px;
      color: #FDFDFD;
      opacity: 0.4;
      font-weight: bold;
    }
    .out-title {
      font-size: 24px;
      color: #FDFDFD;
      position: absolute;
      bottom: 10px;
      letter-spacing: 8px;
      font-weight: bold;
    }
  }
  .content-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 70px;
    .content {
      width: 560px;
      height: 700px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #DBDBDB;
      box-shadow:0px 19px 10px 0px rgba(0, 0, 0, 0.1);
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .img {
          width: 100%;
          height: 265px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          -webkit-animation-delay: 1s;//延迟
          animation-delay: 1s;
        }
        .search-modal {
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0;
          background-color: #020C74;
          display: flex;
          justify-content: center;
          align-items: center;
          .search-wrap {
            display: inline-block;
            box-sizing: border-box;
            padding: 0 10px;
            border: 1px solid #fff;
            border-radius: 10px;
            cursor: pointer;
            user-select: none;
            .iconfont {
              font-size: 14px;
              font-weight: bold;
              color: #fff;
              padding-right: 5px;
            }
            .text {
              font-size: 14px;
              color: #fff;
            }
          }
        }
        &:hover {
          .search-modal {
            opacity: 0.46;
          }
        }
      }
      .middle {
        height: 300px;
        .title {
          width: 70%;
          margin: 20px auto 0;
          font-size: 20px;
          color: #0258FF;
          text-align: center;
          -webkit-animation-delay: 0.5s;//延迟
          animation-delay: 0.5s;
        }
        .rich-text {
          padding-top: 50px;
          width: 90%;
          margin: 0 auto;
          font-size: 14px;
          color: #515151;
          font-family: Alibaba PuHuiTi;
          -webkit-animation-delay: 0.5s;//延迟
          animation-delay: 0.5s;
          & > p {
            line-height: 24px;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: flex-end;
        margin: 70px 0 15px;
        padding-right: 5%;
        font-size: 16px;
        -webkit-animation-delay: 0.5s;//延迟
        animation-delay: 0.5s;
        span {
          color: #1C63ED;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
