<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="Fitness" class="header">
      <div slot="right" class="shortcut">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="1">主页</mt-tab-item>
      <mt-tab-item id="2">动态</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
         <mt-tab-container-item id="1">
           <div class="swipe">
            <mt-swipe :auto="5000" :show-indicators="false">
              <mt-swipe-item><img src="../assets/1a.jpg"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/2a.jpg"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/3a.jpg"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/4a.jpg"></mt-swipe-item>
            </mt-swipe>
          </div>
          <section>
            <div class="paragraph">
              <div class="para-title">量体裁衣 &amp; 多种健身训练供你选择</div>
              <div class="para-text">训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。</div>
            </div>
          </section>
          <section class="container">
            <div class="training-wrap">
              <div class="training-wrap-inner">
                <div class="training-text">
                  <div class="text-title" style="color:#fff;">真人同步训练记录训练进度</div>
                  <div class="text-cont">全程语音督导，自动同步进度，不需要背动作、记组数，跟着 Fitness 马上练起来。</div>
                  <a href="#"
                    class="training-btn"><span>查看课程</span></a>
                </div>

                <div class="body-pic-wrap">
                  <img src="@/assets/images/body.png"
                      class="body-pic">
                  <img src="@/assets/images/bodycircle.png"
                      class="circle-pic">
                  <img src="@/assets/images/heart.png"
                      class="animate-heart">
                </div>

                <img src="@/assets/images/traindata.png"
                    class="data-pic">
                <img src="@/assets/images/trainchart.png"
                    class="chart-pic">
                <img src="@/assets/images/trainpic.png"
                    class="cal-pic">
              </div>
            </div>
          </section>
          <section>
            <div class="paragraph">
              <div class="para-title">精准跑步记录 &amp; 让你的跑步更加系统</div>
              <div class="para-text">精准跑步路线记录，跑前热身与跑后拉伸，Fitness 提供更加完善和专业的跑步指导。</div>
            </div>
          </section>
          <section style="height:180px;">
          </section>
          <section>
            <div class="run-wrap">
              <div class="run-wrap-inner">
                <div class="run-track-wrap">
                  <img src="@/assets/images/runtrack.png">
                  <div class="animate-circle"></div>
                </div>
                <div class="run-config-wrap">
                  <div class="run-config-pace">
                    <div class="config-title"><i class="keep-icon-speed"></i><span>配速</span></div>
                    <div class="config-cont"><span>公里</span><span>配速</span><span class="right">用时</span></div>
                    <div class="speed-bar speed-bar1">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar2">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar3">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar4">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar5">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar6">
                      <div class="speed-bar-fill"></div>
                    </div>
                    <div class="speed-bar speed-bar7">
                      <div class="speed-bar-fill"></div>
                    </div>
                  </div>
                  <div class="run-config-frequency">
                    <div class="config-title">
                      <div>
                        <i class="keep-icon-frequency"></i>
                        <span>步频</span>
                        <span class="right">（步/分钟）</span>
                      </div>
                      <div class="chart-title">平均步频<span>146</span></div>
                    </div>
                    <div id="freq-img"><img src="@/assets/images/runcover.png"></div>
                  </div>
                </div>

                <div class="run-text-wrap">
                  <div class="run-text-title">用步伐丈量世界</div>
                  <div class="run-text-cont">在 Fitness 记录你的跑步轨迹，制定有氧课程表，助你更快达成你的跑步目标</div>
                  <a href="#"
                    class="run-btn"><span>跑步轨迹</span><i></i></a>
                </div>

                <div class="run-data">
                  <div class="data-block">
                    <div class="data-title"><span class="text-line"></span><span>累计跑步</span></div>
                    <div class="data-val">8415.57</div>
                    <div class="data-unit">万公里</div>
                  </div>
                  <div class="data-block-right">
                    <div class="data-block2">
                      <div class="data-title"><i class="icon-speed"></i></div>
                      <div class="data-val">9.27</div>
                      <div class="data-unit">分/公里</div>
                    </div>
                    <div class="data-block2">
                      <div class="data-title"><i class="icon-duration"></i></div>
                      <div class="data-val">7.80</div>
                      <div class="data-unit">亿分钟</div>
                    </div>
                    <div class="data-block2">
                      <div class="data-title"><i class="icon-cal"></i></div>
                      <div class="data-val">62.05</div>
                      <div class="data-unit">亿千卡</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="question">
            <div class="author-info">
                <img src="../assets/img2.jpg" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">春华秋实</div>
                    <div class="header-datetime">
                   2020年10月04日20:00
                    </div>
                </div>
                
            </div>
            <div class="question-content">
                <div class="rich-content">
                  如果很特殊你感觉自己不胖不瘦，那是选择增肌还是减脂?我比较推荐先减脂!
                  1.反馈强
                  体脂下来了，你的腹肌痕迹就会出来。你就会对后面肌群（腿、胸、臂）的训练更加有信心!别问为啥先练腹肌，问就是女生喜欢!
                  2.习惯养成
                  你可以慢慢适应强度的增加。减脂运动可以更好帮你形成训练习惯!
                  3.便捷性
                  减脂运动大多不需要器械!你可以随时随地，通过跑步、自重训练来减脂! 
                </div>
            </div>
        </div>
         <div class="question">
            <div class="author-info">
                <img src="../assets/img1.jpg" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">无敌小树懒</div>
                    <div class="header-datetime">
                   2020年10月02日21:00
                    </div>
                </div>
                
            </div>
            <div class="question-content">
                <div class="rich-content">
                  关于如何消灭小肚子
