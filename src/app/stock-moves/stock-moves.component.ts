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
  ourdata: JSON;
  ourdataDone: JSON;
  ourdataWA: JSON;
  items7 = [];
  items8 = [];
  items9 = [];
  items10 = [];
  items11 = [];

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
          });
   }


   /////////////////////////////////////// StatistiqueChart//////////////////////
  pieChart=[];
  ngOnInit(): void {

    this.pieChart = new Chart(document.getElementById('pie-chart'), {
      type: 'pie',
      data: {
        labels: ["Product name", "Product name", "Product name","Product name", "Product name", "Product name",
        "Product name", "Product name", "Product name"],
        datasets: [
          {
            label: "Initial Quantity",
            backgroundColor: ["#98df8a", "#2ca02c","#1f77b4","#9edae5", "#ff7f0e","#c5b0d5",
            "#ffbb78", "#f7b6d2","#d62728" ],
            data: [16,50,434,247,700,73,47,30,17]
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

    var barChartData2 = {

    labels: ["Product name", "Product name", "Product name","Product name", "Product name", "Product name",
      "Product name", "Product name", "Product name"],
	datasets: [{
	label: 'Done',
  backgroundColor: "#1f77b4",
   data:[900,50,43,247,700,730,47,30,170]
  },
  {
    label: 'Waiting Availability',
    backgroundColor: "#ff7f0e",
    data:[160,80,0,247,600,7,47,0,1]
    },
    {
      label: 'New',
      backgroundColor: "#aec7e8", 
      data:[0,50,43,247,0,79,49,300,0]
      },
      {
        label: 'Available',
        backgroundColor: "#ffbb78",
        data:[0,50,43,247,4,0,49,0,17]
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
 