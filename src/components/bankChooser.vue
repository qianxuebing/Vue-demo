<template>
    <div class="chooser-component">
            <ul class="chooser-list">
                <li v-for="(item,index) in banks"
                @click='chooseSelection(index)'
                 :key="index"
                 :title="item.label"
                 :class="[item.name,{active:index === nowIndex}]"></li>
            </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      nowIndex: 0,
      banks: [
        {
          id: 201,
          name: "zhaoshang",
          label: "招商银行"
        },
        {
          id: 301,
          name: "jianshe",
          label: "中国建设银行"
        },
        {
          id: 601,
          name: "pufa",
          label: "浦发银行"
        },
        {
          id: 1101,
          name: "jiaotong",
          label: "交通银行"
        },
        {
          id: 101,
          name: "gongshang",
          label: "中国工商银行"
        },
        {
          id: 401,
          name: "nongye",
          label: "中国农业银行"
        },
        {
          id: 1201,
          name: "zhongguo",
          label: "中国银行"
        },
        {
          id: 501,
          name: "zhongxin",
          label: "中信银行"
        }
      ]
    };
  },
  methods:{
    chooseSelection(index){
      this.nowIndex = index;
      this.$emit('on-change',this.banks[index]);
    }
  }
};
</script>
<style lang="less" scoped>
.chooser-component {
  position: relative;
  display: inline-block;
  .chooser-list{
    li {
      display: inline-block;
      width: 117px;
      height: 32px;
      background: url(../assets/banks/banks.png) no-repeat;
      margin: 5px;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
    li.active{
      border: 1px solid #4fc08d;
    }
  } 

}
.zhaoshang {
    background-position: -2160px 0!important;
}
.jianshe {
    background-position: -720px 0!important;
}
.pufa {
    background-position: -1800px 0!important;
}
.jiaotong {
    background-position: -3120px 0!important;
}
.minsheng {
    background-position: -2760px 0!important;
}
.pingan {
    background-position: -2400px 0!important;
}
.beijing {
    background-position: -960px 0!important;
}
.xingye {
    background-position: 0 0!important;
}
.shanghai {
    background-position: -1560px 0!important;
}
.guangfa {
    background-position: -840px 0!important;
}
.gongshang {
    background-position: -2640px 0!important;
}
.nongye {
    background-position: -1680px 0!important;
}
.guangda {
    background-position: -2280px 0!important;
}
.zhongguo {
    background-position: -2520px 0!important;
}
.zhongxin {
    background-position: -480px 0!important;
}
.chuxu {
    background-position: -120px 0!important;
}
.bnongshang {
    background-position: -1440px 0!important;
}
.huaxia {
    background-position: -2040px 0!important;
}
.snongshang {
    background-position: -2880px 0!important;
}

.baifubao {
    background-position: -1320px 0!important;
}
</style>


