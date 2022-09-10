import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-transfers',
  templateUrl: './create-transfers.component.html',
  styleUrls: ['./create-transfers.component.css']
})
export class CreateTransfersComponent implements OnInit {


  date : Date = new Date();
  settings=
  {
    bigBanner:true,
    timePicker:true,
    format:'dd-MM-yyyy hh:mm a',
    defaultOpen:false,
    closeOnSelect:false
  }
  constructor(private _activatedroute:ActivatedRoute,private _route:Router) {
   
  }

  ngOnInit(): void {
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
  FunctionSousMenu(id:string)
  {
    document.getElementById(id).classList.toggle("show");
  }
  AddCellule1(id:string)
  {
    var element1=document.getElementById(id);
    var element2=document.getElementById("new-cellule2");
    var x2=document.getElementById("product-cellule");
    var row=document.getElementById("table-header");
    var table=<HTMLTableElement> document.getElementById('table-menu-1');
    var numRow=table.rows.length;
    if ((element1 as HTMLInputElement).checked==true)
    {
       
       var td=document.createElement('td');
       td=(row as HTMLTableRowElement).insertCell(1);
       td.innerHTML="Description";
       td.setAttribute("style","font-size: 15px;font-weight: 500; padding: 10px 5px;");
       x2.style.width="25%";
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        td2=table.rows[i].insertCell(1);
        td2.setAttribute("style","padding:3px;");
           var div2=document.createElement('DIV');
           var input2=document.createElement('input');
           input2.setAttribute("type",'text');
           input2.setAttribute("placeholder","Description");
           input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
           div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
           div2.appendChild(input2);
        td2.appendChild(div2);
       }
    }
    else
    {
      if((element2 as HTMLInputElement).checked==false)
      x2.style.width="50%";
      (row as HTMLTableRowElement).deleteCell(1);
      for(var i=1;i<numRow;i++)
       {
        table.rows[i].deleteCell(1);
       }
    }
  }

  functionAddRow()
  {
    var table=<HTMLTableElement> document.getElementById('table-menu-1');
    var row=table.insertRow(-1);
    var numCell=table.rows[0].cells.length;
    var element1=document.getElementById("new-cellule1");
    var element2=document.getElementById("new-cellule2");
    var td=document.createElement('td');
    var place_holder=Array('Demand','Reserved','Done');
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
    for(var i=0;i<3;i++){
    var td2=document.createElement('td');
    td2=row.insertCell(i+1);
    td2.setAttribute("style","padding-bottom:3px;");
       var div2=document.createElement('DIV');
       var input2=document.createElement('input');
       input2.setAttribute("type",'text');
       input2.setAttribute("placeholder",place_holder[i]);
       input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
       div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
       div2.appendChild(input2);
    td2.appendChild(div2);
    }
    var td3=document.createElement('td');
    td3=row.insertCell(4);
    td3.setAttribute("style","padding-bottom:3px;");
         var icon2=document.createElement('i');
         icon2.classList.add("glyphicon");
         icon2.classList.add("glyphicon-trash");
         icon2.setAttribute("style","padding: 5px 5px;width:100%;text-align:center;");
         icon2.setAttribute('onclick', 'var table=document.getElementById("table-menu-1");table.deleteRow(this.parentNode.parentNode.parentNode.rowIndex); ');
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

  AddCellule2(id:string)
  {
    var element1=document.getElementById(id);
    var element2=document.getElementById("new-cellule1");
    var x2=document.getElementById("product-cellule");
    var row=document.getElementById("table-header");
    var table=<HTMLTableElement> document.getElementById('table-menu-1');
    var numRow=table.rows.length;
    if ((element1 as HTMLInputElement).checked==true)
    {
       
       var td=document.createElement('td');
       if((element2 as HTMLInputElement).checked==true)
       td=(row as HTMLTableRowElement).insertCell(2);
       else
       td=(row as HTMLTableRowElement).insertCell(1);
       td.innerHTML="Expected Date";
       td.setAttribute("style","font-size: 15px;font-weight: 500; padding: 10px 5px;");
       x2.style.width="25%";
       var td2=document.createElement('td');
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        if((element2 as HTMLInputElement).checked==true)
        td2=table.rows[i].insertCell(2);
        else
        td2=table.rows[i].insertCell(1);
        td2.setAttribute("style","padding-bottom:3px;");
           var div2=document.createElement('DIV');
           var input2=document.createElement('input');
           input2.setAttribute("type",'text');
           input2.setAttribute("placeholder",'JJ/MM/YYYY');
           input2.setAttribute("style","border:none;padding: 3px 4px; width:100%;");
           div2.setAttribute("style","border: 1px solid #ccc; border-radius: 3px;background-color:#D2D2FF;");
           div2.appendChild(input2);
        td2.appendChild(div2);
       }
    }
    else
    {
      if((element2 as HTMLInputElement).checked==true)
      (row as HTMLTableRowElement).deleteCell(2);
        else{
      (row as HTMLTableRowElement).deleteCell(1);
      x2.style.width="50%";
      }
      
      for(var i=1;i<numRow;i++)
       {
        if((element2 as HTMLInputElement).checked==true)
        table.rows[i].deleteCell(2);
        else
        table.rows[i].deleteCell(1);
       }
    }
  }
  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }
  functionBack()
  {
    this._route.navigate(['overview']);
  }
  functionSelectOption(responsable:string)
  {
    var element=document.getElementById("input-responsable");
    element.setAttribute("value",responsable);
  }
  functionStar(position:string)
  {
     var element=document.getElementsByClassName("icon-star");
     var j=Number(position);
      
    if(element[j].className=="glyphicon glyphicon-star icon-star")
     {
      element[j].className="glyphicon glyphicon-star-empty icon-star";
     }
     else
     {
      element[j].className="glyphicon glyphicon-star icon-star";
     }  
 
  }
  functionCancel()
  {
    this._route.navigate(['allTransfers']);
  }

}
