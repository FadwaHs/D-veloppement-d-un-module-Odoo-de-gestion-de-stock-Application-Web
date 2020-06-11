
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-scarp',
  templateUrl: './create-scarp.component.html',
  styleUrls: ['./create-scarp.component.css']
})
export class CreateScarpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
}
