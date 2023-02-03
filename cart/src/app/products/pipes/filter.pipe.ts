import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts:[],searchkey:string,propname:string): any[] {

    const result:any=[];
    if(!allProducts || searchkey=='' || propname==''){
      return allProducts
    }

    //searching

    allProducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product)
      }
    })

    return result;
  }

}
