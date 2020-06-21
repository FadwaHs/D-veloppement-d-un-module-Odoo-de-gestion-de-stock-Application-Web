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
  table_del =  new Array<number>(12);
  table_rec =  new Array<number>(12);
  
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

    
    });
    this.http2.get('http://127.0.0.1:5002/OperationsParMois').subscribe(data => {
      this.StaticsData = data as JSON;
      this.ourdata1 = this.StaticsData["result"];
      for (let key in this.StaticsData["result"]["response1"])
      {
        this.items4.push(this.StaticsData["result"]["response1"][key]);
      }
      var i=0;
      console.log(this.items4);
      var d = new Date();
      for(var j=0;j<this.items4.length;j++)
      {
         if(parseInt(this.items4[j].date.slice(0, 4))==d.getFullYear())
         {
            for(var n=0;n<this.table_del.length;n++)
            {
              
              if(parseInt(this.items4[j].date.slice(5,7))==n+1)
              {
                if(this.items4[j].type=="incoming")
                {
                  if(this.table_rec[n]==null)
                  {
                     this.table_rec[n]=0;
                  }
                  this.table_rec[n]+=1;
                }
                else if(this.items4[j].type=="outgoing")
                {
                  if(this.table_del[n]==null)
                  {
                     this.table_del[n]=0;
                  }
                  this.table_del[n]+=1;
                }
                
              }
          
            }
         }
      }
      for(var i=0;i<this.items4.length;i++)
      {
          if(this.items4[i].type=="incoming")
          {
            this.receiptlength++;
  
          }
          else if(this.items4[i].type=="outgoing")
          {
            this.deliverylength++;
          }
      }
     
      this.functionDonutChart(this.receiptlength,this.deliverylength,this.scraplength);
      this.lineChart=new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ['Jun','Feb','Mar','Apr','Mai','Juin','Jui','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{ 
              data: [this.table_del[0],
              this.table_del[1],
              this.table_del[2],
              this.table_del[3],
              this.table_del[4],
              this.table_del[5],
              this.table_del[6],
              this.table_del[7],
              this.table_del[8],
              this.table_del[9],
              this.table_del[10],
              this.table_del[11]],
              label: "Delivery Orders",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [this.table_rec[0],
              this.table_rec[1],
              this.table_rec[2],
              this.table_rec[3],
              this.table_rec[4],
              this.table_rec[5],
              this.table_rec[6],
              this.table_rec[7],
              this.table_rec[8],
              this.table_rec[9],
              this.table_rec[10],
              this.table_rec[11]],
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
          text: 'Statistics for Receipt and Delivery'
        }
      }
  });
  }
  
}
