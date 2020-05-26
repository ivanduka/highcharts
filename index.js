document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    data: {
      // enablePolling: true,
      csvURL: window.location.origin + '/data_.csv'
    },
    title: {
      text: 'Fruit Consumption'
    },
    yAxis: {
      title: {
        text: 'Units'
      }
    }
  });
});