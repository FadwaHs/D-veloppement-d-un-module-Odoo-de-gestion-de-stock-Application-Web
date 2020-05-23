import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  constructor(private _activatedroute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
  FunctionClickedInButtonReceipts(link:string)
  {
    this._route.navigate([link]);
  }
}
