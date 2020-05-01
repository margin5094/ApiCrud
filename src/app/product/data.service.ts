import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { data} from './data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
export class DataService {
  constructor(private http:HttpClient) { }

  getProductList():Observable<any>
  {
    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee');

  }
  toAdd(eName:string):Observable<any>
  {
    return this.http.post('https://springp1boot.herokuapp.com/addEmployee',eName);
  }
  toDelete(id:number):Observable<any>
  {
    return this.http.delete('https://springp1boot.herokuapp.com/deletEmployee/'+id);
  }
  getDataById(id:number):Observable<any>
  {
    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee/'+id);
  }

}
