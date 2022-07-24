import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeModel } from '../service/employee.model';

export const getEmployeeInfoFeatureState = createFeatureSelector<EmployeeModel[]>('employeeInfo');
export const getEmployeeState = createSelector(getEmployeeInfoFeatureState, (employees) => employees);

export const getEmployee = createSelector(getEmployeeState, (employees) => employees);
