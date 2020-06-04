import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-rinventory-valuation',
  templateUrl: './rinventory-valuation.component.html',
  styleUrls: ['./rinventory-valuation.component.css']
})
export class RinventoryValuationComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
 var barChartData = {
    labels: ['ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName'
      , 'ProductsName', 'ProductsName', 'ProductsName',, 'ProductsName', 'ProductsName', 'ProductsName'],
	datasets: [{
	label: 'Quantity',
	backgroundColor: "#1f77b4",
    data:[1,300,15,106,107,111,133,221,300,240,450,12,2,3]
	}]
};
 var canvas = <HTMLCanvasElement> document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 // tslint:disable-next-line: no-unused-expression
 new Chart(ctx, {
	type: 'bar',
	data: barChartData,
		options: {
			title: {
				display: true,
				text: 'Quantity MOves'
					},
					tooltips: {
						mode: 'index',
						intersect: false
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

	var BoundarytData = {
				labels: ['ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName', 'ProductsName'
				, 'ProductsName', 'ProductsName', 'ProductsName',, 'ProductsName', 'ProductsName', 'ProductsName'],
				datasets: [{
				label: 'Quantity',
				pointBorderColor:"#1f77b4",
				pointBorderWidth:"3",
				borderWidth:"4",
				borderColor: "#1f77b4",
				backgroundColor:"#aec7e8",
				pointRadius: 5,
				data:[1,300,15,106,107,111,133,221,300,240,450,12,2,3]
					  }]
				  };
	var bon = <HTMLCanvasElement> document.getElementById("chart-2");
	var ctx = bon.getContext("2d"); 
	new Chart(ctx, {
							type: 'line',
							data:  BoundarytData,
							options: {
								showLines :true,

								title: {
									display: true,
									text: 'Quantity MOves'
								},
								tooltips: {
									mode: 'index',
									intersect: false
								},
								responsive: true,		
				     	legend: {
						labels: {
							usePointStyle: true,
					         	}
					         },
								scales: {
									xAxes: [{
										stacked: true,
									}],
									yAxes: [{
										stacked: true,
									
									}]
								}
							}
						});
  }
  Function2(id: string) {
    document.getElementById(id).classList.toggle("show");
  }

  OpenCharts(id1 : string , id2 : string ,id3: string)
  {
       var x = document.getElementById(id1);
	      var y = document.getElementById(id2);
	      var Z = document.getElementById(id3);

	      y.style.display = "none";
	      Z.style.display = "none";

       if(x.style.display === "block")
    {
      x.style.display = "block";

    }else{
      x.style.display = "block";
  
    }
  }

  Active(id1: string ,id2: string, id3: string)
  { 
       document.getElementById(id1).classList.toggle('active');
	      document.getElementById(id2).classList.remove('active');
	      document.getElementById(id3).classList.remove('active');
  }
  showExport(id1: string ,id2: string, id3: string)
  {
	 var  btnexport =document.getElementById('exportbtn');
	 var table = document.getElementById(id1);
	 var canvas = document.getElementById(id2);
	 var boundary = document.getElementById(id3);
	 
	 
	 if(table.style.display === "block" && (canvas.style.display =="none" || boundary.style.display =="none") )
	  {
		btnexport.style.display = "block";
		  
	  }else if ( canvas.style.display == "block" || boundary.style.display =="block" ){

	btnexport.style.display = "none";
	  }
  }



}
