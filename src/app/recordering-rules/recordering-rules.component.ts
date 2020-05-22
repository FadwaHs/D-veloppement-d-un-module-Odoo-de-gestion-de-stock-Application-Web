import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordering-rules',
  templateUrl: './recordering-rules.component.html',
  styleUrls: ['./recordering-rules.component.css']
})
export class RecorderingRulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
}
