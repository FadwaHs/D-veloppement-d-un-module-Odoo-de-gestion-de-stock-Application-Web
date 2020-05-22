import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurement-exceptions',
  templateUrl: './procurement-exceptions.component.html',
  styleUrls: ['./procurement-exceptions.component.css']
})
export class ProcurementExceptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
