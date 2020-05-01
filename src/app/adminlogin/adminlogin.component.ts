import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
userName:string="";
password:string="";
flag:boolean=false;

  constructor(private service:DataService) { }

  submit(){

    console.log('submit called..')
    this.flag =this.service.adminlogin();
    if(this.flag==true){

      console.log("auth");
      localStorage.setItem("isActive","true")
    }
    else{
      console.log("try again..");

    }

  }

  ngOnInit(): void {
  }

}
