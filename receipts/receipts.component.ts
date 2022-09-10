import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {



  typeOperation:string;
  fromOperation:string;
  nameOperation:string;

  TransferData: JSON;  
  ourdata: JSON;
  items3 = [];
  tableau1 = [];
  tableau2 = [];
  done=0;draft=0;waiting=0;ready=0;
  tabStatus = [];

  constructor(private _activatedroute: ActivatedRoute, private _route: Router,private http: HttpClient) {
    
    this._activatedroute.paramMap.subscribe(
      params=>{
        this.typeOperation=params.get('type');
        this.fromOperation=params.get('from');
        this.nameOperation=params.get('name');
            }
    );
    
    this.http.get('http://127.0.0.1:5002/transfers').subscribe(data => {
      this.TransferData = data as JSON;
      this.ourdata = this.TransferData["result"]["response"];

      for (let key in this.TransferData["result"]["response"])
       {
        this.items3.push(this.TransferData["result"]["response"][key]);
      }

      console.log(this.items3);
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
        if(this.items3[i].opertaiontype==this.fromOperation)
         this.tableau1.push(this.items3[i])
      }
      for(var i=0;i<this.items3.length;i++)
      {
        if(this.items3[i].opertaiontype==this.fromOperation)
         this.tableau2.push(this.items3[i])
      }
      if(this.tableau1.length==0)
      {
        document.getElementById('create-new').style.display="block";
        document.getElementById('table').style.display="none";
      }
      else
      {
        document.getElementById('create-new').style.display="none";
        document.getElementById('table').style.display="block";
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
      console.log(this.tableau2);
    });
   }

  ngOnInit(): void {


  }
  FunctionOpenSousMenu(id: string) {
    document.getElementById(id).classList.toggle("show");
  }
  FunctionClickedInButtonReceipts(link:string)
  {
    this._route.navigate([link,this.nameOperation,this.typeOperation,this.fromOperation]);
  }

  FunctionMoveFromTableToCards(id1: string, id2: string, id3: string, id4: string) {
     var x1 = document.getElementById(id3);
     var x2= document.getElementById(id4);
     x1.style.display = "block";
     x2.style.display = "none";
     document.getElementById("table-group1").style.display="none";
     document.getElementById(id1).classList.add("active");
     document.getElementById(id2).classList.remove("active");
     if(this.tableau1.length==0)
      {
        document.getElementById('create-new').style.display="block";
        document.getElementById('table').style.display="none";
      }
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
    this.tableau1=[];
    for(var i=0;i<this.tableau2.length;i++)
    {
      if(this.tableau2[i].status==status)
       this.tableau1.push(this.tableau2[i])
    }
    if(this.tableau1.length==0)
    {
      document.getElementById('create-new').style.display="block";
      document.getElementById('table').style.display="none";
    }
    else
    {
      document.getElementById('create-new').style.display="none";
      document.getElementById('table-group1').style.display="none" ;
      if(document.getElementById('cards').style.display=="none")
          document.getElementById('table').style.display="block";
   
    }
  }
  functionGroupByStatus()
  {
    document.getElementById('table').style.display="none";
    document.getElementById('cards').style.display="none";
    document.getElementById('table-group1').style.display="block";
    for(var i=0;i<this.tabStatus.length;i++)
    {
      document.getElementById(this.tabStatus[i].status).style.display="none";
    }
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
  functionGoToDetails(reference:string)
  {
     this._route.navigate(['operationdetail',this.nameOperation,this.typeOperation,reference]);
    
  }
}
