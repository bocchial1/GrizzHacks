import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [FormsModule],
  styleUrls: ['./signup.component.css'],
  standalone: true
})
export class SignupComponent {
  
}