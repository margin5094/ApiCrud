import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Pipe } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { MessageService } from 'primeng/api';
import { EmpComponent } from './emp/emp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { CurrencyComponent } from './currency/currency.component';
import { CentralgovComponent } from './centralgov/centralgov.component';
import { StategovComponent } from './centralgov/stategov/stategov.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmpComponent,
    UserloginComponent,
    AdminloginComponent,
    EmployeeComponent,
    MenuComponent,
    CurrencyComponent,
    CentralgovComponent,
    StategovComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
     HttpClientModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
