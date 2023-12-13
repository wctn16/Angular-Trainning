import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { FirstPageComponent} from './page/first-page/first-page.component';
import { DataBindingComponent } from './page/data-binding/data-binding.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: FirstPageComponent, },
  { path: 'databinding', component: DataBindingComponent, },
  // { path: 'simple-array', component: SimpleArrayComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
