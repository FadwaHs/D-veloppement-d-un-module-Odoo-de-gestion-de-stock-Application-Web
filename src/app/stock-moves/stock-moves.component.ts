import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-moves',
  templateUrl: './stock-moves.component.html',
  styleUrls: ['./stock-moves.component.css']
})
export class StockMovesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
