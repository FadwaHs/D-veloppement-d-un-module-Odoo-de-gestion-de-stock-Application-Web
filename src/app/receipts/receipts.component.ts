import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  constructor(private _activatedroute:ActivatedRoute,private _route:Router) {
   
   }

  ngOnInit(): void {
    
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
  FunctionClickedInButtonReceipts(link:string)
  {
    this._route.navigate([link]);
  }
  FunctionMoveFromTableToCards(id1:string,id2:string,id3:string,id4:string) {
     var x1=document.getElementById(id3);
     var x2=document.getElementById(id4);
     x1.style.display="block";
     x2.style.display="none";
     document.getElementById(id1).classList.add("active");
     document.getElementById(id2).classList.remove("active");
  }
  FunctionCheckBox(class1:string,id:string)
  {
    var element = document.getElementsByClassName(class1);
    var element2=document.getElementById(id);
    var element3=document.getElementById('dropdown-list1');
    var element4=document.getElementById('dropdown-list2');
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
    var element2=document.getElementById('dropdown-list1');
    var element3=document.getElementById('dropdown-list2');
    var x=0;
    for(var i = 0; i < element.length; i++)
    {
      if ((element[i] as HTMLInputElement).checked == true)
      {
        x++;
      }
    }
    if(x!=0)
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
