import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class DataService {
  name:string 
  constructor(private http:HttpClient) { }
  getValues()
  {
    this.name="Margin";
  }
  getProductList():Observable<any>{

    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee');
  }
  addEmployee(model:any):Observable<any>{
    
    var data ={eId:model.id,eName:model.name}
    return this.http.post('https://springp1boot.herokuapp.com/addEmployee',data);
        
  }
  
  deleteEmployee(id:number):Observable<any>{

    return this.http.delete('https://springp1boot.herokuapp.com/deletEmployee/'+id);
  }

  getDataById(id:number):Observable<any>{

    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee/'+id)
  }
  login()
  {
    return true;
  }
  adminlogin()
 {
   return true;
 }
}
