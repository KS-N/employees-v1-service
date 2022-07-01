import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './service/employee.model';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees$!: Observable<EmployeeModel[]>;

  title = 'Employee Page';

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employees$ = this.service.getEmployee();
  }
}
