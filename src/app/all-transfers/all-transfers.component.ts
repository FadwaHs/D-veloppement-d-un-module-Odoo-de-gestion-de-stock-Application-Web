import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-transfers',
  templateUrl: './all-transfers.component.html',
  styleUrls: ['./all-transfers.component.css']
})
export class AllTransfersComponent implements OnInit {

  constructor(private _activatedroute:ActivatedRoute,private _route:Router) { }

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
  }

  Activer(id1: string ,id2: string)
  { 
    document.getElementById(id1).classList.toggle("active");
    document.getElementById(id2).classList.remove("active");

  }
  functionShowSousMenu(id:string)
  {
    document.getElementById(id).classList.toggle('show');
  }

  functionGetWidthCellul(){
  var x = document.getElementsByClassName('table-header-body');
    var n=x.length;var t=1047/n; 
    for(var i=0;i<x.length;i++)
    {
      (x[i] as HTMLTableCellElement).style.width=t+"px";
    }
  }

addAllCellul(num:number,name:string)
  {
    var element=document.getElementsByClassName('check-menu');
    var row=document.getElementById("table-header");
    var table=<HTMLTableElement> document.getElementById('div-table');
    var numRow=table.rows.length;
    var numCel=table.rows[0].cells.length;
    var caseCel,checkCel=0,caseLis;
    for(var tmp=0;tmp<num;tmp++)
    {
       if((element[tmp] as HTMLInputElement).checked==true)
       {
         checkCel++;
       }
    }
    caseLis=num-checkCel;
    caseCel= (num-caseLis)+2;
    if((element[num] as HTMLInputElement).checked == true)
    {

       var td=(row as HTMLTableRowElement).insertCell(caseCel);
       td.innerHTML=name;
       td.setAttribute("style","padding:8px;");
       td.className="table-header-body";
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        td2=table.rows[i].insertCell(caseCel);
        td2.setAttribute("style","padding:8px;");
        td2.innerHTML=name;
       }
    }
    else
    {
      var position;
      for(var i=1;i<numCel-1;i++)
      {
        if(table.rows[0].cells[i].innerHTML.localeCompare(name)==0)
        position=i;
      }
      for(var i=0;i<numRow;i++)
      {
       table.rows[i].deleteCell(position);
      }
    }
    this.functionGetWidthCellul();
  }

  functionCreateTransfer()
  {
    this._route.navigate(['create-transfer']);
  }
  FunctionCheckBox(class1: string, id: string)
  {
    var element = document.getElementsByClassName(class1);
    var element2 = document.getElementById(id);
    var element3 = document.getElementById('dropdown-list1');
    var element4 = document.getElementById('dropdown-list2');
    if ((element2 as HTMLInputElement).checked == true){
       for(var i = 0; i < element.length; i++)
       {
       (element[i] as HTMLInputElement).checked = true;
            element3.classList.remove("none");
            element4.classList.remove("none");
       }
    }
    else
    {
      for(var i = 0; i < element.length; i++)
      {
      (element[i] as HTMLInputElement).checked = false;
         element3.classList.add("none");
         element4.classList.add("none");
      }
    }
  }
  FunctionCheckBox2()
  {
    var element = document.getElementsByClassName('checkbox');
    var element2= document.getElementById('dropdown-list1');
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
       element2.classList.remove("none");
       element3.classList.remove("none");
    }
    else
    {
        element2.classList.add("none");
        element3.classList.add("none");
    }
  }
}
