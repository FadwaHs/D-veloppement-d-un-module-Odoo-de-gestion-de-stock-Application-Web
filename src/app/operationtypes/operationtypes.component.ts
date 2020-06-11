import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-operationtypes',
  templateUrl: './operationtypes.component.html',
  styleUrls: ['./operationtypes.component.css']
})
export class OperationtypesComponent implements OnInit {

  OperationtypesData : JSON;
  ourdata : JSON;
  items13 = []; 

  constructor(private activatedroute: ActivatedRoute , private route: Router ,private http : HttpClient)
   {  this.http.get('http://127.0.0.1:5002/picking').subscribe(data => {
    this.OperationtypesData = data as JSON;
    this.ourdata = this.OperationtypesData["result"]["response"];
  
    for (let key in this.OperationtypesData["result"]["response"])
     {
      this.items13.push(this.OperationtypesData["result"]["response"][key]);
    }
  
    console.log(this.items13);
    });
  }

  ngOnInit(): void {
  }
  
  ClickedInButtonCreateOperation()
  {
    this.route.navigate(['creatoperations']);
  }

}
