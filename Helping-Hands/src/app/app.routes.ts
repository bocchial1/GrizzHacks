import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, 
    },
    {
        path: 'Login',
        component: LoginComponent, 
    },
    {
        path: 'Signup',
        component: SignupComponent, 
    },
];
