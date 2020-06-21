import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupstockmovesComponent } from '../popupstockmoves/popupstockmoves.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

 
@Component({
  selector: 'app-stock-moves',
  templateUrl: './stock-moves.component.html',
  styleUrls: ['./stock-moves.component.css']
})
export class StockMovesComponent implements OnInit {

  StockMovesData: JSON;
  StockMovesDoneData : JSON;
  StockMovesWAData : JSON;
  StockMovesAData : JSON;
  StockMovesNewData : JSON;
  proData :JSON;
  ourdata: JSON;
  ourdataDone: JSON;
  ourdataWA: JSON;
  items7 = [];
  items8 = [];
  items9 = [];
  items10 = [];
  items11 = [];
  namesofpdro=[];

  constructor(private Dialog : MatDialog ,private _activatedroute:ActivatedRoute,private _route:Router , private http :HttpClient)
   { 

    this.http.get('http://127.0.0.1:5002/StockMoves').subscribe(data => {
      this.StockMovesData = data as JSON;
      this.ourdata = this.StockMovesData["result"]["response"];
    
      for (let key in this.StockMovesData["result"]["response"])
       {
        this.items7.push(this.StockMovesData["result"]["response"][key]);
      }
    
      console.log(this.items7);
      });

      this.http.get('http://127.0.0.1:5002/nameproductonetime').subscribe(data => {
        this.proData = data as JSON;
        this.ourdata = this.proData["result"]["response"];
      
        for (let key in this.proData["result"]["response"])
         {
          this.namesofpdro.push(this.proData["result"]["response"][key]);
        }
      
        console.log(this.namesofpdro);
        });

      // tslint:disable-next-line: align
      this.http.get('http://127.0.0.1:5002/StockMovesDone').subscribe(data => {
      this.StockMovesDoneData = data as JSON;
      this.ourdataDone = this.StockMovesDoneData["result"]["response"];
    
      for (let key in this.StockMovesDoneData["result"]["response"])
       {
        this.items8.push(this.StockMovesDoneData["result"]["response"][key]);
      }

      console.log(this.items8);
      });

      // tslint:disable-next-line: align
      this.http.get('http://127.0.0.1:5002/StockMovesWA').subscribe(data => {
      this.StockMovesWAData = data as JSON;
      this.ourdataWA= this.StockMovesWAData["result"]["response"];
    
      for (let key in this.StockMovesWAData["result"]["response"])
       {
        this.items9.push(this.StockMovesWAData["result"]["response"][key]);
      }
      console.log(this.items9);
      });

    this.http.get('http://127.0.0.1:5002/StockMovesA').subscribe(data => {
        this.StockMovesAData = data as JSON;
        this.ourdataWA= this.StockMovesAData["result"]["response"];
      
        for (let key in this.StockMovesAData["result"]["response"])
         {
          this.items10.push(this.StockMovesAData["result"]["response"][key]);
        }
        console.log(this.items10);
        });

    this.http.get('http://127.0.0.1:5002/StockMovesNew').subscribe(data => {
          this.StockMovesNewData = data as JSON;
          this.ourdataWA= this.StockMovesNewData["result"]["response"];
        
          for (let key in this.StockMovesNewData["result"]["response"])
           {
            this.items11.push(this.StockMovesNewData["result"]["response"][key]);
          }
          console.log(this.items11);

          this.FunctionCahrtbar(this.items8 ,this.items9,this.items10,this.items11 ,this.namesofpdro);

          this.PieCharData(this.items7);
          });

         
   }


   /////////////////////////////////////// StatistiqueChart//////////////////////
  pieChart=[];
  ngOnInit(): void {}

 PieCharData(Data : any[])
  { 
    var productnameall = [];
    var productinitialdemande = [];

    for (let key in Data)
       {
        productnameall.push(Data[key]["pro"]);
      } 

      for (let key in Data)
      { 
       productinitialdemande.push(Data[key]["proqty"]);
     }

    this.pieChart = new Chart(document.getElementById('pie-chart'), {
      type: 'pie',
      data: {
        labels: productnameall,
        datasets: [
          {
            label: "Initial Quantity",
            backgroundColor: ["#98df8a", "#2ca02c","#1f77b4","#9edae5", "#ff7f0e","#c5b0d5",
            "#ffbb78", "#f7b6d2","#d62728","#d62728","#dbdb8d","#8c564b","#bcbd22","#17becf","#ff9896","#98df8a", "#2ca02c","#1f77b4","#9edae5", "#ff7f0e","#c5b0d5",
            "#ffbb78", "#f7b6d2","#d62728","#d62728","#dbdb8d","#8c564b","#bcbd22","#17becf","#ff9896","#c7c7c7","#98df8a","#ff7f0e","#98df8a","#17becf","#ff9896","#c7c7c7","#98df8a","#ff7f0e","#98df8a"],
            data: productinitialdemande
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Stock Moves : Product ,Status , Initail Demand'
        }
      }
  });
    
  }

   FunctionCahrtbar(Done: any[], Wa: any[], Available:any[], New: any[] , Productid:any[])
   {
    var Doneqty = [];
    var Waqty = [];
    var Aqty = [];
    var Newqty = [];
    var productname = [];

    for (let key in Productid)
       {
        productname.push(Productid[key]);
      }

    for (let key in Done)
       {
        Doneqty.push(Done[key]["proqty"]);
      }


      for (let key in Wa)
       {
          Waqty.push(Wa[key]["proqty"]);
        }

      for (let key in Available)
       {
        Aqty.push(Available[key]["proqty"]);
        }

      for (let key in New)
      { 
        Newqty.push(New[key]["proqty"]);
       }

    var barChartData2 = {

    labels:productname, 
    datasets: [{
    label: 'Done',
    backgroundColor: "#1f77b4",
     data:Doneqty
    },
    {
      label: 'Waiting Availability',
      backgroundColor: "#ff7f0e",
      data:Waqty
      },
      {
        label: 'New',
        backgroundColor: "#aec7e8", 
        data:Newqty
        },
        {
          label: 'Available',
          backgroundColor: "#ffbb78",
          data:Aqty
        } 
    ]
  };
    var canvas = <HTMLCanvasElement> document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");
    new Chart(ctx, {
    type: 'bar',
    data: barChartData2,
      options: {
      title: {
          display: true,
          text: 'Quantity MOves'
            },
            tooltips: {
              mode: 'index',
              intersect: false,
            },
            responsive: true,
      scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });
  }

  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }

  OpenCharts(id1 : string , id2 : string ,id3: string , id4 : string)
  {
       var x = document.getElementById(id1);
	      var y = document.getElementById(id2);
       var Z = document.getElementById(id3);
       var A = document.getElementById(id4);

	      y.style.display = "none";
       Z.style.display = "none";
       A.style.display = "none";

       if(x.style.display === "block")
    {
      x.style.display = "block";
 
    }else{
      x.style.display = "block";
    }
  }

  Active(id1: string ,id2: string, id3: string, id4 : string)
  {
       document.getElementById(id1).classList.toggle('active');
       document.getElementById(id2).classList.remove('active');
       document.getElementById(id3).classList.remove('active');
       document.getElementById(id4).classList.remove('active');
  }

  ShowCreateDiv(id: string)
  {
    document.getElementById(id).classList.toggle("showdivstatus");
  }

  OpenPopupSm(name: string)
  {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    this.Dialog.open(PopupstockmovesComponent, dialogconfig);
    // this._route.navigate(['stock-moves',name]);  
  }

}
 