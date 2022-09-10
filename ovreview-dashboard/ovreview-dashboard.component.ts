import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 

@Component({
  selector: 'app-ovreview-dashboard',
  templateUrl: './ovreview-dashboard.component.html',
  styleUrls: ['./ovreview-dashboard.component.css']
})
export class OvreviewDashboardComponent implements OnInit {

  operationData: JSON;
  ourdata: JSON; 
  tableau1 = [];
  tableau_out = [];
  tableau_in = [];

  constructor(private _activatedroute:ActivatedRoute,private _route:Router,private http: HttpClient) { 
    this.http.get('http://127.0.0.1:5002/picking').subscribe(data => {
      this.operationData = data as JSON;
      this.ourdata = this.operationData["result"]["response"];

      for (let key in this.operationData["result"]["response"])
      {
        this.tableau1.push(this.operationData["result"]["response"][key]);
      }
      for(var i=0;i<this.tableau1.length;i++)
      {
        if(this.tableau1[i].type=="incoming")
         this.tableau_in.push(this.tableau1[i]);
        else if(this.tableau1[i].type=="outgoing")
         this.tableau_out.push(this.tableau1[i]);
      }
    });
    console.log(this.tableau_out);
  }

  ngOnInit(): void {
    
  }
  FunctionClickMenuButton(id1:string) {
    document.getElementById(id1).classList.toggle("show");
  }
  myFunctionClickedSousMenu(id:string) {
    
    var x = document.getElementById(id); 
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  FunctionClickedInButtonReceipts(name:string,from:string,id:string)
  {
    this._route.navigate(['receipt',name,from,id]);
  }
  functionFilterByTO()
  {
    document.getElementById("filter-div").style.display="block";
    document.getElementById("all-div").style.display="none";
  }
}
