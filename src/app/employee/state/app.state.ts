import { EmployeeModel } from '../service/employee.model';

export interface AppState {
  employees: ReadonlyArray<EmployeeModel>;
}
