
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var timeData = ['0:00', '0:30',
    '1:00', '1:30',
    '2:00', '2:30',
    '3:00', '3:30',
    '4:00', '4:30',
    '5:00', '5:30',
    '6:00', '6:30',
    '7:00', '7:30',
    '8:00', '8:30',
    '9:00', '9:30',
    '10:00', '10:30',
    '11:00', '11:30',
    '12:00', '12:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '15:00', '15:30',
    '16:00', '16:30',
    '17:00', '17:30',
    '18:00', '18:30',
    '19:00', '19:30',
    '20:00', '20:30',
    '21:00', '21:30',
    '22:00', '22:30',
    '23:00', '23:30'
];
option = {
    /*title: {
        text: '多个背景颜色图',
        x: 'left'
    },*/
    tooltip: { // 悬浮提示框
        trigger: 'axis',

        axisPointer: {
            type:'line', // 指示器类型 line shadow cross
//                animation: false
        },
        textStyle:{
            align:'left'
        },
        /*backgroundColor:'rgba(50,50,50,0.7)',
        lineStyle: {
            color: '#ff9900',
            width: 2,
            type: 'solid'
        },
        textStyle:{
            color:'#fff',
            fontSize:'14'
        },*/
        formatter: '¥ {c0}<br />{b0}',
        // position: [500, 10],
//            triggerOn: 'click' // 点击出现tip
    },
    /*markline:{
     data: [
     {
     name: '平均线',
     // 支持 'average', 'min', 'max'
     type: 'average'
     },
     {
     name: 'Y 轴值为 100 的水平线',
     yAxis: 100
     },
     [
     {
     // 起点和终点的项会共用一个 name
     name: '最小值到最大值',
     type: 'min'
     },
     {
     type: 'max'
     }
     ],
     ]
     },
    legend: {
     data: ['流量'],
     x: 'left'
     },
*/
    dataZoom: [{
        type: 'inside',
        filterMode: 'filter',
        start: 20,
        end: 100,
        xAxisIndex: [0],
    },
    {
        type: 'inside',
        y: '90%',
        start: 40,
        end: 100,
        filterMode: 'empty',
    }],
    grid: [{ // 网格
        left: 44,
        right: 24,
        bottom:40,
        top:50
    }, {
        left: 44,
        right: 24,
        bottom:40,
        top:50
    }],
    xAxis: [{ // x轴
        splitLine: {
            show: false
        },
        splitNumber:8,
        type: 'category',
        scale: true,
        boundaryGap: false, // 是否从轴线开始显示，坐标轴两边留白策略
        axisLine: {
            onZero: false, // X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上
            lineStyle:{ // 轴线及字体颜色等
                color:'#999999',
                width:1
            }
        },
        axisLabel:{ // 坐标轴字体样式
            textStyle:{
                color:'#999999',
                fontSize:'12'
            }
        },
        data: [],
    }],

    yAxis: [{ // y轴
        scale: true,
        splitLine: {
            show: false,
        },
        type: 'value',
        name: '行情',
        // min: 1000,
        splitNumber:4,
        nameTextStyle:{ // 坐标轴名称的颜色
            fontsize:'18',
            fontWeight: 'bold',
            color:'#999999'
        },
        boundaryGap: ['10%','0'],
        axisLine: {
            lineStyle:{ // 轴线及字体颜色等
                color:'#999999',
                width:1
            }
        },
        axisLabel:{ // 坐标轴字体样式
            textStyle:{
                color:'#999999',
                fontSize:'12'
            }
        },

    }],
    series: [{
        name: '总值',
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        showSymbol: true,
        splitLine: {
            show: false
        },
        lineStyle: { // 线的样式
            normal: {
                width: 1,
                color:'#ff9900'
            }
        },
        itemStyle : { // 图标样式
            normal : {
                color:'#ff9900'
            }
        },
        /*markPoint: {
            // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbol: 'pin', // 标注点样式
            symbolSize: 50,
            label:{
                color:'#fff',
                fontSize:12
            },
            silent:'true',
            data: [{
                type: 'max',
                name: '最大值',
            }, {
                type: 'min',
                name: '最小值',
            }]
        },*/
        animationDelay: function (idx) { // 动画延迟
            // 越往后的数据延迟越大
            return idx * 0;
        },
        data: []

    }]
};

//[992,2987,6585,9896,4092,987,6585,896,2092,2987,8585,9896,8092,9987,585,9896,9092,2987,6585,9896,6585,9896]
//[0.2092,0.2987,0.6585,0.9896,0.4092,0.2987,0.6585,1.0896,0.2092,0.2987,0.8585,0.9896,0.8092,1.0987,0.8585,1.0896,1.0092,0.2987,0.6585,1.0896,0.6585,1.0896]

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.showLoading(); // 数据加载动画

function Percentage(number1, number2) {
    return (Math.round(number1 / number2 * 10000) / 100.00);// 小数点后两位百分比

}

function persent(p){
    var p2 =p;
    if(p>100){
        p2 = 100;
    }else{
        p2=Math.floor(p);
    }
    return p2;
}

// 异步加载数据
$.get('echarts.json').done(function (data) {
    console.log('ok')
    // myChart.hideLoading();
    if(data.resCode){
        var option = data.option;
        console.log(persent(Percentage(20, option.xData.length)))
        // 填入数据
        if(persent(Percentage(10, option.xData.length))==100){
            myChart.setOption( {
                dataZoom: [{
                    start: 0,
                    end: 100,

                }]
            });
        }else{
            myChart.setOption( {
                dataZoom: [{
                    start: 100-persent(Percentage(10, option.xData.length)),
                    end: 100,

                }]
            });
        }
        myChart.setOption( {
            xAxis: {
                data: option.xData
            },
            series: [{
                // 根据名字对应到相应的系列
                name: '币值',
                data: option.seriesData
            }]
        });
    }

});
var time ;
myChart.on('rendered', function () { // 渲染结束事件
    time = setTimeout(function () {
        myChart.hideLoading(); // 隐藏数据加载动画
    },350)

});

//获取接触屏幕时的X和Y

var startX,startY;

myChart.on('touchstart',function(e){
    startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
});

myChart.on("touchmove", function(e) {

    e.preventDefault();

    moveEndX = e.originalEvent.changedTouches[0].pageX,

        moveEndY = e.originalEvent.changedTouches[0].pageY,

        X = moveEndX - startX,

        Y = moveEndY - startY;

    if ( X > 0 ) { // left 2 right

        myChart.setOption( {
            dataZoom: [{
                disabled:false
            },
                {
                    disabled:false
                }],
        });

    } else if  ( X < 0 ) { // right 2 left

        myChart.setOption( {
            dataZoom: [{
                disabled:false
            },
                {
                    disabled:false
                }],
        });

    } else if  ( Math.abs(Y) > Math.abs(X) && Y > 0) { // top 2 bottom

        myChart.setOption( {
            dataZoom: [{
                disabled:true
            },
            {
                disabled:true
            }],
        });
        $('body').on('scroll')

    } else if  ( Math.abs(Y) > Math.abs(X) && Y < 0 ) { // bottom 2 top
        myChart.setOption( {
            dataZoom: [{
                disabled:true
            },
            {
                disabled:true
            }],
        });
        $('body').on('scroll')
    }

});



/*
myChart.on("touchend", function(e) {
    myChart.setOption( {
        dataZoom: [{
            disabled:false
        },
            {
                disabled:false
            }],
    });
});
*/

