import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register/:type', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
