import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../../shared/common.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css'
})
export class EditstudentComponent {
  editData : any

  updateForm= new FormGroup ({
    id :new FormControl(),
    name : new FormControl (),
    email : new FormControl(),
    inputAddress : new FormControl (),
    inputAddress2 : new FormControl (),
    inputCity : new FormControl(),
    inputState : new FormControl(),
    inputZip : new FormControl()
   })
   
   constructor(private c : CommonService,  private route : Router, private location : Location) {

   }

   ngOnInit () : void {
    this.editData = this.location.getState ();
    this.updateForm.patchValue ({
    id : this.editData.id,
    name : this.editData.name,
    email : this.editData.email,
    inputAddress : this.editData.inputAddress,
    inputAddress2 : this.editData.inputAddress2,
    inputState : this.editData.inputState,
    inputCity : this.editData.inputCity,
    inputZip : this.editData.inputZip
    })
     }

   update () {
    this.c.updateCustomerData(this.updateForm.value).subscribe()
    this.route.navigate(['liststudents'])
   }
}
