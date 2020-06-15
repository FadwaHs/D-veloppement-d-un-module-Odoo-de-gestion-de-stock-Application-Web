import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  StaticsData: JSON;  
  ourdata1: JSON;
  productlength:number;
  transferslength:number;
  scraplength:number;
  receiptlength=0;
  deliverylength=0;
  items3 = [];items4 = [];
  lineChart=[];
  donutChart=[];
  
  constructor(private http2 :HttpClient) {
   
     
   }
  

   ngOnInit(): void {
    this.http2.get('http://127.0.0.1:5002/statistics').subscribe(data => {
      this.StaticsData = data as JSON;
      this.ourdata1 = this.StaticsData["result"];
      this.productlength = this.StaticsData["result"]["productLength"];
      this.transferslength = this.StaticsData["result"]["transferslength"];
      this.scraplength = this.StaticsData["result"]["scarplength"];

      for (let key in this.StaticsData["result"]["pickingtab"])
      {
        this.items3.push(this.StaticsData["result"]["pickingtab"][key]);
      }

      for(var i=0;i<this.items3.length;i++)
      {
          if(this.items3[i].type=="incoming")
          {
            this.receiptlength++;
  
          }
          else if(this.items3[i].type=="outgoing")
          {
            this.deliverylength++;
          }
      }
      // var d = new Date();
      // console.log(d.getFullYear());
      this.functionDonutChart(this.receiptlength,this.deliverylength,this.scraplength)
  

    
    });

    this.http2.get('http://127.0.0.1:5002/OperationsParMois').subscribe(data => {
      this.StaticsData = data as JSON;
      this.ourdata1 = this.StaticsData["result"];
      for (let key in this.StaticsData["result"]["response1"])
      {
        this.items4.push(this.StaticsData["result"]["response1"][key]);
      }

      console.log(this.items4);
    
    });

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
        text: '############'
      }
    }
  });
    



}
  functionDonutChart(data1:number,data2:number,data3:number)
  {
    this.donutChart=new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: ["Receipts", "Delivery Orders", "Scrap"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#dc3545"],
            data: [data1,data2,data3]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: '####################'
        }
      }
  });
  }
  
}
