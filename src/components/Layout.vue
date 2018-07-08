<template>
<div>
  <div class="app-header">
    <div class="wrap">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li>登录</li>
          <li>注册</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    
  </div>
  <div class="app-content">content</div>
  <div class="app-footer">
    <p>© 2016 fishenal MIT</p>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
        width: inherit;
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


.app-footer{
  text-align: center;
  height: 80px;
  line-height: 80px;
  background-color: #e3e4e8;
  width: 100%;
  margin-top: 30px;
}
</style>
