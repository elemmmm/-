<template>
  <div class="container">
    <!-- 顶部导航开始 -->
    <mt-header title="注册">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
      <router-link slot="left" to="/"><mt-button icon='back'></mt-button></router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div class="my_mt_field">
      <!-- 用户名开始 -->
     
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
      >
      </mt-field>
     
      <!-- 用户名结束 -->
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @blur.native.capture="checkPassword"
      >
      </mt-field>
      <mt-field
        label="确认密码"
        placeholder="请再次输入密码"
        type="password"
        v-model="conpassword"
        @blur.native.capture="checkConpassword">
      </mt-field>
      <!-- <mt-field></mt-field> -->
      <!-- 性别开始 -->
     <mt-radio
     title="性别" v-model="sex" :options="options"></mt-radio>
      <!-- 性别结束 -->
      <!-- 身高体重开始 -->
      <mt-field label="身高" placeholder="您的身高:cm" type="text" v-model="height"></mt-field>
      <mt-field label="体重" placeholder="您的身高:kg" type="text" v-model="weight"></mt-field>
      <!-- 身高体重结束 -->
      <!-- 生日开始 -->
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="userdate"></mt-field>
<!-- 生日结束 -->
      <mt-button type="primary" size="large" @click="handle" to>免费注册</mt-button>
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
mt-field{
  width: 75%;
}
</style>
<script>
export default {
  data() {
    return {
      //用户名、密码及确认密码的变量
      username: "",
      password: "",
      conpassword: "",
      //用户名、密码及确认密码的状态 
      usernameState:'',
      // 性别
      sex:'1',
      // 身高体重
      height:'',
      weight:'',
      // 生日
       userdate: '',
    };
  },
  created(){
    this.options=[ {
        label: '男',
        value: '1'
      },
      {
        label: '女',
        value: '0'
      }]
  },
  methods: {
    //单击免费注册按钮时校验表单
    handle(){
      //会引发短路现象
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //现在要发送相关的用户名、密码到WEB服务器
        // 注册成功之后弹出toast
        this.$toast({
           message: "注册成功",
          position: "top",
          duration: 2000,
          iconClass: 'icon icon-success'
        })
      }
    },
    //检测用户名
    checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        // 修改用户名的状态
        this.usernameState = 'success';
        return true;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message: "用户名格式或内容错误",
          position: "top",
          duration: 3000,
        });
        this.usernameState = 'error';        
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
    },
    //检测两次密码是否一致
    checkConpassword() {
      //校验两次密码是否一致
      let password = this.password;
      let conpassword = this.conpassword;
      if (password == conpassword) {
        return true;
      } else {
        this.$toast({
          message: "两次密码不一致",
          position: "middle",
          duration: 4000,
        });
        return false;
      }
    },
  },
};
</script>
<style>
/* 返回 */
.mint-header .mint-button {
  margin-top: 0px !important; 
}
  .my_mt_field input{
  /* border: 1px solid #666666; */
  padding: 6px 0;
  background: #f9f9f9;
  font: 14px 'SF UI';
}
.my_mt_field input:focus{
  box-shadow: 0 0 3px #5fc48d;
}
.mint-radiolist-title {
    font-size: 16px !important;
    border-top: 1px solid #dbdbdb ;
    margin: 5px !important;
    padding: 12px 0px 12px 5px;
    display: block;
    color:#666666 !important;
}
/* 免费注册按钮 */
.mint-button{
  margin-top:50px;
}
</style>