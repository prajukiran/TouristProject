import { Component } from '@angular/core';
import { Students } from '../../model/students';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrl: './liststudents.component.css'
})
export class ListstudentsComponent {

  students : Students [] = [] 
  
  constructor(private c : CommonService) { }

  ngOnInit () : void {
    this.c.getCustomerData().subscribe((a : Students [])=>{
      this.students = a
    })
  }

  deleteData(id : number) {
     this.c.deleteCustomerData(id).subscribe()
     window.location.reload()
  }
}
