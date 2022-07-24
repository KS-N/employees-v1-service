import { EmployeeModel } from '../service/employee.model';
import { EmployeeDetailsActionUnion, EmployeesActionType } from './employee.actions';

export interface EmployeeState {
  error: any;
  employees: EmployeeModel[];
}

export const updatesEmployeeInitialState: EmployeeState = {
  error: null,
  employees: [
    {
      id: '',
      name: '',
      phone: '',
      address: '',
      designation: '',
    },
  ],
};

export function employeeReducer(state: EmployeeState = updatesEmployeeInitialState, action: EmployeeDetailsActionUnion): EmployeeState {
  switch (action.type) {
    case EmployeesActionType.GetEmployeesDetails: {
      return {
        ...state,
      };
    }
    case EmployeesActionType.GetEmployeesDetailsSuccess: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case EmployeesActionType.GetEmployeesDetailsFailure: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
