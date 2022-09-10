import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-rinventory-valuation', 
  templateUrl: './rinventory-valuation.component.html',
  styleUrls: ['./rinventory-valuation.component.css']
})
export class RinventoryValuationComponent implements OnInit {

	ReportData: JSON;  
	ourdata: JSON;
	items6 = []; 
	ReportProductData: JSON;  
	ReportnegativeData : JSON;
	itemsProducts = [];
	negativeproduct = [];

  constructor( private http :HttpClient)
   {
	this.http.get('http://127.0.0.1:5002/Report').subscribe(data => {
		this.ReportData = data as JSON;
		this.ourdata = this.ReportData["result"]["response"];
  
		for (let key in this.ReportData["result"]["response"])
		 {
		  this.items6.push(this.ReportData["result"]["response"][key]);
		}
   
		console.log(this.items6);
	  });

	  this.http.get('http://127.0.0.1:5002/Reportnegative').subscribe(data => {
		this.ReportnegativeData = data as JSON;
		this.ourdata = this.ReportnegativeData["result"]["response"];
  
		for (let key in this.ReportnegativeData["result"]["response"])
		 {
		  this.negativeproduct.push(this.ReportnegativeData["result"]["response"][key]);
		}
  
		console.log(this.negativeproduct);
	  });

	  // tslint:disable-next-line: align
	  this.http.get('http://127.0.0.1:5002/ReportProduct').subscribe(data => {
		this.ReportProductData = data as JSON;
		this.ourdata = this.ReportProductData["result"]["response"];
  
		for (let key in this.ReportProductData["result"]["response"])
		 {
		  this.itemsProducts.push(this.ReportProductData["result"]["response"][key]);
		}
  
		console.log(this.itemsProducts);
		this.functionbarChartData(this.itemsProducts);
		this.functionbondaryChart(this.itemsProducts);
		this.functionreservedQty(this.items6);
		this.functionProductNegative(this.negativeproduct);
	  });
 
  } 

  ngOnInit(): void {
  }

   functionbondaryChart(Product : any[]) 
  {
	var Productname = [];

	for (let key in Product)
		 {
			Productname.push(Product[key]["pid"]);
		}

	var qtyonhand = [];
 
	for (let key in Product)
		 {
			qtyonhand.push(Product[key]["qt"]);
		}
	var BoundarytData = {
		labels: Productname,
		datasets: [{
		label: 'Quantity',
		pointBorderColor:"#1f77b4",
		pointBorderWidth:"2",
		borderWidth:"4",
		borderColor: "#1f77b4",
		backgroundColor:"#aec7e8",
		pointRadius: 3,
		data: qtyonhand,
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
							text: 'Positive Stock For Products'
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

  functionbarChartData(Product : any[] )
  {

	var Productname = [];

	for (let key in Product)
		 {
			Productname.push(Product[key]["pid"]);
		}

	var qtyonhand = [];
 
	for (let key in Product)
		 {
			qtyonhand.push(Product[key]["qt"]);
		}

	var barChartData = {

		labels: Productname,
		datasets: [{
		label: 'Quantity',
		backgroundColor: "#1f77b4",
         data:qtyonhand
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
					text: 'Positive Stock For Products'
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
  }


  functionreservedQty(reservedqtys :any[])
  {
	var Productname = [];

	for (let key in reservedqtys)
		 {
			Productname.push(reservedqtys[key]["pid"]);
		}

	var reservedqty = [];

	for (let key in reservedqtys)
		 {
			reservedqty.push(reservedqtys[key]["rsvqty"]);
		}


	var barChartData = {

		labels: Productname,
		datasets: [{
		label: 'Quantity',
		backgroundColor: "#1f77b4",
         data:reservedqty
		}]
	};
	 var canvas = <HTMLCanvasElement> document.getElementById("canvas2");
	 var ctx = canvas.getContext("2d");
	 // tslint:disable-next-line: no-unused-expression
	 new Chart(ctx, {
		type: 'bar',
		data: barChartData,
			options: {
				title: {
					display: true,
					text: ' Reserved Quantity For Products'
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

  }
  functionProductNegative(ProductNegative : any[] )
  {
 
	var Productname = []; 

	for (let key in ProductNegative)
		 {
			Productname.push(ProductNegative[key]["pid"]);
		}

	var qtyonhandNegative = [];
 
	for (let key in ProductNegative)
		 {
			qtyonhandNegative.push(ProductNegative[key]["ivnqty"]);
		}

	var barChartData = {

		labels: Productname,
		datasets: [{
		label: 'Quantity',
		backgroundColor: "#1f77b4",
         data:qtyonhandNegative
		}]
	};
	 var canvas = <HTMLCanvasElement> document.getElementById("canvas3");
	 var ctx = canvas.getContext("2d");
	 // tslint:disable-next-line: no-unused-expression
	 new Chart(ctx, {
		type: 'bar',
		data: barChartData,
			options: {
				title: {
					display: true,
					text: 'Negative Stock For Products'
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
  }

  Function2(id: string) {
    document.getElementById(id).classList.toggle("show");
  }

  OpenCharts(id1 : string , id2 : string ,id3: string , id4: string, id5: string)
  {
       var x = document.getElementById(id1);
	     var y = document.getElementById(id2);
		  var Z = document.getElementById(id3);
		  var r = document.getElementById(id4);
		  var n = document.getElementById(id5);

	      y.style.display = "none";
		  Z.style.display = "none";
		  r.style.display = "none";
		  n.style.display = "none";

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
	 var  btnexport2 =document.getElementById('exportbtn2');
	 var table = document.getElementById(id1);
	 var canvas = document.getElementById(id2);
	 var boundary = document.getElementById(id3);
	 
	 
	 if(table.style.display === "block" && (canvas.style.display =="none" || boundary.style.display =="none") )
	  {
		btnexport.style.display = "block";
		btnexport2.style.display = "block";
		  
	  }else if ( canvas.style.display == "block" || boundary.style.display =="block" ){

	btnexport.style.display = "none";
	btnexport2.style.display = "none";
	  }
  }

  showreservedqty(id1: string ,id2: string , id3: string)
  {
	var reservedqty = document.getElementById(id1);
	var canvas = document.getElementById(id2);
	var negativeCanvas = document.getElementById(id3);


	canvas.style.display = "none";
	negativeCanvas.style.display = "none";

	if(reservedqty.style.display == "none")
	{
	    reservedqty.style.display = "block";
	}
	else
	{
		reservedqty.style.display = "block";
	}
  }



}
