import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface LoginResponse {
    message: string;
  }


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/surveys/login'; 

  

  constructor(private httpClient: HttpClient) {}

  login(use: string, pass: string): Observable<string> {
    const credentials = { use, pass };
    return this.httpClient.post<string>(`${this.apiUrl}/admin`, credentials);
  }
}
