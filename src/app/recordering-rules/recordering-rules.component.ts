import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-recordering-rules',
  templateUrl: './recordering-rules.component.html',
  styleUrls: ['./recordering-rules.component.css']
})
export class RecorderingRulesComponent implements OnInit {

  serverData: JSON;
  employee2Data: JSON;
  ourdata: JSON;
  items2 = [];
  constructor(private activatedroute: ActivatedRoute , private route: Router ,private http: HttpClient)
   {

    this.http.get('http://127.0.0.1:5002/warehouses').subscribe(data => {
      this.employee2Data = data as JSON;
      this.ourdata = this.employee2Data["result"]["response"];

      for (let key in this.employee2Data["result"]["response"])
      {
        this.items2.push(this.employee2Data["result"]["response"][key]);
      }

      console.log(this.items2);
  
    });
    }



  ngOnInit(): void {
  }

  Function2(id: string) {
    document.getElementById(id).classList.toggle("show");
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
  }

  Activer(id1: string ,id2: string)
  { 
    document.getElementById(id1).classList.toggle("active");
    document.getElementById(id2).classList.remove("active");

  }

  ClickedInButtonCreateRules()
  {
    this.route.navigate(['create-rules']);
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
