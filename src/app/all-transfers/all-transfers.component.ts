import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-transfers',
  templateUrl: './all-transfers.component.html',
  styleUrls: ['./all-transfers.component.css']
})
export class AllTransfersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }

}
