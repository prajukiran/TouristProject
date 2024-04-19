import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../model/students';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
     url="http://localhost:8008/students"

     saveCustomer(regForm : any) {
        return this.http.post(this.url, regForm)
  }
getCustomerData() {
  return this.http.get<Students []>(this.url)
}
updateCustomerData(updateForm : any) {
  return this.http.put(this.url+"/"+ updateForm.id,updateForm)
}

deleteCustomerData(id : number) {
  return this.http.delete(this.url+"/"+id)
}
}

