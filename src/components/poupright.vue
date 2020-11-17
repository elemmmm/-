<template>
  <!--popup 子组件 跳转 -->
  <div>
    <div class="body"></div>
    <div class="popup_right">
      <mt-popup position="right" v-model="popupVisible_right">
        <div>
          <div v-if="1" @click="close_right">
            <img src="../assets/back(3).png" class="icon_image" />
          </div>
          <div v-else>
            <img src="../assets/back (4).png" class="icon_image" />
          </div>
        </div>
        <div>
          <p class="title">腹肌撕裂初级</p>
          <p>4周.每周4天.每天30分钟</p>
          <!-- 计划分类 -->
          <ul class="jieshao">
            <li><span>介绍</span></li>
            <li><span>目录</span></li>
          </ul>
          <!-- 介绍详情 -->
          <my-echarts />
          <div class="_section">
            <ul class="_section top">
              <li>
                计划时常
                <p>7<span>周</span></p>
              </li>
              <li>
                累计训练天数
                <p>45<span>天</span></p>
              </li>
              <li>
                当日训练时常
                <p>6<span>时</span></p>
              </li>
            </ul>
            <div>
              <p>增肌目标 <span>线条紧致</span></p>
              <p>重点部位 <span>胸部</span></p>
              <p>
                其他内容
                <span>跑步，器械 &nbsp;(&nbsp;弹力绳&nbsp;)&nbsp;</span>
              </p>
              <p>体侧评分 <span>根据实际运动量结果评测</span></p>
            </div>
          </div>
        </div>
      </mt-popup>
    </div>
  </div>
</template>
<script>
import echarts from "../components/echarts";
import Echarts from "../components/echarts.vue";
export default {
  data() {
    return {
      popupVisible_right: true,
    };
  },
  methods: {
    close_right() {
      this.popupVisible_right = false;
      setTimeout(() => {
        this.$router.push("/details");
      }, 150);
    },
  },
  components: {
    myEcharts: echarts,
  },
};
</script>
<style>
.v-modal{
    height:0 !important;
}
.popup_right .mint-popup {
  position: absolute;
}
</style>
<style scoped>
.body {
  height: 800px;
  width:100%;
  background: url("../assets/images/communitybg-sm.jpg") center center ;
}
.popup_right .title + p {
  font-size: 14px;
  color: #e4e4e4;
  padding-left: 60px;
  padding-bottom: 10px;
  font-style: italic;
}
.popup_right .title {
  font-size: 22px;
  color: #fff;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
}
.popup_right .jieshao span:hover {
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}
.popup_right .jieshao > li {
  width: 50%;
  text-align: center;
  color: #e8e8e8;
  border-bottom: 1px solid #efefef;
  padding: 10px 0 10px 0;
}
.popup_right ul {
  display: flex;
}
.popup_right .icon_image {
  width: 25px;
  padding-left: 10px;
}
.popup_right .mint-popup-right {
  padding-top: 40px;
  padding-left: 20px;
  z-index: 4000 !important;
  background: url("../assets/images/communitybg-sm.jpg") center center;
  background-size:cover;
}
.mint-popup-right {
  height: auto;
}
.popup_right ._section > ul p > span {
  font-size: 14px;
  color: #999;
  margin-left: 5px;
}
.popup_right ._section > ul p {
  margin-top: 10px;
  font-size: 20px;
  color: #00ff00;
}
.popup_right ._section.top {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 15px;
}
.popup_right ._section {
  font-size: 16px;
  color: rgb(105, 180, 95);
}
</style>