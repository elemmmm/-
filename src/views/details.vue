
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

    <!-- 底部选项卡开始 -->
    <footer-btm></footer-btm>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板
      active: "1",
      // 默认被选定的顶部选项卡
      selectedTab: "index",
      popupVisible: false,
    };
  },
  methods: {
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
        this.$router.push('/poupright')
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
.content {
  background-color:azure;
}
#main {
  width: 100%;
  height: 400px;
  margin-top: 25 px;
}
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
  border-bottom: 1px solid #ddd;
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