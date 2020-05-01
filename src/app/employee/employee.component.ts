import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  myForm: FormGroup;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      eName: new FormControl('',Validators.required),
      eId: new FormControl(''),


    })
  }
  submit() {
    console.log("name-", this.myForm.value.eName)
    console.log("name-", this.myForm.value.eId)
    this.service.addEmployee(this.myForm.value).subscribe(res=>{

      console.log(this.myForm)
      console.log('data added..')
    })
  }

}
