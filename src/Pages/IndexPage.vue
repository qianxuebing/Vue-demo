<template>
    <div class="index-wrap">
      <div class="index-left">
          <div class="index-left-block">
            <h2>全部产品</h2>
            <template v-for="product in productList">
              <h3>{{product.title}}</h3>
              <ul>
                <li v-for="(item,index) in product.list" :key="index">
                  <a :href="item.url">{{item.name}}</a>
                  <span v-if="item.hot" class="hot-tag">HOT</span>
                </li>
              </ul>
              <div v-if="!product.last" class="hr"></div>
            </template>
          </div>
          <div class="index-left-block lastest-news">
            <h2>最新消息</h2>
            <ul>
              <li v-for="(item,index) in newsList" :key="index">
                <a :href="item.url" class="new-item">{{item.title}}</a>
              </li>
            </ul>
          </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" :inv="invTime"></slide-show>
        <div class="index-board-list">
          <div class="index-board-item" v-for="(item,index) in boardList" 
          :class="[{'line-last':index%2!==0},'index-board-'+item.id]">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <!-- <a href="javascript:;" class="button"> 立即购买</a>                -->
                <router-link class="button" :to="{path:'detail/'+item.toKey}">立即购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import SlideShow from "../components/SlideShow";
export default {
  components: {
    SlideShow
  },

  data() {
    return {
      invTime: 2000,
      slides: [
        {
          src: require("../assets/slideShow/pic1.jpg"),
          title: "xxx1",
          href: "detail/analysis"
        },
        {
          src: require("../assets/slideShow/pic2.jpg"),
          title: "xxx2",
          href: "detail/count"
        },
        {
          src: require("../assets/slideShow/pic3.jpg"),
          title: "xxx3",
          href: "detail/publish"
        },
        {
          src: require("../assets/slideShow/pic4.jpg"),
          title: "xxx4",
          href: "detail/forecast"
        }
      ],
      boardList: [
        {
          title: "开放产品",
          description: "开放产品是一款开放产品",
          id: "car",
          toKey: "analysis",
          saleout: false
        },
        {
          title: "品牌营销",
          description: "品牌营销帮助你的产品更好地找到定位",
          id: "earth",
          toKey: "count",
          saleout: false
        },
        {
          title: "使命必达",
          description: "使命必达快速迭代永远保持最前端的速度",
          id: "loud",
          toKey: "forecast",
          saleout: true
        },
        {
          title: "勇攀高峰",
          description: "帮你勇闯高峰，到达事业的顶峰",
          id: "hill",
          toKey: "publish",
          saleout: false
        }
      ],
      newsList: [
        {
          title: "数据统计",
          url: "http://starcraft.com"
        },
        {
          title: "数据预测",
          url: "http://warcraft.com"
        },
        {
          title: "流量分析",
          url: "http://overwatch.com"
        },
        {
          title: "广告发布",
          url: "http://hearstone.com"
        }
      ],
      productList: {
        pc: {
          title: "PC产品",
          list: [
            {
              name: "数据统计",
              url: "http://starcraft.com"
            },
            {
              name: "数据预测",
              url: "http://warcraft.com"
            },
            {
              name: "流量分析",
              url: "http://overwatch.com",
              hot: true
            },
            {
              name: "广告发布",
              url: "http://hearstone.com"
            }
          ]
        },
        app: {
          title: "手机应用类",
          last: true,
          list: [
            {
              name: "91助手",
              url: "http://weixin.com"
            },
            {
              name: "产品助手",
              url: "http://twitter.com",
              hot: true
            },
            {
              name: "智能地图",
              url: "http://maps.com"
            },
            {
              name: "团队语音",
              url: "http://phone.com"
            }
          ]
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  .index-left {
    width: 300px;
    text-align: left;
    .index-left-block {
      margin: 15px;
      background-color: #fff;
      box-shadow: 0 0 1px #ddd;
      &.lastest-news {
        min-height: 512px;
      }
      h2 {
        padding: 10px 15px;
        background: #4fc08d;
        color: #fff;
        margin-bottom: 20px;
      }
      h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
      }
      ul {
        padding: 10px 15px;
        li {
          padding: 5px;
          .hot-tag {
            background: red;
            color: #fff;
          }
          .new-item {
            display: inline-block;
            width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .hr {
        margin-bottom: 20px;
        border-bottom: 2px solid #ddd;
      }
    }
  }
  .index-right {
    flex: 1;
    .line-last {
      margin-right: 0 !important;
    }
    .index-board-list {
      overflow: hidden;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      .index-board-item {
        width: 400px;
        background-color: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        .index-board-item-inner {
          padding-left: 120px;
          min-height: 125px;
          .index-board-button {
            margin-top: 20px;
          }
        }
        h2 {
          font-size: 18px;
          color: #000;
          font-weight: bold;
          margin-bottom: 15px;
        }
      }
    }
  }
}
.index-board-car .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
</style>


