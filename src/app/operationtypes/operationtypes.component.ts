import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-operationtypes',
  templateUrl: './operationtypes.component.html',
  styleUrls: ['./operationtypes.component.css']
})
export class OperationtypesComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit(): void {
  }
  
  ClickedInButtonCreateOperation()
  {
    this.route.navigate(['creatoperations']);
  }

}
