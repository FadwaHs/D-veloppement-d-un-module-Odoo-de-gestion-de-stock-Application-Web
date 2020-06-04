import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatecompanyComponent } from '../createcompany/createcompany.component';

@Component({ 
  selector: 'app-createrules',
  templateUrl: './createrules.component.html',
  styleUrls: ['./createrules.component.css']
})
export class CreaterulesComponent implements OnInit {

  constructor( private Dialog : MatDialog,private _activatedroute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
  }

  OpenCreateCompany()
  {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    this.Dialog.open(CreatecompanyComponent, dialogconfig);
  }
  functionBackReorderingRules()
  {
    this._route.navigate(['reo-rules']);
  }
}

