import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeModel } from './service/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees$!: Observable<EmployeeModel[]>;
  title = 'Employee Page';

  constructor(private store: Store<EmployeeModel[]>) {}

  ngOnInit(): void {
    //   this.store.dispatch(new GetEmployeesDetails());
    //   this.employees$ = this.store.pipe(select(getEmployee));
    // }
  }
}
