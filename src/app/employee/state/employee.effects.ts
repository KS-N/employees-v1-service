import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { EmployeeService } from '../service/employee.service';
import { EmployeesActionType, GetEmployeesDetails, GetEmployeesDetailsFailure, GetEmployeesDetailsSuccess } from './employee.actions';

@Injectable({
  providedIn: 'root',
})
export class EmployeeEffects {
  constructor(private actions$: Actions, private employeeService: EmployeeService, private store: Store) {}

  getEmployees$ = this.actions$.pipe(
    ofType<GetEmployeesDetails>(EmployeesActionType.GetEmployeesDetails),
    mergeMap(() =>
      this.employeeService.getEmployee().pipe(
        map((employees) => new GetEmployeesDetailsSuccess({ employees })),
        catchError((error) => of(new GetEmployeesDetailsFailure({ error })))
      )
    )
  );
}
