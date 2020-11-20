<template>
  <div id="echart" style="width: 375px; height: 375px"></div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('echart','light'));
      myChart.setOption({
        title: {},
        legend: {
            show:false
        },
        radar: [
          {
            indicator: [
              { text: "上肢", max: 100 },
              { text: "下肢", max: 100 },
              { text: "核心", max: 100 },
              { text: "心肺", max: 100 },
              { text: "全身", max: 100 },
              { text: "有氧", max: 100 },
            ],
            center: ["50%", "50%"],
            radius: 120,
          },
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [60, 70, 40, 50, 80, 30],
                name: "训练指标",
                areaStyle: {
                  color: "rgba(255, 255, 255, 0.8)",
                },
              },
            ],
          },
          {
            name: "成绩单",
            type: "radar",
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: "张三",
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  },
                },
              },
            ],
          },
        ],
      });
    },
  },
};
</script>