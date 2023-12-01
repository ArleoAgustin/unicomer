import { Routes } from '@angular/router';
import { LoginUnicomerComponent} from './login-unicomer/login-unicomer.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch:'full'
      },

      {
        path: 'login',
        component: LoginUnicomerComponent
      }
];
