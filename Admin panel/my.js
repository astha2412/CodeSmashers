 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['months', 'Sales'],
          ['jan',  200  ],
          ['feb',  120  ],
          ['mar',  150  ],
          ['apr',  200  ],
          ['may',  250  ],
          ['june', 230  ],
          ['july', 200  ],
          ['aug',  170  ],
          ['sep',  150  ],
          ['oct',  120  ],
          ['nov',  250  ],
          ['dec',  300  ]
        ]);

        var options = {
          title: 'Statistics',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }



var ctx1 = document.getElementById('myChart1').getContext('2d');
var myDoughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      // labels: ['Red','Yellow','Blue'],
      datasets: [{
        data: [50, 25,25],
        backgroundColor: [
                'green',
                'blue',
                'pink'
                ]
    }],
    },
    options:{}
});


var ctx2 = document.getElementById('myChart2').getContext('2d');
var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      // labels: ['Red','Yellow','Blue'],
      datasets: [{
        data: [65,25],
        backgroundColor: [
                'blue',

                'green'
                ]
    }],
    },
    options:{}
});


var ctx3 = document.getElementById('myChart3').getContext('2d');
var myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      // labels: ['Red','Yellow','Blue'],
      datasets: [{
        data: [65,25],
        backgroundColor: [
                'green',
                'blue'
                ]
    }],
    },
    options:{}
});



let account = document.getElementById('myaccount');
let mydiv  = document.getElementById('mydiv');

function display()
{
  mydiv.style.display="block"
}
function display2()
{
  mydiv.style.display="none"
}




