import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-all-transfers',
  templateUrl: './all-transfers.component.html',
  styleUrls: ['./all-transfers.component.css']
})
export class AllTransfersComponent implements OnInit {

  TransferData: JSON;
  ourdata: JSON;
  items3 = [];
  tableau_oper=[];
  done=0;draft=0;waiting=0;ready=0;check=0;
  tabStatus = [];
  tableau1 = [];
  tableau2 = [];

  constructor(private activatedroute: ActivatedRoute , private route: Router , private http: HttpClient)
   {
     this.http.get('http://127.0.0.1:5002/transfers').subscribe(data => {
      this.TransferData = data as JSON;
      this.ourdata = this.TransferData["result"]["response"];

      for (let key in this.TransferData["result"]["response"])
       {
        this.items3.push(this.TransferData["result"]["response"][key]);
      }


      for(var i=0;i<this.items3.length;i++)
      {
          if(this.items3[i].status=="confirmed")
          {
            this.items3[i].status = "waiting";
          }
          else if(this.items3[i].status=="assigned")
          {
            this.items3[i].status = "ready";
          }
          this.items3[i].date = this.items3[i].date.slice(0,10);

      }

      for(var i=0;i<this.items3.length;i++)
      {
         this.tableau1.push(this.items3[i])
      }
      for(var i=0;i<this.items3.length;i++)
      {
         this.tableau2.push(this.items3[i])
      }

      for(var i=0;i<this.tableau2.length;i++)
      {
        switch(this.tableau2[i].status)
        {
          case "ready":this.ready++;break;
          case "done":this.done++;break;
          case "waiting":this.waiting++;break;
          case "draft":this.draft++;break;
          default:break;
        }
      }
      this.tabStatus[0]={"status":'draft',"count":this.draft};
      this.tabStatus[1]={"status":'done',"count":this.done};
      this.tabStatus[2]={"status":'waiting',"count":this.waiting};
      this.tabStatus[3]={"status":'ready',"count":this.ready};


    });
    this.http.get('http://127.0.0.1:5002/listOperations').subscribe(data => {
      this.TransferData = data as JSON;
      this.ourdata = this.TransferData["result"]["response"];

      for (let key in this.TransferData["result"]["response"])
       {
        this.tableau_oper.push(this.TransferData["result"]["response"][key]);
      }


    });
    for(var t=0;t<this.tableau_oper.length;t++)
    {
      document.getElementById(this.tableau_oper[t].typeId).style.display="none";
    }
    console.log(this.tableau2);
   }

  ngOnInit(): void
   {

   }

  Openview(id1: string , id2: string)
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
    document.getElementById('div-group2').style.display="none";
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

addAllCellul(num:number,name:string,idTable:string,checkmenu:string,idHeader:string)
  {
    var element=document.getElementsByClassName(checkmenu);
    var row=document.getElementById(idHeader);
    var table=<HTMLTableElement> document.getElementById(idTable);
    var numRow=table.rows.length;
    var numCel=table.rows[0].cells.length;
    var caseCel,checkCel=0,caseLis;
    for(var tmp=0;tmp<num;tmp++)
    {
       if((element[tmp] as HTMLInputElement).checked == true)
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
       td.setAttribute("style","padding:8px;font-weight:600;");
       td.className="table-header-body";
       for(var i=1;i<numRow;i++)
       {
        var td2=document.createElement('td');
        td2=table.rows[i].insertCell(caseCel);
        td2.setAttribute("style","padding:8px;");

        switch (num){
          case 0:
             td2.innerHTML=this.tableau1[i-1].partner;
             break;
          case 1:
             td2.innerHTML=this.tableau1[i-1].responsable;
             break;
          case 2:
            td2.innerHTML=this.tableau1[i-1].date;
            break;
          case 3:
            td2.innerHTML=this.tableau1[i-1].document;
            break;
          case 4:
            td2.innerHTML=this.tableau1[i-1].backorder;
            break;
          case 5:
            td2.innerHTML=this.tableau1[i-1].status;
            break;
          case 6:
            td2.innerHTML=this.tableau1[i-1].priority;
            break;
          case 7:
            td2.innerHTML=this.tableau1[i-1].opertaiontype;
            break;
          default:break;
        }

       }
       this.check++;
    }
    else
    {

      for(var i=0;i<numRow;i++)
      {
       table.rows[i].deleteCell(caseCel);
      }
    }
    this.functionGetWidthCellul();
  }

  functionCreateTransfer()
  {
    this.route.navigate(['create-transfer']);
  }
  FunctionCheckBox(id: string,class1: string)
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
  FunctionCheckBox2(check:string)
  {
    var element = document.getElementsByClassName(check);
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
  filtreFunction(status:string)
  {
    document.getElementById('div-group1').style.display="none";
    document.getElementById('div-group2').style.display="none";
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
    var element=document.getElementsByClassName('check-menu');
    var table=<HTMLTableElement> document.getElementById('div-table');
    var numRow=table.rows.length;
    for(var tmp=0;tmp<8;tmp++)
    {
       (element[tmp] as HTMLInputElement).checked =false;

    }
    var numCel=table.rows[0].cells.length;
    if(numCel>3){
      for(var i=0;i<numRow;i++)
      {for(var j=2;j<numCel-1;j++){
       table.rows[i].deleteCell(j);}
      }
     }
     this.functionGetWidthCellul();

  }
  functionGroupByStatus()
  {
    document.getElementById('divlistview').style.display="none";
    document.getElementById('divCompView').style.display="none";
    document.getElementById('div-group1').style.display="block";
    document.getElementById('div-group2').style.display="none";
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
  functionGroupByOperType()
  {
    document.getElementById('divlistview').style.display="none";
    document.getElementById('divCompView').style.display="none";
    document.getElementById('div-group1').style.display="none";
    document.getElementById('div-group2').style.display="block";
  }

}
