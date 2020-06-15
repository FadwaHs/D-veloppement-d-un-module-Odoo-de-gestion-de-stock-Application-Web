import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  
})


export class OverviewComponent implements OnInit {

  operationData: JSON;
  ourdata: JSON; 
  tableau = [];

  constructor(private _activatedroute:ActivatedRoute,private _route:Router,private http: HttpClient) { 
    this.http.get('http://127.0.0.1:5002/picking').subscribe(data => {
      this.operationData = data as JSON;
      this.ourdata = this.operationData["result"]["response"];

      for (let key in this.operationData["result"]["response"])
      {
        this.tableau.push(this.operationData["result"]["response"][key]);
      }

      console.log(this.tableau);
    });
  }

  ngOnInit(): void {
    
  }
  // FunctionClickMenuButton(id1:string) {
  //   document.getElementById(id1).classList.toggle("show");
  // }
  // myFunctionClickedSousMenu(id:string) {
    
  //   var x = document.getElementById(id); 
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }
  // FunctionClickedInButtonReceipts(name:string,type:string,from:string)
  // {
  //   this._route.navigate(['receipt',name,type,from]);
  // }
}
