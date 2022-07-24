// import { Component, OnInit } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { EmployeeModel } from '../../service/employee.model';
// import { GetEmployeesDetails } from '../../state/employee.actions';
// import { getEmployee } from '../../state/employee.selectors';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.scss'],
// })
// export class EmployeeComponent implements OnInit {
//   employees$!: Observable<EmployeeModel[]>;

//   constructor(private store: Store<EmployeeModel[]>) {}

//   ngOnInit(): void {
//     this.store.dispatch(new GetEmployeesDetails());
//     this.employees$ = this.store.pipe(select(getEmployee));
//   }
// }
