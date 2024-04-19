import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor (private c : CommonService) {
    
  }
   regForm= new FormGroup ({
    name : new FormControl (),
    email : new FormControl(),
    inputAddress : new FormControl (),
    inputAddress2 : new FormControl (),
    inputCity : new FormControl(),
    inputState : new FormControl(),
    inputZip : new FormControl()
   })

   registration () {
     this.c.saveCustomer(this.regForm.value).subscribe()
     alert("Data Saved Successfully")
   }
}
