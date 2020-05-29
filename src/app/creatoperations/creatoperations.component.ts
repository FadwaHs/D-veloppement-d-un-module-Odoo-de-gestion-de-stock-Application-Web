import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-creatoperations',
  templateUrl: './creatoperations.component.html',
  styleUrls: ['./creatoperations.component.css']
})
export class CreatoperationsComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

  showElement()
  {
    var select = document.getElementById('selectoperation');
    var selectedelemnt = (select as HTMLSelectElement).options[(select as HTMLSelectElement).selectedIndex].value;
    var div = document.getElementById('divtoshow1');
    var div2 = document.getElementById('divtoshow2');


    if(selectedelemnt == '3') 
    {
        div.style.display = "block";
        div2.style.display = "none";
    }
    else if(selectedelemnt == '2')
    {
      div2.style.display = "block";
      div.style.display = "none";
    }

  }

}
