import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
    departments: Department[] = []
    $departments: Observable<Department[]> | undefined;

    constructor(
      private departmentsServices: DepartmentsService,
      private router: Router,
    ) { }

    ngOnInit(): void {
      // this.departmentsServices.getDepartments().subscribe(departments => {
      //   this.departments = departments;
      this.$departments = this.departmentsServices.getDepartments();
    } 

  goToDepartment(departmentId: string): void { 
    this.router.navigate(['./timesheet', {id: departmentId}])
  }
  
}
