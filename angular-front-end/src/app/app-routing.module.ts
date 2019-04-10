import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegisterComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
