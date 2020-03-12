<template>
    <div>
        <collapse title="入门01">
            <div id="ele01" class="echart-container"></div>
            <div id="ele02" class="echart-container"></div>
            <div class="question" style="text-align:right;">用dataset,pie不能合并分类</div>
        </collapse>

        <collapse title="Demo01" open>
            <div id="pie03" class="echart-container"></div>
            <div id="async04" class="echart-container"></div>
        </collapse>

        <!-- <collapse title="" open>
        </collapse> -->

    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    mounted(){
        this.initEle01();
        this.initEle02();
        this.initEle03();
        this.initEle04();
        
        
    },

    methods: {
        initEle01(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('ele01'), 'light');

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'example'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '趋势',
                    type: 'line',
                    data: [15, 20, 33, 15, 10, 7]
                },
                // {
                //     name: '比例',
                //     type: 'pie',
                //     radius: 20,
                //     center: ['80%','20%'],
                //     data: [
                //         {name:'X', value:20},
                //         {name:'Y', value:65},
                //         {name:'Z', value:15}
                //     ],
                // }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },

        initEle02(){
            let ele = document.getElementById('ele02');            
            if(!ele) return;
            let echart = this.$echarts.init( ele, 'dark' );
            let options = {
                title: {
                    text: '使用dataset设置数据'
                },
                xAxis: {
                    data: ['A','B','C','D','E'],
                },
                yAxis: {},
                dataset:{
                    source: [
                        ['A', 1, 0.5, 'X', 20],
                        ['B', 0, 0  , 'X', 20],
                        ['C', 8, 1.5, 'Y', 20],
                        ['D', 2, 1  , 'Y', 30],
                        ['E', 6, 4  , 'Z', 10],
                    ],
                },
                series: [
                    {
                        type: 'line',
                        encode:{x:0, y:1},
                    },{
                        type: 'scatter',
                        encode:{x:0, y:2},
                    },{
                        center: ['80%','20%'],
                        radius: 20,
                        type: 'pie',
                        encode:{itemName:3, value:4},
                        color: ['#7EC0EE', '#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E']
                    }
                ],
                grid: {
                    left: '20%',
                    bottom: 30
                }
            };
            echart.setOption( options );
        },

        // pie03
        initEle03(){
            let pieChart = this.$echarts.init( document.getElementById('pie03') );
            pieChart.setOption({
                title: {
                    text: '2020.03.11国内疫情数据'
                },
                tooltip: {},
                backgroundColor: '#2c343c',
                textStyle: { 
                    color: '#999',
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        center: ['50%','60%'],
                        // roseType: 'angle',  // 设置‘南丁格尔图’
                        data:[
                            { name: '武汉( val * 100 )', value: 15665/100 },
                            { name: '北京', value: 101 },
                            { name: '其它', value: 449},
                        ],
                        labelLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#f4e700',
                            },
                            label: {
                                show: true,
                                // 高亮时标签的文字。
                                formatter: '天选之子'
                            }
                        },
                    }
                ]
            });
        },

        getAsyncData( cb ){
            setTimeout( function(){
                cb({
                    label: ['中国', '意大利', '韩国', '伊朗', '日本', '法国'],
                    value: [14893,  10590,    7520,   5687,  504,   2221 ]
                })
            }, 2000 );
        },

        // async04
        initEle04(){
            let echart = this.$echarts.init( document.getElementById('async04'), 'light' );
            let options = {
                title: { text:'异步获取数据' },
                xAxis: {},
                yAxis: {},
                tooltip: {},
                series: [
                    {
                        name: 'async',
                        type: 'bar',
                        data: [],
                    }
                ],
            };
            echart.showLoading();
            this.getAsyncData( function( data ){
                echart.hideLoading();
                options.xAxis = {data:data.label};
                options.series[0].data = data.value;
                echart.setOption( options );
            });


        },
    },
}
</script>

<style lang="scss">

.echart-container{
    width:40%;
    height:300px;
    display:inline-block;
    margin: 0 20px;
    padding: 10px;
    border: 1px solid #999;
}


</style>