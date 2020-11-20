<template>
  <div id="main" style="width: 375px; height: 375px"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"), "dack");
      // 绘制图表
      myChart.setOption({
        backgroundColor: "rgba(51,51,51,0.5)",
        title: {
          textStyle:{
            color:'#fff',
            fontSize:'18'          
          },
          text: "一周运动步数" ,
          left:'center'
          },
        tooltip: {},
        textStyle: {
          color: "#fff",
        },
        xAxis: {
          type:'category',
           boundaryGap: false,
          nameTextStyle:{
            color:'#fff'
          },
          data: ["w1", "w2", "w3", "w4", "w5", "w6",'w7'],
        },
        yAxis: {
           type: 'value',
           axisLabel:{
             margin:6,
             fontSize:10
           }

        },
        series: [
          {
            name: "当天计步量",
            type: "line",
            data: [3660, 5000, 6666, 4555, 8000, 8325,9000],
          },
        ],
      });
    },
  },
};
</script>