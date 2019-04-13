import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ReadUsersComponent } from './admin-user-panel/read-users/read-users.component';
import { EditUserComponent } from './admin-user-panel/edit-user/edit-user.component';
import { CreateUserComponent } from './admin-user-panel/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReadUsersComponent,
    EditUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule, ReactiveFormsModule,
    HttpClientModule,
	HttpModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
