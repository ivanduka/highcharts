document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'area',
            marginRight: 150
        },
        title: {
            text: "Canadian Crude Oil Production"
        },
        data: {
            // enablePolling: true,
            csvURL: window.location.origin + '/data.csv'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
            }
        },
        yAxis: {
            title: {
                text: 'Million barrels per day'
            },
            labels: {
                formatter: function () {
                    return parseInt(this.value) / 1000000
                }
            },
            tickInterval: 1000000,
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: true
        },
        legend: {
            align: "right",
            verticalAlign: "center",
            layout: "vertical",
            x: 0,
            y: 150
        },
    });
    console.log(chart);
});