import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-receipt',
  templateUrl: './create-receipt.component.html',
  styleUrls: ['./create-receipt.component.css']
})
export class CreateReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Function2(id:string) {
    document.getElementById(id).classList.toggle("show");
  }
  FunctionMenuInsideClick(idl1:string,idl2:string,idl3:string,idD1:string,idD2:string,idD3:string)
  {
    document.getElementById(idl1).classList.add("active");
    document.getElementById(idl2).classList.remove("active");
    document.getElementById(idl3).classList.remove("active");
    var x = document.getElementById(idD1);
    var x2 = document.getElementById(idD2);
    var x3 = document.getElementById(idD3);
      x.style.display = "block";
      x2.style.display = "none";
      x3.style.display = "none";
  }

}
