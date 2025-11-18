Highcharts.chart('container', {

    title: {
        text: '美國 加拿大 墨西哥來台人數',
        align: 'left'
    },

    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '來台人數'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [
        {
            name: '美國',
            data: [
                497410, 542261, 577628, 594946, 620077,
                82989, 9680, 85840, 534219, 660284
            ]
        },
        {
            name: '墨西哥',
            data: [
                3310, 3355, 4558, 4565, 4264,
                621, 176, 726, 3636, 4612
            ]
        },
        {
            name: '加拿大',
            data: [
                126003, 143691, 155661, 164079, 173491,
                22078, 1101, 14486, 117203, 144168
            ]
        }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
