import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-productscategorie',
  templateUrl: './productscategorie.component.html',
  styleUrls: ['./productscategorie.component.css']
})
export class ProductscategorieComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit(): void {
  }

  ClickedInButtonCreateCategoris()
  {
    this.route.navigate(['createcategoris']);
  }


}
