import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {MessageService} from 'primeng/api';
import { Employee } from './Employee';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor( private messageService: MessageService,private service:DataService) { }
  productList:any;
  emp:Employee
  have:any
  ngOnInit(): void 
  {
  this.service.getProductList().subscribe(res=>(this.productList=res)
  )
  
}
toDelete(id)
{
  this.service.toDelete(id).subscribe(()=>console.log("employee deleted"));
}
addSingle() {  this.messageService.add({severity:'success', summary:'Success Message', detail:'Employee Deleted'})
console.log("toast given");
}
toAdd()
{
  this.service.toAdd("margin").subscribe(res=>{this.productList()})
}
getDataById(eId:number)
{
  this.service.getDataById(eId).subscribe(res=>(this.emp=res))
  this.have=1
  console.log('Call id employee')
  console.log(this.emp)
}
}
