import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login(): void {
    this.userService.getUsers().subscribe((users) => {
      const user = users.find(
        (u: { username: string; password: string; }) => u.username === this.username && u.password === this.password
      );

      if (user) {
        console.log('Login successful!');
      } else {
        console.log('Invalid username or password');
      }
    });
  }
}
