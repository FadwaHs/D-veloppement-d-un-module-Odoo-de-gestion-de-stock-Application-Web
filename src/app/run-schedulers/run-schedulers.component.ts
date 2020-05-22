import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-schedulers',
  templateUrl: './run-schedulers.component.html',
  styleUrls: ['./run-schedulers.component.css']
})
export class RunSchedulersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
