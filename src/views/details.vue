<template>
  <div class="details">
    <!-- 顶部导航开始 -->
    <header-top></header-top>
    <!-- 顶部导航结束-->
    <!-- 下拉选项 开始-->
    <div class="section">
      <!-- 下拉选主显示栏 -->
      <div>肌肉撕裂者</div>
      <div><img src="../assets/more.png" @click="openMore" /></div>
    </div>
    <!-- 下拉选 子选项卡 -->
    <mt-popup v-model="popupVisible" position="top" class="drop-down">
      <div class="top">
        <span>全部品类</span>
        <span class="close" @click="closeMore">×</span>
      </div>
      <div class="down">
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
        <div><a href="#">肌肉撕裂者</a></div>
      </div>
    </mt-popup>
    <!-- 下拉选项 结束-->
    <!-- 内容板块开始 -->
    <div class="content">
      <div>
        <!-- v-for  获取数据  -->
        <div><img src="../assets/01.jpg" /></div>
        <p>腹肌撕裂者初级</p>
        <p>燃烧卡路里/<span>10分钟热身锻炼</span></p>
      </div>
      <div>
        <!-- v-for  获取数据  -->
        <div><img src="../assets/01.jpg" /></div>
        <p>腹肌撕裂者初级</p>
        <p>燃烧卡路里/<span>10分钟热身锻炼</span></p>
      </div>
      <div>
        <!-- v-for  获取数据  -->
        <div><img src="../assets/01.jpg" /></div>
        <p>腹肌撕裂者初级</p>
        <p>燃烧卡路里/<span>10分钟热身锻炼</span></p>
      </div>
      <div>
        <!-- v-for  获取数据  -->
        <div><img src="../assets/01.jpg" /></div>
        <p>腹肌撕裂者初级</p>
        <p>燃烧卡路里/<span>10分钟热身锻炼</span></p>
      </div>
      <div>
        <!-- v-for  获取数据  -->
        <div><img src="../assets/01.jpg" /></div>
        <p>腹肌撕裂者初级</p>
        <p>燃烧卡路里/<span>10分钟热身锻炼</span></p>
      </div>
    </div>
    <!-- 内容板块结束 -->
    <!--popup 子组件 跳转 -->
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
          <div id="main"></div>
        </div>
      </mt-popup>
    </div>
    <!-- 底部选项卡开始 -->
    <footer-btm></footer-btm>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
import echarts from "echarts";
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板
      active: "1",
      // 默认被选定的顶部选项卡
      selectedTab: "index",
      popupVisible: false,
      popupVisible_right: true,
    };
  },
  methods: {
    //关闭右弹窗
    close_right() {
      this.popupVisible_right = false;
    },
    //打开 选项卡
    openMore() {
      this.popupVisible = true;
    },
    // 关闭选项卡
    closeMore() {
      this.popupVisible = false;
    },
  },
  mounted() {
    // 绘制图表
    let section = document.querySelectorAll(".content>div");
    section.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        //单击事件跳转子组件
        this.popupVisible_right = true;
        //console.log("单击事件")
        //this.$router.push('/details_z')
      });
    });
  },
};
</script>
<style>
.mint-header.is-fixed {
  z-index: 3000 !important;
}
.popup_right .title + p{
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
  padding-top:10px
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
  background:url("../assets/images/communitybg-sm.jpg")  center center;
}
.mint-popup-right {
  height: 100%;
}
.mint-popup {
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
}
.mint-popup.mint-popup-top {
  top: 40px;
}
</style>
<style scoped>
.details .content {
  width: 100%;
  padding-top: 70px;
  padding-bottom: 55px;
}
.details .content p {
  top: 10px;
  z-index: 200;
  position: absolute;
  font-size: 20px;
  padding: 25px 0 0 20px;
}
.details .content p:last-child {
  top: 50px;
  font-size: 14px;
  opacity: 0.75;
}
.details .content > div {
  height: 175px;
  border-radius: 18px;
  position: relative;
  color: #e6e4e7;
  margin: 10px;
  overflow: hidden;
}
.details .content img {
  position: absolute;
  width: 100%;
}
/* 下拉主显示框 */
.details .section {
  z-index: 100;
  position: fixed;
  top: 40px;
  width: 100%;
  background: #e4e5e7;
  padding: 0 0 0px 10px;
  border: 1px solid #e4e5e1;
  z-index: 120;
}
.details .section > div {
  height: 28px;
  font-size: 15px;
  line-height: 28px;
  color: #333;
  opacity: 0.8;
}
.details .section > div:last-child {
  position: absolute;
  right: 10px;
  top: 0;
}
.details .section > div:last-child > img {
  height: 100%;
}
/* mint -ui 子下拉选 卡 */
.drop-down .top {
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
}
.drop-down .top > span:first-child {
  padding-left: 15px;
  font-size: 16px;
}
.drop-down .close {
  position: absolute;
  right: 10px;
  top: 0;
  color: #666;
  font-size: 40px;
}
/* 标签样式 */
.drop-down .down {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.drop-down .down > div {
  width: 33.33%;
}
.drop-down a {
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 30px;
  background: #efefe0;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
}
.shortcut > img {
  width: 25%;
}
.main {
  margin-bottom: 55px;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>