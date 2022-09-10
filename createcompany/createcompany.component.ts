import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<CreatecompanyComponent>) { }

  ngOnInit(): void {
  }
  Onclose()
  {
    this.dialogref.close();
  }

}

