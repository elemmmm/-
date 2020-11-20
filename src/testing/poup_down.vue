<template>
  <div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div>
        <div>
          <span>规则条件</span><button>＋</button><span @click="close">×</span>
        </div>
        <!-- 条件队列 开始-->
        <div>
          <label
            ><input
              type="radio"
              name="radio"
              value="&&"
              v-model="gender"
            />并且</label
          >
          <label
            ><input
              type="radio"
              name="radio"
              value="||"
              v-model="gender"
            />或者</label
          >
          <input type="text" class="content" />
          <div id="main">
          <input type="text" class="content" />
          <select name="" class="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </div>
          <select name="" class="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: true,
      gender: "",
    };
  },
  methods: {
    close() {
      this.popupVisible = false;
    },
  },
  mounted() {
    let input = document.querySelectorAll(".content");
    let main = document.getElementById("main")
        main.addEventListener('change',(e)=>{
            
        })
    }
};
</script>
<style scoped>
#down {
  background-color: #ff0;
}
</style>  