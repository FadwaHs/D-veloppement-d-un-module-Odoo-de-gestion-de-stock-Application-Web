import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  Function2(id1:string) {
    document.getElementById(id1).classList.toggle("show");
  }
  myFunction(id:string) {
    
    var x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
