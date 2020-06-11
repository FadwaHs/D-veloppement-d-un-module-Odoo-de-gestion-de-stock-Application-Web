import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-productscategorie',
  templateUrl: './productscategorie.component.html',
  styleUrls: ['./productscategorie.component.css']
})
export class ProductscategorieComponent implements OnInit {

  ProductscategorieData : JSON;
  ourdata : JSON;
  items14 = []; 


  constructor(private activatedroute: ActivatedRoute , private route: Router , private http: HttpClient)
   { 

    this.http.get('http://127.0.0.1:5002/productcategory').subscribe(data => {
      this.ProductscategorieData = data as JSON;
      this.ourdata = this.ProductscategorieData["result"]["response"];
    
      for (let key in this.ProductscategorieData["result"]["response"])
       {
        this.items14.push(this.ProductscategorieData["result"]["response"][key]);
      }
    
      console.log(this.items14);
      });
   }

  ngOnInit(): void {
  }

  ClickedInButtonCreateCategoris()
  {
    this.route.navigate(['createcategoris']);
  }


}
