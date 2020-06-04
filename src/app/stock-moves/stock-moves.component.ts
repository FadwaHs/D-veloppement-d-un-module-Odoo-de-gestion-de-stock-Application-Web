import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupstockmovesComponent } from '../popupstockmoves/popupstockmoves.component';
 
@Component({
  selector: 'app-stock-moves',
  templateUrl: './stock-moves.component.html',
  styleUrls: ['./stock-moves.component.css']
})
export class StockMovesComponent implements OnInit {

  constructor(private Dialog : MatDialog) { }

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

  OpenPopupSm()
  {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    this.Dialog.open(PopupstockmovesComponent, dialogconfig);
    
  }

}
 