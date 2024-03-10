import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackPalScreenComponent } from './pack-pal-screen/pack-pal-screen.component';
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
    path: 'PackPals',
    component: PackPalScreenComponent,
  },
    {
        path: 'Signup',
        component: SignupComponent, 
    },
];
