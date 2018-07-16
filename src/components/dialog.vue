<template>
    <!-- 模态框 -->
    <div class="dialog-wrap">
        <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
        <div class="dialog-content" v-if="isShow">
            <p class="dialog-close" @click="closeMyself">X</p>
            <slot>empty</slot>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    closeMyself() {
      this.$emit("on-close");
    }
  }
};
</script>
<style lang="less" scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  .dialog-cover {
    background-color: #000;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    overflow: auto;
    background-color: #fff;
    max-height: 50%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    border: 2px solid #464048;
    padding: 2%;
    line-height: 1.6;
    .dialog-close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      text-align: center;
      &:hover {
        color: #4fc08d;
      }
    }
  }
}
</style>


