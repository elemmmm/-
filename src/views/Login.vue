<template>
  <div class="login">
   
    <!-- 顶部导航开始 -->
    <mt-header title="Fitness For You">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link slot="right" to="/register">注册</router-link>
    </mt-header>
    <!-- logo开始 -->
     <div>
      <img src="../assets/images/green.png" alt="">
    </div>
    <!-- logo结束 -->
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div class="my_mt_field">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        @blur.native.capture="checkUsername"
      >
      </mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @blur.native.capture="checkPassword"
      >
      </mt-field>
      <mt-button type="primary" size="large" @click="handle">登录</mt-button>
     <!-- 其他登录方式开始-->
     <div class="my_ways">
       <span class="iconfont icon-weixin1"></span>
       <span class="iconfont icon-qq"></span>
       <span class="iconfont icon-weibo"></span>
       <!-- <img src="" alt=""> -->
     </div>
     <!-- 其他登录方式结束 -->
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style>
/* 输入框 */
.my_mt_field input{
  /* border: 1px solid #666666; */
  padding: 6px 0;
  background: #f9f9f9;
  font: 14px 'SF UI';
}
.my_mt_field a:nth-child(2) .mint-cell-wrapper{
  border-bottom: 1px solid #dbdbdb ;
}
.my_mt_field input:focus{
  box-shadow: 0 0 3px #53b981;
}
/* 登录按钮 */
  .login img{
    width: 25%;
    margin:30px 0px 30px 125px;
  }
  /* 其他登录方式 */
.my_ways span{
  display: inline-block;
  margin-top: 200px;
  margin-left: 20px;
  font-size: 30px;
  color:#53b981
}
.my_ways span:first-child{
  margin-left: 110px;
}
</style>
<script>
export default {
  data() {
    return {
      //用户名、密码的变量
      username: "",
      password: ""
    };
  },
  methods: {
    //单击免费注册按钮时校验表单
    handle(){
      //会引发短路现象
      if(this.checkUsername() && this.checkPassword()){
        //现在要发送相关的用户名、密码到WEB服务器
      }
    },
    //检测用户名
    checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        return true;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message: "用户名格式或内容错误",
          position: "top",
          duration: 5000,
        });
        //终止函数的执行
        return false;
      }
    },
    //检测密码
    checkPassword() {
      let password = this.password;
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if (passwordReg.test(password)) {
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 5000,
        });
        return false;
      }
    }
  },
};
</script>