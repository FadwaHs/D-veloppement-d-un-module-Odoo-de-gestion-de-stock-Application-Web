import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");

@Component({  
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})

export class CreateproductComponent implements OnInit {
  
  urlImage:string;
  succes: JSON;

  constructor(private _activatedroute:ActivatedRoute,private _route:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.urlImage="assets/add.png";
  }

  createproduct()
  {
    var ProductName = (document.getElementById("form-control1") as HTMLInputElement).value;
    var IR = (document.getElementById("form-control2-In") as HTMLInputElement).value;
    var Barcode = (document.getElementById("form-control2-br") as HTMLInputElement).value;
    var Price = (document.getElementById("form-control2-sp") as HTMLInputElement).value;
    var cost = (document.getElementById("form-control2-cost") as HTMLInputElement).value;

    var body = {"new_product": ProductName, "Internal_reference": IR, "barcode": Barcode, "price": Price, "cost": cost};
    var url = 'http://127.0.0.1:5002/Create_Product';

    this.http.post(url, body, {headers}).subscribe(data => {
    this.succes = data as JSON;
      
    });
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
