import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {

}
