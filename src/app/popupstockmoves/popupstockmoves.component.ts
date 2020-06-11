import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popupstockmoves',
  templateUrl: './popupstockmoves.component.html',
  styleUrls: ['./popupstockmoves.component.css']
})
export class PopupstockmovesComponent implements OnInit {

  
  date : Date = new Date();
  private Title: string; 
  name : string;
  settings=
  {
    bigBanner:true,
    timePicker:true,
    format:'dd-MM-yyyy hh:mm a',
    defaultOpen:false,
    closeOnSelect:false
  }

  constructor(public dialogref: MatDialogRef<PopupstockmovesComponent> ,private _activatedroute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe
    (
      params => {this.name=params.get('name');}
    );
      
    
  }
  OnclosePopup()
  {
    this.dialogref.close();
    //this._route.navigate(['stock-moves']);



  }

}