import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
   lineChart=[];
   donutChart=[];
  ngOnInit(): void {
    
  this.lineChart=new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['Jun','Feb','Mar','Apr','Mai','Juin','Jui','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478,500,0],
          label: "Delivery Orders",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267,500,0],
          label: "Receipts",
          borderColor: "#8e5ea2",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });


  this.donutChart=new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Receipts", "Delivery Orders", "Scrap"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
}

  
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
  
}
