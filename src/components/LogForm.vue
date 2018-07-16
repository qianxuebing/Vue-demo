<template>
    <div class="log-form">
        <div class="g-form">
            <div class="g-form-line">
                 <span class="g-form-label">用户名:</span>
                 <div class="g-form-input">
                     <input type="text" v-bind="usernameModel" placeholder="请输入用户名">
                 </div>
                 <span class="g-form-error"></span>
            </div>
             <div class="g-form-line">
                 <span class="g-form-label">密码:</span>
                 <div class="g-form-input">
                     <input type="password" v-bind="passwordModel" placeholder="请输入密码">
                 </div>
                 <span class="g-form-error">{{errorText}}</span>
            </div>
             <div class="g-form-line">
                 <div class="g-form-btn">
                     <a class="button">登录</a>
                 </div>
            </div>
            <p></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      usernameModel: "",
      passwordModel: "",
      errorText: ""
    };
  },
  computed: {
    userErrors() {
      let errorText, status;
      if (!/@/g.test(this.usernameModel)) {
        status = false;
        errorText = "不包含@";
      } else {
        status = true;
        errorText = "";
      }
      if (!this.userFlag) {
        errorText = "";
        this.userFlag = true;
      }
      return {
        status,
        errorText
      };
    },
    passwordErrors() {
      let errorText, status;
      if (!/^\w{1,6}$/g.test(passwordModel)) {
        status = false;
        errorText = "密码不是1-6位";
      } else {
        status = true;
        errorText = "";
      }
      if (!this.passwordFlag) {
        errorText = "";
        this.passwordFlag = true;
      }
      return {
        status,
        errorText
      };
    }
  },
  methods: {
    onLogin() {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = "部分选项未通过";
      } else {
        this.errorText = "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>

