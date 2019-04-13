import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReadUsersComponent } from './admin-user-panel/read-users/read-users.component';
import { CreateUserComponent } from './admin-user-panel/create-user/create-user.component';
import { EditUserComponent } from './admin-user-panel/edit-user/edit-user.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegisterComponent },
	{ path: 'users', component: ReadUsersComponent },
	{ path: 'createuser', component: CreateUserComponent },
	{ path: 'edituser/:id', component: EditUserComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
