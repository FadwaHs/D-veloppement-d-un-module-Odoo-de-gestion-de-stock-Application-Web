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
    // var barChartData = {
		// 	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		// 	datasets: [{
		// 	  	label: 'Dataset 1',
		// 		backgroundColor: "#3e95cd",
    //     data:[86,114,106,106,107,111,133,221,783,2478,500,0]
		// 	}, {
		// 		label: 'Dataset 2',
		// 		backgroundColor: "#8e5ea2",
		// 	  data: [28,350,8000,50,8000,809,8000,1402,37,8000,500,0],
		// 	}, {
		// 		label: 'Dataset 3',
		// 		backgroundColor: "#00ff00",
		// 	  data:[-2000,-114,-106,106,-107,111,-1330,-221,-783,-2478,-500,-0]
		// 	}]

		// };
		// window.onload = function() {
    //   var ctx = document.getElementById('canvas').getContext('2d');
      
		// 	window.myBar = new Chart(ctx, {
		// 		type: 'bar',
		// 		data: barChartData,
		// 		options: {
		// 			title: {
		// 				display: true,
		// 				text: 'Chart.js Bar Chart - Stacked'
		// 			},
		// 			tooltips: {
		// 				mode: 'index',
		// 				intersect: false
		// 			},
		// 			responsive: true,
		// 			scales: {
		// 				xAxes: [{
		// 					stacked: true,
		// 				}],
		// 				yAxes: [{
		// 					stacked: true
		// 				}]
		// 			}
		// 		}
		// 	}); 
    // };
    // document.getElementById('randomizeData').addEventListener('click', function() {
		// 	barChartData.datasets.forEach(function(dataset) {
		// 		dataset.data = dataset.data.map(function() {
		// 			return randomScalingFactor();
		// 		});
		// 	});
		// 	window.myBar.update();
		// });

  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
