import { Action } from '@ngrx/store';
import { EmployeeModel } from '../service/employee.model';

export enum EmployeesActionType {
  GetEmployeesDetails = '[EmployeesActionType] GetEmployeesDetails',
  GetEmployeesDetailsSuccess = '[EmployeesActionType] GetEmployeesDetailsSuccess',
  GetEmployeesDetailsFailure = '[EmployeesActionType] GetCountriesDetailsFailure',
}

export class GetEmployeesDetails implements Action {
  readonly type = EmployeesActionType.GetEmployeesDetails;
}

export class GetEmployeesDetailsSuccess implements Action {
  readonly type = EmployeesActionType.GetEmployeesDetailsSuccess;
  constructor(public payload: { employees: EmployeeModel[] }) {}
}

export class GetEmployeesDetailsFailure implements Action {
  readonly type = EmployeesActionType.GetEmployeesDetailsFailure;
  constructor(public payload: { error: any }) {}
}

export type EmployeeDetailsActionUnion = GetEmployeesDetails | GetEmployeesDetailsSuccess | GetEmployeesDetailsFailure;
