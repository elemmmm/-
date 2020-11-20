<template>
  <!-- 底部选项卡开始 -->
  <mt-tabbar v-model="selectedTab" fixed>
    <mt-tab-item id="index" @click.native="goindex">
      首页
      <img
        src="../assets/index_enabled.png"
        alt=""
        slot="icon"
        v-if="selectedTab == 'index'"
      />
      <img src="../assets/index_disabled.png" alt="" slot="icon" v-else />
    </mt-tab-item>
    <mt-tab-item id="play" @click.native="goplay">
      运动
      <img
        src="../assets/play_enabled.png"
        alt=""
        slot="icon"
        v-if="selectedTab == 'play'"
      />
      <img src="../assets/play_disabled.png" alt="" slot="icon" v-else />
    </mt-tab-item>
    <mt-tab-item id="me" @click.native="gome">
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
</template>
<script>
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板
      active: "1",
      // 默认被选定的顶部选项卡
      selectedTab: "index",
    };
  },
  methods: {
    goindex() {
      //如果已经在页面中则不再触发 跳转
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    goplay() {
      if (this.$route.path != "/details") {
        this.$router.push("/details");
      }
    },
    gome() {
      if (this.$route.path != "/me") {
        this.$router.push("/me");
      }
    },
  },
};
</script>
