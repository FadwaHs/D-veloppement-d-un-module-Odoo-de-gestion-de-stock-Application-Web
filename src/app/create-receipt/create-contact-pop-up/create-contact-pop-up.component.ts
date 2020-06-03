import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-contact-pop-up',
  templateUrl: './create-contact-pop-up.component.html',
  styleUrls: ['./create-contact-pop-up.component.css']
})
export class CreateContactPopUpComponent implements OnInit {

  urlImage:string;

  constructor(public dialogref:MatDialogRef<CreateContactPopUpComponent>) { }

  ngOnInit(): void {
    this.urlImage="assets/add.png";
  }
  close()
  {
    this.dialogref.close();
  }
  mousseOverPhoto()
  {
    document.getElementById("div-add-photo").style.display="block";
  }
  mousseOutPhoto()
  {
    document.getElementById("div-add-photo").style.display="none";
  }
  functionAddFile()
  {
    document.getElementById("file-input").click()
  }
 
  functionRadioButton1()
  {
     var element1=document.getElementById("radio1");
     var element2=document.getElementById("radio2");
     (element2 as HTMLInputElement).checked=false;
     var element3=document.getElementById("input-company");
     element3.style.display="block";
  }
  functionRadioButton2()
  {
     var element1=document.getElementById("radio1");
     var element2=document.getElementById("radio2");
     (element1 as HTMLInputElement).checked=false;
     var element3=document.getElementById("input-company");
     element3.style.display="none";
  }
  functionShowCompanies(id:string)
  {
    document.getElementById(id).classList.toggle("show");
    
  }
  functionChooseOption(name:string)
  {
    var element=document.getElementById("input-name-company");
    element.setAttribute("value",name);
  }
}
