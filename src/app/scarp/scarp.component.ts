import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scarp',
  templateUrl: './scarp.component.html',
  styleUrls: ['./scarp.component.css']
})
export class ScarpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
