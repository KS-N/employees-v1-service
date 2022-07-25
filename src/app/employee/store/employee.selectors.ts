import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

export const getEmployeesInfoFeatureState = createFeatureSelector<EmployeeState>('employeeInfo');

export const getEmployeesDetailsState = createSelector(getEmployeesInfoFeatureState, (state) => state.employees);

export const getEmployeesDetails = createSelector(getEmployeesDetailsState, (state) => state.employees);
