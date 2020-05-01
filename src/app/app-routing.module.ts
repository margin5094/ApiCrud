import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeComponent } from './employee/employee.component';
import { CentralgovComponent } from './centralgov/centralgov.component';
import { StategovComponent } from './centralgov/stategov/stategov.component';



const routes: Routes = [

  {path:"employee",component:EmployeeComponent,canActivate:[AuthGuard]},
  {path:"userlogin",component:UserloginComponent,canActivate:[AuthGuard]},
  {path:'adminlogin',component:AdminloginComponent},
  {
    path:'centralgov',component:CentralgovComponent,children:[{path:'stategov',component:StategovComponent}]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
