import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FunctionCheckBoxactive()
  {
    var element = document.getElementById('checkboxsms')
    var element2= document.getElementById('sms');

    if ((element as HTMLInputElement).checked == true)
      {
        element2.style.display = "block";
      }
    else
    {
        element2.style.display = "none";
    }  
  }
  FunctionCheckBoxactiveEmail()
  {
    var element = document.getElementById('checkboxemail')
    var element2= document.getElementById('email');

    if ((element as HTMLInputElement).checked == true)
      {
        element2.style.display = "block";
      }
    else
    {
        element2.style.display = "none";
    }  
  }

}
