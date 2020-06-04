import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-procurement-exceptions',
  templateUrl: './procurement-exceptions.component.html',
  styleUrls: ['./procurement-exceptions.component.css']
})
export class ProcurementExceptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var barChartData2 = {
    datasets: [{
      label: 'Forcasted Stock',
      backgroundColor: "#000",
      borderColor:"#d62728" ,
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      data: [{
        x: 2004,
        y: 0
    }, {
        t: 2005,
        y: 10
    },
    {
      x:2006 ,
      y: 7
  }, {
      t:2007,
      y: 8
  },
  {
    x: 2008,
    y: 11
}, {
    t: 2009,
    y: 15
},
{
  x:2010,
  y: 7
}, {
  t:2011,
  y: 80
}, {
  t:2012,
  y: 70
}
  ]
    }
    ]
  };
    var canvas = <HTMLCanvasElement> document.getElementById("ChartTimes");
    var ctx = canvas.getContext("2d");
    ctx.lineJoin = "miter";
    new Chart(ctx, {
type: 'line',
data: barChartData2,
  options: {
    animation: {
      duration: 0
    },
  title: {
      display: true,
      text: ''
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        responsive: true,
  scales: { 
    xAxes: [{
      type: 'time',
      time: {
        unit: 'month',
    },  
    scaleLabel: {
      display: true,
      labelString: 'Date'
    },  
      distribution: 'series',
      offset: true,
      ticks: {
        major: {
          enabled: true,
          fontStyle: 'bold'
        },
        source: 'data',
        autoSkip: true,
        autoSkipPadding: 75,
        maxRotation: 0,
        sampleSize: 100
      },
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false
      },
     scaleLabel: {
        display: true,
        labelString: 'Quantity'
      } 
    }]
        }
      }
    });

}

  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }



}
