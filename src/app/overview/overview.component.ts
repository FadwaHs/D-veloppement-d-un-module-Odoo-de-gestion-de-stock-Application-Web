import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  
})

export class OverviewComponent implements OnInit {

  constructor(private _activatedroute:ActivatedRoute,private _route:Router) { }

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
  FunctionClickedInButtonReceipts(name:string,type:string,from:string)
  {
    this._route.navigate(['receipt',name,type,from]);
  }
}
