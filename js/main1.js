
var chartDom = document.getElementById('main1');
var myChart = echarts.init(chartDom);
var option;

option = {
  color: ["#2f89cf"],
   grid: {
     left: "0%",
     top: "10px",
     right: "0%",
     bottom: "4%",
     containLabel: true
   },
  xAxis: {
    show: false,
    type: 'category',
    color:'rgba(255,255,255,.6)',
    data: ["旅游行业","游戏行业","电商行业","金融行业"]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [0,300,600,900,1200,1500],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option && myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
  });
