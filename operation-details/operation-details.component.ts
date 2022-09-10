import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.css']
})
export class OperationDetailsComponent implements OnInit {

  date : Date = new Date();
  
  settings=
  {
    bigBanner:true,
    timePicker:true,
    format:'dd-MM-yyyy hh:mm a',
    defaultOpen:false,
    closeOnSelect:false
  }
  reference:string;
  from:string;
  operation:string;
  contact:string;
  typeOp:string;
  dateOp:string;
  document:string;
  priority=0;
  respo:string;
  group:string;
  note:string;
  operationData: JSON;
  ourdata: JSON; 
  tableau1 = [];
  tableau2 = [];
  tableau3 = [];
  tab = [];
  tab_Select = [];

  constructor(private _activatedroute: ActivatedRoute,
     private _route: Router,
     private http: HttpClient,
     public dialog: MatDialog) 
  {
    this._activatedroute.paramMap.subscribe(
      params=>{
        this.reference=params.get('reference');
        this.operation=params.get('name');
        this.from=params.get('from');
        })
      console.log(this.reference);

      this.http.get('http://127.0.0.1:5002/picking').subscribe(data => {
          this.operationData = data as JSON;
          this.ourdata = this.operationData["result"]["response"];
    
          for (let key in this.operationData["result"]["response"])
          {
            this.tableau1.push(this.operationData["result"]["response"][key]);
          }
        });
        this.http.get('http://127.0.0.1:5002/DetailsOperation').subscribe(data => {
          this.operationData = data as JSON;
          this.ourdata = this.operationData["result"]["response1"];
    
          for (let key in this.operationData["result"]["response1"])
          {
            this.tableau2.push(this.operationData["result"]["response1"][key]);
          }
          for(var i=0;i<this.tableau1.length;i++)
          {
           for(var j=0;j<this.tableau2.length;j++)
           {
             if(this.tableau2[j]['typeOp']==this.tableau1[i]['pickingId'])
             {
               this.tableau2[j].pickcingType = this.tableau1[i].type;
             }
           }
          }
          for(var i=0;i<this.tableau2.length;i++)
          {
           
             if(this.tableau2[i].nameOp==this.reference)
             {
               this.tableau3.push(this.tableau2[i]);
             }
           
          }
          this.contact=this.tableau3[0].contact;
          this.typeOp=this.tableau3[0].pickcingType;
          this.dateOp=this.tableau3[0].date_Op;
          this.document=this.tableau3[0].origin;

          if(this.tableau3[0].priority!='false')
            this.priority=parseInt(this.tableau3[0].priority);

          this.respo=this.tableau3[0].resp;
          this.group=this.tableau3[0].group;

          if(this.tableau3[0].note==false)
            this.note='empty';
          else
             this.note=this.tableau3[0].note;

            console.log(this.tableau3);
 
            this.functionStars();
          
        });
        this.http.get('http://127.0.0.1:5002/picking').subscribe(data => {
      this.operationData = data as JSON;
      this.ourdata = this.operationData["result"]["response"];

      for (let key in this.operationData["result"]["response"])
      {
        this.tab.push(this.operationData["result"]["response"][key]);
      }
      for(var j=0;j<this.tab.length;j++)
      {
        this.tab_Select.push(this.tab[j].com+":"+this.tab[j].name);
      }
      
    });
  }

