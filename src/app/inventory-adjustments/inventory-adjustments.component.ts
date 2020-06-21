import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-inventory-adjustments',
  templateUrl: './inventory-adjustments.component.html',
  styleUrls: ['./inventory-adjustments.component.css']
})
export class InventoryAdjustmentsComponent implements OnInit {

  InventoryData: JSON; 
  ourdata: JSON;
  items4 = [];
  tableau1 = []; tableau2 = [];tableau_status = [];

  constructor(private _activatedroute:ActivatedRoute,private _route:Router ,private http: HttpClient)
   {
    this.http.get('http://127.0.0.1:5002/Inventory').subscribe(data => {
      this.InventoryData = data as JSON;
      this.ourdata = this.InventoryData["result"]["response1"];

      for (let key in this.InventoryData["result"]["response1"])
      {
        this.items4.push(this.InventoryData["result"]["response1"][key]);
      }
      this.InventoryData = data as JSON;
      this.ourdata = this.InventoryData["result"]["response2"];


      for (let key in this.InventoryData["result"]["response2"])
      {
        this.tableau_status.push(this.InventoryData["result"]["response2"][key]);
      }

      for(var i=0;i<this.items4.length;i++)
      {
        this.tableau1.push(this.items4[i]);
        this.tableau2.push(this.items4[i]);
      }
      console.log(this.tableau_status);


    });
    }

  ngOnInit(): void {
  }
  Openview(id1 : string , id2 : string)
  {
    var x = document.getElementById(id1);
    var y = document.getElementById(id2);

    y.style.display = "none";

    if(x.style.display === "block")
    {
      x.style.display = "block";

    }else{
      x.style.display = "block";
    }
    document.getElementById('div-group1').style.display="none";
  }
  Activer(id1: string ,id2: string)
  { 
    document.getElementById(id1).classList.toggle("active");
    document.getElementById(id2).classList.remove("active");
  }
  functionCreateInAdj()
  {
    this._route.navigate(['create-Inv-adj']);
  }
  FunctionCheckBox(class1: string, id: string)
  {
    var element = document.getElementsByClassName(class1);
    var element2 = document.getElementById(id);
    var element4 = document.getElementById('dropdown-list2');
    if ((element2 as HTMLInputElement).checked == true){
       for(var i = 0; i < element.length; i++)
       {
       (element[i] as HTMLInputElement).checked = true;
            element4.classList.remove("none");
       }
    }
    else
    {
      for(var i = 0; i < element.length; i++)
      {
      (element[i] as HTMLInputElement).checked = false;
         element4.classList.add("none");
      }
    }
  }
  functionShowSousMenu(id:string)
  {
    document.getElementById(id).classList.toggle('show');
  }
functionGetWidthCellul()
{
    var x = document.getElementsByClassName('table-header-body');
      var n=x.length;var t=1047/n; 
      for(var i=0;i<x.length;i++)
      {
        (x[i] as HTMLTableCellElement).style.width=t+"px";
      }
}

addAllCellul(num:number,name:string)
{
  var element=document.getElementById('check-menu');
  var row=document.getElementById("table-header");
  var table=<HTMLTableElement> document.getElementById('div-table');
  var numRow=table.rows.length;
  var numCel=table.rows[0].cells.length;
  if((element as HTMLInputElement).checked == true)
  {

     var td=(row as HTMLTableRowElement).insertCell(num);
     td.innerHTML=name;
     td.setAttribute("style","padding:8px;font-weight:600;");
     td.className="table-header-body";
     for(var i=1;i<numRow;i++)
     {
      var td2=document.createElement('td');
      td2=table.rows[i].insertCell(num);
      td2.setAttribute("style","padding:8px;");
      td2.innerHTML=this.tableau1[i-1].pid;
     }
  }
  else
  {
    for(var i=0;i<numRow;i++)
    {
     table.rows[i].deleteCell(num);
    }
  }
  this.functionGetWidthCellul();
}
FunctionCheckBox2(menu:string)
{
  var element = document.getElementsByClassName(menu);
  var element3= document.getElementById('dropdown-list2');
  var x=0;
  for(var i = 0; i < element.length; i++)
  {
    if ((element[i] as HTMLInputElement).checked == true)
    {
      x++;
    }
  }
  if(x!= 0)
  {
     element3.classList.remove("none");
  }
  else
  {
      element3.classList.add("none");
  }
}

functionGroupByStatus()
{
  document.getElementById('divlistview').style.display="none";
  document.getElementById('divCompView').style.display="none";
  document.getElementById('div-group1').style.display="block";
}
functionShowtable(status:string,i:string)
{
  if(document.getElementById(status+i).className=="glyphicon glyphicon-triangle-bottom icon")
    {
     
      document.getElementById(status).style.display="block";
      document.getElementById(status+i).className="glyphicon glyphicon-triangle-top icon";
    }
    else {

      document.getElementById(status).style.display="none";
      document.getElementById(status+i).className="glyphicon glyphicon-triangle-bottom icon";
    }
}
filtreFunction(status:string)
  {
    document.getElementById('div-group1').style.display="none";
    this.tableau1=[];
    for(var i=0;i<this.tableau2.length;i++)
    {
      if(this.tableau2[i].status==status)
       this.tableau1.push(this.tableau2[i])
    }  
   
    if(this.tableau1.length==0)
    {
     document.getElementById('create-new').style.display="block";
     document.getElementById('divlistview').style.display="none";
    }
    else
    {
      document.getElementById('create-new').style.display="none";
      if(document.getElementById('divCompView').style.display=="none")
          document.getElementById('divlistview').style.display="block";
   
    }
    var element=document.getElementById('check-menu');
    var table=<HTMLTableElement> document.getElementById('div-table');
    var numRow=table.rows.length;
  
    (element as HTMLInputElement).checked =false;
    
    var numCel=table.rows[0].cells.length;
    if(numCel==7){
      for(var i=0;i<numRow;i++)
      {
       table.rows[i].deleteCell(3);
      }
      
     }
     this.functionGetWidthCellul();

  }

  functionGoToDetails(id:string)
  {
    this._route.navigate(['inventory-detail',id]);
  }
}
