import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  employeeData: JSON;
  ourdata: JSON; 
  items = [];tableau_type = [];tableau_cat = [];tableau1 = [];tableau2 = [];tableau3=[];
 
  constructor(private activatedroute: ActivatedRoute , private route: Router ,private http: HttpClient) {
    this.http.get('http://127.0.0.1:5002/products').subscribe(data => {
      this.employeeData = data as JSON;
      this.ourdata = this.employeeData["result"]["listProduct"];

      for (let key in this.employeeData["result"]["listProduct"])
      {
        this.items.push(this.employeeData["result"]["listProduct"][key]);
      }

      for (let key in this.employeeData["result"]["productsCat"])
      {
        this.tableau_cat.push(this.employeeData["result"]["productsCat"][key]);
      }

      for (let key in this.employeeData["result"]["productsType"])
      {
        this.tableau_type.push(this.employeeData["result"]["productsType"][key]);
      }
      for(var i=0;i<this.items.length;i++)
      {
         this.tableau1.push(this.items[i])
      }
      for(var i=0;i<this.items.length;i++)
      {
         this.tableau2.push(this.items[i])
      }
      
    });
   } 

  ngOnInit(): void {
  }

  TransformImage(itemimg: string)
  {

     var img = 'data:image/png;base64,'+ itemimg;
     var emptyimg ='assets/add.png';
     
     if(itemimg)
     {
      return img;
     }
     else{
        return emptyimg;
     }

     
  }

  Function2(id: string) {
    document.getElementById(id).classList.toggle("show");
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
    document.getElementById('div-group2').style.display="none";
    document.getElementById('div-group1').style.display="none";
  }

  Activer(id1: string ,id2: string)
  { 
    document.getElementById(id1).classList.toggle("active");
    document.getElementById(id2).classList.remove("active");

  }
  ClickedInButtonCreateProducts()
  {
    this.route.navigate(['create-product']);
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
  FunctionCheckBox2(classCheck:string)
  {
    var element = document.getElementsByClassName(classCheck);
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
  functionShowtable(status:string,i:string)
  {
    if(document.getElementById(status+i).className=="glyphicon glyphicon-triangle-bottom icon")
    {
      
      for(var j=0;j<this.tableau2.length;j++)
      {
      if(this.tableau2[j].category==status || this.tableau2[j].types==status )
       this.tableau3.push(this.tableau2[j]);
      }
      document.getElementById(status+i).className="glyphicon glyphicon-triangle-top icon";
    
    }
    else {
      this.tableau3=[];
      document.getElementById(status+i).className="glyphicon glyphicon-triangle-bottom icon";
    }
  }
  functionfiltre(argu:string)
  {
    this.tableau1=[];
    for(var i=0;i<this.tableau2.length;i++)
    {
      if(this.tableau2[i].types==argu)
       this.tableau1.push(this.tableau2[i]);
    }
    console.log(this.tableau2);console.log(argu);
    if(this.tableau1.length==0)
    {
      
      document.getElementById('divlistview').style.display="none";
    }
    else
    {
     
      document.getElementById('div-group1').style.display="none" ;
      document.getElementById('div-group2').style.display="none" ;
      if(document.getElementById('divkanbanview').style.display=="none")
          document.getElementById('divlistview').style.display="block";
   
    }
  }
  functionGroupByType()
  {
    document.getElementById('divlistview').style.display="none";
    document.getElementById('divkanbanview').style.display="none";
    document.getElementById('div-group1').style.display="none";
    document.getElementById('div-group2').style.display="block";
  }
  functionGroupByCate()
  {
    document.getElementById('divlistview').style.display="none";
    document.getElementById('divkanbanview').style.display="none";
    document.getElementById('div-group2').style.display="none";
    document.getElementById('div-group1').style.display="block";
    
  }
}


