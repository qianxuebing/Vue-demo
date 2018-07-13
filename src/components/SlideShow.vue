<template>
    <div class="slide-show">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src" >
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src" >
                </transition>
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul class="slide-pages">
            <li>&lt;</li>
            <li v-for="(item.index) in slides">
                <a :class="{on:index===nowIndex}">{{index+1}}</a>
            </li>
            <li>&gt;</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  }
};
</script>
<style lang="less" scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leav-active {
  transition: all 0.5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  width: 900px;
  height: 500px;
  overflow: hidden;
  h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #000;
    opacity: 0.5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
    img {
      width: 100%;
      position: absolute;
      top: 0;
    }
    .slide-pages {
      position: absolute;
      bottom: 10px;
      right: 15px;
      li {
        display: inline-block;
        padding: 0 10px;
        color: #fff;
        cursor: pointer;
        .on {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>


