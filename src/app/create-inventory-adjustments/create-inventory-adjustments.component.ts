import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-inventory-adjustments',
  templateUrl: './create-inventory-adjustments.component.html',
  styleUrls: ['./create-inventory-adjustments.component.css']
})
export class CreateInventoryAdjustmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
}
