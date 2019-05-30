import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  public registerUser(obj: any): any {
    return this.http.post('http://localhost:8000/users/registration', obj);
        }


        public loginUser(obj: any): any {
    return this.http.post('http://localhost:8000/user/login/authentication', obj);
        }
}
