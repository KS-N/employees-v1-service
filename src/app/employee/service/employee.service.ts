import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.url);
  }
}
