import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})



export class CreateproductComponent implements OnInit {
  
  urlImage:string;

  constructor(private _activatedroute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
    this.urlImage="assets/add.png";
  }

  Openmenu(id1: string , id2: string)
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

  Active(id1: string ,id2: string)
  { 
    document.getElementById(id1).classList.toggle("active");
    document.getElementById(id2).classList.remove("active");

  }
  functionAddFile()
  {
    document.getElementById("file-input").click()
  }
  mousseOverPhoto()
  {
    document.getElementById("div-add-photo").style.display="block";
  }
  mousseOutPhoto()
  {
    document.getElementById("div-add-photo").style.display="none";
  }
  backToProduct()
  {
    this._route.navigate(['./product']);
  }

}
