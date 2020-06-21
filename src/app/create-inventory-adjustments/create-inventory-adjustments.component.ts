import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");

@Component({
  selector: 'app-create-inventory-adjustments',
  templateUrl: './create-inventory-adjustments.component.html',
  styleUrls: ['./create-inventory-adjustments.component.css']
})
export class CreateInventoryAdjustmentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  createinventory()
  {
    var nameinventory = (document.getElementById("inventoryname") as HTMLInputElement).value;
    var namecompany = (document.getElementById("selectcom") as HTMLInputElement).value;
  
    var body = {"new_inv": nameinventory, "company_id": namecompany};
    var url = 'http://127.0.0.1:5002/Create_Inventory';

    this.http.post(url, body, {headers}).subscribe(data => {
      
    });
  }

  FunctionShowOptions(menu:string)
  {
    document.getElementById(menu).classList.toggle("show");
  }

}
