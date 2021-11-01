$(function(){

  'use strict'


  $('.peity-donut').peity('donut');


  var options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          fontSize: 8,
          fontFamily: 'Roboto',
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 8,
          fontFamily: 'Roboto'
        }
      }]
    }
  };

  var ctx1 = document.getElementById('chartjs1');
  if(ctx1) {
    var myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '%',
          data: [0, 13,22,25,33,56,60,63,54,67,71],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false,
           lineTension: 0,
        }]
      },
      options: {
         maintainAspectRatio: false,
    legend: {display: true},
    scales: {
      y: {
         display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
    }
  }
    });
  }

  var ctx2 = document.getElementById('chartjs2');
  if(ctx2) {
     var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '%',
          data: [0, 17,22,24,33,36,70,23,73,67,73,99],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false,
           lineTension: 0,
        }]
      },
      options: {
         maintainAspectRatio: false,
    legend: {display: true},
    scales: {
      y: {
          display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,
                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
    }
  }
    });
  }


  var ctx3 = document.getElementById('chartjs3');
  if(ctx3) {
     var myChart3 = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '%',
          data: [0, 17,22,12,33,33,70,13,73,65,73,99],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false,
           lineTension: 0,
        }]
      },
      options: {
        maintainAspectRatio: false,
    legend: {display: true},
    scales: {
      y: {
        display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,
                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
    }
  }
    });
  }

  var ctx4 = document.getElementById('chartjs4');
  if(ctx4) {

     var myChart2 = new Chart(ctx4, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '%',
          data: [0, 15,23,24,43,26,60,73,73,67,73,99],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false,
           lineTension: 0,
        }]
      },
      options: {
        maintainAspectRatio: false,
    legend: {display: true},
    scales: {
      y: {
         display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,
                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
    }
  }
    });
  }

  var ctx5 = document.getElementById('chartjs5');
  if(ctx5) {
     var myChart5 = new Chart(ctx5, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '%',
          data: [],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false
        }]
      },
      options: {
         maintainAspectRatio: false,
    legend: {display: true},
    scales: {
      y: {
          display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
    }
  }
    });
  }



  
  var ctxtemp = document.getElementById('charttemp');
  if(ctxtemp) {
     var myCharttemp = new Chart(ctxtemp, {
      type: 'line',
      data: {
        labels: ['0 Min', '5 Min', '10 Min', '20 Min', '25 Min', '30 Min', '35 Min'],
        datasets: [{
          label: 'Program T°',
          data: [0, 10,20,30,40,50,60,70,80,90,100,100],
          borderColor: 'rgba(38, 69, 149, 1)',
          fill: false
        },
        {
          label: 'Display T°',
          data: [10,20,30,40,50,60,70,80,90,100,100],
          borderColor: 'rgba(241, 115, 41, 1)',
          fill: false
        }
        ,
        {
          label: 'Booth T°',
          data: [20,30,40,50,60,70,80,90,100,100,100],
          borderColor: 'rgba(28, 196, 53, 1)',
          fill: false
        }
        ,
        {
          label: 'Panel Hor. T°',
          data: [30,40,50,60,70,80,90,100,100,100,100],
          borderColor: 'rgba(190, 3, 18, 1)',
          fill: false
        }
        ,
        {
          label: 'Panel Ver. T°',
          data: [40,50,60,70,80,90,100,100,100,100,100],
          borderColor: 'rgba(237, 220, 21, 1)',
          fill: false
        }
      ]
      },
      options: {
         maintainAspectRatio: false,
         plugins: {
          legend: {display: true, position: 'bottom'},
         },
    scales: {
      y: {
          display: true,
          min: 0,
        max: 100,
                ticks: {
                 stepSize: 25,                
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '';
                    }
                }
            }
    }
  }
    });
  }

})