很多女生四肢都很瘦，唯独肚子很多肉肉，特别是长胖的时候，首先是肚子先长起来。
可能大家都有会这个疑惑，肚子为什么这么难瘦,背心以个人经验给大家分享下怎么消灭小肚子
1.减脂,2.腹部训练,3.饮食,4.体态,5.多自我激励。其实不瞒大家说，我的肚子之前真的很多脂肪，真的花了很久很久才慢慢刷下来的，现在其实还是有的，所以大家一定要给点时间自己！
祝大家可可爱爱，没有肚子！               
                </div>
            </div>
        </div>
            <div class="question">
            <div class="author-info">
                <img src="../assets/img3.jpg" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">不说话的月亮</div>
                    <div class="header-datetime">
                   2020年10月03日20:00
                    </div>
                </div>
                
            </div>
            <div class="question-content">
                <div class="rich-content">
                  参加训练计划后，我再也不用每天不停地训练着同样的课程。它会让我先填体重，然后看一下我应该减脂还是塑型。填好体重后。填目标，还可以选择一周训练多少天！是否需要机械，是否加入跑步。然后帮我制定计划。并且会显示达到目标需要多长时间。参加Fitness里的训练计划后，真的是事半功倍。如果你也跟我一样，不知道该如何训练或是拼命训练都达不到效果的话。那就参加Fitness的训练计划吧。它能让你突破自我！！            
                </div>
            </div>
        </div>
        <div class="question">
            <div class="author-info">
                <img src="../assets/img4.jpg" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">萌酷的girl</div>
                    <div class="header-datetime">
                   2020年10月05日20:00
                    </div>
                </div>
                
            </div>
            <div class="question-content">
                <div class="rich-content">
                  🧸腹肌怎么出现？以下步骤
                  体脂率必须低 （有赘肉请你多做有氧运动：跳绳、跑步等；没有太多赘肉：多做hiit高效心率提升运动keep里有。）
                  腹肌训练，要坚持没什么说的，别想着一周可以出。[汗]
                  [肌肉]一个月不行两个月～两个月不行半年～
                  每个人体质不一样，腹肌线条也不一样。要接受自己的状态
                  努力了没有也没有遗憾
                  [鸡腿][鸡腿][鸡腿]加油哦伙伴们～  
                </div>
            </div>
        </div>
        </mt-tab-container-item>
       
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="index">
        首页
        <img
          src="../assets/index_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'index'"
        />
        <img
          src="../assets/index_disabled.png"
          alt=""
          slot="icon"
          v-else
        />
      </mt-tab-item>
      <mt-tab-item id="play">
        运动
        <img
          src="../assets/play_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'play'"
        />
        <img src="../assets/play_disabled.png" alt="" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img
          src="../assets/me_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'me'"
        />
        <img src="../assets/me_disabled.png" alt="" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.swipe{
  height:217px;
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
  text-decoration: none;
}
.main {
  margin-bottom: 55px;
}
.paragraph {
  padding: 40px 0;
  text-align: center;
}
.para-title {
    font-size: 18px;
    color: #584f60;
    font-weight: bold;
}

