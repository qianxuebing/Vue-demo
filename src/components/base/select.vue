<template>
    <div class="selection-component">
        <div class="selection-show" @click="toggleDrop">
            <span>{{selections[nowIndex].label}}</span>
            <div class="arrow"></div>
        </div>
        <div class="selection-list" v-if="isDrop">
            <ul>
                <li v-for="(item,index) in selections" @click="chooseSelection(index)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [
        {
          label: "test",
          value: 0
        }
      ]
    }
  },
  data() {
    return {
      isDrop: false,
      nowIndex: 0
    };
  },
  methods: {
    toggleDrop() {
      this.isDrop = !this.isDrop;
    },
    chooseSelection(index) {
      this.nowIndex = index;
      this.isDrop = false;
      this.$emit("on-change", this.selections[this.nowIndex]);
    }
  }
};
</script>
<style lang="less" scoped>
@border: 1px solid #e3e3e3;
.selection-component {
  position: relative;
  display: inline-block;
  .selection-show {
    border: @border;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background-color: #fff;
    .arrow {
      display: inline-block;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #e3e3e3;
      width: 0;
      height: 0;
      margin-top: -1px;
      margin-left: 6px;
      margin-right: -14px;
      vertical-align: middle;
    }
  }
  .selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: @border;
    border-bottom: @border;
    z-index: 5;
    li {
      padding: 5px 15px 5px 10px;
      border-left: @border;
      border-right: @border;
      cursor: pointer;
      background: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        background-color: #e3e3e3;
      }
    }
  }
}
</style>


