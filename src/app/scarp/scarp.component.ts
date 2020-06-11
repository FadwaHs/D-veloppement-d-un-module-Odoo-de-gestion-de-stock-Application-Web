import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-scarp',
  templateUrl: './scarp.component.html',
  styleUrls: ['./scarp.component.css']
})
export class ScarpComponent implements OnInit {

  ScrapData: JSON;  
  ourdata: JSON;
  items5 = [];

  constructor(private _activatedroute:ActivatedRoute,private _route:Router, private http :HttpClient)
   {
    this.http.get('http://127.0.0.1:5002/Scrap').subscribe(data => {
      this.ScrapData = data as JSON;
      this.ourdata = this.ScrapData["result"]["response"];

      for (let key in this.ScrapData["result"]["response"])
       {
        this.items5.push(this.ScrapData["result"]["response"][key]);
      }

      console.log(this.items5);

      var buttoncolor = document.getElementsByClassName('statusbutton');

      for (var i = 0, l = buttoncolor.length; i < l; i++)
       {
           if(buttoncolor[i].textContent === 'done')
           {
               (<HTMLElement> buttoncolor[i]).style.backgroundColor = '#28a745';
           }
      }  


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
  functionCreateScrap()
  {
    this._route.navigate(['create-scrap']);
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