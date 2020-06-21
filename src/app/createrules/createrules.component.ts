import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatecompanyComponent } from '../createcompany/createcompany.component';
import { HttpClient, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");




@Component({ 
  selector: 'app-createrules', 
  templateUrl: './createrules.component.html',
  styleUrls: ['./createrules.component.css']
})
export class CreaterulesComponent implements OnInit {

  ProductnameData: JSON;  
  ourdata: JSON;
  succes : JSON;
	itemsName = []; 

  constructor( private Dialog : MatDialog,private _activatedroute:ActivatedRoute,private _route:Router ,private http: HttpClient) 
  { 
    this.http.get('http://127.0.0.1:5002/products').subscribe(data => {
      this.ProductnameData = data as JSON;
      this.ourdata = this.ProductnameData["result"]["listProduct"];
    
      for (let key in this.ProductnameData["result"]["listProduct"])
       {
        this.itemsName.push(this.ProductnameData["result"]["listProduct"][key]);
      }
     
      console.log(this.itemsName);
      });
  }

  ngOnInit(): void {
  }
  createRules()
  {
    var Productid = (document.getElementById("productinput") as HTMLInputElement).value;
    var minqty = (document.getElementById("form-control2-min") as HTMLInputElement).value;
    var maxqty = (document.getElementById("form-control2-max") as HTMLInputElement).value;

    var body = {"new_productid": Productid, "minimumqty": minqty, "maximumqty": maxqty };
    var url = 'http://127.0.0.1:5002/Create_Rules';

    this.http.post(url, body, {headers}).subscribe(data => {
    this.succes = data as JSON;
      
    });
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
  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
}

