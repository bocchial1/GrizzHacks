import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Add your login logic here
    // For simplicity, we'll just log the credentials to the console
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}