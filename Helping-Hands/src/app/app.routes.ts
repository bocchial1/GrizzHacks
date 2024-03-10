import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { PackPalScreenComponent } from './pack-pal-screen/pack-pal-screen.component';

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
=======
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
>>>>>>> 2ee9e436e453fb2e97ced39eef6707ed790237aa
];
