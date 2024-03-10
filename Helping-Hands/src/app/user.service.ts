import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  addUser(user: any): Observable<any> {
    return this.getUsers().pipe(
      map((users) => {
        users.push(user);
        return this.http.put(this.usersUrl, users);
      })
    );
  }
}
