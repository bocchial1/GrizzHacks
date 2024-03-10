import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  signUp(): void {
    const newUser = { username: this.username, password: this.password };
    this.userService.addUser(newUser).subscribe(() => {
      console.log('User added successfully!');
    });
  }
}