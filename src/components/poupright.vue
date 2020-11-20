<template>
  <!--popup 子组件 跳转 -->
  <div class="bg">
    <div id="poupRight">
      <div class="popup_right _poup body">
        <div>
          <div v-if="1" @click="back_detaikls" style="padding-top: 10px">
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
            <li>
              <a href="#" style="color: #e8e8e8; text-decoration: none"
                ><span>介绍</span></a
              >
            </li>
            <li>
              <a href="#ml" style="color: #e8e8e8; text-decoration: none"
                ><span>目录</span></a
              >
            </li>
          </ul>
          <!-- 介绍详情 -->
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
            <div class="tcle999 js">
              <p>增肌目标 <span>线条紧致</span></p>
              <p>重点部位 <span>胸部</span></p>
              <p>
                其他内容
                <span>跑步，器械 &nbsp;(&nbsp;弹力绳&nbsp;)&nbsp;</span>
              </p>
              <p>体侧评分 <span>根据实际运动量结果评测</span></p>
            </div>
            <div style="position: relative">
              <echart />
            </div>
            <div>
              <div>
                <p class="mulu" id="ml">目录</p>
                <div class="selcet">
                  <div @click="active">
                    <p class="select_img">
                      <img src="../assets/select (2).png" :active="emmm" />
                    </p>
                    <p class="tcl333">第一周</p>
                  </div>
                  <table v-if="emmm" class="font14 tcl666 tablecls">
                    <tr>
                      <td class="selectday">
                        <p>01</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>02</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>03</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>04</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="selcet">
                  <div @click="active2">
                    <p class="select_img">
                      <img src="../assets/select (2).png" :active="emmm2" />
                    </p>
                    <p class="tcl333">第二周</p>
                  </div>
                  <table v-if="emmm2" class="font14 tcl666 tablecls">
                    <tr>
                      <td class="selectday">
                        <p>01</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>02</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>03</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>04</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="selcet">
                  <div @click="active3">
                    <p class="select_img">
                      <img src="../assets/select (2).png" :active="emmm3" />
                    </p>
                    <p class="tcl333">第三周</p>
                  </div>
                  <table v-if="emmm3" class="font14 tcl666 tablecls">
                    <tr>
                      <td class="selectday">
                        <p>01</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>02</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>03</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>04</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="selcet">
                  <div @click="active4">
                    <p class="select_img">
                      <img src="../assets/select (2).png" :active="emmm4" />
                    </p>
                    <p class="tcl333">第四周</p>
                  </div>
                  <table v-if="emmm4" class="font14 tcl666 tablecls">
                    <tr>
                      <td class="selectday">
                        <p>01</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>02</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>03</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="selectday">
                        <p>04</p>
                        <span>训练日</span>
                      </td>
                      <td>
                        <p>徒手胸肌训练</p>
                        <span>训练 &nbsp; 20分钟</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "../components/echarts";
import echart from "../components/echart.vue";
import Echarts from "./echarts.vue";
export default {
  data() {
    return {
      popupVisible_right: true,
      emmm: 1,
      emmm2: "",
      emmm3: "",
      emmm4: "",
      aaa: 1,
    };
  },
  mounted() {
    poupRight.setAttribute("active", this.aaa);
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    back_detaikls() {
      let that = this;
      //poupRight.setAttribute("active")
      Promise.resolve(poupRight.setAttribute("active", "")).then(() => {
        setTimeout(() =>{
          this.$router.push("/details");
        }, 200);
      });
      //this.$router.push("/details");
    },
    active4() {
      let img = document.querySelector(".select_img > img");
      if (this.emmm4 == 1) {
        this.emmm4 = "";
      } else {
        this.emmm4 = "1";
      }
    },
    active2() {
      let img = document.querySelector(".select_img > img");
      if (this.emmm2 == 1) {
        this.emmm2 = "";
      } else {
        this.emmm2 = "1";
      }
    },
    active3() {
      let img = document.querySelector(".select_img > img");
      if (this.emmm3 == 1) {
        this.emmm3 = "";
      } else {
        this.emmm3 = "1";
      }
    },
    active() {
      let img = document.querySelector(".select_img > img");
      if (this.emmm == 1) {
        this.emmm = "";
      } else {
        this.emmm = "1";
      }
    },
  },
  components: {
    myEcharts: echarts,
    echart: echart,
  },
};
</script>
<style>
.v-modal {
  height: 0 !important;
}
#poupRight {
  position: relative;
  left: 100%;
  transform: translateX(-50%);
  transition: 0.2s ease-out;
}
#poupRight[active="1"] {
  transform: translateX(-100%);
  transition: 0.2s ease-out;
}
</style>
<style scoped>
.bg {
  background: #444;
}
.js {
  padding: 10px 0 10px 0;
  margin-left: 20px;
  font-size: 15px;
}
.js > p {
  padding: 5px 0 5px 0;
}
.js > p > span {
  margin-left: 20px;
  color: #e8e8e8;
}
.tcle999 {
  color: #999;
}
.selectday {
  font-size: 16px;
}
.tac {
  text-align: center;
}
.tablecls {
  width: 100%;
}
.tablecls td {
  padding: 5px 0 5px 0;
}
.tablecls td > p {
  padding-left: 20px;
}
.tcl666 {
  color: #666;
}
.font14 {
  font-size: 14px;
}
.tcl333 {
  color: #333;
}
.popup_right .selcet > p {
  font-size: 14px;
  color: #666;
}
.mulu {
  font-size: 16px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: #e4e6e7;
}
.select_img {
  width: 25px;
  height: 25px;
  float: right;
}
.select_img > img[active] {
  transform: rotate(0deg);
  transition: 0.2s;
}
.select_img > img[active="1"] {
  transform: rotate(-180deg);
  transition: 0.2s;
}
.select_img > img {
  width: 100%;
}
.selcet {
  border: 1px solid #666;
  background: #e4e4e4;
  padding: 10px;
}
.body {
  height: 800px;
  width: 100%;
  background: #666 url("../assets/images/communitybg-sm.jpg") center center;
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
  border-bottom: 2px solid #00a1ed;
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
.popup_right ._poup {
  padding-top: 40px;
  padding-left: 20px;
  z-index: 4000 !important;
  background: url("../assets/images/communitybg-sm.jpg") center center;
  background-size: cover;
}
._poup {
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