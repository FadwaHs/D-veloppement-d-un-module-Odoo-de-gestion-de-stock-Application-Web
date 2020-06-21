import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {

  nameOperation:string;
  quantity:string;
  InventoryData: JSON; 
  ourdata: JSON;
  items4 = [];
  tableau1 = [];

  constructor(private _activatedroute:ActivatedRoute,private _route:Router ,private http: HttpClient)
  {
    this._activatedroute.paramMap.subscribe(
      params=>{
        this.nameOperation=params.get('name');
            }
    );
    this.http.get('http://127.0.0.1:5002/Inventory').subscribe(data => {
      this.InventoryData = data as JSON;
      this.ourdata = this.InventoryData["result"]["response1"];

      for (let key in this.InventoryData["result"]["response1"])
      {
        this.items4.push(this.InventoryData["result"]["response1"][key]);
      }
      for(var i=0;i<this.items4.length;i++)
      {
        if(this.items4[i].iv==this.nameOperation)
        {
          this.tableau1.push(this.items4[i]);
        }
      }
      if(this.tableau1[0].quantity=="counted")
      {
        this.quantity="Default to stock on hand";
      }
      else
      {
        this.quantity="Default to zero";
      }
      console.log(this.tableau1);
    });
    
  }

  ngOnInit(): void {
  }

  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
  functionEdit()
  {
    document.getElementById('div2').style.display="none";
    document.getElementById('div1').style.display="block";
    document.getElementById('btnDiscard').classList.remove("none");
    document.getElementById('btnSave').classList.remove("none");
    document.getElementById('btnEdit').classList.add("none");
    document.getElementById('btnCreate').classList.add("none");
    var t=document.getElementById('label1').childNodes[1];
    if(this.quantity=="Default to stock on hand")
    {
      (document.getElementById('radio1') as HTMLInputElement).checked=true;
    }
    else if(this.quantity=="Default to zero")
    {
      (document.getElementById('radio2') as HTMLInputElement).checked=true;
    }
  }
  functionCreate()
  {
    this._route.navigate(['create-Inv-adj']);
  }
}
