$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds/bbc-gas/data?X-AIO-Key=aio_Nxul03GLcIb2tsoz1pXghnCzo5nA",function(data){
    var dom = document.getElementById("container2");
    var myChart = echarts.init(dom);
    var option;
    option = {
            xAxis: {
                data: [data[0].created_at, 
                       data[1].created_at, 
                       data[2].created_at, 
                       data[3].created_at, 
                       data[4].created_at, 
                       data[5].created_at, 
                       data[6].created_at
                    ]
            },
                
            yAxis: {
                type: 'value'
            },

            series: [
                {
                    data: [data[0].value,
                           data[1].value,
                           data[2].value,
                           data[3].value,
                           data[4].value,
                           data[5].value,
                           data[6].value
                    ],
                    type: 'line'
                }
            ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
});