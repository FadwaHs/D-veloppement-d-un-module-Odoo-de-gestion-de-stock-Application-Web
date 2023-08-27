import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopsuccesComponent } from '../popsucces/popsucces.component';
import { HttpClient, HttpHeaders} from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");

@Component({
  selector: 'app-createcategoris',
  templateUrl: './createcategoris.component.html',
  styleUrls: ['./createcategoris.component.css']
})
export class CreatecategorisComponent implements OnInit {

  constructor(private http: HttpClient, private Dialog : MatDialog) { }

  ngOnInit(): void { 
  } 

  createcategorie()
  {
    this.Dialog.open(PopsuccesComponent);
    var namecate = (document.getElementById("form-control1-namecat") as HTMLInputElement).value;
    var catid = (document.getElementById("categorieinput") as HTMLInputElement).value;
  
    var body = {"new_cat": namecate, "categorie_id": catid};
    var url = 'http://127.0.0.1:5002/Create_category';

    this.http.post(url, body, {headers}).subscribe(data => {
      
    });
  }

  FunctionShowOptions(menu: string)
  {
    document.getElementById(menu).classList.toggle("show");
  }

}
