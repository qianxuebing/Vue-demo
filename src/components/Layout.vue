<template>
<div>
  <div class="app-header">
    <div class="wrap">
      <div class="logo">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png">
        </router-link>       
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li  @click="logDialog">登录</li>
          <li  @click="regDialog">注册</li>
          <li @click="aboutDialog">关于</li>
        </ul>
      </div>
    </div>
    
  </div>
  <div class="app-content">
    <!-- IndexPage -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <div class="app-footer">
    <p>© 2016 fishenal MIT</p>
  </div>
  <!-- 模态框 -->
  <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
    <log-form></log-form>
  </my-dialog>
  <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
    <P>Reg</P>
  </my-dialog>
  <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
    <P>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的是驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反应专车市场的发展态势和面临的问题。报告力求客观、深入、准确的反应中国专车市场的发展情况 ，为政府、企事业单位和社会各界提供决策依据。</P>
  </my-dialog>
</div>
  
</template>

<script>
import myDialog from "./dialog";
import LogForm from "./LogForm";
export default {
  components: {
    myDialog,
    LogForm
  },
  data() {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false
    };
  },
  methods: {
    logDialog() {
      this.isShowLogDialog = true;
    },
    regDialog() {
      this.isShowRegDialog = true;
    },
    aboutDialog() {
      this.isShowAboutDialog = true;
    },
    closeDialog(attr) {
      this[attr] = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
    "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 14px;
  color: #444;
}
.app-header {
  width: 100%;
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    .logo {
      width: 50px;
      img {
        width: 50px;
        vertical-align: middle;
      }
    }
    .nav {
      width: 150px;
      .nav-list {
        display: -webkit-flex;
        display: flex;
        height: 20px;
        line-height: 20px;
        margin-top: 35px;
        li {
          padding: 0 10px;
          border-right: 1px solid #dddddd;
          cursor: pointer;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }
}
.app-content {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #4fc08d;
  }
}
.app-footer {
  text-align: center;
  height: 80px;
  line-height: 80px;
  background-color: #e3e4e8;
  width: 100%;
  margin-top: 30px;
}

// log
.g-form .g-form-line {
  padding: 15px 0;
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
    input {
      width: 200px;
      height: 30px;
      line-height: 30px;
      vertical-align: middle;
      padding: 0 10px;
      border: 1px solid #ccc;
    }
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
