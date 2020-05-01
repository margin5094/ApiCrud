import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currency'})


export class currency implements PipeTransform {
    transform(value:number,from:string,to:string)
    {
    }
    
}