import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popupstockmoves',
  templateUrl: './popupstockmoves.component.html',
  styleUrls: ['./popupstockmoves.component.css']
})
export class PopupstockmovesComponent implements OnInit {
  
  date : Date = new Date();
  private Title: string; 
  settings=
  {
    bigBanner:true,
    timePicker:true,
    format:'dd-MM-yyyy hh:mm a',
    defaultOpen:false,
    closeOnSelect:false
  }

  constructor(public dialogref: MatDialogRef<PopupstockmovesComponent>) { }

  ngOnInit(): void {
  }
  OnclosePopup()
  {
    this.dialogref.close();
  }

}