.para-text {
    font-size: 14px;
    color: #666;
    margin: 19px 48px 0;
}
.run-wrap {
  width: 100%;
  height: 763.19px;
  position: relative;
  background-color: #3d3744;
  background-image: url(../assets/images/runbg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.run-wrap-inner {
  position: relative;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.run-config-wrap {
  width: 360px;
  position: absolute;
  top: -182.4px;
  right: 50%;
  margin-right: -180px;
}
.run-config-pace {
    height: 319.2px;
    padding: 22px 18px 20px;
    background-color: #5e5566;
    border-radius: 5px;
    font-size: 12px;
}
.config-title {
      color: #dddddd;
}
.config-cont {
      color: #827a89;
      margin: 24px 0 12px;
}

.speed-bar {
      height: 21.6px;
      border-radius: 21.6px;
      margin-top: 9.6px;
      background-color: rgba(36, 199, 137, 0.3);
}
.speed-bar1 {
      width: 54.6%;
}
.speed-bar2 {
      width: 42%;
}
.speed-bar3 {
      width: 45.4%;
}
.speed-bar4 {
      width: 100%;
}
.speed-bar5 {
      width: 48.9%;
}
.speed-bar6 {
      width: 45.4%;
}
.speed-bar7 {
      width: 50.6%;
}

.run-config-frequency {
    position: relative;
    width: 100%;
    height: 319.19px;
    margin-top: 10px;
}

.config-cont .right {
        float: right;
}
.config-title {
      width: 100%;
      padding: 0 18px;
      position: absolute;
      top: 22px;
      left: 0;
}
.config-title div {
      font-size: 12px;
      color: #ddd;
}
.config-title div.right {
          float: right;
          color: #827a89;
}

.chart-title {
        text-align: center;
        margin-top: 20px;
}
.chart-title  span {
          margin-left: 5px;
          color: #24c789;
}

#freq-img img{
        width: 100%;
        height: 100%;
}

.run-text-wrap {
  width: 100%;
  position: absolute;
  bottom: 60px;
  text-align: center;
}
  .run-text-title {
    color: #fff;
    font-size: 18px;
  }
  .run-text-cont {
    font-size: 12px;
    color: #999999;
    margin: 21.6px 39.6px 33.6px;
  }
  .run-btn {
    display: inline-block;
    color: #fefefe;
    background-color: #24c789;
    width: 138px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    border-radius: 42px;
    font-size: 14px;
    box-shadow: 0 4px 16px 0 rgba(32, 178, 122, 0.27);
    text-decoration: none;
  }

.run-data,
.run-track-wrap,
.data-block-right {
  display: none;
}

.container {
  background: #3d3744;
}

.body-pic{
  margin-left: 85px;
}
.training-wrap {
  max-width: 1440px;
  margin: 0 auto;
}

.training-text {
  padding-top: 70px;
  text-align: center;
}
.training-text  .text-title {
    font-size: 18px;
  }

  .text-cont {
    font-size: 12px;
    margin: 18px 33px 28px;
    color: #999;
  }
  .training-btn {
    cursor: pointer;
    display: inline-block;
    width: 138px;
    height: 40px;
    color: #fff;
    text-decoration: none;
    line-height: 40px;
    margin-bottom: 60px;
    text-align: center;
    border: 1px solid #8e8893;
    border-radius: 40px;
    font-size: 14px;
  }

.header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.author-info{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.author-info-avatar{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    margin-left:15px;
}
.author-info-nickname{
    font-size: 15px;
    margin-bottom:6px;
}
.author-info-badge{
    font-size: 14px;
}
.question-content {
    padding: 10px;
    background-color:#fff;
}
</style>
<style>
.rich-content{
    padding: 5px 0;
    line-height: 1.7;
    font-size: 14px;
    text-indent: 2em;
}

.rich-content img{
    max-width:100%;
}
</style>
<script>
export default {
    data() {
      return {
        // 默认被选定的顶部选项卡及面板
        active: "1",
        // 默认被选定的顶部选项卡
        selectedTab: "index", 
      };
    }
};
</script>