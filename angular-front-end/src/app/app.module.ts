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
import { ReadConferencesComponent } from './admin-conference-panel/read-conferences/read-conferences.component';
import { CreateConferenceComponent } from './admin-conference-panel/create-conference/create-conference.component';
import { EditConferenceComponent } from './admin-conference-panel/edit-conference/edit-conference.component';
import { ReadCategoriesComponent } from './admin-conference-panel/read-categories/read-categories.component';
import { CreateCategoryComponent } from './admin-conference-panel/create-category/create-category.component';
import { EditCategoryComponent } from './admin-conference-panel/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReadUsersComponent,
    EditUserComponent,
    CreateUserComponent,
    ReadConferencesComponent,
    CreateConferenceComponent,
    EditConferenceComponent,
    ReadCategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent
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
