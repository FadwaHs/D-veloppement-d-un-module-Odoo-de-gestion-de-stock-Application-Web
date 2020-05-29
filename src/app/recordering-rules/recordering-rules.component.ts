import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recordering-rules',
  templateUrl: './recordering-rules.component.html',
  styleUrls: ['./recordering-rules.component.css']
})
export class RecorderingRulesComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit(): void {
  }
  Function2(id:string) {
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
}
