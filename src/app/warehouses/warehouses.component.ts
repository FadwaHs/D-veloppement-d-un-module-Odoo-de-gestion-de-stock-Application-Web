import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html', 
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {

  WarehousesData : JSON;
  ourdata : JSON;
  items12 = [];

  constructor( private http : HttpClient) 
  {
    this.http.get('http://127.0.0.1:5002/warehouse').subscribe(data => {
      this.WarehousesData = data as JSON;
      this.ourdata = this.WarehousesData["result"]["response"];
    
      for (let key in this.WarehousesData["result"]["response"])
       {
        this.items12.push(this.WarehousesData["result"]["response"][key]);
      }
    
      console.log(this.items12);
      });
   }

  ngOnInit(): void {
    
  }

}
