import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rinventory-valuation',
  templateUrl: './rinventory-valuation.component.html',
  styleUrls: ['./rinventory-valuation.component.css']
})
export class RinventoryValuationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
