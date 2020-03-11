<template>
    <div>
        <collapse title="入门01" open>
            <div id="ele01" class="echart-container"></div>
            <div id="ele02" class="echart-container"></div>
            <div class="question" style="text-align:right;">用dataset,pie不能合并分类</div>
        </collapse>

        <collapse title="" open>
            <div id="pie03" class="echart-container"></div>
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
        
    },

    methods: {
        initEle01(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('ele01'));

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
                //     ]
                // }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },

        initEle02(){
            let ele = document.getElementById('ele02');            
            if(!ele) return;
            let echart = this.$echarts.init( ele );
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
                        radius: 15,
                        type: 'pie',
                        encode:{itemName:3, value:4},
                    }
                ],
                grid: {
                    left: '20%',
                    bottom: 10
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
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        center: ['50%','60%'],
                        // roseType: 'angle',  // 设置‘南丁格尔图’
                        data:[
                            { name: '武汉', value: 15665 },
                            { name: '北京', value: 101 },
                            { name: '其它', value: 449},
                        ],
                }
                ]
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