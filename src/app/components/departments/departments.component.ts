import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
    departments: Department[] | undefined;

    constructor(
      private departmentsServices: DepartmentsService,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.departments = this.departmentsServices.departments;
  }

  goToDepartment(departmentId: string): void { 
    this.router.navigate(['./timesheet', {id: departmentId}])
  }
  
}
