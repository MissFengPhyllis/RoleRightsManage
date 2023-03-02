<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>
<script>
import geoJson from "@/assets/ChinaMapData.json";
export default {
  data() {
    return {};
  },

  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    // console.log(geoJson)
    //驻场可用的地图，必须包含geo组件或者map图表类型的时候才可以
    this.$echarts.registerMap("china", geoJson);
    let option = {
      backgroundColor: "rgb(121,145,209)",
      geo: {
        map: "china",
        aspectScale: 0.75, // scale地图长宽比
        zoom: 1.3,
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09131c",
                },
                {
                  offset: 1,
                  color: "#274d68",
                },
              ],
              globalCoored: true,
            },
            shadowColor:'rgb(58,115,192)',
            shadowOffsetX:10,
            shadowOffsetY:11,
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle:{
                opacity: 0
            }
          },
        ],
      },
      series: [
        {
          //配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
          type: "map",
          //这个zoom的大小一定要和下面series里面的值一样大
          zoom: 1.3,
          map: "china",
          //把每个省份的名称显示出来，否则只有当鼠标移上去以后才会显示名称
          label: {
            normal:{
                show: true,
                textStyle:{
                    color:'#1DE9B6'
                }
            },
            emphasis:{
                textStyle:{
                    color:'rgb(183,185,14)'
                }
            }
          },
          itemStyle: {
            normal: {
                 backgroundColor: "rgb(147,235,248)",
                 borferWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(31,54,150)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(89,128,142)',
                  },
                ],
                globalCoored: true,
              },
            },
            emphasis:{
                areaColor:'rgb(46,229,206)'
            }
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>
<style lang="scss">
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>