  ngOnInit(): void {
    
  }
  FunctionSousMenu(id:string)
  {
    document.getElementById(id).classList.toggle("show");
  }
  functionAddRow()
  {
    var table=<HTMLTableElement> document.getElementById('table-menu-div2');
    var row=table.insertRow(-1);
    var numCell=table.rows[0].cells.length;
    var element1=document.getElementById("new-cellule3");
    var element2=document.getElementById("new-cellule4");
    var td=document.createElement('td');
    td=row.insertCell(0);
      td.setAttribute("style","padding-bottom:3px;");
      var div=document.createElement('DIV');
      var input=document.createElement('input');
      input.setAttribute("type",'text');
      input.setAttribute("placeholder","Name of product");
      input.setAttribute("style","border:none;padding: 3px 4px; width:100%;background-color:#D2D2FF;");
      div.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
      div.appendChild(input);
    td.appendChild(div);
    var td2=document.createElement('td');
    td2=row.insertCell(1);
    td2.setAttribute("style","padding-bottom:3px;");
       var div2=document.createElement('DIV');
       var input2=document.createElement('input');
       input2.setAttribute("type",'text');
       input2.setAttribute("value","0.00");
       input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
       div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
       div2.appendChild(input2);
    td2.appendChild(div2);
    var td3=document.createElement('td');
    td3=row.insertCell(2);
    td3.setAttribute("style","padding-bottom:3px;");
         var icon2=document.createElement('i');
         icon2.classList.add("glyphicon");
         icon2.classList.add("glyphicon-trash");
         icon2.setAttribute("style","padding: 5px 5px;padding-left:18px;");
         icon2.setAttribute('onclick', 'var table=document.getElementById("table-menu-div2");table.deleteRow(this.parentNode.parentNode.parentNode.rowIndex); ');
         var div3=document.createElement('DIV');
         div3.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;");
         div3.appendChild(icon2);
    td3.appendChild(div3);

     if(numCell>3)
     {
      if ((element1 as HTMLInputElement).checked==true)
      {
        
        td2=row.insertCell(1);
        td2.setAttribute("style","padding-bottom:3px;");
           var div2=document.createElement('DIV');
           var input2=document.createElement('input');
           input2.setAttribute("type",'text');
           input2.setAttribute("placeholder","Description");
           input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
           div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
           div2.appendChild(input2);
        td2.appendChild(div2);
      }

      if ((element2 as HTMLInputElement).checked==true)
      {
        if((element2 as HTMLInputElement).checked==true)
        td2=row.insertCell(2);
        else
        td2=row.insertCell(1);
        td2.setAttribute("style","padding-bottom:3px;");
           var div2=document.createElement('DIV');
           var input2=document.createElement('input');
           input2.setAttribute("type",'text');
           input2.setAttribute("placeholder",'JJ/MM/YYYY, hh:mm AM');
           input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
           div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
           div2.appendChild(input2);
        td2.appendChild(div2);
      }
     
    }
  
    
  }
  AddCellule(id:string,tab:string,cel:string,indice:number,item:string)
  {
    var element1=document.getElementById(id);
    var element2=document.getElementById(cel);
    var x2=document.getElementById("product-cellule");
    var row=document.getElementById("table-header1");
    var table=<HTMLTableElement> document.getElementById(tab);
    var numRow=table.rows.length;
    if ((element1 as HTMLInputElement).checked==true)
    {
       
       var td=document.createElement('td');
       if((element2 as HTMLInputElement).checked==false)
       {
        td=(row as HTMLTableRowElement).insertCell(1);
       }
       else
       {
        td=(row as HTMLTableRowElement).insertCell(indice);
       }
       td.innerHTML=item;
       td.setAttribute("style","font-size: 15px;font-weight: 500; padding: 10px 5px;");
       x2.style.width="25%";
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        if((element2 as HTMLInputElement).checked==false)
        td2=table.rows[i].insertCell(1);
        else
        td2=table.rows[i].insertCell(indice);
        td2.setAttribute("style","padding:3px;font-weight:400;padding: 3px 4px; font-size: 15px;");
        if(indice==1)
        td2.innerHTML=this.tableau3[i-1].desc;
        else
        td2.innerHTML=this.tableau3[i-1].date_product;
       }
    }
    else
    {
      if((element2 as HTMLInputElement).checked==false){
      x2.style.width="70%";
      (row as HTMLTableRowElement).deleteCell(1);
     
      }
      else
      (row as HTMLTableRowElement).deleteCell(indice);
      for(var i=1;i<numRow;i++)
      {
       if((element2 as HTMLInputElement).checked==true)
       table.rows[i].deleteCell(indice);
       else
       table.rows[i].deleteCell(1);
      }
      
    }
  }
  
  functionBack()
  {
    this._route.navigate(['overview']);
  }
  FunctionMenuInsideClick(idl1:string,idl2:string,idl3:string,idD1:string,idD2:string,idD3:string)
  {
    document.getElementById(idl1).classList.add("active");
    document.getElementById(idl2).classList.remove("active");
    document.getElementById(idl3).classList.remove("active");
    var x = document.getElementById(idD1);
    var x2 = document.getElementById(idD2);
    var x3 = document.getElementById(idD3);
      x.style.display = "block";
      x2.style.display = "none";
      x3.style.display = "none";
  }

  functionStars()
  {
     var element=document.getElementsByClassName('icon-star');
     for(var i=0;i<this.priority;i++)
     {
       element[i].classList.add('glyphicon-star');
       element[i].classList.remove('glyphicon-star-empty');
      
     }
     var element=document.getElementsByClassName('icon2');
     for(var i=0;i<this.priority;i++)
     {
       element[i].classList.add('glyphicon-star');
       element[i].classList.remove('glyphicon-star-empty');
      
     }
     console.log(element.length);
  }
  functionEdit()
  {
     document.getElementById('div-principal1').style.display="none";
     document.getElementById('div-principal2').style.display="block";
     document.getElementById('btnEdit').classList.add("none");
     document.getElementById('btnCreate').classList.add("none");
     document.getElementById('btnSave').classList.remove("none");
     document.getElementById('btnDiscard').classList.remove("none");
  }
  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
  functionSelectOption(responsable:string)
  {
    var element=document.getElementById("input-responsable");
    element.setAttribute("value",responsable);
  }
  functionStar(position:string)
  {
     var element=document.getElementsByClassName("icon2");
     var j=Number(position);
      
    if(element[j].className=="glyphicon glyphicon-star icon-star icon2")
     {
      element[j].className="glyphicon glyphicon-star-empty icon-star icon2";
     }
     else
     {
      element[j].className="glyphicon glyphicon-star icon-star icon2";
     }  
 
  }
  OpenCreateContact()
  {
    // const dialogconfig = new MatDialogConfig();
    // dialogconfig.disableClose = true;
    // this.dialog.open(CreateContactPopUpComponent , dialogconfig);
  }
  functionSelectChange()
  {
    var elem1=document.getElementById('receive-from');
    var x = document.getElementById("select-menu");
  }
  AddCellule2(id:string,tab:string,cel:string,indice:number,item:string)
  {
    var element1=document.getElementById(id);
    var element2=document.getElementById(cel);
    var x2=document.getElementById("product-cellule2");
    var row=document.getElementById("table-header2");
    var table=<HTMLTableElement> document.getElementById(tab);
    var numRow=table.rows.length;
    if ((element1 as HTMLInputElement).checked==true)
    {
       
       var td=document.createElement('td');
       if((element2 as HTMLInputElement).checked==false)
       {
        td=(row as HTMLTableRowElement).insertCell(1);
       }
       else
       {
        td=(row as HTMLTableRowElement).insertCell(indice);
       }
       td.innerHTML=item;
       td.setAttribute("style","font-size: 15px;font-weight: 500; padding: 10px 5px;");
       x2.style.width="25%";
       var td2=document.createElement('td');
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        if((element2 as HTMLInputElement).checked==false)
        td2=table.rows[i].insertCell(1);
        else
        td2=table.rows[i].insertCell(indice);
        td2.setAttribute("style","padding-bottom:3px;");
           var div2=document.createElement('DIV');
           var input2=document.createElement('input');
           input2.setAttribute("type",'text');   
           if(item=='Date')
           input2.setAttribute("value",this.tableau3[i-1].date_product);
           else
           input2.setAttribute("value",this.tableau3[i-1].desc);
           input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
           div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
           div2.appendChild(input2);
        td2.appendChild(div2);
       }
    }
    else
    {
      if((element2 as HTMLInputElement).checked==false){
      x2.style.width="70%";
      (row as HTMLTableRowElement).deleteCell(1);
     
      }
      else
      (row as HTMLTableRowElement).deleteCell(indice);
      for(var i=1;i<numRow;i++)
      {
       if((element2 as HTMLInputElement).checked==true)
       table.rows[i].deleteCell(indice);
       else
       table.rows[i].deleteCell(1);
      }
      
    }
    
}
functionDeleteRow(indice:number)
  {
    var table=document.getElementById("table-menu-div2");
    (table as HTMLTableElement).deleteRow(indice+1); 
  }
  functionCancel()
  {
    this._route.navigate(['receipt', this.operation,this.from,this.tableau3[0].typeOp]);
  }
  functionCreate()
  {
    this._route.navigate(['create-receipt', this.operation,this.from,this.tableau3[0].typeOp]);
  }

}
